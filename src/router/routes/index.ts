import { AppRouteRecordRaw } from './types'
import utility from './modules/utility'

const modules = import.meta.glob<{ default: AppRouteRecordRaw }>(
  './modules/*.ts',
  { eager: true }
)

const allRoutes = []
for (const module of Object.values(modules)) {
  allRoutes.push(module.default)
}
allRoutes.sort((a, b) => a.meta.order - b.meta.order)

export const utilityRoutes = utility.children.filter((route) => route.path)
export const appRoutes = allRoutes.filter((route) => !route.meta.requiresAuth)
export const adminRoutes = allRoutes.filter((route) => route.meta.requiresAuth)
