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
  },
  children: [
    {
      path: '',
      name: 'Contents',
      component: () => import('@/view/utility/components/Contents.vue'),
      meta: {
        routerViewKey: 'Utility'
      }
    },
    {
      path: 'RMB-Conversion',
      name: 'RMB-Conversion',
      component: () => import('@/view/utility/pages/RMBConversion.vue'),
      meta: {
        routerViewKey: 'Utility'
      }
    }
  ]
}

export default UTILITY
