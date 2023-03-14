<script setup>
// import mockProduct from '@/mocks/mockProducts.json';
import { useMessage } from 'naive-ui';
import { GET_PRODUCT_DETAIL } from '@/apis/requestURL';

const cartStore = useCartStore();
const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();
const message = useMessage();
const runtimeConfig = useRuntimeConfig();

const products = ref([]);
const currentProduct = ref({});
const loading = ref(true);

const addingAmount = ref(1);

const currentTag = ref(0);

const isFavorite = computed(() => cartStore.favMerch?.find(e => e.id === currentProduct.value.id));

onMounted(async() => {
  await nextTick();
  await fetchProd();
  fetchHTMLPage();
});

async function fetchProd() {
  try {
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_PRODUCT_DETAIL(route.query?.id)}`);
    products.value = res.data;
    const _prod = res.data;
    if (!_prod) return redirectToIndex();
    currentProduct.value = _prod;
  } catch (error) {
    console.log(error);
    // redirectToIndex();
  }
  loading.value = false;
}
function redirectToIndex() {
  router.push({
    path: '/'
  });
}

async function addToCart(item) {
  try {
    const existProd = cartStore.merch.find(e => e.id === item.id);
    if (existProd) {
      const quantity = existProd?.quantity + addingAmount.value;
      await cartStore.updateCartItem({
        type: item?.attribute,
        cartItemId: existProd?.cartItemId,
        productId: existProd?.id,
        quantity
      });
      message.success(`此商品已存在購物車，目前總數：${quantity}`);
    } else {
      await cartStore.postCartItem({
        type: item?.attribute,
        productId: item?.id,
        quantity: 1
      });
      message.success('商品已加入購物車');
    }
    await cartStore.fetchCart();
  } catch (e) {
    message.error(e.message);
    console.log(e);
  }
}
function addToFavorite() {
  const existProd = cartStore.favMerch.find(e => e.id === currentProduct.value.id);
  if (!existProd) {
    cartStore.favMerch.push(currentProduct.value);
  } else {
    cartStore.favMerch = cartStore.favMerch.filter(e => e.id !== currentProduct.value.id);
  }
  const _merch = cartStore.favMerch;
  cartStore.updateFavMerch(_merch);
}
async function goCheckout(prod) {
  await addToCart(prod);
  const query = prod?.attribute === 'COLD_CHAIN'
    ? { type: 'cold-chain' }
    : {};
  router.push({
    path: '/cart',
    query: {
      ...query
    }
  });
}
function fetchHTMLPage(tag = 0) {
  const htmlContainer = document.querySelector('.html-container');
  htmlContainer.innerHTML = currentProduct.value?.markdownInfos[tag]?.text;
  currentTag.value = tag;
}
</script>
<template>
  <div>
    <section class="full_height mt185ptb30">
      <div class="container">
        <div class="row product_flex">
          <div class="col-md-6 col-sm-12 single-product-slider">
            <!----------------!!!!!!!!!!!! class加col-sm-12 !!!!!!!!!!!!---------------->
            <div class="product_frame">
              <!-- <span class="pagingInfo" /> -->
              <button class="add_like" @click="addToFavorite">
                <i
                  class="far fa-heart"
                  :class="{
                    'fa-solid': isFavorite,
                    'fa-heart': isFavorite
                  }"
                />
              </button>
              <!--點擊之後, 加入最愛, class改 class="fa-solid fa-heart"-->

              <!--灌水熱銷組, 後臺沒輸入不出現-->
              <div v-show="currentProduct?.brief" class="hot_sale">
                <span>{{ currentProduct?.brief }}</span>
              </div>
              <!--灌水熱銷組 end-->

              <div class="main_product">
                <Swiper
                  class="swiper-root swiper-prod"
                  :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperController, SwiperNavigation]"
                  :slides-per-view="1"
                  :loop="true"
                  :initial-slide="1"
                  :effect="'creative'"
                  :autoplay="{
                    delay: 4000,
                    disableOnInteraction: true,
                  }"
                  :creative-effect="{
                    prev: {
                      shadow: false,
                      translate: ['-20%', 0, -1],
                    },
                    next: {
                      translate: ['100%', 0, 0],
                    },
                  }"
                >
                  <SwiperSlide
                    v-for="slide in currentProduct?.images"
                    :key="slide?.img"
                    class="swiper-prod-slide"
                  >
                    <img :src="slide.img" alt="">
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 single-product-details">
            <!----------------!!!!!!!!!!!! class加col-sm-12 !!!!!!!!!!!!---------------->

            <ol class="breadcrumb">
              <li><a href="/">Home</a></li>
              <li><a href="/shop">產品介紹</a></li>
            </ol>

            <h2 class="prod-name" title="產品名稱">
              {{ currentProduct?.name }}
            </h2>

            <form id="productForm" action="javascript:;">
              <!----------------!!!!!!!!!!!!!! 價錢"$"改寫法, 我要升等改位置, 結帳按鈕改位置 !!!!!!!!!!!!!!---------------->
              <!--產品價錢4種全show-->
              <ul class="product-price mt-0">
                <!----------------!!!!!!!!!!!!!! 價錢"$"改寫法 !!!!!!!!!!!!!!---------------->
                <li
                  :class="{
                    'vip_price': !authStore.user?.memberLevel
                  }"
                >
                  <span class="price-title">市價</span>
                  <span class="m_icon">$</span>{{ currentProduct?.price || 0 }}
                </li>
                <li
                  :class="{
                    'vip_price': authStore.user?.memberLevel === 'NORMAL'
                  }"
                >
                  <span class="price-title">會員</span>
                  <span class="m_icon">$</span>{{ currentProduct?.memberPrice || 0 }}
                </li>
                <li
                  :class="{
                    'vip_price': authStore.user?.memberLevel === 'VIP'
                  }"
                >
                  <span class="price-title">VIP</span>
                  <span class="m_icon">$</span>{{ currentProduct?.vipPrice || 0 }}
                </li>
                <li
                  :class="{
                    'vip_price': authStore.user?.memberLevel === 'SVIP'
                  }"
                >
                  <span class="price-title">SVIP</span>
                  <span class="m_icon">$</span>{{ currentProduct?.svipPrice || 0 }}
                </li>
              </ul><!--產品價錢 end-->

              <!----------------!!!!!!!我要升等改位置!!!!!!!---------------->
              <span class="howup_vip">
                <i class="fa-regular fa-circle-up" />
                <NuxtLink to="/profile">我要升等</NuxtLink>
              </span><!--未到達的VIP價右邊顯示連結-->

              <div class="nums">
                <n-input-number
                  v-show="!loading"
                  v-model:value="addingAmount"
                  :min="1"
                  :max="currentProduct?.inventory?.quantity"
                  style="width: 150px;"
                />
                <span>庫存：{{ currentProduct?.inventory?.quantity || 0 }}</span>
              </div>

              <!-- <div class="product-quantity"> -->
              <!-- <span>數量</span>
                <div class="product-quantity-slider">
                  <input id="product-quantity" type="num" value="1" name="product-quantity" onkeyup="if(event.keyCode !=37 && event.keyCode != 39)value=value.replace(/\D/g,'');if(value==0) value=1;">
                </div> -->
              <!-- </div> -->
              <div class="mt-20 btns">
                <!----------------!!!!!!!結帳按鈕改位置!!!!!!!---------------->
                <button class="btn btn-main btn-bag" @click="addToCart(currentProduct)">
                  <i class="fa-solid fa-cart-shopping" />加入購物車
                </button>
                <button type="submit" class="go_cart btn btn-main btn-check" @click="goCheckout(currentProduct)">
                  <i class="fa-solid fa-dollar-sign" />
                  立即結帳
                </button>
                <!--這個按鈕驅動 class="go_cart"--><!----------------!!!!!!!<i class="fa-solid fa-money-bill-wave"></i>改<i class="fa-solid fa-dollar-sign"></i>!!!!!!!---------------->
              </div>
            </form>
          </div>
        </div>

        <div class="product_tab mt-20">
          <ul class="nav nav-tabs">
            <li
              v-for="slot,index in currentProduct?.markdownInfos"
              :key="slot.title"
              :class="{active: currentTag === index}"
              @click="fetchHTMLPage(index)"
            >
              <a data-toggle="tab" href="javascript:;" aria-expanded="true">{{ slot.title }}</a>
            </li>
          </ul>

          <div class="tab-content">
            <!--商品介紹--><!--第一個要顯示的, class要加 active in-->
            <div id="details" class="tab-pane fade active in">
              <!--id可隨意取, 但須對應上面tab的 href="#"-->
              <div class="html-container" />
            </div><!--商品介紹 end-->

            <!--預留的頁籤-->
            <div id="tab2" class="tab-pane fade">
              <!--這些頁籤, 如果做固定四個的, 後臺關閉時, 只要不顯示上面的li, 這裡就不會顯示, 不用特別針對這關閉-->
              2
            </div><!--預留的頁籤 end-->

            <!--預留的頁籤-->
            <div id="tab3" class="tab-pane fade">
              3
            </div><!--預留的頁籤 end-->

            <!--預留的頁籤-->
            <div id="tab4" class="tab-pane fade">
              4
            </div><!--預留的頁籤 end-->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.product_slide {
  display: flex;
  .product_frame {
    flex-basis: 33.33%;
  }
}
.product-price {
  li > span:first-child {
    margin-right: 8px;
  }
  li {
    font-weight: 500;
  }
}
.price-title {
  min-width: 60px;
}
.breadcrumb {
  margin-bottom: 4px;
}
.breadcrumb>li+li:before {
  margin: 0 4px;
  padding: 0;
}
.prod-name {
  margin: 12px 0;
  min-height: 36px;
}
.add_like {
  position: absolute;
  top: 4px;
  right: 20px;
  z-index: 99;
}
.btn {
  font-weight: 400;
}
.btn-check {
  margin-left: 12px;
}
.nums {
  display: flex;
  gap: 12px;
  margin-top: 24px;
  align-items: center;
}
.single-product-slider {
  @media screen and (max-width: 375px){
    padding: 0 12px;
  }
}
.btns {
  @media screen and (max-width: 375px) {
    .go_cart {
      margin: 0;
    }
  }
}
</style>
