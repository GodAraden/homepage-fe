import { createPinia } from 'pinia'
import { useUserStore } from './modules/user'
import { useThemeStore } from './modules/theme'

const pinia = createPinia()

export { useUserStore, useThemeStore }
export default pinia
