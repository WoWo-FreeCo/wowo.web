<script setup>
const countdown = ref(5);

const pageStatus = usePageStatusStore();

let timer = null;

onMounted(() => {
  timer = setInterval(() => {
    if (countdown.value <= 0) {
      clearInterval(timer);
      timer = null;
    }
    countdown.value -= 1;
  }, 1000);
});
function close() {
  pageStatus.toggleVideoDialog(false);
}
</script>
<template>
  <!--video Modal -->
  <div
    id="videoModal"
    class="video-dialog-container"
    tabindex="-1"
    role="dialog"
    aria-labelledby="videoModalLabel"
    aria-hidden="true"
    data-backdrop="static"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <!-- 16:9 aspect ratio -->
          <div class="embed-responsive embed-responsive-16by9">
            <!-- <iframe id="video" class="embed-responsive-item" src="" allowscriptaccess="always" allow="autoplay" /> -->
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/oy8m9i9Mtx4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
        </div>
        <div v-if="countdown <= 0" class="modal-footer btn-close">
          <!--這個五秒才會出現, btn-close控制js-->
          <button type="button" class="btn btn-default" @click="close">
            關閉
          </button>
        </div>
        <div v-else class="hint">
          請等待 {{ countdown }} 秒...
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hint {
  padding: 15px;
  text-align: right;
}
.video-dialog-container {
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
}
</style>
