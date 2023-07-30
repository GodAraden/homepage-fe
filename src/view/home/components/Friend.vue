<template>
  <div>
    <div class="overflow-hidden">
      <!-- 友链 -->
      <page-title :title="$t('home.friend.title')" />
      <div
        style="height: 64vh"
        class="g-ref-bgc grid grid-cols-3 mt-4 mx-auto w-5/6 p-4 gap-2 shadow-2xl rounded-2xl"
      >
        <!-- 添加友链的说明 -->
        <div @click="visible = true" class="flink cursor-pointer">
          <div class="flink-logo-container">
            <icon-plus-circle class="flink-logo" />
          </div>
          <div
            style="width: calc(100% - 5rem)"
            class="g-main-center flex-col flex-1"
          >
            <p class="text-2xl font-black font-sans max-sm:hidden">
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
          class="flink"
        >
          <div class="flink-logo-container">
            <img :src="item.logo" :alt="item.title" class="flink-logo" />
          </div>
          <div
            style="width: calc(100% - 5rem)"
            class="g-main-center flex-col flex-1"
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

    <div id="footer" class="absolute bottom-0 w-screen">
      <the-footer />
    </div>

    <!-- 模态框，Arco 自带 Teleport -->
    <a-modal
      v-model:visible="visible"
      :footer="false"
      :width="isMobile ? '96vw' : '72vw'"
    >
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
import useScreenSize from '@/hooks/useScreenSize'

const visible = ref(false)
const { currentLocale } = useLocale()
const { isMobile } = useScreenSize()

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

.flink {
  @apply flex border h-20 p-2 rounded-lg overflow-hidden;
}
.flink-logo-container {
  @apply w-20 max-sm:flex max-sm:justify-center;
}
.flink-logo {
  @apply rounded-full w-16 h-16;
}

.flink:hover {
  @apply !bg-slate-500 text-white;
  div:first-of-type {
    @apply scale-0 w-0;
  }
}
</style>
