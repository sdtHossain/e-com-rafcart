import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: () => import('../views/ProductView.vue')
    }
  ]
})

export default router
