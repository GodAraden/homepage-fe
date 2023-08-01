import { AppRouteRecordRaw } from '../types'

const BLOG: AppRouteRecordRaw = {
  path: '/blog',
  name: 'Blog',
  component: () => import('@/view/blog/Index.vue'),
  redirect: '/blog/search',
  meta: {
    requiresAuth: false,
    icon: 'icon-wenzhang1',
    order: 1,
    routerViewKey: 'blog'
  },
  children: [
    {
      path: 'search',
      name: 'BlogSearch',
      component: () => import('@/view/blog/components/Search.vue'),
      meta: {
        routerViewKey: 'blog'
      }
    },
    {
      path: ':blogId([a-f\\d]{8}-[a-f\\d]{4}-[a-f\\d]{4}-[a-f\\d]{4}-[a-f\\d]{12})',
      name: 'BlogDetail',
      component: () => import('@/view/blog/components/Detail.vue'),
      meta: {
        routerViewKey: 'blog'
      }
    }
  ]
}

export default BLOG
