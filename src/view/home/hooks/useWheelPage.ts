import { ComputedRef, computed, inject, provide, ref } from 'vue'
import { PageMap } from '../components'

interface WheelPage {
  currentPage: ComputedRef
  onWheel: (event: WheelEvent) => void
}

const WHEEL_PAGE_KEY = Symbol('key')

export function provideWheelPage(): WheelPage {
  const totalDelta = ref(1)
  const ScreenHeight = computed(() => document.body.offsetHeight)

  const onWheel = (e: WheelEvent) => {
    if (e.deltaY < 0 && totalDelta.value + e.deltaY < 0) return
    if (
      e.deltaY > 0 &&
      totalDelta.value + e.deltaY > ScreenHeight.value * PageMap.length
    ) {
      return
    }
    totalDelta.value = totalDelta.value + e.deltaY
  }

  const currentPage = computed(
    () => PageMap[Math.floor(totalDelta.value / ScreenHeight.value)]
  )

  const result = {
    currentPage,
    onWheel
  }

  provide(WHEEL_PAGE_KEY, result)

  return result
}

export function injectWheelPage() {
  return inject(WHEEL_PAGE_KEY) as WheelPage
}
