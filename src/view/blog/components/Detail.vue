<template>
  <div class="g-ref-bgc flex-1 h-screen select-none overflow-y-scroll">
    <article class="g-ref-deep-bgc min-h-screen px-4 pt-20">
      <div class="flex flex-col cursor-default">
        <p class="text-4xl mt-1 mb-2">
          {{ blog?.title }}
        </p>
        <p class="text-xl">
          <span class="iconfont icon-rili"></span>
          {{ $t('blog.detail.title.postAt') }}
          {{ new Date(blog?.postAt).toLocaleDateString() }}
          &nbsp;
          <span class="iconfont icon-app_icons--"></span>
          {{ $t('blog.detail.title.updateAt') }}
          {{ new Date(blog?.updateAt).toLocaleDateString() }}
        </p>
        <span class="flex text-base gap-4">
          <span> <icon-apps /> {{ blog?.typeName }} </span>
          <span v-for="item in blog?.tag" :key="item.id">
            <icon-tag /> {{ item.tagName }}
          </span>
        </span>
        <p class="flex gap-5">
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
            <icon-heart />
            {{ $t('blog.detail.title.commentNum') }}
            {{ blog?._count?.comments }}
          </span>
        </p>
      </div>

      <v-md-preview :text="blog?.content"></v-md-preview>

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

    <div class="g-ref-bgc text-center p-4 text-xl"> 评论区正在施工中... </div>
    <the-footer></the-footer>
  </div>

  <aside
    class="g-ref-bgc w-64 h-full flex-shrink-0 select-none overflow-y-scroll"
  >
    <div class="h-16"> <!-- 占位用 --> </div>
    <div class="text-center mt-10 text-xl">目录正在施工中...</div>
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
    <div class="overflow-y-scroll" style="height: 72vh">
      <div class="grid grid-cols-2 gap-x-16 gap-y-2 mb-4">
        <div class="g-main-center">
          <img class="w-5/6" src="/alipay.png" alt="支付宝收款码" />
        </div>
        <div class="g-main-center">
          <img class="w-5/6" src="/wechatpay.png" alt="支付宝收款码" />
        </div>
        <span class="text-center">
          <icon-alipay-circle />
          {{ $t('blog.detail.support.alipay') }}
        </span>
        <span class="text-center">
          <icon-wechatpay />
          {{ $t('blog.detail.support.wechatpay') }}
        </span>
      </div>
      <p class="text-2xl text-center mb-2">
        {{ $t('blog.detail.support.description') }}
      </p>
      <v-md-preview :text="supportDescription"></v-md-preview>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { zhSupportDescription, enSupportDescription } from '@/utils/docs'
import { GetBlogByIdRes, getBlogById, likeBlog } from '@/api/blog'
import TheFooter from '@/components/TheFooter.vue'
import useScreenSize from '@/hooks/useScreenSize'
import useLocale from '@/hooks/useLocale'

const route = useRoute()
const blog = ref<GetBlogByIdRes>()

const { isMobile } = useScreenSize()
const { currentLocale } = useLocale()
const visible = ref(false)

getBlogById(route.query.id as string).then((val) => {
  blog.value = val
})

const onLikeBlog = async () => {
  blog.value.likeNum++
  await likeBlog(blog.value.id)
}

const supportDescription = computed(() => {
  switch (currentLocale.value) {
    case 'zh-CN':
      return zhSupportDescription
    case 'en-US':
      return enSupportDescription
  }
})
</script>
