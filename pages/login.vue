<script setup>
// ! TODO: 目前串假資料，之後接APIs
// import mockAccount from '@/mocks/mockAccounts.json';
import { useMessage } from 'naive-ui';
import { USER_LOGIN, GET_PROFILE, GOOGLE_LOGIN } from '@/apis/requestURL';

const routes = useRoute();
const router = useRouter();
const message = useMessage();

const cartStore = useCartStore();
const authStore = useAuthStore();
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
      message.success('已自動登入');
    } catch (error) {
      authStore.logout();
      message.error('登入已逾期，請重新登入');
      return;
    }
    rediectPath();
  }
  initGoogleLoginBtn();
});

function execGoogleLogin() {
  if (!google) return;
  google.accounts.id.prompt();
}

function initGoogleLoginBtn() {
  if (!google) return;
  google.accounts.id.initialize({
    client_id: config.public.googleClientId,
    callback: handleCredentialResponse
  });
}

async function handleCredentialResponse(res) {
  try {
    const _response = await $fetch(`${config.public.apiBase}/${GOOGLE_LOGIN}`, {
      method: 'POST',
      body: {
        accessToken: res?.credential
      }
    });
    setLoginResponse(_response.data);
    message.success('登入成功');
  } catch (error) {
    if (error.statusCode) {
      message.error('請輸入正確的帳號及密碼');
    }
  }
}

async function tryLogin() {
  try {
    const res = await $fetch(`${config.public.apiBase}/${USER_LOGIN}`, {
      method: 'POST',
      body: inputField.value
    });
    setLoginResponse(res.data);
    message.success('登入成功');
  } catch (error) {
    if (error.statusCode) {
      message.error('請輸入正確的帳號及密碼');
    }
  }
}

async function setLoginResponse(data) {
  const { accessToken, refreshToken } = data;
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
    const query = { ...routes.query };
    delete query.redirect;
    router.push({ path: redirectPath, query });
  } else {
    router.push({ path: '/profile' });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

</script>

<template>
  <client-only>
    <section class="full_height mt185ptb30">
      <div class="container">
        <h3 class="login_tl">
          會員登入<br>Login
        </h3>
        <!-- <n-button @click="error">
          Error
        </n-button> -->

        <div class="social_login">
          使用：
          <!-- <a href="" class="btn btn-check bg-facebook" style="margin: 3px;">
            <i class="fa-brands fa-facebook-f" />
            facebook帳號登入
          </a> -->
          <button
            id="google-login"
            class="btn btn-check bg-google"
            style="margin: 4px;"
            @click="execGoogleLogin"
          >
            <i class="fa-brands fa-google-plus-g" />
            Google帳號登入
          </button>
          <!-- <a href="" class="btn btn-check bg-line" style="margin: 3px;">
            <i class="fa-brands fa-line" />
            Line帳號登入
          </a> -->
        </div>
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
              <input id="input-field-submit" type="submit" class="btn btn-main btn-bag" value="我要登入" @click="tryLogin">
            </div>
          </form>

          <!-- <div class="text-center mt-30">
            <i class="fa-regular fa-circle-question" />
            <NuxtLink to="/forget">
              忘記密碼?
            </NuxtLink>
          </div> -->

          <div class="other_function">
            沒有帳號?
            <div @click="scrollToTop">
              <NuxtLink class="btn btn-block btn-bag" to="/register">
                會員註冊
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </client-only>
</template>
