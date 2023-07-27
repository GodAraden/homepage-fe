<template>
  <div>
    <div class="overflow-hidden">
      <!-- 友链 -->
      <page-title :title="$t('home.friend.title')" />
      <div
        style="height: 64vh"
        class="g-ref-bgc grid grid-cols-3 mt-2 mx-auto w-5/6 p-4 gap-2 shadow-2xl rounded-2xl overflow-y-scroll"
      >
        <!-- 添加友链的说明 -->
        <div
          @click="visible = true"
          class="flink flex border h-20 p-2 rounded-lg overflow-hidden cursor-pointer"
        >
          <div class="w-20">
            <icon-plus-circle class="rounded-full w-16 h-16" />
          </div>
          <div
            style="width: calc(100% - 5rem)"
            class="flex flex-col flex-1 justify-center"
          >
            <p
              class="g-single-ellipsis text-2xl font-black font-sans"
              :title="$t('home.friend.add')"
            >
              {{ $t('home.friend.add') }}
            </p>
          </div>
        </div>

        <!-- 友链 list -->
        <a
          v-for="item in FriendLinks"
          :key="item.link"
          :href="item.link"
          target="_blank"
          :style="{ backgroundColor: item.color }"
          class="flink flex border h-20 p-2 rounded-lg overflow-hidden"
        >
          <div class="w-20">
            <img
              :src="item.logo"
              :alt="item.title"
              class="rounded-full w-16 h-16"
            />
          </div>
          <div
            style="width: calc(100% - 5rem)"
            class="flex flex-col flex-1 justify-center"
          >
            <p
              class="g-single-ellipsis text-lg font-black font-sans"
              :title="item.title"
            >
              {{ item.title }}
            </p>
            <p class="g-single-ellipsis text-base" :title="item.description">
              {{ item.description }}
            </p>
          </div>
        </a>
      </div>
    </div>
    <the-footer class="bottom-0" />

    <!-- 模态框，Arco 自带 Teleport -->
    <a-modal v-model:visible="visible" :footer="false" width="72vw">
      <template #title>
        <span class="text-xl font-black">
          {{ $t('home.friend.add.title') }}
        </span>
      </template>
      <v-md-preview
        :text="addFlinkDescription"
        :style="{ height: '72vh' }"
        class="overflow-y-scroll"
      ></v-md-preview>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PageTitle from './Base/Title.vue'
import TheFooter from '@/components/TheFooter.vue'
import { FriendLinks } from '@/utils/constants'
import { zhAddFlinkDescription, enAddFlinkDescription } from '@/utils/docs'
import useLocale from '@/hooks/useLocale'

const visible = ref(false)
const { currentLocale } = useLocale()

const addFlinkDescription = computed(() => {
  switch (currentLocale.value) {
    case 'zh-CN':
      return zhAddFlinkDescription
    case 'en-US':
      return enAddFlinkDescription
  }
})
</script>

<style lang="less">
.flink,
.flink div,
.flink p {
  @apply transition-all;
  transition-duration: 0.6s;
}

.flink:hover {
  @apply !bg-slate-500 text-white;
  div:first-of-type {
    @apply scale-0 w-0;
  }
}
</style>
