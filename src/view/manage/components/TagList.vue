<template>
  <a-list :scrollbar="false" :bordered="false" :max-height="460">
    <a-list-item v-for="item in tagList" :key="item.id">
      <a-list-item-meta>
        <template #title>
          <a-input-search
            v-if="updateId === item.id"
            search-button
            v-model="item.tagName"
            @search="() => onUpdateTag(item.id, item.tagName)"
            @press-enter="() => onUpdateTag(item.id, item.tagName)"
          >
            <template #button-icon> <icon-upload /> </template>
            <template #button-default> 更新 </template>
          </a-input-search>
          <span v-else> {{ item.tagName }} </span>
        </template>
      </a-list-item-meta>

      <template #actions>
        <a-popconfirm content="确认要删除吗？" @ok="() => onDeleteTag(item.id)">
          <a-button status="danger" type="text">
            <template #icon>
              <icon-delete />
            </template>
          </a-button>
        </a-popconfirm>

        <a-button
          type="text"
          @click="updateId = updateId === item.id ? -1 : item.id"
        >
          <template #icon>
            <icon-edit />
          </template>
        </a-button>
      </template>
    </a-list-item>
  </a-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { deleteTag, updateTag } from '@/api/tag'
import { injectFetchData } from '../hooks/useFetchData'

const updateId = ref(-1)
const { tagList, initTagList } = injectFetchData()

const onUpdateTag = async (id: number, tagName: string) => {
  updateId.value = -1
  const res = await updateTag(id, { tagName })
  if (!res) return
}

const onDeleteTag = async (id: number) => {
  const res = await deleteTag(id)
  if (!res) return
  tagList.value = tagList.value.filter((tag) => tag.id !== id)
}

initTagList()
</script>
