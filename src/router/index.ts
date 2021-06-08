import {
  createRouter, createWebHashHistory, RouteRecordRaw
} from 'vue-router'

const getComponent = (name: string): () => RouteRecordRaw['component'] =>
  () => import(`../views/${name}.vue`)

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: getComponent('Home')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: getComponent('Privacy')
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: getComponent('NotFound')
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
