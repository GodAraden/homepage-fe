<template>
  <main class="navigation">
    <search />
    <!-- 根据 settings 中的变量，渲染每一组导航及其内部 -->
    <navigator :data="navigator" :path="['/navigator']" />

    <a-affix :offsetBottom="80" class="text-left">
      <a-button type="primary" shape="round" @click="onScrollToTop">
        <template #icon><icon-double-up /></template>
      </a-button>
    </a-affix>
  </main>
</template>

<script lang="ts" setup>
import Navigator from './components/Navigator.vue'
import Search from './components/Search.vue'
import navigator from '@/config/navigator.json'

const onScrollToTop = () => {
  document.querySelector('#main').scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style lang="less">
.navigation {
  @apply h-screen !pt-20;
  background-image: url(~/images/navigator.jpeg);

  .arco-affix {
    @apply flex justify-end;
    right: 4vw;
  }
}
</style>
