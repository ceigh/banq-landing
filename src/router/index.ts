import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/Privacy.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return new Promise(resolve => {
      setTimeout(() => resolve({ top: 0 }), 50)
    })
  }
})

export default router
