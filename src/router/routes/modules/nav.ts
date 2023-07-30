import { AppRouteRecordRaw } from '../types'

const NAV: AppRouteRecordRaw = {
  path: '/nav',
  name: 'Nav',
  component: () => import('@/view/nav/Index.vue'),
  meta: {
    requiresAuth: false,
    icon: 'icon-daohang',
    order: 2,
    routerViewKey: 'nav'
  }
}

export default NAV
