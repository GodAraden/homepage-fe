import { AppRouteRecordRaw } from '../types'

const HOMEPAGE: AppRouteRecordRaw = {
  path: '/',
  name: 'HomePage',
  component: () => import('@/view/home/Index.vue'),
  meta: {
    requiresAuth: false,
    icon: 'icon-home',
    order: 0
  }
}

export default HOMEPAGE
