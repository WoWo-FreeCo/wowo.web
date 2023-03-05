<script setup>
import { GET_REFRESH_TOKEN } from '@/apis/requestURL';

const cartStore = useCartStore();
const config = useRuntimeConfig();

onMounted(async() => {
  await fetchAuth();
  fetchLocalCart();
});

async function fetchAuth() {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    // console.log('尚未登入');
    return;
  }
  try {
    const res = await $fetch(`${config.public.apiBase}/${GET_REFRESH_TOKEN}`);
    authStore.loginSuccess(accessToken);
    authStore.updateUser(res.data);
    // console.log('成功登入');
  } catch (error) {
    console.log(error);
    // console.log('登入時間已逾期，請重新登入');
  }
}

function fetchLocalCart() {
  const cart = localStorage.getItem('cart-product');
  if (!cart) return;
  const _merch = JSON.parse(cart);
  cartStore.updateMerch(_merch);
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
