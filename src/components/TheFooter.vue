<template>
  <footer class="g-ground-glass-dark py-2 text-white text-center">
    <p class="select-none">
      &copy;
      {{
        new Date().getFullYear() === 2023
          ? 2023
          : 2023 + ' - ' + new Date().getFullYear()
      }}
      By GodAraden
    </p>
    <p class="select-none">
      <!-- 本站已运行时长 -->
      {{ $t('footer.running.tip', running) }}
      <icon-heart class="animate-pulse" />
    </p>
    <p>
      <a href="http://beian.miit.gov.cn/">
        <icon-link /> 吉ICP备2022007937号-1
      </a>
    </p>
  </footer>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import { ref } from 'vue'

const begin = import.meta.env.VITE_RUN_BEGIN
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

// Vue 不会自动删除定时器
onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>
