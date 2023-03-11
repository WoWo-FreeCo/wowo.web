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
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_WEB_PAGES}/1`);
    const htmlContainer = document.querySelector('.html-container');
    htmlContainer.innerHTML = res;
  } catch (error) {
    //
  }
}
</script>
<template>
  <div>
    <section class="page-header">
      <div class="container">
        <h1>關於我們</h1>
        <ol class="breadcrumb">
          <li><a href="/">Home</a></li>
          <li class="active">
            關於我們
          </li>
        </ol>
      </div>
    </section>

    <!-- <section class="section full_height html-container-root">
      <div class="html-container" />
    </section> -->
    <div>
      <iframe src="https://lovin.tw/wo-aboutlovin/" frameborder="0" />
    </div>
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
