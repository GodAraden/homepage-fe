<template>
  <div class="home" @wheel="onWheel">
    <transition name="page" mode="out-in" appear>
      <keep-alive>
        <component :is="currentPage" class="home-content" />
      </keep-alive>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { provideWheelPage } from './useWheelPage'

const { currentPage, onWheel } = provideWheelPage()
</script>

<style>
.home,
.home-content {
  height: 100vh;
}

body[arco-theme=''] .home {
  background-image: url(~/images/home-light.jpeg);
}

body[arco-theme='dark'] .home {
  background-image: url(~/images/home-dark.jpeg);
}
</style>
