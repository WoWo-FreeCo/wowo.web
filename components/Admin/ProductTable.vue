<script setup>
import { NButton } from 'naive-ui';
// import {
//   Trash
// } from '@vicons/ionicons5';
import { GET_ALL_PRODUCT } from '@/apis/requestURL';

const runtimeConfig = useRuntimeConfig();

const createColumns = () => [
  {
    type: 'selection',
    disabled(row) {
      return row.name === 'Edward King 3';
    }
  },
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
    title: 'Action',
    key: 'actions',
    render(row) {
      return h(
        NButton,
        {
          strong: true,
          tertiary: true,
          size: 'small',
          onClick: () => handlerAction(row)
        },
        { default: () => 'Delete' }
      );
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

function handlerAction(item) {
  console.log(item);
}

function handleCheck(rowKeys) {
  checkedRowKeys.value = rowKeys;
}

</script>

<template>
  <n-data-table
    :columns="columns"
    :data="products"
    :pagination="pagination"
    :row-key="rowKey"
    style="padding: 0 12px 16px 0"
    max-height="100vh"
    @update:checked-row-keys="handleCheck"
  />
</template>
