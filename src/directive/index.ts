import { App } from 'vue'
import permission from './permission'
import touch from './touch'

export default {
  install(Vue: App) {
    Vue.directive('permission', permission)
    Vue.directive('touch', touch)
  }
}
