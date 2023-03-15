<script setup>
import { useMessage } from 'naive-ui';
import { USER_REGISTER } from '@/apis/requestURL';

const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const message = useMessage();

const inputField = ref({
  recommendedAccount: '',
  email: '',
  password: '',
  nickname: '',
  cellphone: '',
  telephone: '',
  addressOne: '',
  district: '',
  city: '',
  zipCode: ''
  // addressTwo: '',
  // addressThree: ''
});

onMounted(() => {
  const recId = route.query?.recommend;
  if (recId) {
    inputField.value.recommendedAccount = recId;
  }
  console.log(inputField.value);
});

async function confirmReg() {
  if (!inputField.value.nickname) {
    message.error('請輸入姓名');
    return;
  }
  if (!inputField.value.password) {
    message.error('請輸入密碼');
    return;
  }
  if (!inputField.value.email) {
    message.error('請輸入Email');
    return;
  }
  if (!inputField.value.cellphone) {
    message.error('請輸入手機號碼');
    return;
  }
  if (!inputField.value.district) {
    message.error('請輸入縣市名稱');
    return;
  }
  if (!inputField.value.city) {
    message.error('請輸入城市名稱');
    return;
  }
  if (!inputField.value.zipCode) {
    message.error('請輸入郵遞區號');
    return;
  }
  if (!inputField.value.addressOne) {
    message.error('請輸入地址');
    return;
  }
  try {
    await $fetch(`${config.public.apiBase}/${USER_REGISTER}`, {
      method: 'POST',
      body: inputField.value
    });
    message.success('恭喜註冊成功，即將跳轉登入頁', {
      duration: 1000,
      onAfterLeave: () => {
        router.push({ path: '/login' });
      }
    });
  } catch (error) {
    // console.log(error.data);
    // alert(error.data?.message || '請輸入正確的資訊與必填欄位');
    message.error(error.data?.message || '請輸入正確的資訊與必填欄位');
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
            <!-- <div class="form-group">
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
            </div> -->
            <div class="form-group">
              <label>姓名*</label>
              <input
                id="wb-nickname"
                v-model="inputField.nickname"
                type="text"
                placeholder="請輸入真實姓名"
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
            <!-- <div class="form-group">
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
            </div> -->
            <div class="form-group">
              <label>縣市*</label>
              <input
                id="auth-address-district"
                v-model="inputField.district"
                type="text"
                placeholder="請輸入所在的縣市"
                class="form-control"
                name="form-control-district"
                required
              >
            </div>
            <div class="form-group">
              <label>城市*</label>
              <input
                id="auth-address-city"
                v-model="inputField.city"
                type="text"
                placeholder="請輸入所在的城市"
                class="form-control"
                name="form-control-city"
                required
              >
            </div>
            <div class="form-group">
              <label>郵遞區號*</label>
              <input
                id="auth-address-zipCode"
                v-model="inputField.zipCode"
                type="text"
                placeholder="請輸入住址的郵遞區號"
                class="form-control"
                name="form-control-zipCode"
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
            <!-- <div class="form-group">
              <label>送貨地址2</label>
              <input
                id="wb-address2"
                v-model="inputField.addressTwo"
                type="text"
                placeholder="送貨地址2"
                class="form-control"
                name=""
              >
            </div> -->
            <!-- <div class="form-group">
              <label>送貨地址3</label>
              <input
                id="wb-address3"
                v-model="inputField.addressThree"
                type="text"
                placeholder="送貨地址3"
                class="form-control"
                name=""
              >
            </div> -->
            <div class="text-center">
              <!-- <button type="reset" class="btn btn-main btn-default">
                取消重填
              </button> -->
              <input
                id="wb-reg-confirm"
                type="submit"
                class="btn btn-main btn-bag"
                value="確認送出"
                @click="confirmReg"
              >
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
