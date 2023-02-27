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
    console.log(dailyCheck.value);
  } catch (error) {
    console.log(error);
  }
  updatePermission();
}

async function updatePermission() {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_PROFILE}`, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + accessToken }
    });
    authStore.loginSuccess(accessToken);
    authStore.updateUser(res.data);
  } catch (error) {
    authStore.logout();
  }
}

async function dailyClickHandler(item) {
  if (item.accepted) return;
  if (item.isMission) {
    pageStatus.toggleVideoDialog(true);
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 5000);
    });
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
    message.error(error?.data?.data?.message || '簽到失敗');
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
        <a href="mypoint.html" target="new">
          我的紅利
          <i class="fas fa-parking" />
          {{ authStore.user?.rewardCredit }}
        </a><!--顯示目前此會員剩餘紅利-->
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
                'inactive': day.index > nextDayIndex
              }"
              @click="dailyClickHandler(day)"
            >
              <span>+{{ day.credit }}</span>
              <a href="javascript:;">
                <i
                  class="fa-solid"
                  :class="{
                    'fa-p': !day.isMission,
                    'fa-lock': day.isMission
                  }"
                />
              </a>
              <span class="sign_day">{{ dayText(day) }}</span>
            </li>
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
  margin: 0 auto 32px auto;
}
.signpoint_li {
  display: flex;
  flex-wrap: wrap;
  width: 1200px;

}
.day-slot {
  width: 108px;
  margin: 4px 4px;
  cursor: pointer;
  &.no-cursor {
    pointer-events: none;
  }
  &.inactive {
    opacity: 0.4;
  }
}
</style>
