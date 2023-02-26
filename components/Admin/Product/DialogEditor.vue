<script setup>
import { useMessage } from 'naive-ui';
import { ProductType } from '@/constants/common';
import { GET_PRODUCT_CATEGORY, UPDATE_PRODUCT } from '@/apis/requestURL';

const emits = defineEmits(['closeDialog', 'fetchItem']);
const props = defineProps({
  currentItem: {
    default: () => ({}),
    type: Object
  }
});

const pageStatus = usePageStatusStore();

const runtimeConfig = useRuntimeConfig();

const message = useMessage();
const formRef = ref(null);

const dialogStyle = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  translate: '-50% -50%',
  zIndex: 3,
  width: '400px',
  maxWidth: '90vw',
  maxHeight: '85vh',
  overflowY: 'auto'
};

const size = ref('medium');

const attrOptions = ref([
  {
    label: '一般產品',
    value: ProductType.General
  },
  {
    label: '冷鏈產品',
    value: ProductType.ColdChain
  }
]);

const categoryOptions = ref([
  {
    id: -1,
    label: 'ABC',
    value: '尚未選擇'
  }
]);

const formValue = ref({
  name: props.currentItem?.name,
  price: props.currentItem?.price,
  memberPrice: props.currentItem?.memberPrice,
  vipPrice: props.currentItem?.vipPrice,
  svipPrice: props.currentItem?.svipPrice,
  skuId: props.currentItem?.skuId,
  categoryId: props.currentItem?.categoryId,
  attribute: props.currentItem?.attribute
});

const rules = {
  name: {
    required: true,
    message: '請輸入產品名稱',
    trigger: 'blur'
  },
  price: {
    required: true,
    message: '請輸入產品的一般價錢'
  },
  memberPrice: {
    required: true,
    message: '請輸入產品的會員價錢'
  },
  vipPrice: {
    required: true,
    message: '請輸入產品的VIP價錢'
  },
  svipPrice: {
    required: true,
    message: '請輸入產品的SVIP價錢'
  },
  skuId: {
    required: true,
    message: '請輸入產品的編號'
  }
};

onMounted(async() => {
  await nextTick();
  fetchData();
});

function fetchData() {
  fetchCategories();
}

async function fetchCategories() {
  try {
    const res = await $fetch(`${runtimeConfig.public.apiBase}/${GET_PRODUCT_CATEGORY}`);
    const { data } = res;
    categoryOptions.value = data.map((e) => {
      return {
        ...e,
        label: e.name,
        value: e.id
      };
    });
  } catch (error) {
    //
  }
}

async function handlePositiveClick() {
  console.log(formValue.value);
  try {
    await $fetch(`${runtimeConfig.public.apiBase}/${UPDATE_PRODUCT(props.currentItem?.id)}`, {
      method: 'PUT',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      },
      body: formValue.value
    });
    message.success('已成功更新產品');
    emits('fetchItem');
  } catch (error) {
    message.error(`發生錯誤，${error.message}`);
  }
  closeDialog();
}
function handleNegativeClick() {
  closeDialog();
}
function closeDialog() {
  pageStatus.toggleAdminOverlay(false);
  emits('closeDialog');
}
</script>
<template>
  <n-dialog
    :style="{...dialogStyle}"
    title="編輯產品"
    content=""
    negative-text="取消"
    positive-text="更新"
    transform-origin="center"
    @positive-click="handlePositiveClick"
    @close="handleNegativeClick"
    @negative-click="handleNegativeClick"
  >
    <n-form
      ref="formRef"
      :model="formValue"
      :rules="rules"
      :size="size"
    >
      <n-form-item label="產品名稱" path="name" style="width:280px">
        <n-input v-model:value="formValue.name" placeholder="請輸入產品名稱" />
      </n-form-item>
      <n-form-item label="一般價錢" path="price">
        <n-input-number v-model:value="formValue.price" min="0" placeholder="請輸入產品的一般價錢" />
      </n-form-item>
      <n-form-item label="會員價" path="memberPrice">
        <n-input-number v-model:value="formValue.memberPrice" min="0" placeholder="請輸入產品的會員價錢" />
      </n-form-item>
      <n-form-item label="VIP價" path="vipPrice">
        <n-input-number v-model:value="formValue.vipPrice" min="0" placeholder="請輸入產品的VIP價錢" />
      </n-form-item>
      <n-form-item label="SVIP價" path="svipPrice">
        <n-input-number v-model:value="formValue.svipPrice" min="0" placeholder="請輸入產品的SVIP價錢" />
      </n-form-item>
      <n-form-item label="產品編號" path="skuId">
        <n-input v-model:value="formValue.skuId" placeholder="請輸入產品編號" />
      </n-form-item>
      <n-form-item label="產品分類 *">
        <n-select v-model:value="formValue.categoryId" :options="categoryOptions" />
      </n-form-item>
      <n-form-item label="產品運送類別 *">
        <n-select v-model:value="formValue.attribute" :options="attrOptions" />
      </n-form-item>
    </n-form>
  </n-dialog>
</template>
