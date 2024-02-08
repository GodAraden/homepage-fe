import { Message } from '@arco-design/web-vue'

export function debounce(func: (...args: unknown[]) => unknown, delay = 100) {
  let time = null
  return (...args: Parameters<typeof func>) => {
    clearTimeout(time)
    time = setTimeout(func, delay, ...args)
  }
}

export const showErrorTip = debounce((msg: string) => {
  Message.error(msg)
})
