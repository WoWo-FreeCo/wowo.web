<script setup lang="ts">
enum Tab {
  News = 0,
  Following,
  BonusNews
}

const currentTab = ref(Tab.News);

const pageStatus = usePageStatusStore();

onMounted(() => {
  //
});

function closeBellMessage() {
  pageStatus.toggleBellMessage(false);
}
</script>

<template>
  <div
    id="bell-message-container"
    class="bell-message-container"
    tabindex="-1"
    role="dialog"
    aria-labelledby="bellCenterTitle"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body m-0 p-0">
          <ul class="nav nav-tabs message_tab">
            <li :class="{active: currentTab === Tab.News}" @click="currentTab = Tab.News">
              <a href="javascript:;">
                WO快訊
                <span class="badge2">2</span>
              </a>
            </li>
            <li :class="{active: currentTab === Tab.Following}" @click="currentTab = Tab.Following">
              <a href="javascript:;">
                我的追蹤
                <span class="badge2">2</span>
              </a>
            </li>
            <li :class="{active: currentTab === Tab.BonusNews}" @click="currentTab = Tab.BonusNews">
              <a href="javascript:;">
                紅利快訊
                <span class="badge2">1</span>
              </a>
            </li>
          </ul>

          <div class="tab-content message_content">
            <div v-show="currentTab === Tab.News" id="bell_1" class="tab-panel">
              <ul>
                <li>
                  新增一則<a href="" target="new">「團購名稱」</a>，快來追蹤吧！
                </li>
                <li>
                  恭喜您得標<a href="" target="new">「競拍名稱」</a>，請在期限內確認您的寄送資訊，逾期將視為棄領！<a href="/b_checkout" target="new"><u>點此確認</u></a>
                </li>
              </ul>
            </div>
            <div v-show="currentTab === Tab.Following" id="bell_2" class="tab-panel">
              <ul>
                <li>
                  <a href="" target="new">「團購名稱」</a>進度已達90%！
                </li>
                <li>
                  <a href="" target="new">「競拍名稱」</a>有新的出價，前往察看！
                </li>
              </ul>
            </div>
            <div v-show="currentTab===Tab.BonusNews" id="bell_3" class="tab-panel">
              <ul>
                <li>
                  2022/09/09，簽到滿30天，額外贈送10點紅利。
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-check2" data-dismiss="modal" @click="closeBellMessage">
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bell-message-container {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.45);
  position: absolute;
  z-index: 1036;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  transition: opacity 0.15s linear;
}
.message_tab {
  @media screen and (max-width: 576px){
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > li {
      flex-basis: 50%;
      a {
        font-size: 12px;
        justify-content: center;
        display: flex;
        > span {
          display: flex;
          align-items: center;
          height: 20px;
        }
      }
    }
  }
}
</style>
