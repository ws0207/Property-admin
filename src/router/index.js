import { createRouter, createWebHashHistory } from 'vue-router'
// import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    nmae: 'login',
    component: () => import('../views/login/login.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
