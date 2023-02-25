<template>
  <!--video Modal -->
  <div
    id="videoModal"
    class="modal fade"
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
            <iframe id="video" class="embed-responsive-item" src="" allowscriptaccess="always" allow="autoplay" />
          </div>
        </div>
        <div class="modal-footer btn-close d_none">
          <!--這個五秒才會出現, btn-close控制js-->
          <button type="button" class="btn btn-default" data-dismiss="modal">
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
