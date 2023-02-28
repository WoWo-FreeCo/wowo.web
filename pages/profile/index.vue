<script setup>
import { POST_USER_ACTIVATATION, GET_PROFILE } from '@/apis/requestURL';

const authStore = useAuthStore();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();

const config = useRuntimeConfig();

const authUser = computed(() => authStore?.user);

const clickedFB = ref(false);
const clickedYT = ref(false);
const clickedIG = ref(false);

const igURL = ref('https://www.instagram.com/lovin.520/');
const youtubeURL = ref('https://youtu.be/9RITDp0BBUw');
const fbURL = ref('https://www.facebook.com/LOVIN2022');
const inputVIPCode = ref('');
const inputSVIPCode = ref('');

const currentLevel = computed(() => {
  switch (authUser.value?.memberLevel) {
  case 'VIP':
    return 'VIP';
  case 'SVIP':
    return 'SVIP';
  default:
    return '普通會員';
  }
});

const inputField = ref({
  nickname: authStore.user?.nickname,
  // password: authStore.user?.password,
  telephone: authStore.user?.telephone,
  cellphone: authStore.user?.cellphone,
  addressOne: authStore.user?.addressOne,
  addressTwo: authStore.user?.addressTwo,
  addressThree: authStore.user?.addressThree
});

onMounted(() => {
  if (!authStore.status.loggedIn) {
    router.push({ path: '/login' });
  }
  updatePermission();
  console.log('!! - ', authUser.value);
});

async function updatePermission() {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const res = await $fetch(`${config.public.apiBase}/${GET_PROFILE}`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + accessToken }
    });
    authStore.loginSuccess(accessToken);
    authStore.updateUser(res.data);
    clickedFB.value = res.data?.FacebookGroupActivated;
    clickedYT.value = res.data?.YouTubeChannelActivated;
    clickedIG.value = res.data?.IGFollowActivated;
  } catch (error) {
    authStore.logout();
  }
  console.log('updated permission');
}

