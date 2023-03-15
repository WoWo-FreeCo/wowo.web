<script setup>
const authStore = useAuthStore();
const pageStauts = usePageStatusStore();
const authUser = computed(() => authStore?.user);
const router = useRouter();

onMounted(() => {
  // console.log(authStore.user);
});

function shareAccount() {
  pageStauts.toggleShareAccount(true);
}
function scrollToBottom() {
  router.push({ path: '/profile' });
  setTimeout(() => {
    document.querySelector('#member_vip_root').scrollIntoView();
  }, 100);
}

</script>
<template>
  <div class="user_profile">
    <!----------------!!!!!!!!!!!!此整區塊有做修改!!!!!!!!!!!!---------------->
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-3 col-sm-3 col-xs-4 col-xxs-5 relative p-5">
          <!-- <form>
            <div
              class="slim preview img-wrapper"
              data-label="請上傳個人頭像"
              data-ratio="1:1"
              :style="{
                backgroundImage: `url('${authStore?.user?.avatar?.url}')`
              }"
            >
              <input type="file" name="slim[]">
            </div>
          </form> -->
          <img class="slim preview img-wrapper" src="@/assets/images/default-avatar.png" alt="">
        </div>
        <div class="col-lg-10 col-md-9 col-sm-9 col-xs-8 col-xxs-7 p-5">
          <ul class="user-profile-list">
            <li>
              <h3>{{ authStore?.user?.nickname }}</h3>
              <span class="badge_member badge_svip">{{ authStore?.user?.memberLevel === 'NORMAL' ? '普通會員' : authStore?.user?.memberLevel }}</span>
              <!--會員等級icon, vip及普通會員分別為 <span class="badge_member badge_vip">VIP</span>, <span class="badge_member badge_normal">普通會員</span>-->
            </li>
            <li>
              <span>我的帳號：{{ authStore?.user?.email }}</span>
            </li>
            <li>
              <span>我的推薦代碼：{{ authStore?.user?.recommendCode }}</span>
            </li>
            <li style="font-size: 12px; color: red">
              <span>（此碼是成為VIP的必要條件，他人輸入您的『推薦代碼』後，其消費金額5%將成為您的紅利點數；
                <br>官方也將會配合特殊活動調整%上限）</span>
            </li>
            <li>
              <span>紅利點數：{{ authStore?.user?.rewardCredit }}</span>
              <i class="fas fa-parking" />
            </li>
          </ul>
        </div>
      </div>
      <ul class="member_btnli">
        <li>
          <NuxtLink to="/bonus-point" class="btn btn-check">
            <i class="fa-regular fa-calendar-check" />我要簽到
          </NuxtLink>
        </li>

        <li v-if="authUser.memberLevel !== 'SVIP'">
          <!-- <a href="myprofile.html#member_vip" class="btn btn-check"><i class="fa-regular fa-circle-up" />我要升等</a>低於SVIP才顯示此按鈕 -->
          <div class="btn btn-check" @click="scrollToBottom">
            <i class="fa-regular fa-circle-up" />我要升等
          </div>
          <!-- <a href="#" data-toggle="modal" data-target="#vipdesc" class="lvdesc_a">等級說明</a> -->
        </li>
        <li @click="shareAccount()">
          <a
            href="#"
            data-toggle="modal"
            data-target="#shareaccount"
            class="btn btn-check"
          ><i
            class="fa-solid fa-share-nodes"
          />分享我的推薦代碼</a>
        </li>
      </ul>
    </div>
  </div>
</template>
