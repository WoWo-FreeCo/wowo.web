<script setup>
// ! TODO: 目前串假資料，之後接APIs
// import mockAccount from '@/mocks/mockAccounts.json';
import { ADMIN_LOGIN, USER_LOGIN, GET_PROFILE } from '@/apis/requestURL';

const routes = useRoute();
const router = useRouter();
// const message = useMessage();

const authStore = useAuthStore();
const cartStore = useCartStore();
const config = useRuntimeConfig();

const inputField = ref({
  email: '',
  password: ''
});

onMounted(async() => {
//
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  if (accessToken) {
    try {
      const res = await $fetch(`${config.public.apiBase}/${GET_PROFILE}`, {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + accessToken }
      });
      authStore.loginSuccess(accessToken, refreshToken);
      authStore.updateUser(res.data);
    } catch (error) {
      authStore.logout();
    }
    rediectPath();
  }
});

async function tryLogin() {
  try {
    const res = await $fetch(`${config.public.apiBase}/${USER_LOGIN}`, {
      method: 'POST',
      body: inputField.value
    });
    console.log(res);
    setLoginResponse(res.data);
  } catch (error) {
    if (error.statusCode) {
      alert('請輸入正確的帳號及密碼');
    }
  }
}

async function setLoginResponse(data) {
  const { accessToken, refreshToken } = data;
  // console.log(accessToken);
  authStore.loginSuccess(accessToken, refreshToken);

  const res = await $fetch(`${config.public.apiBase}/${GET_PROFILE}`, {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + accessToken }
  });
  authStore.updateUser(res.data);
  rediectPath();
}

function rediectPath() {
  const redirectPath = routes.query?.redirect;
  if (redirectPath) {
    router.push({ path: redirectPath });
  } else {
    router.push({ path: '/profile' });
  }
}
</script>

<template>
  <client-only>
    <section class="full_height mt185ptb30">
      <div class="container">
        <h3 class="login_tl">
          忘記密碼<br>Forget password
        </h3>
        <!-- <n-button @click="error">
          Error
        </n-button> -->

        <!-- <div class="social_login">
          使用：
          <a href="" class="btn btn-check bg-facebook" style="margin: 3px;">
            <i class="fa-brands fa-facebook-f" />
            facebook帳號登入
          </a>
          <a href="" class="btn btn-check bg-google" style="margin: 3px;">
            <i class="fa-brands fa-google-plus-g" />
            Google帳號登入
          </a>
          <a href="" class="btn btn-check bg-line" style="margin: 3px;">
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
              <input id="input-field-submit" type="submit" class="btn btn-main btn-bag" value="送出" @click="tryLogin">
            </div>
          </form>
        </div>
      </div>
    </section>
  </client-only>
</template>
