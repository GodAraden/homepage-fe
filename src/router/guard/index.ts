import type { Router } from 'vue-router'
import { setupPermissionGuard } from './permission'

export function createRouteGuard(router: Router) {
  setupPermissionGuard(router)
}
