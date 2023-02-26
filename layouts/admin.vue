<script setup>
const pageStatus = usePageStatusStore();
</script>
<template>
  <div class="layout--admin">
    <AdminOverlay v-show="pageStatus.adminOverlayToggle" />
    <slot />
  </div>
</template>
<style scoped lang="scss">
.layout--admin {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 20, 40);
}
</style>
