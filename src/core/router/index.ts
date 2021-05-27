import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../../modules/home/HomeModule.vue'),
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../../modules/shop/ShopModule.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../../modules/account/AccountModule.vue'),
  },
  {
    path: '/game',
    name: 'Create',
    component: () => import('../../modules/game/GameModule.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