async function activateProfileByType(type) {
  if (type === 'fb') {
    try {
      await $fetch(`${runtimeConfig.public.apiBase}/${POST_USER_ACTIVATATION}`, {
        method: 'POST',
        body: {
          kind: 'B'
        },
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
      clickedFB.value = true;
    } catch (error) {
      alert('綁定失敗，請稍後再試一次');
    }
  } else if (type === 'yt') {
    try {
      await $fetch(`${runtimeConfig.public.apiBase}/${POST_USER_ACTIVATATION}`, {
        method: 'POST',
        body: {
          kind: 'C'
        },
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
      clickedYT.value = true;
    } catch (error) {
      alert('綁定失敗，請稍後再試一次');
    }
  } else if (type === 'ig') {
    try {
      await $fetch(`${runtimeConfig.public.apiBase}/${POST_USER_ACTIVATATION}`, {
        method: 'POST',
        body: {
          kind: 'D'
        },
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
      clickedYT.value = true;
    } catch (error) {
      alert('綁定失敗，請稍後再試一次');
    }
  } else if (type === 'vip') {
    // if (!allowActivateVIP.value) {
    //   alert('請先綁定 FB / YT 連結');
    //   return;
    // }
    try {
      console.log(inputVIPCode.value);
      await $fetch(`${runtimeConfig.public.apiBase}/${POST_USER_ACTIVATATION}`, {
        method: 'POST',
        body: {
          kind: 'A',
          code: inputVIPCode.value
        },
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
      authStore.user.VIPActivated = true;
      alert('VIP推薦碼已激活！！');
    } catch (error) {
      alert('請輸入正確的推薦帳號');
    }
  } else if (type === 'svip') {
    try {
      await $fetch(`${runtimeConfig.public.apiBase}/${POST_USER_ACTIVATATION}`, {
        method: 'POST',
        body: {
          kind: 'E',
          code: inputSVIPCode.value
        },
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
    } catch (error) {
      alert('綁定失敗，請稍後再試一次');
    }
  }
  updatePermission();
}
function updateProfile() {
  alert('更新功能尚未完成，請稍等');
}
</script>
<template>
  <div class="full_height mt185ptb30 pt0">
    <UserProfile />
    <div class="row">
      <ProfileSidebar />
      <div class="col-sm-9 pl20pr30">
        <div class="contact-form">
          <!----------------!沒改!---------------->
          <form id="" action="javascript:;">
            <h4 class="mb-20">
              會員基本資訊
            </h4>
            <div class="form-group">
              <label>姓名*</label>
              <input
                id="auth-realname"
                v-model="inputField.nickname"
                type="text"
                placeholder="姓名*"
                class="form-control"
                name=""
                required
              >
            </div>
            <!-- <div class="form-group">
              <label>暱稱*</label>
              <input
                id="auth-nickname"
                v-model="authUser.nickname"
                type="text"
                placeholder="暱稱*"
                class="form-control"
                name=""
                required
              >
            </div> -->
            <!-- <div class="form-group">
              <label>Email*</label>
              <input
                id="auth-email"
                v-model="authUser.email"
                type="email"
                placeholder="Email*"
                class="form-control"
                name=""
                required
              >
              <span class="level_tips">此信箱為會員識別憑證及通知用，一旦註冊成功將無法再做修改，請確認後填寫。</span>
            </div> -->
            <!-- <div class="form-group">
              <label>密碼*</label>
              <input
                id="auth-password"
                v-model="inputField.password"
                type="password"
                placeholder="密碼*"
                class="form-control"
                name=""
                required
                autocomplete=""
              >
            </div> -->
            <div class="form-group">
              <label>手機*</label>
              <input
                id="auth-mobile"
                v-model="inputField.cellphone"
                type="text"
                placeholder="手機*"
                class="form-control"
                name=""
                required
              >
            </div>
            <div class="form-group">
              <label>市話*</label>
              <input
                id="auth-tele"
                v-model="inputField.telephone"
                type="text"
                placeholder="市話*"
                class="form-control"
                name=""
                required
              >
            </div>
            <div class="form-group">
              <label>送貨地址*</label>
              <input
                id="auth-address1"
                v-model="inputField.addressOne"
                type="text"
                placeholder="送貨地址*"
                class="form-control"
                name=""
                required
              >
            </div>
            <div class="form-group">
              <label>送貨地址2</label>
              <input
                id="auth-address2"
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
                id="auth-address3"
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
              <input
                id="edit-confirm"
                type="submit"
                class="btn btn-main btn-bag"
                value="確認送出"
                @click="updateProfile"
              >
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="member_vip_root" class="bg_left2">
      <!----------------!!!!!!!!!!!!此2區塊有做修改!!!!!!!!!!!!---------------->
      <div id="member_vip" class="level_frame">
        <h3 class="level_tl">
          <span>目前級別：</span>{{ currentLevel }}
          <a href="#" data-toggle="modal" data-target="#vipdesc"><i class="fa-solid fa-circle-question" /> <u>查看升等方式</u></a>
        </h3>
        <div class="row level_content">
          <div v-if="authUser.memberLevel === 'NORMAL'">
            <h4>我要解鎖成為<span>VIP</span>：<span class="level_tips">『A.綁定VIP推薦人』+『B.按讚WO粉絲團或C.訂閱WO頻道』，即可成為VIP!</span></h4>
          </div>
          <div v-if="authUser.memberLevel === 'VIP'">
            <h4>我要解鎖成為<span>SVIP</span>：<span class="level_tips">『D.綁定SVIP激活碼』或『B.按讚WO粉絲團+C.訂閱WO頻道』，即可成為SVIP!</span></h4>
          </div>
          <div v-if="authUser.memberLevel === 'NORMAL'" class="col-sm-6 border-right">
            <h5>A.VIP推薦人<span class="level_tips">(綁定推薦人帳號後將無法解鎖！)</span></h5>
            <form id="vip_rec" action="javascript:;" class="form-group">
              <input v-show="!authUser.VIPActivated" v-model="inputVIPCode" type="text" placeholder="請輸入VIP推薦帳號 (會員帳號)" class="form-control">
              <button type="button" class="btn btn-block" :class="{'btn-check': !authUser.VIPActivated, 'btn-default': authUser.VIPActivated}" :disabled="authUser.VIPActivated" @click="activateProfileByType('vip')">
                <i v-show="authUser.VIPActivated" class="fa-solid fa-circle-check" />
                {{ !authUser.VIPActivated ? '前往綁定' : '已綁定' }}
              </button>
            </form>
          </div>
          <div
            :class="{
              'display-none': authUser.memberLevel === 'NORMAL'
            }"
            class="col-sm-6 border-right svip-code"
          >
            <h5>A.SVIP激活碼<span class="level_tips">(綁定推薦人帳號後將無法解鎖！)</span></h5>
            <form id="svip_rec" action="javascript:;" class="form-group">
              <input
                v-show="!authUser.SVIPActivated"
                v-model="inputSVIPCode"
                type="text"
                placeholder="請輸入SVIP激活碼"
                class="form-control"
                :disabled="authUser.memberLevel === 'SVIP'"
              >
              <button
                type="button"
                class="btn btn-block"
                :class="{
                  'btn-check': !authUser.SVIPActivated,
                  'btn-default': authUser.SVIPActivated}"
                :disabled="authUser.SVIPActivated || authUser.memberLevel === 'SVIP'"
                @click="activateProfileByType('svip')"
              >
                <i v-show="authUser.SVIPActivated" class="fa-solid fa-circle-check" />
                {{ !authUser.SVIPActivated ? '前往綁定' : '已綁定' }}
              </button>
            </form>
          </div>
          <div class="col-sm-6">
            <form>
              <h5>B.FB粉絲綁定<span class="level_tips">(按讚WO粉絲團)</span></h5>
              <!--未綁定呈現-->
              <NuxtLink target="_blank" :to="fbURL" @click="activateProfileByType('fb')">
                <button type="button" class="btn btn-block" :class="{'btn-check': !clickedFB, 'btn-default': clickedFB}" :disabled="clickedFB">
                  <i v-show="clickedFB" class="fa-solid fa-circle-check" />
                  {{ !clickedFB ? '前往綁定' : '已綁定' }}
                </button>
              </NuxtLink>
              <!--未綁定呈現 end-->
            </form>
            <form class="mt-10">
              <h5>C.Youtube頻道綁定<span class="level_tips">(訂閱WO頻道)</span></h5>
              <NuxtLink target="_blank" :to="youtubeURL" @click="activateProfileByType('yt')">
                <button type="button" class="btn btn-block" :class="{'btn-check': !clickedYT, 'btn-default': clickedYT}" :disabled="clickedYT">
                  <i v-show="clickedYT" class="fa-solid fa-circle-check" />
                  {{ !clickedYT ? '前往綁定' : '已綁定' }}
                </button>
              </NuxtLink>
            </form>
            <form class="mt-10">
              <h5>D.IG追蹤綁定<span class="level_tips">(訂閱WO IG)</span></h5>
              <NuxtLink target="_blank" :to="igURL" @click="activateProfileByType('ig')">
                <button type="button" class="btn btn-block" :class="{'btn-check': !clickedIG, 'btn-default': clickedIG}" :disabled="clickedIG">
                  <i v-show="clickedIG" class="fa-solid fa-circle-check" />
                  {{ !clickedIG ? '前往綁定' : '已綁定' }}
                </button>
              </NuxtLink>
            </form>
          </div>
        </div>
      </div>

      <div v-if="false" class="level_frame">
        <h3 class="level_tl">
          <span>目前級別：</span>VIP會員
          <a href="#" data-toggle="modal" data-target="#vipdesc"><i class="fa-solid fa-circle-question" /> <u>查看升等方式</u></a>
        </h3>
        <div class="row level_content">
          <h4>我要解鎖成為<span>SVIP</span>：<span class="level_tips">『A.綁定SVIP激活碼』或『B.按讚WO粉絲團+C.訂閱WO頻道』，即可成為SVIP!</span></h4>
          <div class="col-sm-6 border-right">
            <h5>D.SVIP激活碼<span class="level_tips">(綁定激活碼後將無法解鎖！)</span></h5>
            <form id="svip_rec" method="post" action="" class="form-group">
              <input type="text" value="" placeholder="請輸入SVIP激活碼" class="form-control"><!--綁定後加disabled, value="綁定的帳號"-->
              <!--未綁定呈現-->
              <button type="submit" class="go_svipcheck btn btn-check btn-block mt-10">
                前往綁定
              </button>
              <!--未綁定呈現 end-->
            </form>
          </div>
          <div class="col-sm-6">
            <form>
              <h5>B.FB粉絲綁定<span class="level_tips">(按讚WO粉絲團)</span></h5>
              <!--未綁定呈現-->
              <NuxtLink target="_blank" :to="fbURL" @click="activateProfileByType('fb')">
                <button type="button" class="btn btn-block" :class="{'btn-check': !clickedFB, 'btn-default': clickedFB}" :disabled="clickedFB">
                  <i v-show="clickedFB" class="fa-solid fa-circle-check" />
                  {{ !clickedFB ? '前往綁定' : '已綁定' }}
                </button>
              </NuxtLink>
              <!--未綁定呈現 end-->
            </form>
            <form>
              <h5>C.Youtube頻道綁定<span class="level_tips">(訂閱WO頻道)</span></h5>
              <!--綁定後呈現-->
              <NuxtLink target="_blank" :to="youtubeURL" @click="activateProfileByType('yt')">
                <button type="button" class="btn btn-block" :class="{'btn-check': !clickedYT, 'btn-default': clickedYT}" :disabled="clickedYT">
                  <i v-show="clickedYT" class="fa-solid fa-circle-check" />
                  {{ !clickedYT ? '前往綁定' : '已綁定' }}
                </button>
              </NuxtLink>
              <!--綁定後呈現 end-->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.form-control {
  color: #000;
  font-weight: 400;
  margin-bottom: 8px;
}
.svip-code {
  &.display-none {
    display: none;
  }
}
</style>
