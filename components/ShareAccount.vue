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
          <div class="text-center">
            <!-- 分享<br> -->
            <br>
            <a :href="`https://www.facebook.com/sharer/sharer.php?u=${shareURL}`" target="_blank">
              <i class="fa-brands fa-facebook" style="font-size: 28px;" />
            </a>
            <p class="share-text">
              您的親友從FB貼文內的路徑進入WO平台並加入會員時，系統將直接綁定推薦人關係。
            </p>
            <!-- <a href="https://www.instagram.com/p/Co1EeQHpvmD/?igshid=MDJmNzVkMjY=" target="_blank">
              <i class="fa-brands fa-instagram" style="font-size: 28px;" />
            </a>
            <a href="https://youtu.be/9RlTDp0BBUw" target="_blank">
              <i class="fa-brands fa-youtube" style="font-size: 28px;" />
            </a> -->
            <br>
            <a id="copy-btn" class="btn btn-main btn-check" :data-clipboard-text="shareURL" @click="copyUrl">複製分享網址</a>
            <p class="share-text">
              按上方複製鈕後，需在LINE或其他通訊軟體進行貼上，從該路徑進入WO平台並加入會員時，系統將直接綁定推薦人關係。
            </p>
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
.share-text {
  margin: 0 auto;
  width: 450px;
  max-width: 80vw;
  text-align: justify;
  margin-top: 12px;
  color: #6f5f48;
  font-weight: 500;
}
</style>
