<script setup>
import { NButton, NImage, useDialog, useMessage } from 'naive-ui';
import { GET_HOME_BANNER, DELETE_HOME_BANNER } from '@/apis/requestURL';

const runtimeConfig = useRuntimeConfig();
const dialog = useDialog();
const message = useMessage();
const pageStatus = usePageStatusStore();

const creatorToggle = ref(false);
const editorToggle = ref(false);
const currentItem = ref({});

const createColumns = () => [
  {
    title: '橫幅縮圖',
    render(row) {
      return h(
        NImage,
        {
          width: '200',
          src: row.img
        }
      );
    }
  },
  {
    title: '橫幅圖片網址',
    key: 'img'
  },
  {
    title: '子頁面',
    key: 'href'
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

const items = ref([]);
const columns = ref(createColumns());
const checkedRowKeys = ref([]);
const rowKey = row => row.id;
const pagination = ref({
  pageSize: 20
});

onMounted(() => {
  fetchItem();
});

async function fetchItem() {
  try {
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_HOME_BANNER}`);
    const { data } = res;
    items.value = data;
  } catch (error) {
    //
  }
}

function handlerAction(item, type = '') {
  if (!type) return;
  switch (type) {
  case 'del':
    dialog.warning({
      title: '是否確定要刪除該橫幅',
      content: '',
      positiveText: '確定',
      negativeText: '取消',
      onPositiveClick: async() => {
        try {
          await $fetch(`${runtimeConfig.public.apiBase}/${DELETE_HOME_BANNER(item.id)}`, {
            method: 'DELETE',
            headers: {
              authorization: 'Bearer ' + localStorage.getItem('accessToken')
            }
          });
          message.success('刪除橫幅成功');
          fetchItem();
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
        新建橫幅
      </n-button>
    </n-space>
    <n-data-table
      :columns="columns"
      :data="items"
      :pagination="pagination"
      :row-key="rowKey"
      style="padding: 0 12px 16px 0"
      max-height="100vh"
      @update:checked-row-keys="handleCheck"
    />
    <AdminHomeBannerDialogCreator
      v-if="creatorToggle"
      @close-dialog="creatorToggle = false"
      @fetch-item="fetchItem"
    />
    <AdminHomeBannerDialogEditor
      v-if="editorToggle"
      :current-item="currentItem"
      @close-dialog="editorToggle = false"
      @fetch-item="fetchItem"
    />
  </div>
</template>
