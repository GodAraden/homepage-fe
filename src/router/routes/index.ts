import { CustomRouteRecordNormalized } from './types'

const modules = import.meta.glob('./modules/*.ts', { eager: true })

function formatModules(_modules: any) {
  const result: CustomRouteRecordNormalized[] = []
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default
    if (!defaultModule) return
    const moduleList = Array.isArray(defaultModule)
      ? [...defaultModule]
      : [defaultModule]
    result.push(...moduleList)
  })
  return result.sort((a, b) => a.meta.order - b.meta.order)
}

export const appRoutes = formatModules(modules)
