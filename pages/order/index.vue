<script setup>
</script>
<template>
  <div>
    <section class="full_height mt185ptb30 pt0">
      <UserProfile />
      <div class="row">
        <!----------------!!!!!!!!!!!!此整區塊有做修改!!!!!!!!!!!!---------------->

        <div class="col-sm-3 p-0 bg_left">
          <div id="member_menu" class="panel-group commonAccordion">
            <div class="panel panel-default">
              <div id="headingOne" class="panel-heading" role="tab">
                <h4 class="panel-title">
                  <a
                    role="button"
                    data-toggle="collapse"
                    data-parent="#member_menu"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    會員資料
                  </a>
                </h4>
              </div>
              <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <ul>
                  <li>
                    <NuxtLink to="/profile">
                      基本資料管理
                    </NuxtLink>
                  </li>
                  <li class="active">
                    <NuxtLink to="/order">
                      我的消費紀錄
                    </NuxtLink>
                  </li><!--當下頁面li的class要加active-->
                  <!-- <li><NuxtLink to="mypoint.html">我的紅利點數</NuxtLink></li>
                  <li><NuxtLink to="myback.html">我的退貨紀錄</NuxtLink></li>
                  <li><NuxtLink to="myhistory.html">我的回顧</NuxtLink></li> -->
                  <li>
                    <NuxtLink to="/favorite">
                      我的最愛
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-9 pl20pr30">
          <ul class="list-inline dashboard-menu">
            <!----------------!沒改!---------------->
            <li><a href="order.html" class="active">一般商品</a></li><!--購物車的一般商品跟冷鍊商品, 在shop-sidebar頁面看到的--><!--當下頁面a的class要加active-->
            <!-- <li><a href="border.html">競拍活動</a></li>
            <li><a href="gorder.html">團購活動</a></li> -->
          </ul>

          <div class="select r0t0">
            <!----------------!沒改!---------------->
            <select>
              <option selected>
                訂單狀態
              </option>
              <option value="">
                待付款
              </option>
              <option value="">
                已付款
              </option>
              <option value="">
                已出貨
              </option>
              <option value="">
                已取消
              </option>
            </select>
          </div>

          <table class="member_table order_table">
            <!----------------!沒改!---------------->
            <thead>
              <tr>
                <th>
                  訂單編號
                </th>
                <th>
                  訂單日期
                </th>
                <th>
                  付款方式
                </th>
                <th>
                  訂單金額
                </th>
                <th>
                  訂單狀態
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-th="訂單編號">
                  22060629636237
                </td>
                <td data-th="訂單日期">
                  2022/06/06
                </td>
                <td data-th="付款方式">
                  信用卡+紅利點數
                </td>
                <td data-th="訂單金額">
                  $680
                </td>
                <td data-th="訂單狀態">
                  已付款
                </td>
                <td>
                  <button type="button" class="btn btn-orderdetial" onclick="location.href='order_info.html'">
                    查看明細
                  </button>
                  <button type="button" class="btn btn-orderdetial" data-toggle="modal" data-target="#cancel">
                    取消訂單
                  </button>
                </td>
              </tr>
              <tr>
                <td data-th="訂單編號">
                  22060629636237
                </td>
                <td data-th="訂單日期">
                  2022/06/06
                </td>
                <td data-th="付款方式">
                  信用卡
                </td>
                <td data-th="訂單金額">
                  $680
                </td>
                <td data-th="訂單狀態">
                  已出貨
                </td>
                <td>
                  <button type="button" class="btn btn-orderdetial" onclick="location.href='order_info.html'">
                    查看明細
                  </button>
                  <button type="button" class="btn btn-orderdetial" data-toggle="modal" data-target="#back">
                    我要退貨
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="text-center">
            <!----------------!沒改!---------------->
            <ul class="pagination post-pagination">
              <li>
                <a href="#!">上一頁</a>
              </li>
              <li class="active">
                <a href="#!">1</a>
              </li>
              <li>
                <a href="#!">2</a>
              </li>
              <li>
                <a href="#!">3</a>
              </li>
              <li>
                <a href="#!">4</a>
              </li>
              <li>
                <a href="#!">5</a>
              </li>
              <li>
                <a href="#!">下一頁</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
