import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

// 将 获取当前屏幕大小逻辑 封装，未来可能添加更多的屏幕尺寸
export default function useScreenSize() {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const isMobile = breakpoints.smallerOrEqual('sm')

  return {
    isMobile
  }
}
