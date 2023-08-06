<template>
  <footer class="g-ground-glass-dark py-2 text-white text-center">
    <p class="select-none"> &copy; {{ copyrightYear }} By {{ owner }} </p>
    <p class="select-none">
      {{ $t('footer.running.tip', running) }}
      <icon-heart class="animate-pulse" />
    </p>
    <a href="http://beian.miit.gov.cn/"> <icon-link /> {{ beian }} </a>
  </footer>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import { ref } from 'vue'

const begin = import.meta.env.VITE_RUN_BEGIN

const currentYear = new Date().getFullYear()
const beginYear = new Date(begin).getFullYear()
const copyrightYear =
  currentYear === beginYear ? currentYear : `${beginYear} - ${currentYear}`

const owner = import.meta.env.VITE_APP_OWNER

const getRunningTime = () => {
  let time = Math.floor(
    (new Date().valueOf() - new Date(begin).valueOf()) / 1000
  )

  const second = time % 60
  time = Math.floor(time / 60)
  const minute = time % 60
  time = Math.floor(time / 60)
  const hour = time % 24
  time = Math.floor(time / 24)

  return {
    day: time,
    hour,
    minute,
    second
  }
}
const running = ref(getRunningTime())
const timer = setInterval(() => (running.value = getRunningTime()), 1000)

const beian = import.meta.env.VITE_APP_BEIANHAO

// Vue 不会自动删除定时器
onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>
