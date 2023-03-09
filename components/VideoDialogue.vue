<script setup>
const countdown = ref(5);

const pageStatus = usePageStatusStore();

let timer = null;

const videoURL = computed(() => {
  return pageStatus.dailyVideoURL;
});

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
function getYoutubeEmbedURL(_url) {
  const regex =
  /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const isValidUrl = regex.test(_url);
  if (!isValidUrl) return '';
  const match = _url.match(regex);
  let embedId = match && match[2].length === 11 ? match[2] : null;
  if (!embedId && _url.includes('shorts')) {
    const regex =
    /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
    // @ts-ignore
    embedId = regex.exec(_url)[3];
  }
  return `https://www.youtube.com/embed/${embedId}`;
}
</script>
<template>
  <!--video Modal -->
  <div
    id="videoModal"
    class="video-dialog-container animate__fadeIn animate__animated animation-duration-1"
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
              id="yt-iframe"
              width="560"
              height="315"
              :src="getYoutubeEmbedURL(videoURL)"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
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
