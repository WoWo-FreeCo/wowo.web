<script setup>
const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  if (!authStore.status.loggedIn) {
    router.push({
      path: '/login',
      query: {
        redirect: '/favorite'
      }
    });
  }
});
</script>
<template>
  <div>
    <section class="full_height mt185ptb30 pt0">
      <UserProfile />
      <div class="row">
        <!----------------!!!!!!!!!!!!此整區塊有做修改!!!!!!!!!!!!---------------->
        <div class="col-sm-3 p-0 bg_left">
          <div id="member_menu" class="panel-group commonAccordion">
            <div class="panel panel-default">
              <div id="headingOne" class="panel-heading" role="tab">
                <h4 class="panel-title">
                  <a
                    role="button"
                    data-toggle="collapse"
                    data-parent="#member_menu"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    會員資料
                  </a>
                </h4>
              </div>
              <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <ul>
                  <li>
                    <NuxtLink to="/profile">
                      基本資料管理
                    </NuxtLink>
                  </li>
                  <!-- <li><NuxtLink to="/order">我的消費紀錄</NuxtLink></li>
                  <li><NuxtLink to="/mypoint">我的紅利點數</NuxtLink></li>
                  <li><NuxtLink to="/myback">我的退貨紀錄</NuxtLink></li>
                  <li><NuxtLink to="/myhistory">我的回顧</NuxtLink></li> -->
                  <li class="active">
                    <NuxtLink to="/favorite">
                      我的最愛
                    </NuxtLink>
                  </li>
                  <!--當下頁面li的class要加active-->
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-9 pl20pr30">
          <h3 class="h3_tl border_bottom">
            按讚好物
          </h3>
          <!----------------!!!!!!!!!!!!class 改 h3_tl & border_bottom!!!!!!!!!!!!---------------->
          <div class="total_love">
            共1項商品
          </div>
          <!--總加入最愛數量-->
          <div class="row favs-row">
            <!---1--->
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="product_frame">
                <!----------------------!!!!!!!!新版改, ul 裡的價錢標籤!!!!!!!!---------------------->
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
            </div><!---1 end--->
          </div>
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

          <h3 class="h3_tl border_top pt-20">
            已買過商品
          </h3>

          <div class="product_slide2">
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
.favs-row {
  margin: 0;
}
</style>
