import { createWebHistory, createRouter } from 'vue-router';

import Page1 from '@/view/page1.vue';
import Page2 from '@/view/page2.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: '/page1',
  },
  {
    path: '/page1',
    name: 'page1',
    component: Page1,
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
