<script setup>
const createColumns = () => [
  {
    type: 'selection',
    disabled(row) {
      return row.name === 'Edward King 3';
    }
  },
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  }
];

const data = Array.from({ length: 46 }).map((_, index) => ({
  name: `Order ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}));

const columns = ref(createColumns());
const checkedRowKeys = ref([]);
const rowKey = row => row.address;
const pagination = ref({
  pageSize: 30
});

function handleCheck(rowKeys) {
  checkedRowKeys.value = rowKeys;
}
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :row-key="rowKey"
    style="padding: 0 12px 16px 0"
    max-height="100vh"
    @update:checked-row-keys="handleCheck"
  />
</template>
