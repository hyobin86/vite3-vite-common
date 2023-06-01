import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { createPinia } from 'pinia';

import 'vue-global-api'; //전역 api 지정

createApp(App).use(router).use(createPinia()).mount('#app');
