<template>
  <main class="write">
    <a-card class="w-full rounded-2xl">
      <div class="write-header">
        <div class="write-form">
          <span class="g-perfect-center"> 标题 </span>
          <a-input v-model="blog.title" />

          <span class="g-perfect-center">作者 </span>
          <a-select v-model="blog.author" allow-create>
            <a-option v-for="user in author" :key="user">
              {{ user }}
            </a-option>
          </a-select>

          <span class="g-perfect-center">发布时间</span>
          <a-date-picker v-model="blog.postAt" />

          <span class="g-perfect-center">标签</span>
          <a-select
            v-model="blog.tags"
            multiple
            :max-tag-count="1"
            allow-create
          >
            <a-option v-for="item in tagList" :key="item.id">
              {{ item.tagName }}
            </a-option>
          </a-select>

          <span class="g-perfect-center">分类</span>
          <a-select v-model="blog.typeName" allow-create>
            <a-option v-for="item in typeList" :key="item.id">
              {{ item.typeName }}
            </a-option>
          </a-select>

          <span class="g-perfect-center"> 更新时间 </span>
          <a-date-picker v-model="blog.updateAt" />

          <div class="write-description">
            <span class="g-perfect-center">描述</span>
            <a-input v-model="blog.description" class="!w-full" />
          </div>
        </div>

        <a-divider direction="vertical"></a-divider>

        <a-col flex="84px" class="flex flex-col justify-evenly">
          <a-button type="primary" @click="onPostBlog">
            <template #icon> <icon-share-external /></template>
            {{ isUpdate ? '更新' : '发表' }}
          </a-button>
          <a-popconfirm
            content="确定要重置吗"
            position="left"
            @ok="onResetBlog"
          >
            <a-button>
              <template #icon> <icon-refresh /> </template> 重置
            </a-button>
          </a-popconfirm>
        </a-col>
      </div>

      <div class="!mt-4">
        <v-md-editor v-model="blog.content" height="58vh"></v-md-editor>
      </div>
    </a-card>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  CreateBlogParams,
  UpdateBlogParams,
  createBlog,
  updateBlog,
  getBlogById
} from '@/api/blog'
import useCategory from '@/hooks/useCategory'
import { Message } from '@arco-design/web-vue'

const blog = ref({} as CreateBlogParams)
const route = useRoute()
const router = useRouter()
const { typeList, tagList, initTagList, initTypeList } = useCategory()

let originalBlog: CreateBlogParams = null
const author = import.meta.env.VITE_APP_AUTHOR.split(',')

const isUpdate = !!route.query.id

const onPostBlog = async () => {
  if (isUpdate) {
    const params: UpdateBlogParams = {}
    for (const key in originalBlog) {
      if (key === 'tags') {
        // 在原来的基础上添加了哪些标签，删除了哪些标签
        const deleteTags = new Set(originalBlog.tags)
        const createTags = new Set(blog.value.tags)
        for (const tag of blog.value.tags) deleteTags.delete(tag)
        for (const tag of originalBlog.tags) createTags.delete(tag)
        if (deleteTags.size) params.deleteTags = Array.from(deleteTags)
        if (createTags.size) params.createTags = Array.from(createTags)
      } else if (blog.value[key] !== originalBlog[key]) {
        params[key] = blog.value[key]
      }
    }
    const res = await updateBlog(route.query.id as string, params)
    if (!res) return
    Message.success('更新成功')
    router.push('/blog')
  } else {
    const res = await createBlog(blog.value)
    if (!res) return
    Message.success('发表成功')
    router.push('/blog')
  }
}

const onResetBlog = () => {
  blog.value = {} as CreateBlogParams
}

const init = async () => {
  await Promise.all([initTagList(), initTypeList()])
  if (isUpdate) {
    const res = await getBlogById(route.query.id as string)
    const tags = res.tags.map((v) => v.tagName)
    delete res._count
    originalBlog = Object.assign({}, res, { tags: [...tags] })
    blog.value = Object.assign({}, res, { tags: [...tags] })
  }
}

init()
</script>

<style>
.write {
  @apply h-screen !pt-20 !pb-6;
  background-image: url(~/images/write.jpg);
}

.write-header {
  @apply flex;
}

.write-form {
  @apply grid flex-1 gap-4;
  grid-template-columns: repeat(3, 56px 1fr);
}

.write-description {
  @apply grid flex-1 gap-4 col-start-1 col-end-7;
  grid-template-columns: 56px 1fr;
}
</style>
