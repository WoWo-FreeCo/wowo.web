<script setup>
import { USER_REGISTER } from '@/apis/requestURL';

const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();

const inputField = ref({
  recommendedAccount: '',
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
  const recId = route.query?.recommend;
  if (recId) {
    inputField.value.recommendedAccount = recId;
  }
  console.log(inputField.value);
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
    // alert(error.data?.message || '請輸入正確的資訊與必填欄位');
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
        <!-- <div class="social_login">
          使用：
          <a href="" class="btn btn-check bg-facebook" style="margin: 3px;">
            <i class="fa-brands fa-facebook-f" />
            facebook帳號註冊
          </a>
          <a href="" class="btn btn-check bg-google" style="margin: 3px;">
            <i class="fa-brands fa-google-plus-g" />
            Google帳號註冊
          </a>
          <a href="" class="btn btn-check bg-line" style="margin: 3px;">
            <i class="fa-brands fa-line" />
            Line帳號註冊
          </a>
        </div> -->
        <div class="contact-form">
          <form id="" action="javascript:;" role="form">
            <div class="form-group">
              <label>推薦帳號</label>
              <input
                id="wb-recommended-account"
                v-model="inputField.recommendedAccount"
                type="text"
                placeholder="請輸入推薦帳號"
                class="form-control"
                name="wb-recommended-account"
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
              <span class="level_tips">此信箱為登入帳號,及通知驗証使用,請確實填寫</span>
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
<style lang="scss" scoped>
.form-control {
  font-weight: 400;
}
</style>
