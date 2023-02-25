<script setup lang="ts">
import { NIcon } from 'naive-ui';
import {
  Person,
  Cart,
  EllipsisHorizontal,
  Book
} from '@vicons/ionicons5';

enum SiderCategory {
  Account = 'account-management',
  Product = 'product-management',
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
    label: '會員管理',
    key: SiderCategory.Account,
    icon: renderIcon(Person),
    disabled: true,
    children: [
      {
        icon: renderIcon(EllipsisHorizontal),
        label: '所有用戶',
        key: SiderCategory.Account + '-all'
      }
    ]
  },
  {
    label: '產品管理',
    key: SiderCategory.Product,
    icon: renderIcon(Cart),
    children: [
      {
        icon: renderIcon(EllipsisHorizontal),
        label: '所有產品',
        key: SiderCategory.Product + '-all'
      }
    ]
  },
  {
    label: '訂單管理',
    key: SiderCategory.Order,
    icon: renderIcon(Book),
    children: [
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
              :inverted="inverted"
              :collapsed-width="64"
              :collapsed-icon-size="22"
              :options="menuOptions"
              @update:value="onTableUpdate"
            />
          </n-layout-sider>
          <AdminAccountsTable v-show="selectedItem.includes(SiderCategory.Account)" />
          <AdminProductTable v-show="selectedItem.includes(SiderCategory.Product)" />
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
