import { AppRouteRecordRaw } from '../types'

const UTILITY: AppRouteRecordRaw = {
  path: '/utility',
  name: 'Utility',
  component: () => import('@/view/utility/Index.vue'),
  meta: {
    requiresAuth: false,
    icon: 'icon-gongju',
    order: 3,
    routerViewKey: 'Utility'
  }
}

export default UTILITY
