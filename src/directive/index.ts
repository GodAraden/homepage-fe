import { App, Directive } from 'vue'

const modules = import.meta.glob<{ default: Directive }>('./**/*.ts', {
  eager: true
})

export default {
  install(Vue: App) {
    for (const [key, value] of Object.entries(modules)) {
      const [_, name] = key.split('/')
      const { default: directive } = value
      Vue.directive(name, directive)
    }
  }
}
