<script setup lang="ts">
import { NIcon } from 'naive-ui';
import {
  Person,
  EllipsisHorizontal
} from '@vicons/ionicons5';

enum SiderCategory {
  Product = 'product-management',
  ProductCategory = 'product-category-management',
  HomeBanner = 'home-banner-management',
  WebPage = 'web-page-management',
  User = 'user-management',
  Order = 'order-management'
}

definePageMeta({
  layout: 'admin'
});

const authStore = useAuthStore();

const router = useRouter();

const inverted = ref(true);

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

onMounted(() => {
  if (!authStore.status.loggedIn) {
    router.push({ path: '/admin/login' });
  }
});

const menuOptions = ref([
  {
    label: '管理頁面',
    key: 'manager-list',
    icon: renderIcon(Person),
    children: [
      {
        icon: renderIcon(EllipsisHorizontal),
        label: '所有產品分類',
        key: SiderCategory.ProductCategory + '-all'
      },
      {
        icon: renderIcon(EllipsisHorizontal),
        label: '所有產品',
        key: SiderCategory.Product + '-all'
      },
      {
        icon: renderIcon(EllipsisHorizontal),
        label: '所有橫幅',
        key: SiderCategory.HomeBanner + '-all'
      },
      {
        icon: renderIcon(EllipsisHorizontal),
        label: '頁尾資訊',
        key: SiderCategory.WebPage + '-all'
      },
      {
        icon: renderIcon(EllipsisHorizontal),
        label: '所有用戶',
        key: SiderCategory.User + '-all'
      },
      {
        icon: renderIcon(EllipsisHorizontal),
        label: '所有訂單',
        key: SiderCategory.Order + '-all'
      }
    ]
  }
]);

const selectedItem = ref('');

function onTableUpdate(evt: any) {
  console.log(evt);
}
</script>

<template>
  <client-only>
    <n-space vertical>
      <n-layout>
        <n-layout class="sider-layout" has-sider style="height: 100vh; background-color: #fff;">
          <n-layout-sider
            bordered
            show-trigger
            collapse-mode="width"
            :collapsed-width="64"
            :width="200"
            content-style="padding-left: 0;"
            :native-scrollbar="true"
            :inverted="inverted"
          >
            <n-menu
              v-model:value="selectedItem"
              :default-expand-all="true"
              :inverted="inverted"
              :collapsed-width="64"
              :collapsed-icon-size="22"
              :options="menuOptions"
              @update:value="onTableUpdate"
            />
          </n-layout-sider>
          <AdminProductTable v-show="selectedItem.includes(SiderCategory.Product)" />
          <AdminProductCategoryTable v-show="selectedItem.includes(SiderCategory.ProductCategory)" />
          <AdminHomeBannerTable v-show="selectedItem.includes(SiderCategory.HomeBanner)" />
          <AdminWebPageTable v-show="selectedItem.includes(SiderCategory.WebPage)" />
          <AdminUserTable v-show="selectedItem.includes(SiderCategory.User)" />
          <AdminOrderTable v-show="selectedItem.includes(SiderCategory.Order)" />
          <!-- <n-layout style="max-height: 320px" /> -->
        </n-layout>
      </n-layout>
    </n-space>
  </client-only>
</template>

<style lang="scss" scoped>
.n-menu {
  padding-left: 0;
}
.n-layout-sider {
  padding-left: 0px;
}
</style>
