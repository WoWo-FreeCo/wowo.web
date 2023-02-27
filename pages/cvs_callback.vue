<script setup>
import { useMessage } from 'naive-ui';

definePageMeta({
  layout: false
});

const message = useMessage();
// const cookie = useCookie('counter');

const storeid = useCookie('storeid');
const storename = useCookie('storename');
const storeaddress = useCookie('storeaddress');
const outside = useCookie('outside');
const ship = useCookie('ship');
const TempVar = useCookie('TempVar');

onMounted(() => {
  message.success('已取得店家資訊，網頁即將關閉...');
  setTimeout(() => {
    localStorage.setItem('storeid', storeid.value);
    localStorage.setItem('storename', storename.value);
    localStorage.setItem('storeaddress', storeaddress.value);
    localStorage.setItem('outside', outside.value);
    localStorage.setItem('ship', ship.value);
    localStorage.setItem('TempVar', TempVar.value);
    // console.log(storeid.value, storename.value, storeaddress.value, ship.value, TempVar.value);
    window.close();
  }, 2000);
});
</script>

<template>
  <div />
</template>
