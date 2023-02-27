<script setup>
import { POST_PAYMENT, POST_PAYMENT_PRE } from '@/apis/requestURL';
import { ProductType, PaymentType, DeliverType } from '@/constants/common';

const routes = useRoute();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const authStore = useAuthStore();
const cartStore = useCartStore();

const bonusCut = ref(0);
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

const deliverFee = computed(() => {
  const fee = preSettlement.value?.deliveryFee;
  return fee <= 0 ? '免運' : fee;
});

onMounted(async() => {
  updateCartType();
  await nextTick();
  if (currentMerch.value <= 0) {
    return router.push({ path: '/' });
  }
  await fetchData();
});

async function fetchData() {
  try {
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${POST_PAYMENT_PRE}`, {
      method: 'POST',
      body: {
        attribute: cartType.value,
        products: currentMerch.value.map((e) => {
          return {
            id: e.id,
            quantity: e.amount
          };
        })
      },
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
    console.log('pre-settlement, ', res);
    preSettlement.value = res.data;
  } catch (error) {
    //
  }
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
    addressDetailOne: authStore.user?.addressOne,
    city: '', // 城市
    district: '', // 區
    email: authStore.user?.email,
    idNo: '', // 身分證字號
    idType: '1', //
    cellphone: authStore.user?.cellphone,
    name: authStore.user?.nickname,
    province: '',
    remark: '', // 收件備註
    senderRemark: '', // 寄件備註
    stationCode: '', // 超商代碼 / 條碼?
    stationName: '', // 超商名稱?
    town: '', // 城鎮名
    zipCode: '' // 郵遞區號
  },
  invoiceParams: {
    customerName: authStore.user?.nickname,
    customerEmail: authStore.user?.email,
    customerPhone: authStore.user?.cellphone,
    customerAddr: authStore.user?.addressOne,
    customerIdentifier: '00000000',
    carruerType: '',
    carruerNum: '',
    donation: '0',
    loveCode: ''
  },
  products: currentMerch.value.map((e) => {
    return {
      id: e.id,
      quantity: e.amount
    };
  })
});

async function sendResult() {
  console.log(inputField.value);
  try {
    const redirectURL = 'https://wo.wowo.tw/profile';
    const res = await $fetch(
      `${runtimeConfig.public.apiBase}/${POST_PAYMENT}?order_result_url=${redirectURL}`
      , {
        method: 'POST',
        body: inputField.value,
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
    const div = document.createElement('credit-div');
    div.innerHTML = res;
    div.id = 'credit-payment';
    document.body.appendChild(div);
    document.getElementById('_form_aiochk').submit();
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  // alert('恭喜購買完成！歡迎繼續選購');
  // cartStore.merch = [];
  // router.push({
  //   path: '/shop'
  // });
}
</script>

<template>
  <div class="full_height mt185ptb30">
    <form id="checkout_form" action="javascript:;" class="cart_container">
      <table class="cart_list">
        <tbody>
          <tr v-for="item in currentMerch" :key="item.id">
            <td class="cart_img">
              <img :src="item?.thumbnail?.url || '/products/p'+(item.id-10)+'.jpg'">
            </td>
            <td class="cart_tl">
              <h5>{{ item?.name }}</h5>
              <div class="product-quantity">
                x{{ item?.amount }}
              </div>
              <span>滿件免運</span>
            </td>
            <td class="cart_price text-right">
              <span>市價 ${{ item?.price?.market }}</span>
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
            >
            宅配到府
          </label>
          <label v-show="cartType === ProductType.General" class="radio form-check">
            <input
              v-model="inputField.consignee.deliveryType"
              type="radio"
              name="shipping"
              :value="DeliverType.Store"
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
          <!-- <label class="radio form-check">
            <input type="radio" name="payment" value=""> ATM 轉帳
          </label>
          <label class="radio form-check">
            <input type="radio" name="payment" value=""> 貨到付款
          </label> -->
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
            id="ship_name2"
            v-model="authStore.user.nickname"
            type="text"
            placeholder="姓名*"
            class="form-control"
            name=""
          >
          <input
            id="ship_phone2"
            v-model="authStore.user.cellphone"
            type="text"
            placeholder="手機*"
            class="form-control"
            name=""
          >
          <input
            id="ship_address"
            v-model="authStore.user.addressOne"
            type="text"
            placeholder="地址*"
            class="form-control"
            name=""
          >
          <input
            v-if="cartType === ProductType.General"
            id="shipday"
            type="datetime-local"
            placeholder="請選擇可收貨日期"
            class="form-control"
            name=""
          >
        </div>
      </div>
      <div class="cart_info checkout-form">
        <h5>發票資訊</h5>
        <div class="ship_info">
          <input id="" type="text" placeholder="請輸入載具號碼" class="form-control" name="">
        </div>
        <label class="checkbox pt10 pb10">
          <input id="change-image" type="checkbox">
          發票要打統編
        </label>
        <div class="invoice_form d_none">
          <h5>統編資訊</h5>
          <div class="ship_info">
            <input id="" type="text" placeholder="統一編號*" class="form-control" name="">
            <input id="" type="text" placeholder="發票抬頭*" class="form-control" name="">
            <input id="" type="email" placeholder="發票收取E-mail" class="form-control" name="">
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
          <input id="check_service" type="checkbox">
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
        <!-- <input
          id=""
          type="submit"
          class="btn btn-main btn-check2 check_service_btn submit_market"
          style="display: none;"
          value="確認送出"
          onclick=""
          disabled
        > -->
      </div>
    </form>
  </div>
</template>
