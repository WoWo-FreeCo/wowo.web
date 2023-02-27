<script setup>
// TODO: 目前為假資料，需串接登入後的會員資料
// const bonusPoint = ref(0);
// const loggedInTimes = ref(0);
import { GET_DAILY_SEQUENCE } from '@/apis/requestURL';

const router = useRouter();
const authStore = useAuthStore();
const pageStatus = usePageStatusStore();

const runtimeConfig = useRuntimeConfig();
const dailyCheck = ref([]);

onMounted(() => {
  if (!authStore.status.loggedIn) {
    router.push({
      path: '/login',
      query: {
        redirect: '/bonus-point'
      }
    });
  }
  fetchDailySequence();
});

async function fetchDailySequence() {
  const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_DAILY_SEQUENCE}`);
  dailyCheck.value = res.data;
  console.log(res);
}

function dailyClickHandler(item) {
  console.log(item);
  // pageStatus.toggleVideoDialog(true);
}
</script>

<template>
  <!--此頁要讓客戶可在"頁頭頁尾"可增加廣告參數-->
  <section class="full_height mt185ptb30 bg_left2">
    <!----------------!!!!!!!!!!!!!! class加 bg_left2 !!!!!!!!!!!!!!---------------->

    <div class="container signpoint_content">
      <h4 class="text-center mypoint">
        <a href="mypoint.html" target="new">
          我的紅利
          <i class="fas fa-parking" />
          {{ authStore.user?.rewardCredit }}
        </a><!--顯示目前此會員剩餘紅利-->
      </h4>
      <div class="text-center">
        已累計簽到：{{ 0 }}次

        <div id="signpoint">
          <div class="mb-20">
          <!-- editor -->
          <!--編輯器-->
          </div>

          <ul class="signpoint_li">
            <div>
              <li v-for="day in dailyCheck" :key="day.index" @click="dailyClickHandler(day)">
                <span>+1</span>
                <a href="javascript:;">
                  <i class="fa-solid fa-p" />
                </a>
                <span class="sign_day">簽到</span>
              </li>
            </div>
            <!-- <li class="sign">
              <span>+1</span>
              <i class="fa-solid fa-p" />
              <span class="sign_day">已簽到</span>
            </li> -->
            <!-- <li class="mission_lock sign">
              <span>+1</span>
              <i class="fa-solid fa-unlock" />
              <span class="sign_day">任務已解鎖</span>
            </li> -->
            <!-- <li>
              <span>+1</span>
              <a href="javascript:;">
                <i class="fa-solid fa-p" />
              </a>
              <span class="sign_day">簽到</span>
            </li> -->
            <!-- <li class="mission_lock">
              <span>+1</span>
              <a href="#" class="video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/JJUo8Fe3_JY" data-target="#videoModal">
                <i class="fa-solid fa-lock" />
              </a>
              <span class="sign_day">任務解鎖</span>
            </li> -->
          </ul>

          <div class="mt-20" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.signpoint_content {
  padding: 32px 12px;
}
.signpoint_li {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
li {
  margin: 4px 4px;
}
</style>
