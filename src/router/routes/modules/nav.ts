import { AppRouteRecordRaw } from '../types'

const NAV: AppRouteRecordRaw = {
  path: '/nav',
  name: 'Nav',
  component: () => import('@/view/Nav/index.vue'),
  meta: {
    requiresAuth: false,
    icon: 'icon-Nav',
    order: 2
  }
}

export default NAV
