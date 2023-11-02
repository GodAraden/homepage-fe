import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import { appRoutes, adminRoutes } from './routes'
import { createRouteGuard } from './guard'

const createHistory = import.meta.env.PROD
  ? createWebHistory
  : createWebHashHistory

const router = createRouter({
  history: createHistory(),
  routes: [
    ...appRoutes,
    ...adminRoutes,

    {
      path: '/result',
      component: () => import('@/view/result/Index.vue'),
      meta: {
        requiresAuth: false,
        routerViewKey: 'Result'
      }
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

createRouteGuard(router)

export { router }
