<template lang="pug">
#wrap
  h1 자주쓰는 기능
  ul
    li: router-link(to="page1") 복사 및 sns 공유
    li: router-link(to="page2") 유튜브
  RouterView
</template>

<script setup></script>

<style lang="less">
@import 'css/style.css';
@import 'css/mixin.less';
#wrap {
}
</style>
