<script setup>
import { useMessage } from 'naive-ui';
import dayjs from 'dayjs';
import {
  GET_PROFILE,
  GET_USER_BONUS_RECORDS
} from '@/apis/requestURL';
import { BonusRecordActivity } from '@/constants/common';

const message = useMessage();
const router = useRouter();
const cartStore = useCartStore();
const authStore = useAuthStore();

const runtimeConfig = useRuntimeConfig();

const bonusRecords = ref([]);

watchEffect(() => {
  if (!authStore.status.loggedIn) {
    router.push({
      path: '/login',
      query: {
        redirect: '/bonus-record'
      }
    });
  }
  fetchData();
});

async function fetchData() {
  try {
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_USER_BONUS_RECORDS}`, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
    bonusRecords.value = res.data;
    console.log(res);
    // console.log('final ', dailyCheck.value);
  } catch (error) {
    console.log(error);
  }
  // updatePermission();
}

function updatePermission() {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    // const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_PROFILE}`, {
    //   method: 'GET',
    //   headers: { Authorization: 'Bearer ' + accessToken }
    // });
    authStore.loginSuccess(accessToken, refreshToken);
    // authStore.updateUser(res.data);
  } catch (error) {
    authStore.logout();
  }
}

function getFormattedData(date) {
  const _date = dayjs(date);
  return _date.format('YYYY/MM/DD A hh:mm');
}

// function getActivityDescription(event) {
//   switch (event) {
//   case BonusRecordActivity.Redeem:
//     return '使用紅利';
//   case BonusRecordActivity.Reward:
//     return '消費回饋';
//   case BonusRecordActivity.Upgrad:
//     return '會員升級';
//   case BonusRecordActivity.Register:
//     return '會員註冊';
//   default:
//     return '未定義';
//   }
// }
</script>

<template>
  <div class="full_height mt185ptb30 pt0">
    <UserProfile />

    <div class="row">
      <ProfileSidebar />
      <div class="col-sm-9 pl20pr30">
        <h3 class="level_tl border_bottom pb20">
          <span>目前可使用紅利：</span>{{ authStore.user?.rewardCredit }}點
          <span v-if="false">
            （<u>即將於 2023/1/1 到期的紅利：5點</u>)
            <!--紅利點數到期日為每年的7/1和1/1, 程式需判斷這兩個區間的到期點數-->
            <i class="fa-solid fa-circle-question" data-toggle="Tooltip" data-placement="right" title="即將到期紅利將在時限後過期，請在時限內使用完畢！" />
          </span>
        </h3>

        <table class="member_table">
          <thead>
            <tr>
              <th>
                異動日期
              </th>
              <th>
                異動說明
              </th>
              <th>
                點數
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in bonusRecords" :key="record?.id">
              <td data-th="異動日期">
                {{ getFormattedData(record?.createdAt) }}
              </td>
              <td data-th="異動說明">
                {{ record?.rules?.name || '紅利點數' }}
              </td>
              <td data-th="點數">
                {{ record?.points }}
              </td>
            </tr>
            <!-- <tr>
              <td data-th="異動日期">
                2022/06/06 17:31
              </td>
              <td data-th="異動說明">
                競拍出價：堅果禮盒
              </td>
              <td data-th="點數">
                +60 (效期：2022/09/30)
              </td>
            </tr> -->
          </tbody>
        </table>

        <div v-if="false" class="text-center">
          <!----------------!沒改!---------------->
          <ul class="pagination post-pagination">
            <li>
              <a href="#!">上一頁</a>
            </li>
            <li class="active">
              <a href="#!">1</a>
            </li>
            <li>
              <a href="#!">2</a>
            </li>
            <li>
              <a href="#!">3</a>
            </li>
            <li>
              <a href="#!">4</a>
            </li>
            <li>
              <a href="#!">5</a>
            </li>
            <li>
              <a href="#!">下一頁</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
