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
