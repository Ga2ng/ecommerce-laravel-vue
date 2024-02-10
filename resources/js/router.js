import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/HomePage.vue';
import About from './pages/AboutPage.vue';
import Shop from './pages/ShopPage.vue';
import Cart from './pages/CartPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/shop', component: Shop },
    { path: '/cart', component: Cart },
  ],
});

export default router