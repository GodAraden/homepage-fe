<template>
  <main id="blog" class="g-scrollbar flex h-screen overflow-hidden">
    <blog-aside />

    <router-view v-slot="{ Component, route }">
      <template v-if="Component">
        <KeepAlive>
          <suspense>
            <!-- 主要内容 -->
            <component :is="Component" :key="route.fullPath" />

            <!-- 加载中状态 -->
            <template #fallback>
              <div class="g-ref-bgc g-perfect-center flex-1 h-screen">
                <icon-loading :size="64" style="color: #999" />
              </div>
            </template>
          </suspense>
        </KeepAlive>
      </template>
    </router-view>
  </main>
</template>

<script lang="ts" setup>
import BlogAside from './components/Aside.vue'
import { provideCommonData } from './hooks/useCommonData'

provideCommonData()
</script>
