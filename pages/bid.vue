<script setup>
onMounted(() => {
  $('.product_slide').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'productSliderArrow prevArrow fa-solid fa-chevron-left\'></button>',
    nextArrow: '<button type=\'button\' class=\'productSliderArrow nextArrow fa-solid fa-chevron-right\'></button>',
    dots: true,
    rows: 1,
    slidesPerRow: 3,
    responsive: [
      {
        breakpoint: 1057,
        settings: {
          rows: 1,
          slidesPerRow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          rows: 1,
          slidesPerRow: 1
        }
      }
    ]
  });
});
</script>

<template>
  <div>
    <div class="mt185ptb30 full_height">
      <div class="container tabCommon">
        <h2 class="bid_tl">
          WO競拍
        </h2><!----------------!!!!!!!!!!!!拿掉 <img src="images/hot_icon.png" alt="">!!!!!!!!!!!!---------------->

        <!--類別tab, 只有一層-->
        <ul class="nav nav-tabs bbottom_none">
          <!----------------!!!!!!!!!!!!class加bbottom_none!!!!!!!!!!!!---------------->

          <!--tab1--><!--第一個li的class要加active, a的href要對照下面id-->
          <li class="active">
            <a href="#cate_1" data-toggle="tab" aria-expanded="true">類別名稱 1</a><!--第一個a, aria-expanded="true", 其他=false -->
          </li><!--tab1 end-->

          <!--tab2-->
          <li><a href="#cate_2" data-toggle="tab" aria-expanded="false">類別名稱 2</a></li>
          <!--tab2 end-->
        </ul><!--類別tab end-->

        <!--tab內容-->
        <div class="tab-content">
          <!--tab 1--><!--第一個class要加active in, id可隨意取, 需對應上頭li的href-->
          <div id="cate_1" class="tab-pane fade active in">
            <div class="product_slide">
              <!----------------!!!!!!!!!!!!此整區塊有做修改!!!!!!!!!!!!---------------->

              <!---1---><!--結束--><!--當個類別, 全部都放進來, 剩餘時間短的在前, 最後放即將開始-->
              <div class="product_frame bid_info">
                <div class="product_img">
                  <button class="add_bell">
                    <i class="fa-regular fa-bell" />
                  </button><!--點擊之後, 加入活動提醒(規格的小鈴鐺), class改 class="fa-solid fa-bell"-->
                  <a href="#bid_content"><!--連結跳到當個活動的內容顯示區塊 #bid_content-->
                    <img src="@/assets/images/product/2009.jpg" alt=""><!--圖片建議600*400, 全部商品都只會有一張照片, alt帶入活動名稱-->
                  </a>
                </div>
                <div class="row">
                  <h3>
                    <a href="#bid_content"><!--連結跳到當個活動的內容顯示區塊 #bid_content-->
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
                    <a href="#bid_content" class="btn btn-main btn-check">已結束</a>
                  </div>
                </div>
              </div><!---1 end--->

              <!---2---><!--進行中-->
              <div class="product_frame bid_info">
                <div class="product_img">
                  <button class="add_bell">
                    <i class="fa-regular fa-bell" />
                  </button><!--點擊之後, 加入活動提醒(規格的小鈴鐺), class改 class="fa-solid fa-bell"-->
                  <a href="#bid_content"><!--連結跳到當個活動的內容顯示區塊 #bid_content-->
                    <img src="@/assets/images/product/2009.jpg" alt=""><!--圖片建議600*400, 全部商品都只會有一張照片, alt帶入活動名稱-->
                  </a>
                </div>
                <div class="row">
                  <h3>
                    <a href="#bid_content"><!--連結跳到當個活動的內容顯示區塊 #bid_content-->
                      鳳梨酥10個裝 - 中秋限定包裝
                    </a>
                  </h3>
                  <div class="font14">
                    競拍日期：2022/08/01~2022/09/01
                  </div>
                  <div class="col-xs-6 text-left">
                    <span class="bid_pricetxt">目前出價</span>
                    <span class="bid_price">
                      <i class="fas fa-parking" />990
                    </span>
                  </div>
                  <div class="col-xs-6 text-right">
                    已出價<span class="process_txt">10</span>次
                    <a href="#bid_content" class="btn btn-main btn-check">我要出價</a>
                  </div>
                </div>
              </div><!---2 end--->

              <!---3---><!--即將開始-->
              <div class="product_frame bid_info">
                <div class="product_img">
                  <button class="add_bell">
                    <i class="fa-regular fa-bell" />
                  </button><!--點擊之後, 加入活動提醒(規格的小鈴鐺), class改 class="fa-solid fa-bell"-->
                  <a href="#bid_content"><!--連結跳到當個活動的內容顯示區塊 #bid_content-->
                    <img src="@/assets/images/product/2009.jpg" alt=""><!--圖片建議600*400, 全部商品都只會有一張照片, alt帶入活動名稱-->
                  </a>
                </div>
                <div class="row">
                  <h3>
                    <a href="#bid_content"><!--連結跳到當個活動的內容顯示區塊 #bid_content-->
                      鳳梨酥10個裝 - 中秋限定包裝
                    </a>
                  </h3>
                  <div class="font14">
                    競拍日期：2022/08/01~2022/09/01
                  </div>
                  <div class="col-xs-6 text-left">
                    <span class="bid_pricetxt">起標價</span>
                    <span class="bid_price">
                      <i class="fas fa-parking" />990
                    </span>
                  </div>
                  <div class="col-xs-6 text-right">
                    已出價<span class="process_txt">0</span>次
                    <a href="#bid_content" class="btn btn-main btn-check">敬請期待</a>
                  </div>
                </div>
              </div><!---3 end--->
            </div>
          </div><!--tab 1 end-->

          <!--tab 2--><!--規則跟上面tab 1一樣-->
          <div id="cate_2" class="tab-pane fade">
            <div class="product_slide">
              <!----------------!!!!!!!!!!!!此整區塊有做修改!!!!!!!!!!!!---------------->

              <!---1---><!--結束--><!--當個類別, 全部都放進來, 剩餘時間短的在前, 最後放即將開始-->
              <div class="product_frame bid_info">
                <div class="product_img">
                  <button class="add_bell">
                    <i class="fa-regular fa-bell" />
                  </button><!--點擊之後, 加入活動提醒(規格的小鈴鐺), class改 class="fa-solid fa-bell"-->
                  <a href="#bid_content"><!--連結跳到當個活動的內容顯示區塊 #bid_content-->
                    <img src="@/assets/images/product/2009.jpg" alt=""><!--圖片建議600*400, 全部商品都只會有一張照片, alt帶入活動名稱-->
                  </a>
                </div>
                <div class="row">
                  <h3>
                    <a href="#bid_content"><!--連結跳到當個活動的內容顯示區塊 #bid_content-->
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
                    <a href="#bid_content" class="btn btn-main btn-check">我要出價</a>
                  </div>
                </div>
              </div><!---1 end--->
            </div>
          </div><!--tab 2 end-->
        </div><!--tab內容 end-->
      </div>
    </div>

    <div id="bid_content" class="bg_left2 full_height triangle">
      <!----------------!!!!!!!!!!!!class bg-white改bg_left2!!!!!!!!!!!!---------------->
      <div class="container ptb60">
        editor<!--圖文編輯-->
      </div>
      <div class="bg-gray ptb60">
        <div class="container">
          <div class="row">
            <!----------------!!!!!!!!!!!!此整區塊有做修改!!!!!!!!!!!!---------------->
            <div class="col-md-6 col-sm-12 p-0">
              <!----------------!!!!!!!!!!!!!! class加col-sm-12, 活動提醒(規格的小鈴鐺)改位置 !!!!!!!!!!!!!!---------------->
              <button class="add_bell">
                <i class="fa-solid fa-bell" />
              </button><!--點擊之後, 加入活動提醒(規格的小鈴鐺), class改 class="fa-solid fa-bell"-->

              <div class="product_img">
                <img src="@/assets/images/product/2009.jpg" alt=""><!--圖片建議600*400, 全部商品都只會有一張照片, alt帶入活動名稱-->
              </div>

              <!--競拍商品規格, 純文字, 內容加在data-content裡-->
              <i class="fa-solid fa-circle-exclamation info_icon" data-toggle="popover" data-placement="left" title="商品規格" data-content="商品規格內文" />
              <!--競拍商品規格 end-->
            </div>
            <div class="col-md-6 col-sm-12 single-product-details">
              <!----------------!!!!!!!!!!!! class加col-sm-12 !!!!!!!!!!!!---------------->
              <h2 title="產品名稱">
                產品名稱
              </h2>
              <span class="bid_date">競拍日期：2022/08/02~2022/09/02</span>

              <ul class="product-price">
                <!----------------!!!!!!!!!!!!!! 改寫法 !!!!!!!!!!!!!!---------------->
                <li>
                  <span>起拍價</span>
                  <i class="fas fa-parking" />130
                </li>
                <li>
                  <span>直購價</span><!--出價 > 直購 = 得標, >= 直購以直購算, < 直購以出價算-->
                  <i class="fas fa-parking" />130
                </li>
                <li class="vip_price">
                  <span>目前最高出價</span>
                  <i class="fas fa-parking" />129
                </li>
                <li class="vip_price">
                  <span>我的出價</span><!--出價可以重複出--><!--出價馬上扣紅利, 被超出馬上退還, 直購後其他退還紅利-->
                  <i class="fas fa-parking" />130
                </li>
              </ul>
              <div class="least_p">
                ( 目前剩餘紅利：300<i class="fas fa-parking" /> )
              </div><!--會員目前紅利點-->
              <div class="timer">
                <!--------------------------倒數套件程式不好寫就刪掉, 把下面隱藏的打開-------------------------------->
                <!-- <i class="fa-regular fa-clock"></i> 競拍倒數<span>7</span>天<span>7</span>時<span>7</span>分<span>7</span>秒 -->

                <div id="bid_timer">
                  <!--此js用syotimer控制, id可自取, 但須對應js, 例此js開頭是 $('#bid_timer').syotimer, 詳細控制請找到這支js-->
                  <i class="fa-regular fa-clock" /> 競拍倒數
                </div>
              </div>
              <button type="button" class="btn btn-main btn-check" data-toggle="modal" data-target="#bid_price">
                <i class="fa-solid fa-gem" />我要出價
              </button>
              <button type="button" class="btn btn-main btn-bag" data-toggle="modal" data-target="#check_buy">
                <i class="fa-solid fa-cart-shopping" />直購價購買
              </button>
            </div>
          </div>
          <h4 class="text-center bid_his_tl">
            <i class="fa-solid fa-book" />競拍歷程 (60次出價紀錄)
          </h4><!--數字換成到目前為止幾次出價-->
          <div class="bg-white">
            <div class="bid_history">
              <!--1-->
              <div class="row bid_user">
                <div class="col-sm-2 col-xs-4 text-center p-5">
                  <!----------------!!!!!!!!!!!!!! class 加 p-5!!!!!!!!!!!!!!---------------->
                  <img src="@/assets/images/member/1.jpg"><!--會員照片, 沒有照片用 <i class="fa-solid fa-circle-user"></i> 取代img-->
                  <span>會員暱稱會員暱稱會員暱稱會員暱稱會員暱稱</span>
                  <span class="badge_member badge_svip">SVIP</span>
                </div>
                <div class="col-sm-10 col-xs-8 bid_list p-5">
                  2022/08/04 18:20:15 出價：50P <span>(得標候選人)</span><!----------------!!!!!!!!!!!!!! 移除<img src="images/member/bidk_icon.png" alt=""> !!!!!!!!!!!!!!---------------->
                </div>
              </div><!--1 end-->

              <!--2-->
              <div class="row bid_user">
                <div class="col-sm-2 col-xs-4 text-center p-5">
                  <!----------------!!!!!!!!!!!!!! class 加 p-5!!!!!!!!!!!!!!---------------->
                  <i class="fa-solid fa-circle-user" /><!--會員照片, 沒有照片用 <i class="fa-solid fa-circle-user"></i> 取代img-->
                  <span>會員暱稱</span>
                  <span class="badge_member badge_svip">SVIP</span>
                </div>
                <div class="col-sm-10 col-xs-8 bid_list p-5">
                  2022/08/04 18:20:15 出價：50P
                </div>
              </div><!--2 end-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
