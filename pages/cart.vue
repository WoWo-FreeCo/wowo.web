<script setup>
import { ProductType } from '@/constants/common';

const routes = useRoute();
const router = useRouter();

const authStore = useAuthStore();
const cartStore = useCartStore();

const cartType = ref(ProductType.General);

watch(routes, (_new) => {
  updateCartType();
  // console.log(cartStore?.merch.filter(e => e.attribute === 'COLD_CHAIN'));
});

const currentMerch = computed(() => {
  switch (cartType.value) {
  case ProductType.ColdChain:
    return cartStore?.merch.filter(e => e.attribute === 'COLD_CHAIN');
  default:
    return cartStore?.merch.filter(e => e.attribute === 'GENERAL');
  }
});

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

onMounted(() => {
  console.log(authStore.user);
  updateCartType();
});

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

function deleteItem(item) {
  cartStore.merch = cartStore.merch.filter(e => e.id !== item.id);
  // console.log(item);
}

function goCheckout() {
  router.push({ path: '/checkout', query: { ...routes.query } });
}
</script>
<template>
  <div class="full_height mt-30 mt185ptb30">
    <!----------------!!!!!!!!!!!!class 加 mt185ptb30!!!!!!!!!!!!---------------->
    <div class="cart_container mb-50">
      <!--購物車類別, 這裡不用動-->
      <ul class="list-inline dashboard-menu text-center">
        <li>
          <NuxtLink to="/cart" :class="{active: cartType === ProductType.General}">
            一般商品
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/cart?type=cold-chain" :class="{active: cartType === ProductType.ColdChain}">
            冷鍊商品
          </NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink to="/gbuy_cart">
            團購下單
          </NuxtLink>
        </li> -->
      </ul><!--購物車類別 end-->

      <!--購物車空的顯示-->
      <div v-show="!cartStore?.merch.length" class="text-center" style="margin: 72px 0;">
        <i class="fa-solid fa-cart-shopping" />
        <h2 class="text-center">
          購物車沒有東西
        </h2>
        <NuxtLink to="/shop">
          趕緊去添加
        </NuxtLink>
      </div><!--購物車空的顯示 end-->

      <!--購物清單,空的不顯示-->
      <form v-if="cartStore?.merch.length" method="post" action="javascript:;">
        <div>共{{ currentMerch.length }}項商品</div>

        <table class="cart_list">
          <tbody>
            <tr v-for="item in currentMerch" :key="item.id">
              <td class="cart_img">
                <a href="/product" target="new">
                  <img :src="item?.thumbnail?.url || '/products/p'+(item.id-10)+'.jpg'">
                </a>
              </td>
              <td class="cart_tl">
                <a href="/product" target="new">
                  <h5>{{ item?.name }}</h5>
                </a>
                <n-input-number v-model:value="item.amount" :min="1" :style="{ width: '150px' }">
                  <!-- <div class="product-quantity">
                  <div class="product-quantity-slider">
                    <input
                      id="product-quantity"
                      v-model.lazy="item.amount"
                      :data-id="`${item.id}`"
                      type="number"
                      name="product-quantity"
                      onkeyup="if(event.keyCode !=37 && event.keyCode != 39)value=value.replace(/\D/g,'');if(value==0) value=1;"
                      @change="onAmountChange"
                    >
                  </div>
                </div> -->
                  <span>滿額免運</span><!--當個產品的運費計算, 這裡的運費都是後臺制定統一價, 可有滿額免運, 滿件免運等-->
                </n-input-number>
              </td>
              <td class="cart_price text-right">
                <span>市價 ${{ item?.price?.market }}</span>
                價錢 ${{ getCurrentPriceByAuth(item) }}<!--此顯示當下會員等級的價格就好-->
              </td>
              <td class="cart_price text-right">
                <button type="button" class="del_btn" @click="deleteItem(item)">
                  <i class="fa-solid fa-trash-can" />
                </button><!--點擊刪除此商品-->
              </td>
            </tr>
          </tbody>
        </table>
        <ul class="cart_check">
          <li>
            商品金額小計 (共{{ currentMerch.length }}項商品)：<span>${{ totalPrice }}</span><!--商品總價+商品數量-->
          </li>
        </ul>
        <div class="text-right mb-20 mt-20">
          <NuxtLink type="button" class="btn btn-main btn-bag" to="/shop">
            繼續購物
          </NuxtLink>
          <button type="submit" class="btn btn-main btn-check" @click="goCheckout">
            下一步
          </button>
        </div>
      </form>

      <!-- <div v-show="currentMerch.length" class="alert alert-warning alert-common" role="alert">
        運送提醒，ex：宅配填寫到貨時間
      </div> -->
      <div v-show="currentMerch.length" class="alert alert-warning alert-common" role="alert">
        貼心提醒: 一般常溫商品,無法與冷鍊商品同時出貨, 敬請分開結帳,謝謝您
      </div>
      <!--購物清單,空的不顯示 end--->
    </div>
  </div>
</template>
