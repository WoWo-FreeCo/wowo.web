<script setup>
import { GET_PRODUCT_CATEGORY, GET_ALL_PRODUCT, GET_HOME_BANNER } from '@/apis/requestURL';

const runtimeConfig = useRuntimeConfig();

const defaultCategory = {
  id: -1,
  name: '所有產品'
};

const currentCategoryId = ref(defaultCategory.id);

const prodCategories = ref([]);
const products = ref([]);
const homeBanner = ref([]);

const cartStore = useCartStore();

let currentProduct = ref([]);

watch(currentCategoryId, (_new) => {
  if (_new === defaultCategory.id) {
    currentProduct = products.value;
    return;
  }
  currentProduct = products.value.filter(e => e.categoryId === _new);
  console.log(products.value);
});

// useAsyncData('fetch-products', async() => {
//   const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_ALL_PRODUCT}`);
//   const { data } = res;
//   products.value = data;
//   currentProduct = data;
// });

onMounted(async() => {
  await nextTick();
  fetchData();
  console.log(process.env.NODE_ENV, runtimeConfig.public.baseUrl);
});

function fetchData() {
  fetchHomeBanner();
  fetchProdCategories();
  fetchProd();
}

async function fetchHomeBanner() {
  try {
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_HOME_BANNER}`);
    const { data } = res;
    homeBanner.value = data;
    console.log(data);
  } catch (error) {
    //
  }
}
async function fetchProdCategories() {
  try {
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_PRODUCT_CATEGORY}`);
    const { data } = res;
    prodCategories.value = [defaultCategory, ...data];
  } catch (error) {
    //
  }
}
async function fetchProd() {
  try {
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_ALL_PRODUCT}`);
    const { data } = res;
    products.value = data;
    currentProduct.value = data;
    console.log(currentProduct.value, data);
  } catch (error) {
    //
  }
}

function addToCart(prod) {
  const existProd = cartStore.merch.find(e => e.id === prod.id);
  if (!existProd) {
    cartStore.merch.push({ ...prod, amount: 1 });
  } else {
    existProd.amount++;
  }
  console.log(cartStore.merch);
}

</script>

<template>
  <div>
    <Swiper
      v-if="homeBanner"
      class="swiper-root"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
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
      <SwiperSlide v-for="slide in homeBanner" :key="slide.id">
        <NuxtLink :to="`${slide.href}`">
          <img :src="slide.img" alt="">
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
    <!-----------------------產品列表區塊----------------------->
    <section class="text-center full_height">
      <div class="sub_menubar">
        <div class="container tabCommon">
          <ul class="nav nav-tabs bbottom_none labels-flex">
            <li
              v-for="category in prodCategories"
              :key="category.id"
              :class="{active: currentCategoryId === category?.id}"
              @click="currentCategoryId = category?.id"
            >
              <a href="javascript:;" data-toggle="tab">{{ category.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container tabCommon">
        <!--tab內容-->
        <div class="tab-content text-left">
          <!--tab 1--><!--第一個class要加active in, id可隨意取, 需對應上頭li的href-->
          <div id="cate_1" class="tab-pane fade active in">
            <div class="index_pslide">
              <!---1--->
              <!--一個類別只要顯示9個產品, 請以此div類推--><!----------------------!!!!!!!!新版改, ul 裡的價錢標籤!!!!!!!!---------------------->
              <div v-for="item in currentProduct" :key="item.key" class="product_frame">
                <div v-show="item?.brief" class="hot_sale2">
                  {{ item.brief }}
                </div>
                <div class="product_img">
                  <NuxtLink :to="`/product?id=${item?.id}`">
                    <img :src="item?.thumbnail?.url || '/products/p'+(item.id-10)+'.jpg'" alt="">
                  </NuxtLink>
                </div>
                <h3>
                  <NuxtLink :to="`/product?id=${item?.id}`">
                    {{ item.name }}
                  </NuxtLink>
                </h3>
                <ul>
                  <li>
                    ${{ item?.price }}
                    <span>市場價</span>
                  </li>
                  <li>
                    ${{ item?.memberPrice }}
                    <span>會員價</span>
                  </li>
                  <li>
                    ${{ item?.vipPrice }}
                    <span>VIP價</span>
                  </li>
                  <li>
                    ${{ item?.svipPrice }}
                    <span>SVIP價</span>
                  </li>
                  <li @click="addToCart(item)">
                    <button>
                      <i class="fa-solid fa-cart-shopping" />
                    </button>
                  </li>
                </ul>
              </div>
              <span v-show="!currentProduct.length" class="not-found">目前沒有該類別的產品</span>
              <!---1 end--->
            </div>
          </div><!--tab 1 end-->
        </div>
        <NuxtLink to="/shop" class="btn btn-main btn-large btn-more mt-50">
          更多商品
        </NuxtLink>
      </div>
    </section>

    <!-----------------------底部廣告, 沒有限定幾則, 建議尺寸1900*325, 可輸入指定連結----------------------->
    <div class="index_ad">
      <!--1-->
      <NuxtLink to="/bid">
        <!--指定連結-->
        <img src="@/assets/images/ad/1.jpg" alt="">
      </NuxtLink><!--1 end-->
      <!--2-->
      <NuxtLink to="/bid">
        <img src="@/assets/images/ad/1.jpg" alt="">
      </NuxtLink><!--2 end-->
    </div>
    <!--  -->
    <!-- bell Modal -->
  </div>
</template>
<style lang='scss' scoped>
.index_pslide {
  display: flex;
  flex-wrap: wrap;
}
.product_frame {
  flex-basis: 33.33%;
  @media screen and (max-width: 576px) {
    flex-basis: 100%;
  }
}
.not-found {
  font-size: 24px;
  font-weight: 500;
  display: block;
  margin: 0 auto;
  margin-top: 40px  ;
  text-align: center;
}
.swiper-root {
  margin-top: 120px;
  @media screen and (max-width: 576px) {
    margin-top: 145px;
  }
}
.labels-flex {
  @media screen and (max-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    > li {
      flex-basis: 47.5%;
    }
  }
}
</style>
