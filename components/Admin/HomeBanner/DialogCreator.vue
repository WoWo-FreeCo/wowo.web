<script setup>
import { useMessage } from 'naive-ui';
import { POST_HOME_BANNER } from '@/apis/requestURL';

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
  img: '',
  href: '/'
});

const rules = {
  img: {
    required: true,
    message: '請輸入橫幅圖片連結',
    trigger: 'blur'
  },
  href: {
    required: true,
    message: '請輸入點擊橫幅後前往的連結'
  }
};

async function handlePositiveClick() {
  try {
    await $fetch(`${runtimeConfig.public.apiBase}/${POST_HOME_BANNER}`, {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      },
      body: formValue.value
    });
    message.success('已成功建立橫幅');
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
    title="建立橫幅"
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
      <n-form-item label="橫幅圖片連結" path="name" style="width:280px">
        <n-input v-model:value="formValue.img" placeholder="請輸入圖片連結" />
      </n-form-item>
      <n-form-item label="橫幅前往的連結" path="name" style="width:280px">
        <n-input v-model:value="formValue.href" placeholder="請輸入橫幅前往的網址" />
      </n-form-item>
    </n-form>
  </n-dialog>
</template>
