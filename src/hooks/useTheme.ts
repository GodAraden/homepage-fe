import { useColorMode, useCycleList } from '@vueuse/core'

// 将 主题变量 和 切换这个变量的函数 封装
export default function useTheme() {
  const themes = ['light', 'dark'] as const

  const currentTheme = useColorMode({
    selector: 'body',
    attribute: 'arco-theme',
    storageKey: 'arco-theme',
    modes: {
      light: '',
      dark: 'dark'
    }
  })

  const { next } = useCycleList([...themes], { initialValue: currentTheme })

  const changeTheme = () => {
    const newVal = next()
    currentTheme.value = newVal
  }

  return {
    currentTheme,
    changeTheme
  }
}
