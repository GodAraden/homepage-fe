import { AppRouteRecordRaw } from '../types'

const DISK: AppRouteRecordRaw = {
  path: '/disk',
  name: 'Disk',
  component: () => import('@/view/disk/Index.vue'),
  meta: {
    requiresAuth: true,
    icon: 'icon-wangpan',
    order: 3
  }
}

export default DISK
