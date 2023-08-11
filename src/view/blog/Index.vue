<template>
  <main id="blog" class="flex h-screen overflow-hidden">
    <blog-aside />

    <Suspense>
      <router-view></router-view>
      <template #fallback>
        <div class="g-ref-bgc g-perfect-center w-full h-full text-xl">
          数据加载失败，可能是服务器坏掉了...
        </div>
      </template>
    </Suspense>
  </main>
</template>

<script lang="ts" setup>
import BlogAside from './components/Aside.vue'
import { provideCommonData } from './hooks/useCommonData'
// import { provideListData } from './hooks/useListData'

// 不在此处 provide 的原因是，*目前*  仅在 Search 组件中要用到对应的状态
// provideListData()
provideCommonData()
</script>
