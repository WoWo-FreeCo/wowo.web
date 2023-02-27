<script setup>
// import mockProduct from '@/mocks/mockProducts.json';
import { GET_ALL_PRODUCT } from '@/apis/requestURL';

const cartStore = useCartStore();
const route = useRoute();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();

const products = ref([]);
const currentProduct = ref({});
const loading = ref(true);

const addingAmount = ref(1);

const currentTag = ref(0);

onMounted(async() => {
  await nextTick();
  fetchProd();
});

async function fetchProd() {
  try {
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_ALL_PRODUCT}`);
    const { data } = res;
    products.value = data;
    const _prod = data?.find(e => e.id === parseInt(route.query.id));
    if (!_prod) return redirectToIndex();
    currentProduct.value = _prod;
  } catch (error) {
    console.log(error);
    redirectToIndex();
  }
  loading.value = false;
}
function redirectToIndex() {
  router.push({
    path: '/'
  });
}

function addToCart(prod) {
  const existProd = cartStore.merch.find(e => e.id === prod.id);
  const amount = addingAmount.value;
  if (!existProd) {
    cartStore.merch.push({ ...prod, amount });
  } else {
    existProd.amount = amount;
  }
}
function goCheckout(prod) {
  addToCart(prod);
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
</script>
<template>
  <div>
    <section class="full_height mt185ptb30">
      <div class="container">
        <div class="row product_flex">
          <div class="col-md-6 col-sm-12 single-product-slider">
            <!----------------!!!!!!!!!!!! class加col-sm-12 !!!!!!!!!!!!---------------->
            <div class="product_frame">
              <span class="pagingInfo" />
              <button class="add_like">
                <i class="far fa-heart" />
              </button><!--點擊之後, 加入最愛, class改 class="fa-solid fa-heart"-->

              <!--灌水熱銷組, 後臺沒輸入不出現-->
              <div class="hot_sale">
                <span>{{ currentProduct?.brief }}</span>
              </div>
              <!--灌水熱銷組 end-->

              <div class="main_product">
                <Swiper
                  class="swiper-root"
                  :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperController, SwiperNavigation]"
                  :slides-per-view="1"
                  :loop="true"
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
                  <SwiperSlide v-for="slide in currentProduct?.slideSet || 5" :key="slide">
                    <img :src="slide.img || '/products/p'+(currentProduct.id-10)+'.jpg'" alt="">
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
                <li>
                  <span>市場價</span>
                  <span class="m_icon">$</span>{{ currentProduct?.price || 0 }}
                </li>
                <li>
                  <span>會員價</span>
                  <span class="m_icon">$</span>{{ currentProduct?.memberPrice || 0 }}
                </li>
                <li class="vip_price">
                  <span>VIP價</span>
                  <span class="m_icon">$</span>{{ currentProduct?.vipPrice || 0 }}
                </li>
                <li class="vip_price">
                  <span>SVIP價</span>
                  <span class="m_icon">$</span>{{ currentProduct?.svipPrice || 0 }}
                </li>
              </ul><!--產品價錢 end-->

              <!----------------!!!!!!!我要升等改位置!!!!!!!---------------->
              <span class="howup_vip">
                <i class="fa-regular fa-circle-up" />
                <NuxtLink to="/profile">我要升等</NuxtLink>
              </span><!--未到達的VIP價右邊顯示連結-->

              <n-input-number v-show="!loading" v-model:value="addingAmount" :min="1" style="width: 150px;margin-top: 24px;" />

              <!-- <div class="product-quantity"> -->
              <!-- <span>數量</span>
                <div class="product-quantity-slider">
                  <input id="product-quantity" type="num" value="1" name="product-quantity" onkeyup="if(event.keyCode !=37 && event.keyCode != 39)value=value.replace(/\D/g,'');if(value==0) value=1;">
                </div> -->
              <!-- </div> -->
              <div class="mt-20">
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
            <li :class="{active: currentTag === 0}" @click="currentTag = 0">
              <a data-toggle="tab" href="javascript:;" aria-expanded="true">商品介紹</a>
            </li>
            <li :class="{active: currentTag === 1}" @click="currentTag = 1">
              <a href="javascript:;">頁籤 2</a>
            </li>
            <li :class="{active: currentTag === 2}" @click="currentTag = 2">
              <a href="javascript:;">頁籤 3</a>
            </li>
            <li :class="{active: currentTag === 3}" @click="currentTag = 3">
              <a href="javascript:;">頁籤 4</a>
            </li>
          </ul>

          <div class="tab-content">
            <!--商品介紹--><!--第一個要顯示的, class要加 active in-->
            <div id="details" class="tab-pane fade active in">
              <!--id可隨意取, 但須對應上面tab的 href="#"-->
              editor
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

        <!-- <h3 class="text-center">
          猜你喜歡的
        </h3> -->

        <div v-if="false" class="product_slide">
          <!---1---><!---1個div為一筆產品---><!----------------------!!!!!!!!新版改, ul 裡的價錢標籤!!!!!!!!---------------------->
          <div class="product_frame">
            <div class="hot_sale2">
              <!--灌水熱銷組-->
              熱銷<span>30</span>組
            </div>
            <div class="product_img">
              <a href="/product" target="_blank">
                <img src="@/assets/images/product/2009.jpg" alt=""><!--建議 600*400-->
              </a>
            </div>
            <h3>
              <a href="/product" target="_blank">產品名稱產品名稱產品名稱產品名稱產品名稱產品名稱1</a>
            </h3>
            <ul>
              <!----------------------!!!!!!!!新版改, 價錢標籤!!!!!!!!---------------------->
              <li>
                $130
                <span>市場價</span>
              </li>
              <li>
                $130
                <span>會員價</span>
              </li>
              <li>
                $130
                <span>VIP價</span>
              </li>
              <li>
                $130
                <span>SVIP價</span>
              </li>
              <li>
                <button><i class="fa-solid fa-cart-shopping" /><!----------------!!!!!!!!!!!! <i class="fa-solid fa-cart-plus"></i> 改<i class="fa-solid fa-cart-shopping"></i> !!!!!!!!!!!!----------------></button>
              </li>
            </ul>
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
</style>
