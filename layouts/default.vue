<script setup>
const pageStatus = usePageStatusStore();
</script>

<template>
  <div class="layout--default">
    <Header />
    <slot />
    <!-- Modal -->
    <transition name="fade">
      <BellMessage v-show="pageStatus.bellMessageToggle" />
    </transition>
    <VideoDialogue />
    <!-- Modal end -->
    <Footer />
  </div>
</template>
<style scoped lang="scss">
.layout--default {
  width: 100%;
  height: 100%;
}
</style>
