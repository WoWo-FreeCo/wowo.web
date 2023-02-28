<script setup>
import { NButton, useDialog, useMessage } from 'naive-ui';
import { GET_ADMIN_USERS } from '@/apis/requestURL';

const runtimeConfig = useRuntimeConfig();
const dialog = useDialog();
const message = useMessage();
const pageStatus = usePageStatusStore();

const creatorToggle = ref(false);
const editorToggle = ref(false);
const currentItem = ref({});

const createColumns = () => [
  {
    title: '名稱',
    key: 'nickname'
  },
  {
    title: '用戶等級',
    key: 'memberLevel'
  },
  {
    title: 'Email',
    key: 'email'
  },
  {
    title: '紅利',
    key: 'rewardCredit'
  },
  {
    title: 'FB綁定',
    render: (row) => {
      return row?.FacebookGroupActivated ? 'Yes' : 'No';
    }
  },
  {
    title: 'IG綁定',
    render: (row) => {
      return row?.IGFollowActivated ? 'Yes' : 'No';
    }
  },
  {
    title: 'YT綁定',
    render: (row) => {
      return row?.YouTubeChannelActivated ? 'Yes' : 'No';
    }
  },
  // {
  //   title: '地址1',
  //   key: 'addressOne'
  // },
  // {
  //   title: '地址2',
  //   key: 'addressTwo'
  // },
  // {
  //   title: '地址3',
  //   key: 'addressThree'
  // },
  {
    title: '推薦碼',
    key: 'recommendCode'
  },
  {
    title: '統編',
    key: 'taxIDNumber'
  },
  {
    title: '電話',
    key: 'telephone'
  },
  {
    width: 100,
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
  pageSize: 5
});

onMounted(async() => {
  await nextTick();
  fetchItem();
});

async function fetchItem() {
  try {
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_ADMIN_USERS}?take=200`, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    });
    const { data } = res;
    items.value = data;
    console.log(items.value);
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
      content: '',
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

function createItem() {
  creatorToggle.value = true;
  pageStatus.toggleAdminOverlay(true);
}
</script>

<template>
  <div style="position: relative;">
    <n-space horizontal>
      <n-button type="primary" style="margin: 12px;" @click="createItem">
        新建產品
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
    <AdminProductDialogCreator
      v-if="creatorToggle"
      @close-dialog="creatorToggle = false"
      @fetch-item="fetchItem"
    />
    <AdminProductDialogEditor
      v-if="editorToggle"
      :current-item="currentItem"
      @close-dialog="editorToggle = false"
      @fetch-item="fetchItem"
    />
  </div>
</template>
