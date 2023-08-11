<template>
  <main
    id="home"
    class="h-screen"
    v-touch:swipeup="onWheel"
    v-touch:swipedown="onWheel"
    @wheel="onWheel"
  >
    <transition name="page" mode="out-in" appear>
      <keep-alive>
        <component :is="currentPage" class="h-screen" />
      </keep-alive>
    </transition>

    <div
      class="g-ref-bgc g-perfect-center fixed flex-col w-12 h-12 bottom-6 right-6 rounded-full"
    >
      {{ PageMap.indexOf(currentPage) + 1 }} / {{ PageMap.length }}
    </div>
  </main>
</template>

<script lang="ts" setup>
import { PageMap } from './components'
import { provideWheelPage } from './hooks/useWheelPage'

const { currentPage, onWheel } = provideWheelPage()
</script>
