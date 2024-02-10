import { ref, nextTick } from 'vue'

export default function useRefresh(initValue = false) {
  const isRefresh = ref(initValue)

  const refresh = () => {
    isRefresh.value = true
    nextTick(() => (isRefresh.value = false))
  }

  return {
    isRefresh,
    refresh
  }
}
