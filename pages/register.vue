<script setup>
import { USER_REGISTER } from '@/apis/requestURL';

const $route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();

const recommendedAccount = ref($route.query.recommendedAccount);

const inputField = ref({
  recommendedAccount: recommendedAccount.value,
  realname: '',
  email: '',
  password: '',
  nickname: '',
  cellphone: '',
  telephone: '',
  addressOne: '',
  addressTwo: '',
  addressThree: ''
});

onMounted(() => {
//
});

async function confirmReg() {
  try {
    await $fetch(`${config.public.apiBase}/${USER_REGISTER}`, {
      method: 'POST',
      body: inputField.value
    });
    router.push({ path: '/login' });
    alert('恭喜你註冊成功，即將跳轉登入頁');
  } catch (error) {
    // console.log(error.data);
    alert(error.data?.message || '請輸入正確的資訊與必填欄位');
  }
}
</script>
<template>
  <div>
    <section class="full_height mt185ptb30">
      <div class="container">
        <h3 class="login_tl">
          會員註冊<br>Register
        </h3>
        <div class="social_login">
          使用：
          <a href="" class="btn btn-check bg-facebook" style="margin: 0 3px;">
            <i class="fa-brands fa-facebook-f" />
            facebook帳號註冊
          </a>
          <a href="" class="btn btn-check bg-google" style="margin: 0 3px;">
            <i class="fa-brands fa-google-plus-g" />
            Google帳號註冊
          </a>
          <a href="" class="btn btn-check bg-line" style="margin: 0 3px;">
            <i class="fa-brands fa-line" />
            Line帳號註冊
          </a>
        </div>
        <div class="contact-form">
          <form id="" action="javascript:;" role="form">
            <div class="form-group">
              <label>推薦帳號</label>
              <input
                id="wb-recommended-account"
                v-model="recommendedAccount"
                type="text"
                placeholder="請輸入推薦帳號"
                class="form-control"
                name=""
              >
            </div>
            <div class="form-group">
              <label>姓名*</label>
              <input
                id="wb-realname"
                v-model="inputField.realname"
                type="text"
                placeholder="請輸入真實姓名"
                class="form-control"
                name=""
                required
              >
            </div>
            <div class="form-group">
              <label>暱稱*</label>
              <input
                id="wb-nickname"
                v-model="inputField.nickname"
                type="text"
                placeholder="請輸入用戶暱稱"
                class="form-control"
                name=""
                required
              >
            </div>
            <div class="form-group">
              <label>Email*</label>
              <input
                id="wb-email"
                v-model="inputField.email"
                type="email"
                placeholder="請輸入 Email"
                class="form-control"
                name=""
                required
              >
              <span class="level_tips">此信箱為會員識別憑證及通知用，一旦註冊成功將無法再做修改，請確認後填寫。</span>
            </div>
            <div class="form-group">
              <label>密碼*</label>
              <input
                id="wb-password"
                v-model="inputField.password"
                type="password"
                placeholder="請輸入密碼"
                class="form-control"
                name=""
                required
                autocomplete=""
              >
            </div>
            <div class="form-group">
              <label>手機*</label>
              <input
                id="wb-cellphone"
                v-model="inputField.cellphone"
                type="text"
                placeholder="請輸入手機號碼"
                class="form-control"
                name=""
                required
              >
            </div>
            <div class="form-group">
              <label>市話*</label>
              <input
                id="wb-telephone"
                v-model="inputField.telephone"
                type="text"
                placeholder="請輸入電話號碼"
                class="form-control"
                name=""
                required
              >
            </div>
            <div class="form-group">
              <label>送貨地址*</label>
              <input
                id="wb-address1"
                v-model="inputField.addressOne"
                type="text"
                placeholder="請輸入送貨地址"
                class="form-control"
                name=""
                required
              >
            </div>
            <div class="form-group">
              <label>送貨地址2</label>
              <input
                id="wb-address2"
                v-model="inputField.addressTwo"
                type="text"
                placeholder="送貨地址2"
                class="form-control"
                name=""
              >
            </div>
            <div class="form-group">
              <label>送貨地址3</label>
              <input
                id="wb-address3"
                v-model="inputField.addressThree"
                type="text"
                placeholder="送貨地址3"
                class="form-control"
                name=""
              >
            </div>
            <div class="text-center">
              <button type="reset" class="btn btn-main btn-default">
                取消重填
              </button>
              <input id="wb-reg-confirm" type="submit" class="btn btn-main btn-bag" value="確認送出" @click="confirmReg">
            </div>
          </form>

          <div class="other_function">
            已有帳號?
            <NuxtLink class="btn btn-block btn-bag" to="/login">
              會員登入
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
