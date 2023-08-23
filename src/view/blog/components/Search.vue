<template>
  <div class="g-ref-bgc g-scrollbar flex-1 h-screen overflow-y-scroll">
    <article class="g-ref-deep-bgc min-h-screen p-4 pt-20">
      <p class="text-3xl mb-4">
        <template v-if="filter.typeName">
          {{ $t('blog.search.type.result', { typeName: filter.typeName }) }}
        </template>
        <template v-if="filter.tags">
          {{ $t('blog.search.tag.result', { tagName: filter.tags.join(';') }) }}
        </template>
        <template v-if="filter.keyword">
          {{ $t('blog.search.keyword.result', { keyword: filter.keyword }) }}
        </template>
      </p>
      <blog
        v-for="(item, idx) in renderData"
        :key="item.id"
        :url="catList?.[idx]?.url"
        :blog="item"
        class="h-80 mb-2"
      />
      <div class="g-main-center">
        <a-pagination
          simple
          :total="pagination.total"
          :page-size="pagination.pageSize"
          @change="onPageChange"
        />
      </div>
    </article>
    <the-footer></the-footer>
  </div>

  <aside
    class="g-ref-bgc g-scrollbar w-1/4 h-full flex-shrink-0 select-none overflow-y-scroll max-md:hidden"
  >
    <div class="h-16"> <!-- 占位用 --> </div>
    <!-- 文章推荐 -->
    <ul class="w-full p-4 overflow-x-hidden">
      <li> {{ $t('blog.aside.recommend.title') }} </li>
      <li v-for="item in recommendList" :key="item.id" class="flex">
        <div class="flex-shrink-0 w-14 h-14 p-1">
          <img
            :src="`https://cravatar.cn/avatar/${item.id}?d=robohash`"
            class="rounded"
          />
        </div>
        <div class="g-main-center flex-col p-1 w-40 flex-1">
          <p
            class="g-single-ellipsis g-link"
            :title="item.title"
            @click="$router.push(`/blog/${item.id}`)"
          >
            {{ item.title }}
          </p>
          <p class="grid grid-cols-3 gap-2 whitespace-nowrap">
            <span> <icon-eye /> {{ item.readNum }} </span>
            <span> <icon-heart /> {{ item.likeNum }} </span>
            <span>
              <icon-message />
              {{ item._count?.comments }}
            </span>
          </p>
        </div>
      </li>
    </ul>
    <!-- 标签分类 -->
    <div>
      <p class="pl-4 py-2">
        {{ $t('blog.aside.tag.title') }}
      </p>
      <div class="flex flex-wrap gap-2 p-4">
        <span
          v-for="item in tagList"
          :key="item.tagName"
          @click="$router.replace({ query: { tag: item.tagName } })"
          class="g-tag"
        >
          {{ item.tagName }}
        </span>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { GetBlogListParams } from '@/api/blog'
import useBlogList from '@/hooks/useBlogList'
import Blog from '@/components/Blog.vue'
import TheFooter from '@/components/TheFooter.vue'
import { injectCommonData } from '../hooks/useCommonData'

const route = useRoute()
const { renderData, catList, fetchData, pagination } = useBlogList(6)
const { tagList, recommendList, initSearchAside } = injectCommonData()

const onPageChange = (current: number) => {
  fetchData({ current })
}

initSearchAside()

const filter = {} as Partial<GetBlogListParams>
if (route.query.type) {
  filter.typeName = route.query.type as string
}
if (route.query.tag) {
  filter.tags = (route.query.tag as string).split(',')
}
if (route.query.keyword) {
  filter.keyword = route.query.keyword as string
}
await fetchData(filter)
</script>
