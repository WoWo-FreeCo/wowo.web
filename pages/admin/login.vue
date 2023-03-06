<script setup>
// ! TODO: 目前串假資料，之後接APIs
// import mockAccount from '@/mocks/mockAccounts.json';
import { ADMIN_LOGIN, GET_ADMIN_PROFILE } from '@/apis/requestURL';

// const routes = useRoute();
const router = useRouter();
// const message = useMessage();

const authStore = useAuthStore();
const config = useRuntimeConfig();

const inputField = ref({
  email: '',
  password: ''
});

onMounted(async() => {
//
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    try {
      const res = await $fetch(`${config.public.apiBase}/${GET_ADMIN_PROFILE}`, {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + accessToken }
      });
      authStore.loginSuccess(accessToken);
      authStore.updateUser(res.data);
    } catch (error) {
      authStore.logout();
    }
    rediectPath();
  }
});

async function tryLogin() {
  try {
    const res = await $fetch(`${config.public.apiBase}/${ADMIN_LOGIN}`, {
      method: 'POST',
      body: inputField.value
    });
    setLoginResponse(res.data);
    console.log(res);
  } catch (error) {
    console.log(error);
    if (error.statusCode) {
      alert('請輸入正確的管理帳號及密碼');
    }
  }
}

async function setLoginResponse(data) {
  const { accessToken, refreshToken } = data;
  // console.log(accessToken);
  authStore.loginSuccess(accessToken, refreshToken);

  const res = await $fetch(`${config.public.apiBase}/${GET_ADMIN_PROFILE}`, {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + accessToken }
  });
  authStore.updateUser(res.data);
  rediectPath();
}

function rediectPath() {
  // const redirectPath = routes.query?.redirect;
  router.push('/admin');
  // if (redirectPath) {
  //   router.push({ path: redirectPath });
  // } else {
  //   router.push({ path: '/profile' });
  // }
}
</script>

<template>
  <client-only>
    <section class="full_height mt185ptb30">
      <div class="container">
        <h3 class="login_tl">
          管理者登入<br>Login
        </h3>
        <!-- <n-button @click="error">
          Error
        </n-button> -->

        <!-- <div class="social_login">
          使用：
          <a href="" class="btn btn-check bg-facebook">
            <i class="fa-brands fa-facebook-f" />
            facebook帳號登入
          </a>
          <a href="" class="btn btn-check bg-google">
            <i class="fa-brands fa-google-plus-g" />
            Google帳號登入
          </a>
          <a href="" class="btn btn-check bg-line">
            <i class="fa-brands fa-line" />
            Line帳號登入
          </a>
        </div> -->
        <div class="contact-form">
          <form id="" method="post" action="javascript:;">
            <div class="form-group">
              <input
                id="input-field-email"
                v-model="inputField.email"
                type="email"
                placeholder="Email*"
                class="form-control"
                name=""
                required
              >
            </div>
            <div class="form-group">
              <input
                id="input-field-password"
                v-model="inputField.password"
                autocomplete=""
                type="password"
                placeholder="密碼*"
                class="form-control"
                name=""
                required
              >
            </div>
            <div class="text-center">
              <input id="input-field-submit" type="submit" class="btn btn-main btn-bag" value="管理者登入" @click="tryLogin">
            </div>
          </form>

          <!-- <div class="text-center mt-30">
            <i class="fa-regular fa-circle-question" /><a href="forgotten.html">忘記密碼?</a>
          </div> -->

          <!-- <div class="other_function">
            沒有帳號?
            <NuxtLink class="btn btn-block btn-bag" to="/register">
              會員註冊
            </NuxtLink>
          </div> -->
        </div>
      </div>
    </section>
  </client-only>
</template>
