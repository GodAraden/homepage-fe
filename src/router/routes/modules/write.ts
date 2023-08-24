import { AppRouteRecordRaw } from '../types'

const WRITE: AppRouteRecordRaw = {
  path: '/write',
  name: 'Write',
  component: () => import('@/view/write/Index.vue'),
  meta: {
    requiresAuth: true,
    icon: 'icon-xiezi',
    order: 4,
    routerViewKey: 'write'
  }
}

export default WRITE
