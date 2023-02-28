<script setup>
import Clipboard from 'clipboard';

const authStore = useAuthStore();
const pageStatus = usePageStatusStore();
const shareURL =
  computed(() => `
  ${location.host}/register?recommend=${authStore.user?.recommendCode}
`);

onMounted(() => {
  // eslint-disable-next-line no-new
  new Clipboard('#copy-btn');
});

function close() {
  pageStatus.toggleShareAccount(false);
}
function copyUrl() {
  alert('已複製分享網址!');
}
</script>
<template>
  <div
    id="shareaccount"
    class="modal share-account-container"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-title">
          <h4>我的好友,送你一則好康</h4>
        </div>
        <div class="modal-body">
          <img class="main-img" src="@/assets/images/share_ad.jpg" alt="">
          好東西,當然要再分享給口袋名單!<br>
          分享這則優惠給好友,也讓好友一起拿到超低優惠價<br><br>

          方式：點選下方按鈕免費加入會員, 完成流程後, 就能享受VIP 和SVIP的超低特惠價
          <div class="text-center">
            分享<br>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FLOVIN2022" target="_blank">
              <i class="fa-brands fa-facebook" style="font-size: 28px;" />
            </a>
            <a href="https://www.instagram.com/p/Co1EeQHpvmD/?igshid=MDJmNzVkMjY=" target="_blank">
              <i class="fa-brands fa-instagram" style="font-size: 28px;" />
            </a>
            <a href="https://youtu.be/9RlTDp0BBUw" target="_blank">
              <i class="fa-brands fa-youtube" style="font-size: 28px;" />
            </a>
            <br>

            <a id="copy-btn" class="btn btn-main btn-check" :data-clipboard-text="shareURL" @click="copyUrl">複製分享網址</a>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-check2" @click="close">
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.share-account-container{
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.45);
  position: absolute;
  z-index: 1036;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  transition: opacity 0.15s linear;
  display: flex;
  align-items: center;
  .modal-dialog {
    max-height: 100vh;
    overflow-y: auto;
  }
}
.btn-main {
  margin: 4px 0;
  font-weight: 400;
}
</style>
