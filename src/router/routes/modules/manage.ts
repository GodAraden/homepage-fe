import { AppRouteRecordRaw } from '../types'

const MANAGE: AppRouteRecordRaw = {
  path: '/manage',
  name: 'Manage',
  component: () => import('@/view/manage/Index.vue'),
  meta: {
    requiresAuth: true,
    icon: 'icon-shebeiguanli',
    order: 0,
    routerViewKey: 'manage'
  }
}

export default MANAGE
