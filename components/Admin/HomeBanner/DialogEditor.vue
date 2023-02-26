<script setup>
import { useMessage } from 'naive-ui';
import { UPDATE_HOME_BANNER } from '@/apis/requestURL';

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

const formValue = ref({
  img: props.currentItem?.img,
  href: props.currentItem?.href
});

const rules = {
  img: {
    required: true,
    message: '請輸入圖片連結',
    trigger: 'blur'
  },
  href: {
    required: true,
    message: '請輸入橫幅子網址'
  }
};

async function handlePositiveClick() {
  console.log(formValue.value);
  try {
    await $fetch(`${runtimeConfig.public.apiBase}/${UPDATE_HOME_BANNER(props.currentItem?.id)}`, {
      method: 'PUT',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      },
      body: formValue.value
    });
    message.success('已成功更新橫幅');
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
    title="編輯橫幅"
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
      <n-form-item label="橫幅圖片連結" path="img" style="width:280px">
        <n-input v-model:value="formValue.img" placeholder="請輸入圖片連結" />
      </n-form-item>
      <n-form-item label="橫幅前往的網址" path="href" style="width:280px">
        <n-input v-model:value="formValue.href" placeholder="請輸入子網址" />
      </n-form-item>
    </n-form>
  </n-dialog>
</template>
