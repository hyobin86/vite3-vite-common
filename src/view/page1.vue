<template lang="pug">
.page1
  h2 복사 및 sns 공유
  button(type="button" @click="getShare('twitter')") 트위터
  button(type="button" @click="getShare('facebook')") 페이스북
  button(type="button" @click="getShare('copy')") 복사하기
  span.tag(@click="getCopy('#복사할단어')") #복사할단어
</template>

<script setup>
import { copyText } from 'vue3-clipboard';

let thisUrl = 'www.naver.com';
let snsTitle = '복사테스트!!';
function getShare(sns) {
  if (sns == 'facebook') {
    let url =
      'http://www.facebook.com/sharer/sharer.php?u=' +
      encodeURIComponent(thisUrl);
    window.open(url, '페이스북', 'width=486, height=286');
  } else if (sns == 'twitter') {
    let url =
      'http://twitter.com/share?url=' +
      encodeURIComponent(thisUrl) +
      '&text=' +
      encodeURIComponent(snsTitle);
    window.open(url, '트위터', 'width=486, height=286,scrollbars=yes');
  } else {
    getCopy(thisUrl);
  }
}
function getCopy(obj) {
  copyText(obj, undefined, (error, event) => {
    if (error) {
      alert('복사가 실패했습니다.');
    } else {
      alert('복사되었습니다.');
    }
  });
}
</script>

<style lang="less">
.page1 {
  button {
    background: transparent;
    font-size: 15px;
    margin: 10px 5px;
    padding: 6px 10px;
  }
  .tag {
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
}
</style>
