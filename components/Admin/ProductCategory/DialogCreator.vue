<script setup>
import { useMessage } from 'naive-ui';
import { POST_PRODUCT_CATEGORY } from '@/apis/requestURL';

const emits = defineEmits(['closeDialog', 'fetchProd']);

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
  name: ''
});

const rules = {
  name: {
    required: true,
    message: '請輸入產品類別名稱',
    trigger: 'blur'
  }
};

async function handlePositiveClick() {
  console.log(formValue.value);
  try {
    await $fetch(`${runtimeConfig.public.apiBase}/${POST_PRODUCT_CATEGORY}`, {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      },
      body: formValue.value
    });
    message.success('已成功建立產品類別');
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
    title="建立產品類別"
    content=""
    negative-text="取消"
    positive-text="建立"
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
      <n-form-item label="類別名稱" path="name" style="width:280px">
        <n-input v-model:value="formValue.name" placeholder="請輸入產品類別名稱" />
      </n-form-item>
    </n-form>
  </n-dialog>
</template>
