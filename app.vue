<script setup>
import { REFRESH_TOKEN } from '@/apis/requestURL';

const cartStore = useCartStore();
const authStore = useAuthStore();
const config = useRuntimeConfig();

onMounted(async() => {
  await nextTick();
  await fetchAuth();
  // fetchLocalCart();
});

async function fetchAuth() {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  if (!accessToken) {
    // console.log('尚未登入');
    return;
  }
  try {
    const res = await $fetch(`${config.public.apiBase}/${REFRESH_TOKEN}`, {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + refreshToken
      }
    });
    console.log('init refresh token: ');
    const _data = await res.data;
    authStore.loginSuccess(_data?.accessToken, _data?.refreshToken);
    console.debug('refresh token 成功登入');
  } catch (error) {
    console.log(error);
    console.log('refreshToken失敗 or 登入時間已逾期，請重新登入');
  }
}

function fetchLocalCart() {
  const merch = localStorage.getItem('cart-product');
  const favMerch = localStorage.getItem('cart-fav-product');
  if (merch) {
    const _merch = JSON.parse(merch);
    cartStore.updateMerch(_merch);
  }
  if (favMerch) {
    const _merch = JSON.parse(favMerch);
    cartStore.updateFavMerch(_merch);
  }
}
</script>

<template>
  <div id="app">
    <NuxtLayout>
      <n-message-provider>
        <n-dialog-provider>
          <NuxtPage />
        </n-dialog-provider>
      </n-message-provider>
    </NuxtLayout>
  </div>
</template>
<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
