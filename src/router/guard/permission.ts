import { Router } from 'vue-router'

export function setupPermissionGuard(router: Router) {
  router.beforeEach(async (to, from) => {
    return true
  })
}
