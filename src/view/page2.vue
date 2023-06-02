<template lang="pug">
.page2
  h2 툴팁 및 팝업
  button.tooltip(type="button") 툴팁 영역
  button.btn-popup(type="button" @click="popupFlag") 팝업
  transition(name="fade")
    section.popup(v-if="flag")
      .popup-wrap
        .popup-body
        button.close(type="button" @click="popupFlag") X
</template>

<script setup>
let flag = ref(false);
function popupFlag() {
  flag.value = !flag.value;
}
</script>

<style lang="less">
.page2 {
  button {
    &.tooltip {
      margin-right: 20px;
      position: relative;
      transition-property: background;
      &:before {
        content: 'tooltip';
        position: absolute;
        top: 40px;
        left: 60px;
        opacity: 0;
        color: red;
        transition-property: opacity;
        transition-duration: 0.3s;
      }
      &:hover {
        &:before {
          opacity: 1;
        }
      }
    }
  }
  .popup {
    position: fixed;
    z-index: 20;
    top: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    max-width: 2560px;
    overflow: hidden;
    overflow-y: auto;
    &::before {
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 55%);
      content: '';
    }
    .popup-wrap {
      position: relative;
      z-index: 2;
      margin: 195px auto;
      width: 600px;
      height: 300px;
      background: #fff;
      .close {
        padding: 5px 10px;
        display: block;
        position: absolute;
        top: -40px;
        right: 0;
      }
    }
  }
}
</style>
