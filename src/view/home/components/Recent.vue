<template>
  <div class="overflow-hidden">
    <page-title :title="$t('home.recent.title')" />
    <div class="grid grid-cols-2 w-full mt-4 gap-4">
      <div
        v-for="(item, idx) in blogList"
        :key="item.id"
        class="relative flex-1 h-96 rounded-xl bg-cover bg-no-repeat cursor-pointer"
        :style="{ backgroundImage: `url(${catList?.[idx].url})` }"
        @click="$router.push(`/blog/${item.id}`)"
      >
        <div
          class="g-perfect-center absolute top-3 left-3 px-1 rounded text-white font-black bg-slate-700 bg-opacity-60 cursor-pointer hover:bg-amber-500"
          @click.stop="$router.push(`/blog?type=${item.typeName}`)"
        >
          <icon-apps />{{ item.typeName }}
        </div>

        <div
          class="g-ref-bgc absolute bottom-0 w-full rounded-xl rounded-t-none"
        >
          <div class="flex flex-col py-4 px-9">
            <span class="text-xl font-black">
              {{ item.title }}
            </span>
            <span class="g-single-ellipsis" :title="item.description">
              {{ item.description }}
            </span>
            <span class="whitespace-nowrap">
              <span class="iconfont icon-rili"></span>
              {{ $t('home.recent.col.postAt') }}
              {{ new Date(item.postAt).toLocaleDateString() }}
              &nbsp;
              <span class="iconfont icon-app_icons--"></span>
              {{ $t('home.recent.col.updateAt') }}
              {{ new Date(item.updateAt).toLocaleDateString() }}
            </span>
            <span class="flex gap-2 cursor-pointer">
              <span
                v-for="tag in item.tag"
                :key="tag.id"
                class="hover:text-amber-500"
                @click.stop="$router.push(`/blog?tag=${tag.tagName}`)"
              >
                <icon-tag /> {{ tag.tagName }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageTitle from './Base/Title.vue'
import { getBlogList, GetBlogListRes } from '@/api/blog'
import { CatListItem, getCatList } from '@/api/cat'

const blogList = ref<GetBlogListRes['data']>()
const catList = ref<CatListItem[]>()

const init = async (blogCount: number = 3) => {
  blogList.value = (await getBlogList({ current: 1, pageSize: blogCount })).data
  catList.value = await getCatList(blogCount)
}

init(2)
</script>
