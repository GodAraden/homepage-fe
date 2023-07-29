import { DirectiveBinding } from 'vue'

function onTouch(el: HTMLElement, binding: DirectiveBinding) {
  const touchType = binding.arg //传入的模式 press swipeRight swipeLeft swipeTop swipeDowm Tap
  let timeOutEvent = null
  //滑动处理
  let startX: number, startY: number

  //返回角度
  function getSlideAngle(dx: number, dy: number) {
    return (Math.atan2(dy, dx) * 180) / Math.PI
  }

  //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
  function getSlideInfo(
    startX: number,
    startY: number,
    endX: number,
    endY: number
  ) {
    const dy = startY - endY
    const dx = endX - startX
    let result = { direction: '', x: endX - startX, y: endY - startY }

    //如果滑动距离太短
    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
      return result
    }

    const angle = getSlideAngle(dx, dy)
    if (angle >= -45 && angle < 45) {
      result.direction = 'swiperight'
    } else if (angle >= 45 && angle < 135) {
      result.direction = 'swipeup'
    } else if (angle >= -135 && angle < -45) {
      result.direction = 'swipedown'
    } else if (
      (angle >= 135 && angle <= 180) ||
      (angle >= -180 && angle < -135)
    ) {
      result.direction = 'swipeleft'
    }
    return result
  }

  el.addEventListener(
    'touchstart',
    function (ev) {
      startX = ev.touches[0].pageX
      startY = ev.touches[0].pageY

      //判断长按
      timeOutEvent = setTimeout(() => {
        timeOutEvent = null
        if (touchType === 'press') {
          binding.value()
        }
      }, 500)
    },
    false
  )

  el.addEventListener('touchmove', function (ev) {
    clearTimeout(timeOutEvent)
    timeOutEvent = null
  })

  el.addEventListener(
    'touchend',
    function (ev) {
      let endX = ev.changedTouches[0].pageX
      let endY = ev.changedTouches[0].pageY

      const { direction, x, y } = getSlideInfo(startX, startY, endX, endY)

      clearTimeout(timeOutEvent)

      switch (direction) {
        case '':
          break
        case 'swipeup':
          if (touchType === 'swipeup') {
            binding.value({ deltaY: -2 * y })
          }
          break
        case 'swipedown':
          if (touchType === 'swipedown') {
            binding.value({ deltaY: -2 * y })
          }
          break
        case 'swipeleft':
          if (touchType === 'swipeleft') {
            binding.value(x)
          }
          break
        case 'swiperight':
          if (touchType === 'swiperight') {
            binding.value(x)
          }
          break
        default:
          break
      }
    },
    false
  )
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    onTouch(el, binding)
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    onTouch(el, binding)
  }
}
