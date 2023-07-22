import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import { appRoutes } from './routes'
import { createRouteGuard } from './guard'
import { h } from 'vue'

const createHistory = import.meta.env.PROD
  ? createWebHistory
  : createWebHashHistory

const router = createRouter({
  history: createHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: h('div')
    },
    ...appRoutes
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

createRouteGuard(router)

export { router }
