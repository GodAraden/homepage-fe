import { useColorMode, useCycleList } from '@vueuse/core'
import { theme } from '@/config/settings.json'

// 将 主题变量 和 切换这个变量的函数 封装
export default function useTheme() {
  const themes = ['light', 'dark', 'auto'] as const
  const initialValue = localStorage.getItem('arco-theme') || theme

  const modes = useColorMode({
    selector: 'body',
    attribute: 'arco-theme',
    storageKey: 'arco-theme',
    initialValue,
    modes: {
      light: '',
      dark: 'dark',
      auto: ''
    }
  })

  const { next, state } = useCycleList([...themes], { initialValue: modes })

  const changeTheme = () => {
    const newVal = next()
    modes.value = newVal
  }

  return {
    currentTheme: state,
    changeTheme
  }
}
