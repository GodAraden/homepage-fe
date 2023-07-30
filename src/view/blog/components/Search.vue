<template>
  <div class="g-ref-bgc flex-1 h-screen overflow-y-scroll">
    <article class="g-ref-deep-bgc min-h-screen pt-16">
      {{ type }}
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
            <icon-heart /> {{ item.likeNum }} &nbsp; <icon-eye />
            {{ item.readNum }}
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
import { ref } from 'vue'
import { findAllTag } from '@/api/tag'
import { BlogListItem, getBlogList } from '@/api/blog'

defineProps<{
  type: string
}>()

const tagList = ref<Tag[]>([])
const recommendList = ref<BlogListItem[]>([])

const init = async () => {
  tagList.value = await findAllTag()
  recommendList.value = (
    await getBlogList({ current: 1, pageSize: 5, orderBy: 'readNum' })
  ).data
}

init()
</script>
