<script setup>
import { useMessage } from 'naive-ui';
import { POST_PAYMENT, POST_PAYMENT_PRE } from '@/apis/requestURL';
import { ProductType, PaymentType, DeliverType, UICType } from '@/constants/common';

const routes = useRoute();
const router = useRouter();
const message = useMessage();
const runtimeConfig = useRuntimeConfig();
const authStore = useAuthStore();
const cartStore = useCartStore();

const bonusCut = ref(0);
const useTaxId = ref(false);
const useUic = ref(false);
const deliverDate = ref();
const deliverTimeStart = ref();
const deliverTimeEnd = ref();
const readRules = ref(false);
const useDonation = ref(false);
const cartType = ref(ProductType.General);

const totalPrice = computed({
  get: () => {
    return currentMerch.value.reduce(
      (total, cur) => total + getCurrentPriceByAuth(cur) * cur.amount, 0
    );
  },
  set: (_new) => {
    totalPrice.value = _new;
  }
});

const rewardCredit = computed(() => authStore?.user?.rewardCredit || 0);

const currentMerch = computed(() => {
  switch (cartType.value) {
  case ProductType.ColdChain:
    return cartStore?.merch.filter(e => e.attribute === 'COLD_CHAIN');
  default:
    return cartStore?.merch.filter(e => e.attribute === 'GENERAL');
  }
});

const preSettlement = ref({});
const store = ref({
  name: '',
  id: '',
  outside: 0,
  ship: 0,
  address: ''
});

const deliverFee = computed(() => {
  const fee = preSettlement.value?.deliveryFee;
  return fee;
});

let timer = null;

