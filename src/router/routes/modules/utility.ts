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
      component: () => import('@/view/utility/pages/Contents.vue'),
      meta: {
        routerViewKey: 'Utility'
      }
    },
    {
      path: 'RMB-conversion',
      name: 'RMBConversion',
      component: () => import('@/view/utility/pages/RMBConversion.vue'),
      meta: {
        routerViewKey: 'Utility',
        icon: 'icon-xingzhuangjiehe'
      }
    },
    {
      path: 'hash-calculation',
      name: 'HashCalculation',
      component: () => import('@/view/utility/pages/HashCalculation.vue'),
      meta: {
        routerViewKey: 'Utility',
        icon: 'icon-hash'
      }
    },
    {
      path: 'color-conversion',
      name: 'ColorConversion',
      component: () => import('@/view/utility/pages/ColorConversion.vue'),
      meta: {
        routerViewKey: 'Utility',
        icon: 'icon-yanse'
      }
    }
  ]
}

export default UTILITY
