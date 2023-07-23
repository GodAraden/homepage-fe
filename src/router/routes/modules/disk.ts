import { AppRouteRecordRaw } from '../types'

const DISK: AppRouteRecordRaw = {
  path: '/disk',
  name: 'Disk',
  component: () => import('@/view/disk/Index.vue'),
  meta: {
    requiresAuth: false,
    icon: 'icon-disk',
    order: 3
  }
}

export default DISK
