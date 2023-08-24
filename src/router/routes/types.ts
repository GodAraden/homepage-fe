import { Component } from 'vue'
import { NavigationGuard, RouteMeta } from 'vue-router'

export interface CustomRouteMeta extends RouteMeta {
  order?: number
  icon?: string
  requiresAuth?: boolean
  routerViewKey?: string
}

export interface AppRouteRecordRaw {
  path: string
  name?: string
  meta?: CustomRouteMeta
  redirect?: string
  component: Component | string
  children?: AppRouteRecordRaw[]
  alias?: string | string[]
  props?: boolean | Record<string, any>
  beforeEnter?: NavigationGuard | NavigationGuard[]
  fullPath?: string
}
