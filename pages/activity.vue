<script setup>
const activity = ref({
  ongoing: {
    isEnabled: true
  },
  upcoming: {
    isEnabled: false
  },
  ended: {
    isEnabled: false
  }
});

onMounted(() => {
  // $('.product_slide').slick({
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: true,
  //   prevArrow: '<button type=\'button\' class=\'productSliderArrow prevArrow fa-solid fa-chevron-left\'></button>',
  //   nextArrow: '<button type=\'button\' class=\'productSliderArrow nextArrow fa-solid fa-chevron-right\'></button>',
  //   dots: true,
  //   rows: 1,
  //   slidesPerRow: 3,
  //   responsive: [
  //     {
  //       breakpoint: 1057,
  //       settings: {
  //         rows: 1,
  //         slidesPerRow: 2
  //       }
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         rows: 1,
  //         slidesPerRow: 1
  //       }
  //     }
  //   ]
  // });
});
</script>

<template>
  <div class="full_height mt185ptb30">
    <div class="container tabCommon">
      <!-- ! 正在進行的活動 -->
      <div v-if="activity.ongoing.isEnabled">
        <h2 class="text-center">
          目前站內沒有任何進行中活動！
        </h2>
        <ul v-if="false" class="nav nav-tabs bbottom_none">
          <li class="active">
            <a href="#coming_bid" data-toggle="tab" aria-expanded="true">WO競拍</a>
          </li>
          <li><a href="#coming_group_buying" data-toggle="tab" aria-expanded="false">WO團購</a></li>
        </ul>
        <div v-if="false" class="tab-content">
          <div id="coming_bid" class="tab-pane fade active in">
            <div class="product_slide">
              <div class="product_frame bid_info">
                <div class="product_img">
                  <button class="add_bell">
                    <i class="fa-regular fa-bell" />
                  </button>
                  <a href="bid.html#bid_content">
                    <img src="@/assets/images/product/2009.jpg" alt="">
                  </a>
                </div>
                <div class="row">
                  <h3>
                    <a href="bid.html#bid_content">
                      鳳梨酥10個裝 - 中秋限定包裝
                    </a>
                  </h3>
                  <div class="font14">
                    競拍日期：2022/08/01~2022/09/01
                  </div>
                  <div class="col-xs-6 text-left">
                    <span class="bid_pricetxt">起標價</span>
                    <span class="bid_price">
                      <i class="fas fa-parking" />1
                    </span>
                  </div>
                  <div class="col-xs-6 text-right">
                    已出價<span class="process_txt">0</span>次
                    <a href="bid.html#bid_content" class="btn btn-main btn-check">敬請期待</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="coming_group_buying" class="tab-pane fade">
            <div class="product_slide">
              <!---1---><!----------------!!!!!!!!!!!!此整區塊有做修改!!!!!!!!!!!!---------------->
              <div class="product_frame bid_info">
                <div class="product_img">
                  <button class="add_bell">
                    <i class="fa-regular fa-bell" />
                  </button><!--點擊之後, 加入活動提醒(規格的小鈴鐺), class改 class="fa-solid fa-bell"-->
                  <a href="group_buying.html#group_content"><!--連結跳到當個活動的內容顯示區塊 #group_content-->
                    <img src="@/assets/images/product/2009.jpg" alt=""><!--圖片建議600*400, 全部商品都只會有一張照片, alt帶入活動名稱-->
                  </a>
                </div>
                <div class="row">
                  <h3>
                    <a href="group_buying.html#group_content"><!--連結跳到當個活動的內容顯示區塊 #group_content-->
                      鳳梨酥10個裝 - 中秋限定包裝
                    </a>
                  </h3>
                  <div class="font14">
                    活動即將開始，敬請期待。
                  </div><!--還沒開始固定就好-->
                  <div class="col-xs-6 text-left">
                    <span class="bid_pricetxt">團購價格</span>
                    <span class="bid_price">
                      <i class="fas fa-dollar" />***<!--還沒開始固定就好-->
                    </span>
                  </div>
                  <div class="col-xs-6 text-right">
                    團購進度<span class="process_txt">0</span>%<!--還沒開始固定就好-->
                    <div class="process_bar">
                      <div class="process_bar_bg" style="width:0%" /><!--還沒開始固定就好-->
                    </div>
                    <a href="group_buying.html#group_content" class="btn btn-main btn-check">敬請期待</a>
                  </div>
                </div>
              </div><!---1 end--->
            </div>
          </div><!--團購 end-->
        </div>
      </div>
      <!-- ! 即將開始進行的活動 -->
      <div v-if="activity.upcoming.isEnabled">
        <h2 class="bid_tl border_top">
          即將開始的活動
        </h2><!----------------!!!!!!!!!!!!class加border_top, 拿掉 <img src="images/hot_icon.png" alt="">!!!!!!!!!!!!---------------->
        <ul class="nav nav-tabs bbottom_none">
          <!----------------!!!!!!!!!!!!class加bbottom_none!!!!!!!!!!!!---------------->
          <li class="active">
            <a href="#coming_bid" data-toggle="tab" aria-expanded="true">WO競拍</a>
          </li>
          <li><a href="#coming_group_buying" data-toggle="tab" aria-expanded="false">WO團購</a></li>
        </ul>
        <div class="tab-content">
          <!--競拍--><!--全部即將開始都放進來-->
          <div id="coming_bid" class="tab-pane fade active in">
            <div class="product_slide">
              <!---1---><!----------------!!!!!!!!!!!!此整區塊有做修改!!!!!!!!!!!!---------------->
              <div class="product_frame bid_info">
                <div class="product_img">
                  <button class="add_bell">
                    <i class="fa-regular fa-bell" />
                  </button><!--點擊之後, 加入活動提醒(規格的小鈴鐺), class改 class="fa-solid fa-bell"-->
                  <a href="bid.html#bid_content"><!--連結跳到當個活動的內容顯示區塊 #bid_content-->
                    <img src="@/assets/images/product/2009.jpg" alt=""><!--圖片建議600*400, 全部商品都只會有一張照片, alt帶入活動名稱-->
                  </a>
                </div>
                <div class="row">
                  <h3>
                    <a href="bid.html#bid_content"><!--連結跳到當個活動的內容顯示區塊 #bid_content-->
                      鳳梨酥10個裝 - 中秋限定包裝
                    </a>
                  </h3>
                  <div class="font14">
                    競拍日期：2022/08/01~2022/09/01
                  </div>
                  <div class="col-xs-6 text-left">
                    <span class="bid_pricetxt">起標價</span>
                    <span class="bid_price">
                      <i class="fas fa-parking" />1
                    </span>
                  </div>
                  <div class="col-xs-6 text-right">
                    已出價<span class="process_txt">0</span>次
                    <a href="bid.html#bid_content" class="btn btn-main btn-check">敬請期待</a>
                  </div>
                </div>
              </div><!---1 end--->
            </div>
          </div><!--競拍 end-->

          <!--團購--><!--全部即將開始都放進來-->
          <div id="coming_group_buying" class="tab-pane fade">
            <div class="product_slide">
              <!---1---><!----------------!!!!!!!!!!!!此整區塊有做修改!!!!!!!!!!!!---------------->
              <div class="product_frame bid_info">
                <div class="product_img">
                  <button class="add_bell">
                    <i class="fa-regular fa-bell" />
                  </button><!--點擊之後, 加入活動提醒(規格的小鈴鐺), class改 class="fa-solid fa-bell"-->
                  <a href="group_buying.html#group_content"><!--連結跳到當個活動的內容顯示區塊 #group_content-->
                    <img src="@/assets/images/product/2009.jpg" alt=""><!--圖片建議600*400, 全部商品都只會有一張照片, alt帶入活動名稱-->
                  </a>
                </div>
                <div class="row">
                  <h3>
                    <a href="group_buying.html#group_content"><!--連結跳到當個活動的內容顯示區塊 #group_content-->
                      鳳梨酥10個裝 - 中秋限定包裝
                    </a>
                  </h3>
                  <div class="font14">
                    活動即將開始，敬請期待。
                  </div><!--還沒開始固定就好-->
                  <div class="col-xs-6 text-left">
                    <span class="bid_pricetxt">團購價格</span>
                    <span class="bid_price">
                      <i class="fas fa-dollar" />***<!--還沒開始固定就好-->
                    </span>
                  </div>
                  <div class="col-xs-6 text-right">
                    團購進度<span class="process_txt">0</span>%<!--還沒開始固定就好-->
                    <div class="process_bar">
                      <div class="process_bar_bg" style="width:0%" /><!--還沒開始固定就好-->
                    </div>
                    <a href="group_buying.html#group_content" class="btn btn-main btn-check">敬請期待</a>
                  </div>
                </div>
              </div><!---1 end--->
            </div>
          </div><!--團購 end-->
        </div>
      </div>
      <!-- ! 已結束的活動 -->
      <div v-if="activity.ended.isEnabled">
        <!--已結束活動, 此頁沒已結束的活動時, 則整個區塊不顯示, 包含標題跟內容-->
        <h2 class="bid_tl border_top">
          已結束的活動
        </h2><!----------------!!!!!!!!!!!!class加border_top, 拿掉 <img src="images/hot_icon.png" alt="">!!!!!!!!!!!!---------------->
        <ul class="nav nav-tabs bbottom_none">
          <!----------------!!!!!!!!!!!!class加bbottom_none!!!!!!!!!!!!---------------->
          <li class="active">
            <a href="#finished_bid" data-toggle="tab" aria-expanded="true">WO競拍</a>
          </li>
          <li><a href="#finished_group_buying" data-toggle="tab" aria-expanded="false">WO團購</a></li>
        </ul>

        <div class="tab-content">
          <!--競拍--><!--全部已結束都放進來-->
          <div id="finished_bid" class="tab-pane fade active in">
            <div class="product_slide">
              <!---1---><!----------------!!!!!!!!!!!!此整區塊有做修改!!!!!!!!!!!!---------------->
              <div class="product_frame bid_info">
                <div class="product_img">
                  <button class="add_bell">
                    <i class="fa-regular fa-bell" />
                  </button><!--點擊之後, 加入活動提醒(規格的小鈴鐺), class改 class="fa-solid fa-bell"-->
                  <a href="bid.html#bid_content"><!--連結跳到當個活動的內容顯示區塊 #bid_content-->
                    <img src="@/assets/images/product/2009.jpg" alt=""><!--圖片建議600*400, 全部商品都只會有一張照片, alt帶入活動名稱-->
                  </a>
                </div>
                <div class="row">
                  <h3>
                    <a href="bid.html#bid_content"><!--連結跳到當個活動的內容顯示區塊 #bid_content-->
                      鳳梨酥10個裝 - 中秋限定包裝
                    </a>
                  </h3>
                  <div class="font14">
                    競拍日期：2022/08/01~2022/09/01
                  </div>
                  <div class="col-xs-6 text-left">
                    <span class="bid_pricetxt">得標價</span>
                    <span class="bid_price">
                      <i class="fas fa-parking" />990
                    </span>
                  </div>
                  <div class="col-xs-6 text-right">
                    已出價<span class="process_txt">10</span>次
                    <a href="bid.html#bid_content" class="btn btn-main btn-check">已結束</a>
                  </div>
                </div>
              </div><!---1 end--->
            </div>
          </div><!--競拍 end-->

          <!--團購--><!--全部已結束都放進來-->
          <div id="finished_group_buying" class="tab-pane fade">
            <div class="product_slide">
              <!---1---><!----------------!!!!!!!!!!!!此整區塊有做修改!!!!!!!!!!!!---------------->
              <div class="product_frame bid_info">
                <div class="product_img">
                  <button class="add_bell">
                    <i class="fa-regular fa-bell" />
                  </button><!--點擊之後, 加入活動提醒(規格的小鈴鐺), class改 class="fa-solid fa-bell"-->
                  <a href="group_buying.html#group_content"><!--連結跳到當個活動的內容顯示區塊 #group_content-->
                    <img src="@/assets/images/product/2009.jpg" alt=""><!--圖片建議600*400, 全部商品都只會有一張照片, alt帶入活動名稱-->
                  </a>
                </div>
                <div class="row">
                  <h3>
                    <a href="group_buying.html#group_content"><!--連結跳到當個活動的內容顯示區塊 #group_content-->
                      鳳梨酥10個裝 - 中秋限定包裝
                    </a>
                  </h3>
                  <div class="font14">
                    活動已截止。
                  </div><!--已結束固定就好-->
                  <div class="col-xs-6 text-left">
                    <span class="bid_pricetxt">團購價格</span>
                    <span class="bid_price">
                      <i class="fas fa-dollar" />123
                    </span>
                  </div>
                  <div class="col-xs-6 text-right">
                    團購進度<span class="process_txt">90</span>%<!--結束前進度-->
                    <div class="process_bar">
                      <div class="process_bar_bg" style="width:90%" /><!--目標進度條, 照上面數字換style裡的%數就好-->
                    </div>
                    <a href="group_buying.html#group_content" class="btn btn-main btn-check">已結束</a>
                  </div>
                </div>
              </div><!---1 end--->
            </div>
          </div><!--團購 end-->
        </div>
        <!--已結束活動 end -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.full_height {
  height: calc(100% - 260px);
  // TODO: remove this
  display: flex;
  align-items: center;
}
</style>
