<script setup>
import { NButton, useDialog, useMessage } from 'naive-ui';
import { GET_ALL_PRODUCT, DELETE_PRODUCT } from '@/apis/requestURL';

const runtimeConfig = useRuntimeConfig();
const dialog = useDialog();
const message = useMessage();
const pageStatus = usePageStatusStore();

const creatorToggle = ref(false);
const editorToggle = ref(false);
const currentItem = ref({});

const createColumns = () => [
  // {
  //   type: 'selection',
  //   disabled(row) {
  //     return row.name === 'Edward King 3';
  //   }
  // },
  {
    title: '名稱',
    key: 'name'
  },
  {
    title: '分類',
    key: 'category'
  },
  {
    title: '售價',
    key: 'price'
  },
  {
    title: '會員價',
    key: 'memberPrice'
  },
  {
    title: 'VIP價',
    key: 'vipPrice'
  },
  {
    title: 'SVIP價錢',
    key: 'svipPrice'
  },
  {
    title: '操作',
    key: 'actions',
    render(row) {
      return [h(
        NButton,
        {
          type: 'error',
          strong: true,
          tertiary: true,
          size: 'small',
          onClick: () => handlerAction(row, 'del')
        },
        { default: () => '刪除' }
      ), h(
        NButton,
        {
          type: 'info',
          strong: true,
          tertiary: true,
          size: 'small',
          onClick: () => handlerAction(row, 'edit')
        },
        { default: () => '編輯' }
      )];
    }
  }
];

// function renderIcon(icon) {
//   return () => h(NIcon, null, { default: () => h(icon) });
// }

const products = ref([]);
const columns = ref(createColumns());
const checkedRowKeys = ref([]);
const rowKey = row => row.id;
const pagination = ref({
  pageSize: 20
});

onMounted(() => {
  fetchProd();
});

async function fetchProd() {
  try {
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_ALL_PRODUCT}`);
    const { data } = res;
    products.value = data;
  } catch (error) {
    //
  }
}

function handlerAction(item, type = '') {
  if (!type) return;
  switch (type) {
  case 'del':
    dialog.warning({
      title: `是否確定要刪除 ${item.name}`,
      content: () => h(
        NButton,
        {
          type: 'error',
          strong: true,
          tertiary: true,
          size: 'small',
          onClick: () => handlerAction(row, 'del')
        },
        { default: () => '刪除' }
      ),
      positiveText: '確定',
      negativeText: '取消',
      onPositiveClick: async() => {
        try {
          await $fetch(`${runtimeConfig.public.apiBase}/${DELETE_PRODUCT(item.id)}`, {
            method: 'DELETE',
            headers: {
              authorization: 'Bearer ' + localStorage.getItem('accessToken')
            }
          });
          message.success(`已刪除 ${item.name}`);
          fetchProd();
        } catch (error) {
          message.error(`發生錯誤 ${error.message}`);
        }
      },
      onNegativeClick: () => {
        message.info('已取消本次操作');
      }
    });
    break;
  case 'edit':
    currentItem.value = item;
    editorToggle.value = true;
    pageStatus.toggleAdminOverlay(true);
    break;
  default:
    break;
  }
  console.log(item);
}

function handleCheck(rowKeys) {
  checkedRowKeys.value = rowKeys;
}

function createProd() {
  creatorToggle.value = true;
  pageStatus.toggleAdminOverlay(true);
}
</script>

<template>
  <div style="position: relative;">
    <n-space horizontal>
      <n-button type="primary" style="margin: 12px;" @click="createProd">
        新建
      </n-button>
    </n-space>
    <n-data-table
      :columns="columns"
      :data="products"
      :pagination="pagination"
      :row-key="rowKey"
      style="padding: 0 12px 16px 0"
      max-height="100vh"
      @update:checked-row-keys="handleCheck"
    />
    <AdminProductDialogCreator
      v-if="creatorToggle"
      @close-dialog="creatorToggle = false"
      @fetch-prod="fetchProd"
    />
    <AdminProductDialogEditor
      v-if="editorToggle"
      :current-item="currentItem"
      @close-dialog="editorToggle = false"
      @fetch-prod="fetchProd"
    />
  </div>
</template>
