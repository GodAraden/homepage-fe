import { createI18n } from 'vue-i18n'
import { locale } from '@/config/settings.json'
import zhCN from './zh-CN'
import enUS from './en-US'

export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' }
]
const defaultLocale = localStorage.getItem('arco-locale') || locale

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en-US',
  allowComposition: true,
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export default i18n
