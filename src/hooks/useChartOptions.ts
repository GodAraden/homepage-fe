import { computed } from 'vue'
import { EChartsOption } from 'echarts'
import { useThemeStore } from '@/store'

type optionsFn = (isDark: boolean) => EChartsOption

export default function useChartOption(sourceOption: optionsFn) {
  const themeStore = useThemeStore()
  const isDark = computed(() => {
    return themeStore.shownTheme === 'dark'
  })
  const chartOption = computed<EChartsOption>(() => {
    return sourceOption(isDark.value)
  })
  return {
    chartOption
  }
}
