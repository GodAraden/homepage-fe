import { AppRouteRecordRaw } from '../types'

const DISK: AppRouteRecordRaw = {
  path: '/disk',
  name: 'Disk',
  component: () => import('@/view/disk/Index.vue'),
  meta: {
    requiresAuth: true,
    icon: 'icon-wangpan',
    order: 2,
    routerViewKey: 'disk'
  }
}

export default DISK
