<script setup>
import { useMessage } from 'naive-ui';
import { GET_PRODUCT_CATEGORY, GET_ALL_PRODUCT } from '@/apis/requestURL';

const runtimeConfig = useRuntimeConfig();
const route = useRoute();

const defaultCategory = {
  id: -1,
  name: '所有產品'
};

const currentCategoryId = ref(defaultCategory.id);
const currentPage = ref(1);
const allProd = ref([]);
const maxPage = ref(1);

const prodCategories = ref([]);
const products = ref([]);

const authStore = useAuthStore();
const cartStore = useCartStore();
const message = useMessage();

const collapseToggle = ref(false);

const fakeProds = Array.from({ length: 6 }, () => ({ type: 'fake' }));

const currentProduct = ref(fakeProds);

// watch(currentCategoryId, (_new) => {
//   if (_new === defaultCategory.id) {
//     currentProduct.value = products.value;
//     return;
//   }
//   currentProduct.value = products.value.filter(e => e.categoryId === _new);
// });

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
  fetchProdAndCategories();
  fetchProd({
    _categoryId: route.query?.category || -1
  });
}

async function fetchProdAndCategories() {
  try {
    const categoryId = route.query?.category;
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_PRODUCT_CATEGORY}`);
    const { data } = res;
    let cidPattern = `categoryId=${categoryId}`;
    if (route.query?.category === '-1' || !route.query?.category) {
      cidPattern = '';
    }
    const resProd = await $fetch(`${runtimeConfig.public.apiBase}/${GET_ALL_PRODUCT}?take=200&${cidPattern}`);
    allProd.value = resProd.data;
    maxPage.value = parseInt(allProd.value.length / 6) + 1;
    prodCategories.value = [defaultCategory, ...data];
    // prodCategories.value = data;
  } catch (error) {
    //
  }
}
async function fetchProd(props = { _categoryId: -1, _page: 1, mount: false }) {
  const { _categoryId, _page, mount } = props;
  console.log(props);
  try {
    const categoryId = _categoryId || route.query?.category;
    const page = _page || route.query?.page || 1;
    const take = 6;
    currentCategoryId.value = categoryId || -1;
    currentPage.value = page;
    let cidPattern = `categoryId=${categoryId}`;
    // eslint-disable-next-line eqeqeq
    if (_categoryId == -1 || !route.query?.category || mount) {
      cidPattern = '';
    }
    console.log(route.query?.category);
    console.log('b', _categoryId);
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_ALL_PRODUCT}?take=${take}&${cidPattern}&skip=${(page - 1) * take}`);
    const { data } = res;
    products.value = data;
    currentProduct.value = data;
    // DIRTY CODE
    const resProd = await $fetch(`${runtimeConfig.public.apiBase}/${GET_ALL_PRODUCT}?take=200&${cidPattern}`);
    allProd.value = resProd.data;
    maxPage.value = parseInt(allProd.value.length / 6) + 1;
  } catch (error) {
    //
  }
}

function isFavorite(item) {
  return cartStore.favMerch?.find(e => e.id === item?.id);
}

function addToFavorite(item) {
  const existProd = cartStore.favMerch.find(e => e.id === item?.id);
  if (!existProd) {
    cartStore.favMerch.push(item);
  } else {
    cartStore.favMerch = cartStore.favMerch.filter(e => e.id !== item?.id);
  }
  const _merch = cartStore.favMerch;
  cartStore.updateFavMerch(_merch);
}

async function addToCart(item) {
  try {
    const existProd = cartStore.merch.find(e => e.id === item.id);
    if (existProd) {
      const quantity = existProd?.quantity + 1;
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
    console.log(e);
  }
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
                  class="prod-type-a"
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
                  :class="{active: route.query?.category == category.id || currentCategoryId === category.id}"
                >
                  <NuxtLink :to="`/shop?category=${category.id}`" @click="fetchProd({_categoryId: category.id, _page: 1})">
                    {{ category.name }}
                  </NuxtLink>
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
            <div
              v-for="item in currentProduct"
              v-show="item?.inventory?.quantity >= 1 || item?.type === 'fake'"
              :key="item.id"
              class="product_frame"
            >
              <!-- Favorite Button -->
              <button class="add_like" @click="addToFavorite(item)">
                <i
                  class="far fa-heart"
                  :class="{
                    'fa-solid': isFavorite(item),
                    'fa-heart': isFavorite(item)
                  }"
                />
              </button>
              <!--  -->
              <div v-show="item.brief" class="hot_sale2">
                <!--灌水熱銷組-->
                <span>{{ item.brief }}</span>
              </div>
              <div class="product_img">
                <div class="skeleton" />
                <NuxtLink :to="`/product?id=${item.id}`">
                  <img :src="item?.coverImg" alt="">
                </NuxtLink>
              </div>
              <h3>
                <NuxtLink :to="`/product?id=${item.id}`">
                  {{ item.name }}
                </NuxtLink>
              </h3>
              <ul>
                <li
                  :class="{
                    'vip_price': !authStore.user?.memberLevel
                  }"
                >
                  ${{ item?.price }}
                  <span>市價</span>
                </li>
                <li
                  :class="{
                    'vip_price': authStore.user?.memberLevel === 'NORMAL'
                  }"
                >
                  ${{ item?.memberPrice }}
                  <span>會員</span>
                </li>
                <li
                  :class="{
                    'vip_price': authStore.user?.memberLevel === 'VIP'
                  }"
                >
                  ${{ item?.vipPrice }}
                  <span>VIP</span>
                </li>
                <li
                  :class="{
                    'vip_price': authStore.user?.memberLevel === 'SVIP'
                  }"
                >
                  ${{ item?.svipPrice }}
                  <span>SVIP</span>
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
            <li
              v-for="item in maxPage"
              :key="item"
              :class="{active: currentPage == item}"
            >
              <NuxtLink
                :to="`/shop?category=${currentCategoryId}&page=${item}`"
                @click="fetchProd({_categoryId: currentCategoryId, _page: item})"
              >
                {{ item }}
              </NuxtLink>
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
.product_frame {
  > ul {
    display: flex;
    justify-content: space-evenly;
    padding: 8px 4px;
    > li {
      text-align: center;
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
.add_like {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 0px;
  right: 12px;
  z-index: 99;
}
.skeleton {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.3);
  animation: skeleton-anim .75s infinite alternate;
}
.prod-type-a {
  &::before {
    content: none !important;
  }
}
@keyframes skeleton-anim{
  0% {opacity: 0.3}
  100% {opacity: 0.8}
}
</style>
