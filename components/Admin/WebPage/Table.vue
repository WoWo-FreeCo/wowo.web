<script setup>
import { NButton, useDialog, useMessage } from 'naive-ui';
import { GET_WEB_PAGES } from '@/apis/requestURL';

const runtimeConfig = useRuntimeConfig();
// const dialog = useDialog();
const message = useMessage();
const pageStatus = usePageStatusStore();

// const creatorToggle = ref(false);
const editorToggle = ref(false);
const currentItem = ref({});

const createColumns = () => [
  {
    title: '頁尾名稱',
    key: 'name',
    width: 100,
    ellipsis: true
  },
  {
    title: '內容',
    key: 'content',
    width: '50%',
    ellipsis: true,
    style: 'backgroundColor: red'
  },
  {
    title: '操作',
    key: 'actions',
    width: 100,
    ellipsis: true,
    render(row) {
      return [h(
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

const items = ref([]);
const columns = ref(createColumns());
const checkedRowKeys = ref([]);
const rowKey = row => row.id;
const pagination = ref({
  pageSize: 20
});

onMounted(async() => {
  await nextTick();
  fetchItem();
});

async function fetchItem() {
  try {
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_WEB_PAGES}`);
    const { content } = res;
    items.value = content;
  } catch (error) {
    //
  }
}

function handlerAction(item, type = '') {
  if (!type) return;
  switch (type) {
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
  // creatorToggle.value = true;
  // pageStatus.toggleAdminOverlay(true);
}
</script>

<template>
  <div style="position: relative;">
    <n-space horizontal>
      <n-button disabled="" type="primary" style="margin: 12px;" @click="createItem">
        新建頁尾
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
    <!-- <AdminWebPageDialogCreator
      v-if="creatorToggle"
      @close-dialog="creatorToggle = false"
      @fetch-item="fetchItem"
    /> -->
    <AdminWebPageDialogEditor
      v-if="editorToggle"
      :current-item="currentItem"
      @close-dialog="editorToggle = false"
      @fetch-item="fetchItem"
    />
    <!-- ! Rich text -->
  </div>
</template>
