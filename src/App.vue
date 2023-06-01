<template lang="pug">
h2 자주쓰는 기능 정리해보자!
nav.ul
  li: router-link(to="page1") 복사 및 sns 공유
  li: router-link(to="page2") 툴팁 및 팝업
  li: router-link(to="page2") 유튜브
RouterView.content
</template>

<script setup></script>

<style lang="less">
@import 'css/style.css';
@import 'css/mixin.less';
#app {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  margin: 0;
}
.content {
  margin-top: 20px;
}
</style>
