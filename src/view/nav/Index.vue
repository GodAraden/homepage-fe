<template>
  <main id="navigation" class="h-screen !pt-20">
    <search />
    <!-- 根据 settings 中的变量，渲染每一组导航及其内部 -->
    <navigator :data="navigator.children" :path="[`/${navigator.title}`]" />

    <a-button
      type="primary"
      shape="round"
      class="!fixed text-right right-12 bottom-20"
      @click="onScrollToTop"
      :title="$t('nav.aside.scrollToTop')"
    >
      <template #icon><icon-double-up /></template>
    </a-button>
  </main>
</template>

<script lang="ts" setup>
import Navigator from './components/Navigator.vue'
import Search from './components/Search.vue'
import { navigator } from '@/config/navigator'

const onScrollToTop = () => {
  document.querySelector('#navigation').scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
