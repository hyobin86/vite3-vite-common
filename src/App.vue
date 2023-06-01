<template lang="pug">
#wrap
  h1 자주쓰는 기능
  ul
    li: router-link(to="page1") page1
    li: router-link(to="page2") page2
  hr
  RouterView
</template>

<script setup></script>

<style lang="less">
@import 'css/style.css';
@import 'css/mixin.less';
#wrap {
}
</style>
