<script setup>
const authStore = useAuthStore();
const cartStore = useCartStore();
const router = useRouter();
const route = useRoute();

const favProduct = computed(() => cartStore.favMerch);
const maxPage = ref(1);

onMounted(() => {
  if (!authStore.status.loggedIn) {
    router.push({
      path: '/login',
      query: {
        ...route.query,
        redirect: '/favorite'
      }
    });
  }
  maxPage.value = parseInt(favProduct.value.length / 6) + 1;
});

function addToCart(prod) {
  const existProd = cartStore.merch.find(e => e.id === prod.id);
  if (!existProd) {
    cartStore.merch.push({ ...prod, amount: 1 });
  } else {
    existProd.amount++;
  }
  const _merch = cartStore.merch;
  cartStore.updateMerch(_merch);
}
</script>
<template>
  <div>
    <section class="full_height mt185ptb30 pt0">
      <UserProfile />
      <div class="row">
        <ProfileSidebar />
        <div class="col-sm-9 pl20pr30">
          <h3 class="h3_tl border_bottom">
            按讚好物
          </h3>
          <!----------------!!!!!!!!!!!!class 改 h3_tl & border_bottom!!!!!!!!!!!!---------------->
          <div v-if="favProduct.length" class="total_love">
            共 {{ favProduct.length }} 項商品
          </div>
          <div v-else class="empty-hint">
            目前還沒有最愛商品哦
            <br>
            <NuxtLink to="/shop?category=-1" class="btn btn-main btn-large btn-more mt-20 more-prod">
              來去逛逛
            </NuxtLink>
          </div>
          <!--總加入最愛數量-->
          <div class="row">
            <!---1--->
            <div class="flex-row col-lg-4 col-md-6 col-sm-12">
              <div v-for="item in favProduct" :key="item.id" class="product_frame">
                <div v-show="item.brief" class="hot_sale2">
                  <!--灌水熱銷組-->
                  <span>{{ item.brief }}</span>
                </div>
                <div class="product_img">
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
            </div>
          </div>
          <!-- <div v-if="favProduct.length" class="text-center">
            <ul class="pagination post-pagination">
              <li v-for="item,index in maxPage" :key="index" class="active">
                <NuxtLink :to="`/favorite?page=${index+1}`">
                  {{ index + 1 }}
                </NuxtLink>
              </li>
            </ul>
          </div> -->
          <!--
          <h3  class="h3_tl border_top pt-20">
            已買過商品
          </h3> -->

          <div v-if="false" class="product_slide2">
            <!---1--->
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
                  <span>市價</span>
                </li>
                <li>
                  $130
                  <span>會員</span>
                </li>
                <li>
                  $130
                  <span>VIP</span>
                </li>
                <li>
                  $130
                  <span>SVIP</span>
                </li>
                <li>
                  <button>
                    <i class="fa-solid fa-cart-shopping" />
                    <!----------------!!!!!!!!!!!! <i class="fa-solid fa-cart-plus"></i> 改<i class="fa-solid fa-cart-shopping"></i> !!!!!!!!!!!!---------------->
                  </button>
                </li>
              </ul>
            </div><!---1 end--->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.product_slide2 {
  display: flex;
  .product_frame {
    flex-basis: 33.33%;
  }
}
.product_frame {
  > ul {
    > li {
      text-align: center;
    }
  }
}
.favs-row {
  margin: 0;
}
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
.empty-hint {
  font-size: 24px;
  text-align: center;
  margin-top: 24px;
  font-weight: 500;
}
.more-prod {
  margin-bottom: 28px;
  font-weight: 400;
}
</style>
