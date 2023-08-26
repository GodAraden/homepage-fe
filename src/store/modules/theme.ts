import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useColorMode, useCycleList } from '@vueuse/core'
import { theme } from '@/config/settings'

// 将 主题变量 和 切换这个变量的函数 封装
export const useThemeStore = defineStore('theme', () => {
  const themes = ['light', 'dark', 'auto'] as const
  const initialValue = localStorage.getItem('arco-theme') || theme
  const { next } = useCycleList([...themes], { initialValue })

  const { system, store: currentTheme } = useColorMode({
    selector: 'body',
    attribute: 'arco-theme',
    storageKey: 'arco-theme',
    initialValue,
    modes: {
      light: '',
      dark: 'dark',
      auto: 'auto'
    }
  })

  const changeTheme = () => {
    const newVal = next()
    currentTheme.value = newVal
  }

  const shownTheme = computed(() =>
    currentTheme.value === 'auto' ? system.value : currentTheme.value
  )

  return {
    currentTheme,
    shownTheme,
    changeTheme
  }
})
