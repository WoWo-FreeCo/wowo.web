<script setup>
import { GET_USER_ORDERS_DETAIL } from '@/apis/requestURL';
import { ProductType } from '@/constants/common';

const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();

const curOrder = ref({});

const oderAttr = computed(() => {
  switch (curOrder.value?.attribute) {
  case ProductType.ColdChain:
    return '一般商品';
  default:
    return '冷鏈商品';
  }
});

const orderStatus = computed(() => {
  switch (curOrder.value?.orderStatus) {
  case 'WAIT_PAYMENT':
    return '待付款';
  case 'WAIT_DELIVER':
    return '運送中';
  case 'WAIT_RECEIVE':
    return '待取貨';
  case 'COMPLETED':
    return '已完成';
  case 'CANCELLED':
    return '已取消';
  case 'REVOKED':
    return '退貨';
  default:
    return curOrder.value.orderStatus;
  }
});

const deliverFee = computed(() => {
  const _item = curOrder.value?.items?.find(e => e.productId === null);
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
  if (!authStore.status.loggedIn) {
    return router.push({
      path: '/login',
      query: {
        redirect: '/order'
      }
    });
  }
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
</script>

<template>
  <div>
    <section class="full_height mt185ptb30">
      <div class="container">
        <div class="order_div">
          <div class="order_tl">
            訂單編號：<span>{{ curOrder?.id }}</span>
            <a href="#" data-toggle="modal" data-target="#back" class="back_span">我要退貨</a>
          </div>
          <ul>
            <li>訂單狀態：<span>{{ orderStatus }}</span></li>
            <li>訂單日期：<span>{{ curOrder?.createdAt }}</span></li>
            <li>付款方式：<span>{{ curOrder?.paymentType }}</span></li>
            <li>寄送方式：<span>{{ curOrder?.createdAt }}</span></li>
            <li>住   址：<span>{{ curOrder?.consignee?.addressDetailOne }}</span></li>
            <li>可收貨日：<span>{{ "" }}</span></li>
            <li>發票類型：<span>{{ "" }}</span></li>
            <li>發票抬頭：<span>{{ "" }}</span></li>
            <li>發票統編：<span>{{ "" }}</span></li>
          </ul>
        </div>
        <div class="order_tl">
          購物清單
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
                  <img src="@/assets/images/product/2.jpg">
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
          <button type="button" class="btn btn-main btn-default" data-toggle="modal" data-target="#cancel">
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
</style>
