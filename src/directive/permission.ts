import { DirectiveBinding, watch } from 'vue'
import { useUserStore } from '@/store'

function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
  const { value } = binding
  const userStore = useUserStore()
  const parent = el.parentNode

  if (Array.isArray(value)) {
    if (value.length > 0) {
      const permissionValues = value

      watch(
        userStore,
        () => {
          const hasPermission = permissionValues.includes(userStore.user?.role)

          if (!hasPermission && parent) {
            parent.removeChild(el)
          } else {
            parent?.appendChild(el)
          }
        },
        { immediate: true }
      )
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','user']"`)
  }
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  }
}
