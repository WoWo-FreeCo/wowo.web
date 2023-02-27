<script setup>
import { GET_USER_ORDERS } from '@/apis/requestURL';
import { ProductType } from '@/constants/common';

const authStore = useAuthStore();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();

const orders = ref([]);

const curProdType = ref(ProductType.General);

const curOrders = computed(() => {
  switch (curProdType.value) {
  case ProductType.ColdChain:
    return orders.value?.filter(e => e.attribute === ProductType.ColdChain);
  default:
    return orders.value?.filter(e => e.attribute === ProductType.General);
  }
});

const orderStatus = (order) => {
  switch (order?.orderStatus) {
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
};

const orderAttr = (order) => {
  if (order?.attribute === ProductType.General) return '一般商品';
  if (order?.attribute === ProductType.ColdChain) return '冷鏈商品';
  else return order.attribute;
};

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
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_USER_ORDERS}`, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
    console.log(res);
    orders.value = res.data;
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div>
    <section class="full_height mt185ptb30 pt0">
      <UserProfile />
      <div class="row">
        <ProfileSidebar />
        <div class="col-sm-9 pl20pr30">
          <ul class="list-inline dashboard-menu">
            <li>
              <a
                class="pointer"
                :class="{active: curProdType === ProductType.General}"
                @click="curProdType = ProductType.General"
              >
                一般商品
              </a>
            </li>
            <li>
              <a
                class="pointer"
                :class="{active: curProdType === ProductType.ColdChain}"
                @click="curProdType = ProductType.ColdChain"
              >
                冷鏈商品
              </a>
            </li>
          </ul>

          <div class="select r0t0">
            <select>
              <option selected>
                訂單狀態
              </option>
              <option value="">
                待付款
              </option>
              <option value="">
                已付款
              </option>
              <option value="">
                已出貨
              </option>
              <option value="">
                已取消
              </option>
            </select>
          </div>

          <table class="member_table order_table">
            <thead>
              <tr>
                <th>
                  訂單編號
                </th>
                <th>
                  訂單日期
                </th>
                <th>
                  付款方式
                </th>
                <th>
                  訂單金額
                </th>
                <th>
                  訂單狀態
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in curOrders" :key="order.id">
                <td data-th="訂單編號">
                  {{ order?.id }}
                </td>
                <td data-th="訂單日期">
                  {{ order?.createdAt }}
                </td>
                <td data-th="訂單類型">
                  {{ orderAttr(order) }}
                </td>
                <td data-th="訂單金額">
                  {{ order?.price }}
                </td>
                <td data-th="訂單狀態">
                  {{ orderStatus(order) }}
                </td>
                <td>
                  <NuxtLink :to="`/order/detail?id=${order.id}`" class="btn btn-orderdetial">
                    查看明細
                  </NuxtLink>
                  <button type="button" class="btn btn-orderdetial" data-toggle="modal" data-target="#cancel">
                    取消訂單
                  </button>
                </td>
              </tr>
              <!-- <tr>
                <td data-th="訂單編號">
                  22060629636237
                </td>
                <td data-th="訂單日期">
                  2022/06/06
                </td>
                <td data-th="付款方式">
                  信用卡
                </td>
                <td data-th="訂單金額">
                  $680
                </td>
                <td data-th="訂單狀態">
                  已出貨
                </td>
                <td>
                  <button type="button" class="btn btn-orderdetial" onclick="location.href='order_info.html'">
                    查看明細
                  </button>
                  <button type="button" class="btn btn-orderdetial" data-toggle="modal" data-target="#back">
                    我要退貨
                  </button>
                </td>
              </tr> -->
            </tbody>
          </table>

          <div class="text-center">
            <!----------------!沒改!---------------->
            <ul class="pagination post-pagination">
              <li>
                <a href="#!">上一頁</a>
              </li>
              <li class="active">
                <a href="#!">1</a>
              </li>
              <li>
                <a href="#!">2</a>
              </li>
              <li>
                <a href="#!">3</a>
              </li>
              <li>
                <a href="#!">4</a>
              </li>
              <li>
                <a href="#!">5</a>
              </li>
              <li>
                <a href="#!">下一頁</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
