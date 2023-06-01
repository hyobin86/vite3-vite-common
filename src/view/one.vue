<template lang="pug">
.page1
  h2 page1
   BaseCom(:msg="msg")
</template>

<script setup>
import BaseCom from '@/components/BaseCom.vue';

const msg = ref('template');
onMounted(() => {});
</script>

<style lang="less">
.page1 {
}
</style>
