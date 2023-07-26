<template>
  <div>
    <div class="overflow-hidden">
      <!-- 友链 -->
      <page-title :title="$t('home.friend.title')" />
      <div
        style="height: 42vh"
        class="g-ref-bgc grid grid-cols-3 mt-2 mx-auto w-5/6 p-4 gap-2 shadow-2xl rounded-2xl overflow-y-scroll"
      >
        <a
          v-for="item in FriendLinks"
          :key="item.link"
          :href="item.link"
          target="_blank"
          :style="{ backgroundColor: item.color }"
          class="frind-link flex border h-20 p-2 rounded-lg overflow-hidden"
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

      <!-- 赞赏 -->
      <page-title style="margin-top: 2rem" :title="$t('home.support.title')" />
      <div
        style="height: 12vh"
        class="g-ref-bgc mt-2 mx-auto grid w-5/6 p-2 shadow-2xl rounded-2xl"
      >
      </div>
    </div>
    <the-footer class="bottom-0" />
  </div>
</template>

<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import PageTitle from './Base/Title.vue'
import { FriendLinks } from '@/utils/constants'
</script>

<style lang="less">
.frind-link,
.frind-link div,
.frind-link p {
  @apply transition-all;
  transition-duration: 0.6s;
}

.frind-link:hover {
  @apply !bg-slate-500 text-white;
  div:first-of-type {
    @apply scale-0 w-0;
  }
}
</style>
