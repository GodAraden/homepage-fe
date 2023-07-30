<template>
  <div class="overflow-hidden">
    <page-title :title="$t('home.recent.title')" />
    <div
      class="grid grid-cols-2 w-full mt-4 gap-4 max-sm:grid-cols-1 max-sm:p-2"
    >
      <blog
        v-for="(item, idx) in renderData"
        :key="item.id"
        :url="catList?.[idx]?.url"
        :blog="item"
        class="h-96 max-sm:h-72"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Blog from '@/components/Blog.vue'
import PageTitle from './Base/Title.vue'
import useBlogList from '@/hooks/useBlogList'

const { renderData, catList, fetchData } = useBlogList(2)

fetchData()
</script>
