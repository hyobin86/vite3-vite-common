<template lang="pug">
.page2
  h2 page2
  .composable 컴포저블 마우스 좌표 예제 {{x}}, {{y}}
</template>

<script setup>
import { useMouse } from '@/composable/mouse.js';
const { x, y } = useMouse();
</script>

<style lang="less">
.page2 {
}
</style>