onMounted(async() => {
  updateCartType();
  await nextTick();
  if (currentMerch.value <= 0) {
    return router.push({ path: '/' });
  }
  await fetchData();
  timer = setInterval(() => {
    updateStore();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
  timer = null;
});

async function fetchData() {
  try {
    const body = preprocessInput(true);
    delete body.requiredDeliveryTimeslots;
    console.log('123,, ', body);
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${POST_PAYMENT_PRE}`, {
      method: 'POST',
      body,
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
    console.log('pre-settlement, ', res);
    preSettlement.value = res.data;
  } catch (error) {
    //
    console.log(error);
  }
}

function updateStore() {
  store.value.name = localStorage.getItem('storename');
  store.value.id = localStorage.getItem('storeid');
  store.value.address = localStorage.getItem('storeaddress');
  store.value.ship = localStorage.getItem('ship');
  store.value.outside = localStorage.getItem('outside');
}

function updateCartType() {
  switch (routes.query.type) {
  case 'cold-chain':
    cartType.value = ProductType.ColdChain;
    break;
  default:
    cartType.value = ProductType.General;
    break;
  }
}

const getCurrentPriceByAuth = (item) => {
  if (authStore?.user?.memberLevel === 'SVIP') {
    return item?.svipPrice;
  }
  if (authStore?.user?.memberLevel === 'VIP') {
    return item?.vipPrice;
  }
  if (authStore.status.loggedIn) {
    return item?.memberPrice;
  }
  return item?.price;
};

const inputField = ref({
  attribute: cartType.value,
  choosePayment: PaymentType.CreditOneTime,
  consignee: {
    deliveryType: DeliverType.Home, // HOME
    city: '', // 城市
    email: authStore.user?.email,
    idNo: '', // 身分證字號
    idType: '1', //
    cellphone: authStore.user?.cellphone,
    name: authStore.user?.nickname,
    remark: '', // 收件備註
    senderRemark: '', // 寄件備註
    stationCode: '', // 超商代碼 / 條碼?
    stationName: '', // 超商名稱?
    addressDetailOne: authStore.user?.addressOne,
    province: '',
    district: '', // 區
    town: '', // 城鎮名
    zipCode: '' // 郵遞區號
  },
  invoiceParams: {
    customerName: authStore.user?.nickname,
    customerEmail: authStore.user?.email,
    customerPhone: authStore.user?.cellphone,
    customerAddr: authStore.user?.addressOne,
    customerIdentifier: '',
    carruerType: UICType.Member,
    carruerNum: '',
    donation: '0',
    loveCode: ''
  },
  products: [],
  bonusPointRedemption: 0, // 紅利點數
  requiredDeliveryTimeslots: [{ // 可送貨時間 區間
    date: '2023-03-02T00:00:00Z',
    slot: '14:00-18:00' // 14:00-18:00
  }]
});

function preprocessInput(pre = false) {
  const requiredDeliveryTimeslots = inputField.value.consignee.deliveryType ===
      DeliverType.Home && !pre
    ? {
      date: new Date(deliverDate.value).toISOString(),
      slot: `${getPickedTime(deliverTimeStart.value)}-${getPickedTime(deliverTimeEnd.value)}`
    }
    : {};
  const body = {
    ...inputField.value,
    attribute: cartType.value,
    consignee: {
      ...inputField.value.consignee,
      stationCode: inputField.value.consignee.deliveryType ===
      DeliverType.Store
        ? store.value?.id
        : '',
      stationName: inputField.value.consignee.deliveryType ===
      DeliverType.Store
        ? store.value?.name
        : ''
    },
    invoiceParams: {
      ...inputField.value.invoiceParams,
      carruerType: useUic.value ? inputField.value.invoiceParams.carruerNum : '',
      carruerNum: inputField.value.invoiceParams.carruerType >= 2 ? inputField.value.invoiceParams.carruerNum : '',
      donation: useDonation.value ? 1 : 0,
      loveCode: useDonation.value ? inputField.value.invoiceParams.loveCode : '',
      customerIdentifier: useTaxId.value ? inputField.value.invoiceParams.customerIdentifier : '00000000',
      customerPhone: inputField.value.consignee.cellphone,
      customerName: inputField.value.consignee.name,
      customerAddr: inputField.value.consignee.addressDetailOne
    },
    bonusPointRedemption: bonusCut.value,
    products: currentMerch.value.map((e) => {
      return {
        id: e.id,
        quantity: e.amount
      };
    }),
    requiredDeliveryTimeslots: [
      requiredDeliveryTimeslots
    ]
  };
  return body;
}
function getPickedTime(time) {
  const date = new Date(time);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const _time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  // xx:xx format
  return _time;
}
async function sendResult() {
  const isOK = checkInputs();
  if (!isOK) return;

  const body = preprocessInput();

  console.log(body, deliverTimeStart.value, deliverTimeEnd.value);

  // return;
  try {
    const redirectURL = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/order?payment=successful'
      : `${runtimeConfig.public.baseUrl}/order?payment=successful`;
    const res = await $fetch(
      `${runtimeConfig.public.apiBase}/${POST_PAYMENT}?order_result_url=${redirectURL}`
      , {
        method: 'POST',
        body,
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
    message.loading('即將導向付款頁面，請稍候...');
    const div = document.createElement('credit-div');
    div.innerHTML = res;
    div.id = 'credit-payment';
    document.body.appendChild(div);
    document.getElementById('_form_aiochk').submit();
    console.log(res);
  } catch (error) {
    message.error(error.data);
    // console.log(error.data);
  }

  // alert('恭喜購買完成！歡迎繼續選購');
  // cartStore.merch = [];
  // router.push({
  //   path: '/shop'
  // });
}
function checkInputs() {
  if (!inputField.value.consignee.name || !inputField.value.consignee.cellphone ||
  !inputField.value.consignee.addressDetailOne || !inputField.value.consignee.province ||
  !inputField.value.consignee.district || !inputField.value.consignee.city ||
  !inputField.value.consignee.zipCode) {
    message.error('請確實填寫收件人資訊');
    return false;
  }
  if (inputField.value.consignee.deliveryType === DeliverType.Store &&
    (!store.value.id || !store.value.name)) {
    message.error('請選擇欲取貨的店家');
    return false;
  }
  if (inputField.value.consignee.deliveryType === DeliverType.Home &&
    (!deliverDate.value || !deliverTimeStart.value || !deliverTimeEnd.value)) {
    message.error('請選擇可取貨的時間區段');
    return false;
  }
  if (inputField.value?.consignee?.cellphone) {
    const _string = inputField.value?.consignee?.cellphone;
    const regex = /^[0-9]{10}$/g;
    if (!regex.test(_string)) {
      message.error('請輸入正確的手機格式 ex.0912345678');
      return;
    }
  }
  if (useDonation.value) {
    const regex = /^\d{3,7}$/;
    const _string = inputField.value.invoiceParams.loveCode;
    if (!regex.test(_string)) {
      message.error('愛心碼請輸入3-7碼的數字組合');
      return;
    }
  }
  if (useUic.value) {
    let regex, hint;
    if (inputField.value.invoiceParams.carruerType === 2) {
      regex = /^[a-zA-Z]{2}[0-9]{14}$/;
      hint = '16碼的英數組合';
    }
    if (inputField.value.invoiceParams.carruerType === 3) {
      regex = /^\/{1}[0-9A-Z]{7}$/;
      hint = '8碼的英數組合';
    }
    const _string = inputField.value.invoiceParams.carruerNum;
    if (inputField.value.invoiceParams.carruerType >= 2 && !regex.test(_string)) {
      message.error(`請輸入符合格式的載具資料(${hint})`);
      return;
    }
  }
  if (!readRules.value) {
    message.error('請詳閱相關購買條款並勾選確認');
    return false;
  }
  return true;
}
function getEMAPData() {
  const baseURL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : `${runtimeConfig.public.baseUrl}`;
  window.open(`https://emap.presco.com.tw/c2cemap.ashx?eshopid=870&&servicetype=1&url=${baseURL}/cvs_callback`);
}
function dateDisabled(ts) {
  return ts < Date.now();
}
</script>

<template>
  <div class="full_height mt185ptb30">
    <form id="checkout_form" action="javascript:;" class="cart_container">
      <table class="cart_list">
        <tbody>
          <tr v-for="item in currentMerch" :key="item.id" class="prod-tr">
            <td class="cart_img">
              <img :src="item?.coverImg">
            </td>
            <td class="cart_tl">
              <h5>{{ item?.name }}</h5>
              <div class="product-quantity">
                x{{ item?.amount }}
              </div>
              <!-- <span>滿件免運</span> -->
            </td>
            <td class="cart_price text-right">
              <span
                v-show="authStore.user?.memberLevel && authStore.user?.memberLevel !== 'NORMAL'"
              >市價 ${{ item?.price }}</span>
              價錢 ${{ getCurrentPriceByAuth(item) }}
            </td>
          </tr>
        </tbody>
      </table>

      <div class="cart_info">
        <h5>寄送方式</h5>
        <div class="checkout-form">
          <label class="radio form-check">
            <input
              v-model="inputField.consignee.deliveryType"
              type="radio"
              name="shipping"
              :value="DeliverType.Home"
              @click="fetchData"
            >
            宅配到府
          </label>
          <label v-show="cartType === ProductType.General" class="radio form-check">
            <input
              v-model="inputField.consignee.deliveryType"
              type="radio"
              name="shipping"
              :value="DeliverType.Store"
              @click="fetchData"
            >
            超商取貨
          </label>
        </div>
      </div>
      <div class="cart_info">
        <h5>付款方式</h5>
        <div class="checkout-form">
          <label class="radio form-check">
            <input
              v-model="inputField.choosePayment"
              type="radio"
              name="payment"
              :value="PaymentType.CreditOneTime"
            > 信用卡
          </label>
          <label class="radio form-check">
            <input
              v-model="inputField.choosePayment"
              type="radio"
              name="payment"
              :value="PaymentType.BarCode"
            > 超商條碼付款
          </label>
          <label class="radio form-check">
            <input
              v-model="inputField.choosePayment"
              type="radio"
              :value="PaymentType.Cvs"
              name="payment"
            > 超商代碼付款
          </label>
        </div>
      </div>
      <div class="cart_info">
        <h5>紅利扣點 (目前可用紅利：{{ rewardCredit }} 點)</h5>
        <div class="checkout-form">
          <n-input-number v-model:value="bonusCut" min="0" :max="rewardCredit" :style="{ width: '150px', margin: '4px 0 4px 15px' }" />
          <!-- <input
            id=""
            v-model="bonusCut"
            type="number"
            min="0"
            :max="rewardCredit"
            placeholder="請輸入本次預使用紅利"
            class="form-control"
            name=""
            @change="onBounsCutChanged"
          > -->
        </div>
      </div>
      <!-- <div id="ship_market_form" class="cart_info d_none">
        <h5>收件人資訊aa</h5>
        <div class="ship_info">
          <input id="ship_name1" type="text" placeholder="姓名*" class="form-control" name="">
          <input id="ship_phone1" type="text" placeholder="手機*" class="form-control" name="">
          <input id="ship_marketname" type="text" placeholder="請選擇門市*" class="form-control" name="">
        </div>
      </div> -->
      <div id="ship_home_form" class="cart_info">
        <h5>收件人資訊</h5>
        <div class="ship_info">
          <input
            id="ship_name-2"
            v-model="inputField.consignee.name"
            type="text"
            placeholder="姓名*"
            class="form-control"
            name="ship_name-2"
            required
          >
          <input
            id="ship_phone-2"
            v-model="inputField.consignee.cellphone"
            type="text"
            placeholder="手機*"
            class="form-control"
            name="ship_phone-2"
            required
          >
          <input
            id="ship-province"
            v-model="inputField.consignee.province"
            type="text"
            placeholder="省*"
            class="form-control"
            name="ship-province"
            required
          >
          <input
            id="ship-district"
            v-model="inputField.consignee.district"
            type="text"
            placeholder="行政區*"
            class="form-control"
            name="ship-district"
            required
          >
          <input
            id="ship-city"
            v-model="inputField.consignee.city"
            type="text"
            placeholder="城市*"
            class="form-control"
            name="ship-city"
            required
          >
          <input
            id="ship-zipCode"
            v-model="inputField.consignee.zipCode"
            type="text"
            placeholder="郵遞區號*"
            class="form-control"
            name="ship-zipCode"
            required
          >
          <input
            id="ship-address-home"
            v-model="inputField.consignee.addressDetailOne"
            type="text"
            placeholder="收件地址*"
            class="form-control"
            name="ship-address-home"
            required
          >
          <ClientOnly>
            <n-date-picker
              v-if="inputField.consignee.deliveryType !== DeliverType.Store"
              v-model:value="deliverDate"
              type="date"
              placeholder="請選擇可收貨日期"
              :is-date-disabled="dateDisabled"
              required
            />
            <n-space>
              <n-time-picker
                v-if="inputField.consignee.deliveryType !== DeliverType.Store"
                v-model:value="deliverTimeStart"
                format="h:mm a"
                placeholder="收貨時間點-開始"
                required
              />
              <n-time-picker
                v-if="inputField.consignee.deliveryType !== DeliverType.Store"
                v-model:value="deliverTimeEnd"
                format="h:mm a"
                :disabled="!deliverTimeStart"
                placeholder="收貨時間-結束"
                required
              />
            </n-space>
          </ClientOnly>
        </div>
      </div>
      <div v-show="inputField.consignee.deliveryType === DeliverType.Store" class="cart_info checkout-form">
        <h5>超商取貨資訊</h5>
        <div class="emap">
          <button @click="getEMAPData">
            選擇店舖
          </button>
        </div>
        <div class="store-name">
          <input
            id="store-name"
            v-model="store.name"
            type="text"
            required
            class="form-control bold"
            disabled
          >
        </div>
        <div class="store-address">
          <input
            id="store-address"
            v-model="store.address"
            type="text"
            required
            class="form-control bold"
            disabled
          >
        </div>
      </div>
      <div class="cart_info">
        <h5>請選擇發票選項</h5>
        <div class="checkout-form">
          <label class="radio form-check">
            <input
              v-model="useDonation"
              type="radio"
              name="donation"
              :value="false"
            >
            開立發票
          </label>
          <label class="radio form-check">
            <input
              v-model="useDonation"
              type="radio"
              name="donation"
              :value="true"
            >
            捐贈發票
          </label>
        </div>
      </div>
      <div v-if="useDonation" class="cart_info checkout-form">
        <h5>發票資訊</h5>
        <div class="ship_info inv-info">
          <div class="ship_info">
            <input
              id="inv_ship_lovecode"
              v-model="inputField.invoiceParams.loveCode"
              type="text"
              placeholder="請輸入捐贈愛心碼*"
              class="form-control"
              name=""
              required
            >
          </div>
        </div>
      </div>
      <div class="cart_info checkout-form">
        <h5>載具資訊</h5>
        <div class="ship_info inv-info">
          <label class="checkbox pt10 pb10">
            <input id="change-image" v-model="useUic" type="checkbox">
            使用載具
          </label>
          <div v-if="useUic" class="ship_info">
            <label class="radio form-check">
              <input
                v-model="inputField.invoiceParams.carruerType"
                type="radio"
                name="uic-member"
                :value="UICType.Member"
              >
              會員載具
            </label>
            <label class="radio form-check">
              <input
                v-model="inputField.invoiceParams.carruerType"
                type="radio"
                name="uic-npc"
                :value="UICType.NPC"
              >
              自然人憑證
            </label>
            <label class="radio form-check">
              <input
                v-model="inputField.invoiceParams.carruerType"
                type="radio"
                name="uic-mobile"
                :value="UICType.Mobile"
              >
              手機條碼
            </label>
            <input
              v-if="inputField.invoiceParams.carruerType >= 2"
              id="inv-carruerNum"
              v-model="inputField.invoiceParams.carruerNum"
              type="text"
              placeholder="請輸入對應的載具編號"
              class="form-control"
              required
              name=""
            >
          </div>
        </div>
      </div>
      <div class="cart_info checkout-form">
        <h5>訂單備註</h5>
        <textarea
          id=""
          v-model="inputField.consignee.remark"
          rows="6"
          placeholder="請輸入訂單備註內容"
          class="form-control"
          name=""
        />
      </div>
      <div class="cart_info">
        <h5>付款明細</h5>
        <ul class="cart_check">
          <li>
            商品金額小計 (共{{ currentMerch.length }}項商品)：${{ totalPrice }}
          </li>
          <li>
            運費：{{ deliverFee }}
          </li>
          <li>
            紅利扣點：{{ bonusCut }}
          </li>
          <li class="border_top">
            訂單總金額：<span>${{ totalPrice - bonusCut + deliverFee }}</span>
          </li>
        </ul>
      </div>

      <div class="cart_info checkout-form ptb10">
        <label class="checkbox">
          <input id="check_service" v-model="readRules" type="checkbox" required>
          我已經閱讀並同意以上購買須知、 <a href="/terms" target="new">會員使用條款</a>與<a href="/privacy" target="new">隱私權政策</a>，此欄位勾選才可送出。
        </label>
      </div>
      <div class="text-center mb-20 mt-20">
        <span id="errormsg" />
      </div>

      <div class="text-center mb-20 mt-20">
        <NuxtLink type="button" class="btn btn-main btn-default" to="/cart">
          上一頁
        </NuxtLink>
        <input
          id=""
          type="submit"
          class="btn btn-main btn-check check_service_btn submit_home"
          value="確認送出"
          @click="sendResult"
        >
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.prod-tr {
  display: flex;
  justify-content: space-between;
  .cart_price {
    align-self: flex-end;
  }
}
.bold {
  font-weight: bold;
}
.emap {
  padding: 8px 8px;
}
.form-control {
  font-weight: 400;
}
.inv-info {
  // border-bottom: 10px solid #cabdab;
}
</style>
