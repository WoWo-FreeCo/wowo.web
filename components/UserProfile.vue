<script setup>
const authStore = useAuthStore();

onMounted(() => {
  console.log(authStore.user);
});
</script>
<template>
  <div class="user_profile">
    <!----------------!!!!!!!!!!!!此整區塊有做修改!!!!!!!!!!!!---------------->
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-3 col-sm-3 col-xs-4 col-xxs-5 relative p-5">
          <form>
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
          </form>
        </div>
        <div class="col-lg-10 col-md-9 col-sm-9 col-xs-8 col-xxs-7 p-5">
          <ul class="user-profile-list">
            <li>
              <h3>{{ authStore?.user?.nickname }}</h3>
              <span class="badge_member badge_svip">{{ authStore?.user?.level }}</span>
              <!--會員等級icon, vip及普通會員分別為 <span class="badge_member badge_vip">VIP</span>, <span class="badge_member badge_normal">普通會員</span>-->
            </li>
            <li>
              <span>我的帳號：{{ authStore?.user?.username }}</span>
            </li>
            <li>
              <span>我的推薦者：{{ authStore?.user?.recommendCode }}</span>
              <!--輸入綁定VIP推薦人之後, 輸入的那個帳號會顯示在此-->
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
        <li>
          <!-- <a href="myprofile.html#member_vip" class="btn btn-check"><i class="fa-regular fa-circle-up" />我要升等</a>低於SVIP才顯示此按鈕 -->
          <NuxtLink to="/profile#member_vip" class="btn btn-check">
            <i class="fa-regular fa-circle-up" />我要升等
          </NuxtLink>
          <a href="#" data-toggle="modal" data-target="#vipdesc" class="lvdesc_a">等級說明</a>
        </li>
        <li>
          <a href="#" data-toggle="modal" data-target="#shareaccount" class="btn btn-check"><i class="fa-solid fa-share-nodes" />分享帳號</a>
        </li>
      </ul>
    </div>
  </div>
</template>
