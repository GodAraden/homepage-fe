import { AppRouteRecordRaw } from '../types'

const BLOG: AppRouteRecordRaw = {
  path: '/blog',
  name: 'Blog',
  component: () => import('@/view/blog/Index.vue'),
  meta: {
    requiresAuth: false,
    icon: 'icon-wenzhang1',
    order: 1
  }
}

export default BLOG
