<template>
  <main id="home" class="h-screen">
    <template v-for="item in 5" :key="item">
      <component :is="PageMap[item - 1]" class="h-screen" />
    </template>

    <div id="footer" class="w-screen">
      <the-footer />
    </div>
  </main>
</template>

<script lang="ts" setup>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Stack from './components/Stack.vue'
import Recent from './components/Recent.vue'
import Friend from './components/Friend.vue'
import TheFooter from '@/components/TheFooter.vue'

const PageMap = [Home, About, Stack, Recent, Friend]
</script>
