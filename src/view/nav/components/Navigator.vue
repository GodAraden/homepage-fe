<template>
  <template v-for="item in data" :key="item.title">
    <!-- 如果此项是个容器，我要让它的 grid 布局从 1 到 4 -->
    <div
      v-if="item.children"
      class="g-ref-bgc col-span-3 grid grid-cols-3 gap-x-6 gap-y-4 mb-2 p-4 rounded-xl"
      :data-item-key="item.title"
    >
      <p
        :style="{ fontSize: (6 - path.length) * 4 + 'px' }"
        class="col-span-3 !mb-0 decoration-black underline"
      >
        {{ item.title }}
      </p>
      <navigator :data="item.children" :path="[...path, item.title]" />
    </div>
    <!-- 如果这是个链接 -->
    <div
      v-if="item.uri"
      class="g-ref-bgc navigation-card flex flex-col"
      :data-item-key="`${item.title} ${item.uri}`"
    >
      <a :href="item.uri" target="_blank" class="flex-1">
        <img
          :src="`${path.join('/')}/${item.title}.png`"
          class="w-full h-full"
        />
      </a>
      <p
        :title="item.title"
        class="g-single-ellipsis p-2 text-lg font-mono cursor-default"
      >
        {{ item.title }}
      </p>
    </div>
  </template>
</template>

<script setup lang="ts">
defineProps<{
  data: BookmarkItem[]
  path: string[]
}>()
</script>

<style>
.navigation-card:hover {
  @apply shadow-lg -translate-y-2 scale-105 transition-all;
}
</style>
