<template>
  <a-list
    :scrollbar="false"
    :bordered="false"
    :max-height="420"
    :pagination-props="pagination"
    @page-change="onPageChange"
  >
    <a-list-item v-for="item in blogList" :key="item.id">
      <template #actions>
        <a-space size="large" class="cursor-default">
          <span><icon-apps /> {{ item.typeName }}</span>
          <span>
            <icon-tags /> {{ item.tags.map((v) => v.tagName).join(',') }}
          </span>
          <span><icon-eye /> {{ item.readNum }}</span>
          <span><icon-heart /> {{ item.likeNum }}</span>
          <span><icon-message /> {{ item._count.comments }}</span>

          <a-popconfirm
            content="确认要删除吗？"
            @ok="() => onDeleteBlog(item.id)"
          >
            <a-button status="danger" type="text">
              <template #icon>
                <icon-delete />
              </template>
            </a-button>
          </a-popconfirm>

          <a-popconfirm
            type="success"
            content="即将进入编辑界面"
            @ok="$router.push(`/write?id=${item.id}`)"
          >
            <a-button type="text">
              <template #icon>
                <icon-edit />
              </template>
            </a-button>
          </a-popconfirm>
        </a-space>
      </template>
      <a-list-item-meta :description="item.description">
        <template #title>
          <router-link :to="`/blog/${item.id}`"> {{ item.title }} </router-link>
        </template>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>

<script lang="ts" setup>
import { deleteBlog } from '@/api/blog'
import { injectFetchData } from '../hooks/useFetchData'

const { blogList, pagination, fetchBlogList } = injectFetchData()

const onPageChange = (page: number) => {
  pagination.value.current = page
  fetchBlogList({ current: page })
}

const onDeleteBlog = async (id: string) => {
  const res = await deleteBlog(id)
  if (!res) return
  blogList.value = blogList.value.filter((blog) => blog.id !== id)
}

fetchBlogList()
</script>
