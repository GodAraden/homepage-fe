import { AppRouteRecordRaw } from '../types'

const WRITE: AppRouteRecordRaw = {
  path: '/write',
  name: 'Write',
  component: () => import('@/view/write/Index.vue'),
  meta: {
    requiresAuth: true,
    icon: 'icon-xiezi',
    order: 1,
    routerViewKey: 'write'
  }
}

export default WRITE
