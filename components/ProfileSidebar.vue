<script setup>
const route = useRoute();

const path = computed(() => route.path);

</script>

<template>
  <div class="col-sm-3 p-0 bg_left">
    <div id="member_menu" class="panel-group commonAccordion">
      <div class="panel panel-default">
        <div id="headingOne" class="panel-heading" role="tab">
          <h4 class="panel-title">
            <a
              role="button"
              data-toggle="collapse"
              data-parent="#member_menu"
              aria-controls="collapseOne"
            >
              會員資料
            </a>
          </h4>
        </div>
        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
          <ul>
            <li :class="{active: path?.toLowerCase().includes('/profile')}">
              <NuxtLink to="/profile">
                基本資料管理
              </NuxtLink>
            </li>
            <li :class="{active: path?.toLowerCase().includes('/favorite')}">
              <NuxtLink to="/favorite">
                我的最愛
              </NuxtLink>
            </li>
            <li :class="{active: path?.toLowerCase().includes('/order')}">
              <NuxtLink to="/order">
                訂單查詢
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
