<template>
  <div class="g-ref-bgc flex-1 h-screen overflow-y-scroll">
    <article class="g-ref-deep-bgc min-h-screen p-4 pt-20">
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
  </div>

  <aside
    class="g-ref-bgc w-64 h-full flex-shrink-0 select-none overflow-y-scroll"
  >
    <div class="h-16"> <!-- 占位用 --> </div>
    <!-- 文章推荐 -->
    <ul class="h-80 p-4">
      <li> {{ $t('blog.aside.recommend.title') }} </li>
      <li v-for="item in recommendList" :key="item.id" class="flex">
        <div class="w-14 h-14 p-1">
          <img
            :src="`https://cravatar.cn/avatar/${item.id}?d=robohash`"
            class="rounded"
          />
        </div>
        <div class="g-main-center flex-col p-1">
          <p
            class="g-single-ellipsis g-link"
            @click="
              $router.push({
                path: 'detail',
                query: { id: item.id }
              })
            "
          >
            {{ item.title }}
          </p>
          <p>
            <icon-eye /> {{ item.readNum }}
            &nbsp;
            <icon-heart /> {{ item.likeNum }}
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
import Blog from '@/components/Blog.vue'
import { injectCommonData } from '../hooks/useCommonData'
import { provideListData } from '../hooks/useListData'

const { tagList, recommendList, initSearchAside } = injectCommonData()
const { renderData, catList, pagination, onPageChange } = provideListData()

initSearchAside()
</script>