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
    <transition name="fade">
      <VideoDialogue v-show="pageStatus.videoDialogToggle" />
    </transition>
    <transition name="fade">
      <ShareAccount v-show="pageStatus.shareAccountToggle" />
    </transition>
    <!-- Modal end -->
    <Footer />
  </div>
</template>
<style scoped lang="scss">
.layout--default {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
