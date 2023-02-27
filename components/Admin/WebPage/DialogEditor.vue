<script setup>
import { useMessage } from 'naive-ui';
import { UPDATE_WEB_PAGES } from '@/apis/requestURL';

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

const dialogStyle = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  translate: '-50% -50%',
  zIndex: 3,
  width: '820px',
  maxWidth: '90vw',
  maxHeight: '85vh',
  overflowY: 'auto'
};

const richText = ref(props.currentItem.content);

async function handlePositiveClick() {
  console.log(richText.value);
  try {
    await $fetch(`${runtimeConfig.public.apiBase}/${UPDATE_WEB_PAGES(props.currentItem?.id)}`, {
      method: 'PUT',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      },
      body: {
        content: richText.value
      }
    });
    message.success('成功更新頁尾內容');
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
    title="編輯頁尾內容"
    content=""
    negative-text="取消"
    positive-text="更新"
    transform-origin="center"
    @positive-click="handlePositiveClick"
    @close="handleNegativeClick"
    @negative-click="handleNegativeClick"
  >
    <RichTextEditor v-model="richText" :max-limit="999999" />
  </n-dialog>
</template>
