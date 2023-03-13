<script setup>
import dayjs from 'dayjs';

import { useMessage } from 'naive-ui';
import { GET_USER_ORDERS_DETAIL, POST_CANCEL_ORDER } from '@/apis/requestURL';
import { ProductType } from '@/constants/common';

const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const message = useMessage();

const curOrder = ref({});

const orderAttr = computed(() => {
  switch (curOrder.value?.attribute) {
  case ProductType.ColdChain:
    return '一般';
  default:
    return '冷鏈';
  }
});

const orderStatus = computed(() => {
  switch (curOrder.value?.orderStatus) {
  case 'WAIT_PAYMENT':
    return '待付款';
  case 'WAIT_DELIVER':
    return '待出貨';
  case 'WAIT_RECEIVE':
    return '已出貨';
  case 'COMPLETED':
    return '已完成';
  case 'CANCELLED':
    return '已取消';
  case 'REVOKED':
    return '已退貨';
  default:
    return curOrder.value.orderStatus;
  }
});

const deliverFee = computed(() => {
  const _item = curOrder.value?.items?.find(e => e.productId === null && e?.name !== '紅利折抵');
  if (_item?.price === 0) return '免運';
  return _item ? _item.price : '免運';
});

const totalPrice = computed(() => {
  return curOrder.value?.items?.reduce(
    (total, cur) => total + cur.price * cur.quantity, 0
  );
});

const realProd = computed(() => curOrder.value?.items?.filter(e => e.productId !== null));

const realProdPrice = computed(() => {
  return realProd.value?.reduce(
    (total, cur) => total + cur.price * cur.quantity, 0
  );
});

onMounted(async() => {
  // if (!authStore.status.loggedIn) {
  //   return router.push({
  //     path: '/login',
  //     query: {
  //       redirect: '/order'
  //     }
  //   });
  // }
  await fetchData();
});

async function fetchData() {
  try {
    const oid = route.query?.id;
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_USER_ORDERS_DETAIL(oid)}`, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
    curOrder.value = res.data;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
async function cancelOrder() {
  try {
    const oid = route.query?.id;
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${POST_CANCEL_ORDER(oid)}`, {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
    console.log(res);
    message.success('已取消訂單');
  } catch (error) {
    message.error(error.data);
  }
  fetchData();
}
function getFormattedData(date) {
  const _date = dayjs(date);
  return _date.format('YYYY/MM/DD A hh:mm');
}
</script>

<template>
  <div>
    <section class="full_height mt185ptb30">
      <div class="container">
        <div class="order_div">
          <div class="order_tl">
            訂單編號：<span>{{ curOrder?.id }}</span>
            <a href="#" data-toggle="modal" data-target="#back" class="back_span">申請取消訂單</a>
          </div>
          <ul>
            <li>商品運送類型：<span>{{ orderAttr }}</span></li>
            <li>成立日期：<span>{{ getFormattedData(curOrder?.createdAt) }}</span></li>
            <li>訂單狀態：<span>{{ orderStatus }}</span></li>
          </ul>
        </div>
        <div class="order_div">
          <div class="order_tl">
            付款人資訊
          </div>
          <ul>
            <li>姓名：<span>{{ curOrder?.consignee?.name }}</span></li>
            <li>Email：<span>{{ curOrder?.consignee?.email }}</span></li>
            <li>省份：<span>{{ curOrder?.consignee?.province }}</span></li>
            <li>縣市：<span>{{ curOrder?.consignee?.district }}</span></li>
            <li>城市：<span>{{ curOrder?.consignee?.city }}</span></li>
            <li>城鎮：<span>{{ curOrder?.consignee?.town }}</span></li>
            <li>郵遞區號：<span>{{ curOrder?.consignee?.zipCode }}</span></li>
            <li>行動電話：<span>{{ curOrder?.consignee?.cellphone }}</span></li>
            <li>地址：<span>{{ curOrder?.consignee?.addressDetailOne }}</span></li>
            <li>取貨店家名稱：<span>{{ curOrder?.consignee?.stationName }}</span></li>
            <li>取貨店家編號：<span>{{ curOrder?.consignee?.stationCode }}</span></li>
            <li>收件備註：<span>{{ curOrder?.consignee?.remark }}</span></li>
            <li>寄件備註：<span>{{ curOrder?.consignee?.senderRemark }}</span></li>
          </ul>
        </div>
        <table class="cart_list">
          <tbody>
            <tr
              v-for="prod in curOrder.items"
              v-show="prod.productId !== null"
              :key="prod.name"
            >
              <td class="cart_img">
                <NuxtLink :to="`/product?id=${prod?.productId}`" target="new">
                  <img :src="prod?.coverImg">
                </NuxtLink>
              </td>
              <td class="cart_tl">
                <NuxtLink :to="`/product?id=${prod?.productId}`" target="new">
                  <h5>{{ prod.name }}</h5>
                </NuxtLink>
                <div class="product-quantity">
                  X {{ prod.quantity }}
                </div>
              </td>
              <td class="cart-price text-right">
                <span>${{ prod?.price * prod?.quantity }}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <ul class="cart_check">
          <li>
            商品金額小計 (共{{ realProd?.length }}項商品)：${{ realProdPrice }}
          </li>
          <li>
            運費：{{ deliverFee }}
          </li>
          <li>
            紅利扣點：{{ 0 }}
          </li>
          <li class="border_top">
            訂單總金額：<span>${{ totalPrice }}</span>
          </li>
        </ul>
        <div class="text-center mb-20 mt-20">
          <NuxtLink to="/order" type="button" class="btn btn-main btn-default">
            回上一頁
          </NuxtLink>
          <button v-show="orderStatus !== `已取消`" type="button" class="btn btn-main btn-default" data-toggle="modal" @click="cancelOrder">
            取消訂單
          </button>
          <button type="button" class="btn btn-main btn-check">
            立即付款
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.cart-price {
  color: #000;
  text-align: right;
}
.order_div ul {
  line-height: 1.8;
}
.order_div li span {
  padding-left: 0;
}
</style>
