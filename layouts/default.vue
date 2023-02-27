<script setup>
const pageStatus = usePageStatusStore();
</script>

<template>
  <div class="layout--default">
    <Header />
    <slot />
    <!-- Modal -->
    <BellMessage v-if="pageStatus.bellMessageToggle" />
    <VideoDialogue v-if="pageStatus.videoDialogToggle" />
    <ShareAccount v-if="pageStatus.shareAccountToggle" />
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
