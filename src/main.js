import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { createPinia } from 'pinia';

import 'vue-global-api'; //전역 api 지정

import VueClipboard from 'vue3-clipboard'; //vue3 용 클립보드

createApp(App)
  .use(router)
  .use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
  })
  .use(createPinia())
  .mount('#app');
