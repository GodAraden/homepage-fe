<template>
  <div class="home" @wheel="onWhell">
    <transition name="page" mode="out-in" appear>
      <component :is="currentPage" class="home-content" />
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Page3 from './components/Page3.vue'
import Page4 from './components/Page4.vue'
import Page5 from './components/Page5.vue'
import { computed } from 'vue'

const PageMap = [null, Page1, Page2, Page3, Page4, Page5]
const totalDelta = ref(1)
const ScreenHeight = document.body.offsetHeight

const onWhell = (e: { deltaY: number }) => {
  if (e.deltaY < 0 && totalDelta.value + e.deltaY < 0) return
  if (e.deltaY > 0 && totalDelta.value + e.deltaY > ScreenHeight * 5) return
  totalDelta.value = totalDelta.value + e.deltaY
}

const currentPage = computed(
  () => PageMap[Math.ceil(totalDelta.value / ScreenHeight)]
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
