import { AppRouteRecordRaw } from './types'

const modules = import.meta.glob<{ default: AppRouteRecordRaw }>(
  './modules/*.ts',
  { eager: true }
)

const allRoutes: AppRouteRecordRaw[] = []
for (const module of Object.values(modules)) {
  allRoutes.push(module.default)
}
allRoutes.sort((a, b) => a.meta.order - b.meta.order)

export const appRoutes = allRoutes.filter((route) => !route.meta.requiresAuth)
export const adminRoutes = allRoutes.filter((route) => route.meta.requiresAuth)
