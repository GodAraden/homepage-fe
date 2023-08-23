<template>
  <a-list :scrollbar="true" :bordered="false" :max-height="460">
    <a-list-item v-for="item in typeList" :key="item.id">
      <a-list-item-meta
        :description="`此分类下共有 ${item._count.blogs} 条博客`"
      >
        <template #title>
          <a-input-search
            v-if="updateId === item.id"
            search-button
            v-model="item.typeName"
            @search="() => onUpdateType(item.id, item.typeName)"
            @press-enter="() => onUpdateType(item.id, item.typeName)"
          >
            <template #button-icon> <icon-upload /> </template>
            <template #button-default> 更新 </template>
          </a-input-search>
          <span v-else> {{ item.typeName }} </span>
        </template>
      </a-list-item-meta>

      <template #actions>
        <a-popconfirm
          content="确认要删除吗？"
          @ok="() => onDeleteType(item.id)"
        >
          <a-button
            status="danger"
            type="text"
            :disabled="item._count.blogs !== 0"
          >
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
import { deleteType, updateType } from '@/api/type'
import { injectFetchData } from '../hooks/useFetchData'

const updateId = ref(-1)
const { typeList, initTypeList } = injectFetchData()

const onUpdateType = async (id: number, typeName: string) => {
  updateId.value = -1
  const res = await updateType(id, { typeName })
  if (!res) return
}

const onDeleteType = async (id: number) => {
  const res = await deleteType(id)
  if (!res) return
  typeList.value = typeList.value.filter((type) => type.id !== id)
}

initTypeList()
</script>
