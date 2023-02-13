// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/winer_vue',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/Auth.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'auth') {
    if (localStorage.getItem('accessToken')) {
      next()
      return
    } else {
      next('/auth');
      return
    }
  }
  next()
})

export default router
