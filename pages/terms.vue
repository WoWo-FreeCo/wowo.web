<script setup>
import { GET_WEB_PAGES } from '@/apis/requestURL';

const runtimeConfig = useRuntimeConfig();

onMounted(async() => {
  await nextTick();
  fetchData();
});

function fetchData() {
  fetchWebPage();
}

async function fetchWebPage() {
  try {
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_WEB_PAGES}/5`);
    const htmlContainer = document.querySelector('.html-container');
    htmlContainer.innerHTML = res;
  } catch (error) {
    //
  }
}
</script>
<template>
  <div>
    <!--此背景圖在後台可更換,替換style="background: url('背景圖路徑');" 若未上傳以目前圖片代替, 建議尺寸1900*280-->
    <section class="page-header">
      <div class="container">
        <h1>會員條款</h1>
        <ol class="breadcrumb">
          <li><a href="/">Home</a></li>
          <li class="active">
            會員條款
          </li>
        </ol>
      </div>
    </section>

    <section class="section full_height html-container-root">
      <div class="html-container" />
    </section>
  </div>
</template>
<style lang="scss" scoped>
.section {
  padding: 0 20px;
}
.page-header {
  background:url('@/assets/images/banner/1.jpg');
  background-size:cover;
}
</style>
