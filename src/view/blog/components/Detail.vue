<template>
  <section class="g-ref-bgc flex-1 h-screen select-none overflow-y-scroll">
    <article class="g-ref-deep-bgc flex flex-col px-4 pt-20 min-h-screen">
      <div class="flex flex-col cursor-default">
        <p class="text-4xl mt-1 mb-2">
          {{ blog?.title }}
          <span
            v-permission="['admin']"
            class="text-2xl cursor-pointer"
            @click="$router.push(`/write?id=${blog?.id}`)"
          >
            <icon-pen-fill />
          </span>
        </p>
        <p class="flex flex-wrap gap-x-6 text-xl">
          <span>
            <span class="iconfont icon-rili"></span>
            {{ $t('blog.detail.title.postAt') }}
            {{ new Date(blog?.postAt).toLocaleDateString() }}
          </span>
          <span>
            <span class="iconfont icon-app_icons--"></span>
            {{ $t('blog.detail.title.updateAt') }}
            {{ new Date(blog?.updateAt).toLocaleDateString() }}
          </span>
        </p>
        <span class="flex flex-wrap gap-x-4 text-base">
          <span> <icon-apps /> {{ blog?.typeName }} </span>
          <span v-for="item in blog?.tags" :key="item.id">
            <icon-tag /> {{ item.tagName }}
          </span>
        </span>
        <p class="flex flex-wrap gap-x-5">
          <span>
            <icon-user />
            {{ $t('blog.detail.title.author') }}
            {{ blog?.author }}
          </span>
          <span>
            <icon-eye />
            {{ $t('blog.detail.title.readNum') }}
            {{ blog?.readNum }}
          </span>
          <span>
            <icon-heart />
            {{ $t('blog.detail.title.likeNum') }}
            {{ blog?.likeNum }}
          </span>
          <span>
            <icon-message />
            {{ $t('blog.detail.title.commentNum') }}
            {{ blog?._count?.comments }}
          </span>
        </p>
      </div>

      <div class="blog-description">
        {{ blog?.description }}
      </div>

      <v-md-preview
        class="blog-preview flex-1 select-text"
        :text="blog?.content"
      ></v-md-preview>

      <div class="g-main-center gap-16 pb-4">
        <div
          class="g-tag gap-2 p-1 !px-2 !rounded-full"
          style="background-color: #c0a46b"
          @click="visible = true"
        >
          <icon-thunderbolt />
          {{ $t('blog.detail.function.support') }}
        </div>
        <div class="g-tag gap-2 p-1 !px-2 !rounded-full" @click="onLikeBlog">
          <icon-thumb-up />
          {{ $t('blog.detail.function.like', { likeNum: blog?.likeNum }) }}
        </div>
      </div>
    </article>

    <div class="g-ref-bgc text-center p-4 text-xl">
      {{ $t('blog.detail.comments.title') }}
    </div>
    <the-footer></the-footer>
  </section>

  <aside
    class="g-ref-bgc w-64 h-full flex-shrink-0 select-none overflow-y-scroll max-md:hidden"
  >
    <div class="h-16 pl-2 pl-4 pl-6 pl-8 pl-10 pl-12">
      <!-- 占位符，同时添加一堆 pl-x 保证 tailwind 打包产物中有这些，不会让下面的动态类名失效 -->
    </div>
    <ul class="mt-4 p-1">
      <li class="mb-1 text-lg font-black">
        {{ $t('blog.detail.directory.title') }}
      </li>
      <li v-if="directory.length === 0" class="pl-2">
        {{ $t('blog.detail.directory.none') }}
      </li>
      <li
        v-for="item in directory"
        :key="item.id"
        :class="`mb-1 pl-${2 * item.tab} cursor-pointer hover:text-amber-500`"
        @click="item.onClick"
      >
        {{ item.title }}
      </li>
    </ul>
  </aside>

  <a-modal
    v-model:visible="visible"
    :footer="false"
    :width="isMobile ? '96vw' : '72vw'"
  >
    <template #title>
      <span class="text-xl font-black">
        {{ $t('blog.detail.support.title') }}
      </span>
    </template>
    <support />
  </a-modal>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { GetBlogByIdRes, getBlogById, likeBlog } from '@/api/blog'
import TheFooter from '@/components/TheFooter.vue'
import Support from '@/components/article/Support.vue'
import useScreenSize from '@/hooks/useScreenSize'

interface DirectoryItem {
  id: string // 来源为 MdEditor 生成的自定义属性，用作 key
  title: string
  tab: number
  onClick: () => void
}

const route = useRoute()
const blog = ref<GetBlogByIdRes>()
const { isMobile } = useScreenSize()

const visible = ref(false)
const directory = ref<DirectoryItem[]>([])

const onLikeBlog = async () => {
  if (!blog.value) return
  blog.value.likeNum++
  await likeBlog(blog.value.id)
}

blog.value = await getBlogById(route.params.blogId as string)

// 页面加载完毕，生成目录结构
onMounted(() => {
  for (const title of document.querySelectorAll(
    '.github-markdown-body *[data-v-md-heading]'
  )) {
    directory.value.push({
      id: title.getAttribute('data-v-md-line'),
      title: title.innerHTML,
      tab: parseInt(title.tagName.split('H')[1]),
      onClick: () => {
        title.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    })
  }
})
</script>

<style lang="less">
.blog-description {
  @apply relative px-6 py-4 text-center mt-2;
  &::before,
  &::after {
    @apply block absolute text-2xl;
  }
  &::before {
    @apply left-0 top-0;
    content: '“';
  }
  &::after {
    @apply right-0 -bottom-2;
    content: '”';
  }
}

.blog-preview .github-markdown-body {
  padding-left: 0;
  padding-right: 0;
}
</style>
