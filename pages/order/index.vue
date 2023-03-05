<script setup>
import { useMessage } from 'naive-ui';
import dayjs from 'dayjs';
import { GET_USER_ORDERS, POST_CANCEL_ORDER } from '@/apis/requestURL';
import { ProductType, OrderStatus } from '@/constants/common';

const authStore = useAuthStore();
const message = useMessage();
const router = useRouter();
const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const orders = ref([]);
const selectStatus = ref(-1);

const curProdType = ref(ProductType.General);

const curOrders = computed(() => {
  let _orders = [];
  switch (curProdType.value) {
  case ProductType.ColdChain:
    _orders = [...orders.value?.filter(e => e.attribute === ProductType.ColdChain)];
    break;
  default:
    _orders = [...orders.value?.filter(e => e.attribute === ProductType.General)];
    break;
  }
  switch (selectStatus.value) {
  case OrderStatus.WaitPayment:
    return _orders?.filter(e => e.orderStatus === OrderStatus.WaitPayment);
  case OrderStatus.WaitDeliver:
    return _orders?.filter(e => e.orderStatus === OrderStatus.WaitDeliver);
  case OrderStatus.WaitReceive:
    return _orders?.filter(e => e.orderStatus === OrderStatus.WaitReceive);
  case OrderStatus.Completed:
    return _orders?.filter(e => e.orderStatus === OrderStatus.Completed);
  case OrderStatus.Cancelled:
    return _orders?.filter(e => e.orderStatus === OrderStatus.Cancelled);
  case OrderStatus.Revoked:
    return _orders?.filter(e => e.orderStatus === OrderStatus.Revoked);
  default: return _orders;
  }
});

const orderStatus = (order) => {
  switch (order?.orderStatus) {
  case OrderStatus.WaitPayment:
    return '待付款';
  case OrderStatus.WaitDeliver:
    return '已出貨';
  case OrderStatus.WaitReceive:
    return '待取貨';
  case OrderStatus.Completed:
    return '已完成';
  case OrderStatus.Cancelled:
    return '已取消';
  case OrderStatus.Revoked:
    return '已退貨';
  default:
    return curOrder.value.orderStatus;
  }
};

function getFormattedData(date) {
  const _date = dayjs(date);
  return _date.format('YYYY/MM/DD A hh:mm');
}

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
        ...route.query,
        redirect: '/order'
      }
    });
  }
  if (route.query?.payment === 'successful') {
    message.success('已成功付款！');
    router.replace({ query: null });
  }
  await fetchData();
});

async function fetchData() {
  try {
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_USER_ORDERS}?take=200`, {
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

async function cancelOrder(item) {
  try {
    const oid = item?.id;
    await $fetch(`${runtimeConfig.public.apiBase}/${POST_CANCEL_ORDER(oid)}`, {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
    message.success('已取消訂單');
  } catch (error) {
    message.error(error.data);
  }
  fetchData();
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
            <select v-model="selectStatus">
              <option value="-1">
                訂單狀態
              </option>
              <option :value="OrderStatus.WaitPayment">
                待付款
              </option>
              <option :value="OrderStatus.WaitDeliver">
                運送中
              </option>
              <option :value="OrderStatus.WaitReceive">
                待取貨
              </option>
              <option :value="OrderStatus.Completed">
                已完成
              </option>
              <option :value="OrderStatus.Cancelled">
                已取消
              </option>
              <option :value="OrderStatus.Revoked">
                退貨
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
                  {{ getFormattedData(order?.createdAt) }}
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
                  <button type="button" class="btn btn-orderdetial cancel-btn" @click="cancelOrder(order)">
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

          <div v-show="false" class="text-center">
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
.cancel-btn {
  margin-left: 12px;
}
</style>
