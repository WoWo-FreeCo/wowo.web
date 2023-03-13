<template>
  <footer class="footer section">
    <!----------------!!!!!!!!!!!! 整區都有做修改 !!!!!!!!!!!!---------------->
    <div class="container2">
      訪客數：1,435,538人<!--訪客數--> | 會員數：12,380人<!--訪客數--><!----------------!!!!!!!!!!!! 訪客數移除 ul footer-menu !!!!!!!!!!!!---------------->
      <!--客戶要可自己編輯footer, 這裡以下是編輯器-->
      <div class="row">
        <div class="col-md-4 text-left">
          全台最大堅果電商平台 你今天WO了沒<br>
          同興實業股份有限公司<br>
          客服專線：022371110、02-23711183<br>
          客服信箱：mlin@tonghsing.com.tw<br>
          公司地址：台北市延平南路85號4樓<br>
        </div>
        <div class="col-md-8 text-right">
          <ul class="footer-menu">
            <li>
              <NuxtLink to="/order">
                我的訂單查詢
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">
                聯絡我們
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">
                關於我們
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq">
                常見問題
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/return-help">
                退換貨說明
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy">
                隱私權政策
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms">
                會員條款
              </NuxtLink>
            </li>
          </ul>
          <ul class="footer-menu social_icon">
            <!----------------!!!!!!!!!!!! class 加social_icon !!!!!!!!!!!!---------------->
            <li>
              <a href="https://www.instagram.com/p/Co1EeQHpvmD/?igshid=MDJmNzVkMjY=" target="_blank">
                <i class="fa-brands fa-instagram" /><!----------------!!!!!!!!!!!! class 移除social_icon !!!!!!!!!!!!---------------->
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/LOVIN2022" target="_blank">
                <i class="fa-brands fa-facebook-f" /><!----------------!!!!!!!!!!!! class 移除social_icon !!!!!!!!!!!!---------------->
              </a>
            </li>
            <!-- <li>
              <a href="">
                <i class="fa-brands fa-line" />
              </a>
            </li> -->
            <li>
              <a href=" https://youtu.be/9RlTDp0BBUw" target="_blank">
                <i class="fa-brands fa-youtube" /><!----------------!!!!!!!!!!!! <i class="social_icon fa-brands fa-square-youtube"></i> 改 <i class="fa-brands fa-youtube"></i>!!!!!!!!!!!!---------------->
              </a>
            </li>
          </ul>
        </div>
      </div><!--這裡以下是編輯器 end-->

      <p>Copyright &copy;2023 Developed by <a href="">Weshin</a></p>
    </div>
  </footer>
</template>
