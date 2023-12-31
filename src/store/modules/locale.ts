import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useCycleList } from '@vueuse/core'

// 将 主题变量 和 切换这个变量的函数 封装
export const useLocaleStore = defineStore('locale', () => {
  const locales = ['zh-CN', 'en-US'] as const
  const { locale } = useI18n()

  const currentLocale = computed(() => {
    return locale.value
  })

  const { next } = useCycleList([...locales], {
    initialValue: currentLocale.value
  })

  const changeLocale = () => {
    const newVal = next()
    locale.value = newVal
    localStorage.setItem('arco-locale', newVal)
  }

  return {
    currentLocale,
    changeLocale
  }
})
