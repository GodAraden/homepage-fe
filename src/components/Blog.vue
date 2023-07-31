<template>
  <div
    class="blog-card relative rounded-xl bg-cover bg-no-repeat cursor-pointer"
    :style="{ backgroundImage: `url(${url})` }"
    @click="$router.push(`/blog/detail?id=${blog?.id}`)"
  >
    <!-- 左上角的分类标签 -->
    <div
      class="g-tag absolute top-3 left-3"
      @click.stop="$router.push(`/blog/search?type=${blog?.typeName}`)"
    >
      <icon-apps />{{ blog?.typeName }}
    </div>
    <!-- 下方的博客摘要 -->
    <div class="g-ref-bgc blog-abstract absolute bottom-0 w-full">
      <div class="flex flex-col py-4 px-9">
        <span class="g-single-ellipsis text-xl font-black" :title="blog?.title">
          {{ blog?.title }}
        </span>
        <p class="g-single-ellipsis" :title="blog?.description">
          {{ blog?.description }}
        </p>
        <span class="whitespace-nowrap">
          <span class="iconfont icon-rili"></span>
          {{ $t('home.recent.col.postAt') }}
          {{ new Date(blog?.postAt).toLocaleDateString() }}
          &nbsp;
          <span class="iconfont icon-app_icons--"></span>
          {{ $t('home.recent.col.updateAt') }}
          {{ new Date(blog?.updateAt).toLocaleDateString() }}
        </span>
        <span class="flex gap-2 cursor-pointer">
          <span
            v-for="item in blog?.tag"
            :key="item.id"
            class="g-link"
            @click.stop="$router.push(`/blog/search?tag=${item.tagName}`)"
          >
            <icon-tag /> {{ item.tagName }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlogListItem } from '@/api/blog'

defineProps<{
  url?: string
  blog?: BlogListItem
}>()
</script>

<style>
.blog-card:hover .blog-abstract:last-of-type {
  @apply h-5/6 !rounded-xl;
}

.blog-card:hover .g-single-ellipsis {
  text-overflow: initial;
  white-space: normal;
  overflow: auto;
}

.blog-abstract {
  @apply h-2/5 rounded-xl rounded-t-none;
  transition: all 0.5s ease-in-out;
}
</style>
