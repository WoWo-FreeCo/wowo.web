<script setup>
const authStore = useAuthStore();
const cartStore = useCartStore();
const pageStatus = usePageStatusStore();

const router = useRouter();

const messagesAmount = ref(5);

const isLoggedIn = computed(() => authStore.status.loggedIn);

const menuToggle = ref(false);

onMounted(() => {
  console.log(authStore.user);
});

function logout() {
  authStore.logout();
  authStore.updateUser({});
  router.push({ path: '/' });
}

function menuClose() {
  menuToggle.value = ref(false);
}
</script>

<template>
  <div class="top_nav">
    <div class="container2 relative p-0">
      <div id="logo" class="logo">
        <NuxtLink to="/">
          <img src="@/assets/images/logo.png" alt="">
        </NuxtLink>
      </div>

      <section class="top-header">
        <ul id="top_member" class="top-menu">
          <li>
            <NuxtLink to="/favorite">
              <i class="fa-regular fa-heart" />
            </NuxtLink>
          </li>
          <li class="top_cart">
            <NuxtLink to="/cart">
              <i class="fa-solid fa-cart-shopping" />
              <span v-show="cartStore?.merch.length > 0" class="badge badge-pink">{{ cartStore?.merch.length }}</span>
            </NuxtLink>
          </li>
          <li v-show="isLoggedIn && false" class="top_bell">
            <a href="javascript:;" @click="pageStatus.toggleBellMessage(true)">
              <i class="fa-regular fa-bell" />
              <span v-if="messagesAmount" class="badge badge-green bell_bounce">{{ messagesAmount }}</span>
            </a>
          </li>
          <!--登入前-->
          <li v-if="!isLoggedIn">
            <NuxtLink to="/login">
              <i class="fa-regular fa-user" />
            </NuxtLink>
          </li>
          <!--登入前顯示 end-->
          <!--登入後顯示-->
          <li v-else class="dropdown dropdown-slide">
            <a class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
              <i class="fa-regular fa-user" />
            </a>
            <ul class="dropdown-menu">
              <li>
                <NuxtLink to="/profile">
                  會員資料
                </NuxtLink>
              </li>
              <li>
                <a href="javascript:;" @click="logout">登出</a>
              </li>
            </ul>
          </li>
          <!--登入後顯示 end-->
          <!--搜尋只搜尋產品-->
          <!-- <li class="dropdown search dropdown-slide">
            <a class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
          <i class="fa-solid fa-magnifying-glass" />
          </a>
          <ul class="dropdown-menu search-dropdown">
            <li>
              <form action="" method="post">
                <input type="search" class="form-control" placeholder="產品搜尋">
              </form>
            </li>
          </ul>
          </li> -->
        </ul>
      </section>

      <div id="menuToggle">
        <input v-model="menuToggle" type="checkbox">
        <span />
        <span />
        <span />
        <ul id="menu">
          <li @click="menuClose">
            <NuxtLink to="/aboutlovin">
              關於LOVIN樂恋
            </NuxtLink>
          </li>
          <li @click="menuClose">
            <NuxtLink to="/shop">
              產品介紹
            </NuxtLink>
          </li>
          <li @click="menuClose">
            <NuxtLink to="/bonus-point">
              我要賺紅利
            </NuxtLink>
          </li>
          <li @click="menuClose">
            <NuxtLink to="/activity">
              WO活動
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.top_nav {
  padding: 0 24px;
}
#menuToggle input:checked ~ ul {
  border: 1px solid red;
}
#menuToggle {
  #menu {
    width: 100vw;
    margin: 0;
    left: 0;
    top: 0;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
}
</style>
