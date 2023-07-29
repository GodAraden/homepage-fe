<template>
  <div class="overflow-hidden">
    <page-title :title="$t('home.recent.title')" />
    <div
      class="grid grid-cols-2 w-full mt-4 gap-4 max-sm:grid-cols-1 max-sm:p-2"
    >
      <blog
        v-for="(item, idx) in blogList"
        :key="item.id"
        :url="catList?.[idx]?.url"
        :blog="item"
        class="h-96 max-sm:h-72"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Blog from '@/components/Blog.vue'
import PageTitle from './Base/Title.vue'
import { getBlogList, BlogListItem } from '@/api/blog'
import { CatListItem, getCatList } from '@/api/cat'

const blogList = ref<BlogListItem[]>()
const catList = ref<CatListItem[]>()

const init = async (blogCount: number = 2) => {
  blogList.value = (await getBlogList({ current: 1, pageSize: blogCount })).data
  catList.value = await getCatList(blogCount)
}

init(2)
</script>
