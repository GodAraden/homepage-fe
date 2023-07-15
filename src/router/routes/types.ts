import { Component } from 'vue'
import { NavigationGuard, RouteMeta } from 'vue-router'

export interface AppRouteRecordRaw {
  path: string
  name?: string | symbol
  meta?: RouteMeta
  redirect?: string
  component: Component | string
  children?: AppRouteRecordRaw[]
  alias?: string | string[]
  props?: boolean | Record<string, any>
  beforeEnter?: NavigationGuard | NavigationGuard[]
  fullPath?: string
}
