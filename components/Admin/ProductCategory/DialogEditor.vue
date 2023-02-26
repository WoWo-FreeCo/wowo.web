<script setup>
import { useMessage } from 'naive-ui';
import { GET_PRODUCT_CATEGORY, UPDATE_PRODUCT_CATEGORY } from '@/apis/requestURL';

const emits = defineEmits(['closeDialog', 'fetchProd']);
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
    message: '請輸入產品類別名稱',
    trigger: 'blur'
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
    await $fetch(`${runtimeConfig.public.apiBase}/${UPDATE_PRODUCT_CATEGORY(props.currentItem?.id)}`, {
      method: 'PUT',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      },
      body: formValue.value
    });
    message.success('已成功更新產品類別');
    emits('fetchProd');
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
    title="編輯產品類別"
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
      <n-form-item label="產品類別名稱" path="name" style="width:280px">
        <n-input v-model:value="formValue.name" placeholder="請輸入產品類別名稱" />
      </n-form-item>
    </n-form>
  </n-dialog>
</template>
