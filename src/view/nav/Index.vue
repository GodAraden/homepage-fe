<template>
  <div class="navigation">
    <!-- 根据 settings 中的变量，渲染每一组导航及其内部 -->
    <div>
      <navigator :data="navigator" :path="['/navigator']" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navigator from './components/Navigator.vue'
import navigator from '@/config/navigator.json'
</script>

<style>
.navigation {
  @apply h-screen !pt-20;
  background-image: url(~/images/navigator.jpeg);
}
</style>
