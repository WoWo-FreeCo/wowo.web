<script setup>
import { GET_PRODUCT_CATEGORY, GET_ALL_PRODUCT } from '@/apis/requestURL';
// import mockProduct from '@/mocks/mockProducts.json';
// import mockLabel from '@/mocks/mockLabels.json';

const runtimeConfig = useRuntimeConfig();

const defaultCategory = {
  id: -1,
  name: '所有產品'
};

const currentCategoryId = ref(defaultCategory.id);

const prodCategories = ref([]);
const products = ref([]);

const cartStore = useCartStore();

const collapseToggle = ref(false);

const currentProduct = ref([]);

watch(currentCategoryId, (_new) => {
  if (_new === defaultCategory.id) {
    currentProduct.value = products.value;
    return;
  }
  currentProduct.value = products.value.filter(e => e.categoryId === _new);
});

onMounted(async() => {
  await nextTick();
  fetchData();
});

// useAsyncData('fetch-products', async() => {
//   const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_ALL_PRODUCT}`);
//   const { data } = res;
//   products.value = data;
//   currentProduct = data;
// });

function fetchData() {
  fetchProdCategories();
  fetchProd();
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
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_ALL_PRODUCT}?take=200`);
    const { data } = res;
    products.value = data;
    currentProduct.value = data;
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
  <div class="full_height mt-120">
    <!------------------!!!!!!!!!!!!!! 拿掉 mb-20加mt-120, 此整區塊有做修改------------------>
    <div class="row">
      <div class="col-sm-3 p-0 bg_left2">
        <!------------------!!!!!!!!!!!!!! class改bg_left2------------------>
        <div id="accordion" class="panel-group commonAccordion" role="tablist" aria-multiselectable="true">
          <div class="panel panel-default">
            <div id="headingOne" class="panel-heading" role="tab">
              <h4 class="panel-title">
                <a
                  role="button"
                  href="javascript:;"
                  @click="collapseToggle = !collapseToggle"
                >
                  產品類別
                </a>
              </h4>
            </div>
            <div id="tab-collapse-area" :class="{inactive: collapseToggle}" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              <ul>
                <li
                  v-for="category in prodCategories"
                  :key="category.id"
                  :class="{active: currentCategoryId === category.id}"
                  @click="currentCategoryId = category.id"
                >
                  <a href="javascript:;">{{ category.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-9 pl20pr30">
        <!------------------!!!!!!!!!!!!!! class加pl20pr30------------------>

        <!----------------!!!!!!!!!!!!!! sitemap改位置 !!!!!!!!!!!!!!---------------->
        <ol class="breadcrumb">
          <li><a href="/">Home</a></li>
          <li>產品介紹</li>
          <li class="active">
            {{ prodCategories.find(item => item.id === currentCategoryId)?.name }}
          </li>
        </ol>

        <div class="row">
          <!---1--->
          <div class="flex-row col-lg-4 col-md-6 col-sm-12">
            <div v-for="item in currentProduct" :key="item.id" class="product_frame">
              <div v-show="item.brief" class="hot_sale2">
                <!--灌水熱銷組-->
                <span>{{ item.brief }}</span>
              </div>
              <div class="product_img">
                <NuxtLink :to="`/product?id=${item.id}`">
                  <img :src="item?.thumbnail?.url" alt="">
                </NuxtLink>
              </div>
              <h3>
                <NuxtLink :to="`/product?id=${item.id}`">
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
                <li>
                  <button @click="addToCart(item)">
                    <i class="fa-solid fa-cart-shopping" />
                  </button>
                </li>
              </ul>
            </div>
          </div><!---1 end--->
        </div>
        <span v-show="!currentProduct.length" class="not-found">目前沒有該類別的產品</span>

        <!-- TODO: pagination -->
        <div class="text-center">
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
  </div>
</template>
<style lang="scss" scoped>
.flex-row {
  @media screen and (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .product_frame {
      width: 33.33%;
    }

  }
}
.not-found {
  font-size: 24px;
  font-weight: 500;
  display: block;
  margin: 0 auto;
  margin-top: 40px  ;
  text-align: center;
  width: 100%;
}
#tab-collapse-area {
  transition: opacity .25s ease;
  height: auto;
  &.inactive {
    opacity: 0;
    pointer-events: none;
  }
}
</style>
