<template>
  <div class="home" @wheel="onWhell">
    <transition name="page" mode="out-in" appear>
      <component :is="currentPage" class="home-content" />
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { PageMap } from './components'

const totalDelta = ref(1)
const ScreenHeight = document.body.offsetHeight

const onWhell = (e: { deltaY: number }) => {
  const total = PageMap.length
  if (e.deltaY < 0 && totalDelta.value + e.deltaY < 0) return
  if (e.deltaY > 0 && totalDelta.value + e.deltaY > ScreenHeight * total) return
  totalDelta.value = totalDelta.value + e.deltaY
}

const currentPage = computed(
  () => PageMap[Math.floor(totalDelta.value / ScreenHeight)]
)
</script>

<style>
.home {
  height: 100vh;
}

body[arco-theme=''] .home {
  background-image: url(~/images/home-light.jpeg);
}

body[arco-theme='dark'] .home {
  background-image: url(~/images/home-dark.jpeg);
}

.home-content {
  height: 100vh;
}
</style>
