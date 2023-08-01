import { Router } from 'vue-router'
import { useUserStore } from '@/store'

export function setupPermissionGuard(router: Router) {
  router.beforeEach(async (to, from) => {
    const ENABLED_RESULT_STATUS = ['403', '404']
    let userStore = useUserStore()

    if (to.path === '/result') {
      if (!ENABLED_RESULT_STATUS.includes(to.query.status as string)) {
        return '/result?status=404'
      }
    }

    if (to.matched.length === 0) {
      return { path: '/result', query: { status: '404', path: to.fullPath } }
    }

    if (to.meta.requiresAuth === false) {
      return true
    }

    if (to.meta.requiresAuth) {
      if (userStore.user.role === 'admin') {
        return true
      } else {
        return { path: '/result', query: { status: '403', path: to.fullPath } }
      }
    }

    return false
  })
}
