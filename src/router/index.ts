import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path:'/admin',
      name:'admin',
      component: () => import('@/views/AdminView.vue')
    },
    {
      path:'/user',
      name:'user',
      component: () => import('@/views/UserView.vue')
    },
    {
      path:'/vip',
      name:'vip',
      component:() => import('@/views/VipView.vue')
    }
  ],
})

export default router
