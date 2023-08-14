import { createPinia } from 'pinia'
import { useUserStore } from './modules/user'
import { useThemeStore } from './modules/theme'
import { useLocaleStore } from './modules/locale'

const pinia = createPinia()

export { useUserStore, useThemeStore, useLocaleStore }
export default pinia
