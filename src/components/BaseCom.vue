<template lang="pug">
.base
  h4 {{msg}}
  .store-data {{ store.getter }}
  button(@click="loadData") Data load
</template>

<script setup>
import { useIndexStore } from '@/store/index';
defineProps({
  msg: String,
});
const store = useIndexStore();
function loadData() {
  store.action('pinia Action');
}
</script>

<style lang="less">
.base {
  button {
    border: 1px solid red;
  }
}
</style>
