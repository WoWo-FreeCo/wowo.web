<script setup>
import { useMessage } from 'naive-ui';
import {
  GET_PROFILE,
  GET_DAILY_SEQUENCE,
  GET_USER_DAILY_SEQUENCE,
  POST_USER_DAILY_CHECK
} from '@/apis/requestURL';

const message = useMessage();
const router = useRouter();
const authStore = useAuthStore();
const pageStatus = usePageStatusStore();

const runtimeConfig = useRuntimeConfig();
const dailyCheck = ref([]);

const acceptedCount = computed(() => {
  return dailyCheck.value.reduce((total, cur) => total + (cur?.accepted ? 1 : 0), 0);
});

const nextDayIndex = computed(() => acceptedCount.value);

const dayText = (day) => {
  if (day?.accepted) {
    if (day?.isMission) return '任務已解鎖';
    else return '已簽到';
  } else if (day?.isMission) return '任務解鎖';
  else return '簽到';
};

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
  try {
    const dailyAll = await $fetch(`${runtimeConfig.public.apiBase}/${GET_DAILY_SEQUENCE}`);
    const dailySelf = await $fetch(`${runtimeConfig.public.apiBase}/${GET_USER_DAILY_SEQUENCE}`, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
    const _result = dailyAll.data.map((_day) => {
      const _matchDay = dailySelf.data.find(e => e.index === _day.index);
      return {
        ..._day,
        accepted: !!_matchDay
      };
    });
    dailyCheck.value = _result;
    // console.log('final ', dailyCheck.value);
  } catch (error) {
    console.log(error);
  }
  updatePermission();
}

async function updatePermission() {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_PROFILE}`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + accessToken }
    });
    authStore.loginSuccess(accessToken, refreshToken);
    authStore.updateUser(res.data);
  } catch (error) {
    authStore.logout();
  }
}

async function dailyClickHandler(item) {
  if (item.accepted) return;
  if (item.isMission) {
    console.debug(item.video);
    pageStatus.setDailyVideoURL(item.video);
    pageStatus.toggleVideoDialog(true);
    return;
    // await new Promise((resolve) => {
    //   setTimeout(() => resolve(), 5000);
    // });
  }
  acceptDailyCheck(item);
}
async function acceptDailyCheck(item) {
  try {
    await $fetch(`${runtimeConfig.public.apiBase}/${POST_USER_DAILY_CHECK(item.index)}`, {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
    message.success(`簽到成功 紅利 +${item.credit}`, {
      duration: 2000
    });
  } catch (error) {
    message.error(error?.data?.data?.message === 'User already checked in today.' ? '今日已簽到' : '簽到失敗' || '簽到失敗');
  }
  fetchDailySequence();
}
</script>

<template>
  <!--此頁要讓客戶可在"頁頭頁尾"可增加廣告參數-->
  <section class="full_height mt185ptb30 bg_left2">
    <!----------------!!!!!!!!!!!!!! class加 bg_left2 !!!!!!!!!!!!!!---------------->

    <div class="container signpoint_content">
      <h4 class="text-center mypoint">
        <NuxtLink to="/bonus-point">
          我的紅利
          <i class="fas fa-parking" />
          {{ authStore.user?.rewardCredit }}
        </NuxtLink><!--顯示目前此會員剩餘紅利-->
      </h4>
      <div class="text-center">
        已累計簽到：{{ acceptedCount }}次

        <div id="signpoint">
          <div class="mb-20">
          <!-- editor -->
          <!--編輯器-->
          </div>

          <ul class="signpoint_li">
            <li
              v-for="day in dailyCheck"
              :key="day.index"
              class="day-slot"
              :class="{
                sign: day.accepted,
                'no-cursor': day.accepted || day.index !== nextDayIndex,
                'inactive': day.index > nextDayIndex,
                'mission': day.isMission,
                'mission-accepted': day.accepted && day.isMission
              }"
              @click="dailyClickHandler(day)"
            >
              <span class="t1">+{{ day.credit }}</span>
              <a href="javascript:;">
                <i
                  class="fa-solid"
                  :class="{
                    'fa-p': !day.isMission,
                    'fa-lock': day.isMission,
                    'fa-unlock': day.accepted && day.isMission
                  }"
                />
              </a>
              <span class="t2 sign_day">{{ dayText(day) }}</span>
            </li>
            <!-- <li class="mission_lock sign">
              <span>+1</span>
              <i class="fa-solid fa-unlock" />
              <span class="sign_day">任務已解鎖</span>
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
  margin: 0 auto 32px auto;
}
.signpoint_li {
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  @media screen and (max-width: 1260px) {
    width: 920px;
    margin: 0 auto;
  }
  @media screen and (max-width: 1060px) {
    width: 576px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
}
.day-slot {
  width: 108px;
  margin: 4px 4px;
  cursor: pointer;
  @media screen and (max-width: 1260px) {
    width: 84px;
    height: 84px;
    > .t1 {
      font-size: 12px;
    }
    > a {
      display: block;
      height: 32px;
      li {
        height: 20px;
      }
    }
    > .t2 {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 1060px) {
    width: 104px;;
    height: 104px;
  }
  @media screen and (max-width: 576px) {
    width: 132px;;
    height: 132px;
    > .t1 {
      font-size: 20px;
    }
    > .t2 {
      font-size: 18px;
    }
  }
  > span {
    font-weight: 500 !important;
  }
  &.mission {
    background-color: #c28000;
    i {
      color: #fff;
      background-color: transparent !important;
      font-size: 30px;
    }
  }
  &.mission-accepted {
    background-color: #bbb;
  }
  &.no-cursor {
    pointer-events: none;
  }
  &.inactive {
    opacity: 0.35;
  }
}
</style>
