<template>
  <div class="h-16 flex backdrop-blur bg-slate-700 bg-opacity-20 shadow-md">
    <a href="/" class="flex items-center w-96">
      <img src="/logo.svg" alt="" class="h-12" />
      <a-typography-title
        :heading="4"
        class="!mb-0 ml-2"
        style="font-family: DaKai_For_Title"
      >
        {{ $t(`header.title`) }}
      </a-typography-title>
    </a>

    <ul class="flex flex-1 justify-between items-center text-lg font-black">
      <li
        v-for="item in appRoutes.filter((route) => !route.meta.requiresAuth)"
        :key="item.path"
      >
        <router-link :to="item.path">
          <icon-font :type="item.meta.icon" />
          <span class="ml-1"> {{ $t(`header.navbar.${item.name}`) }} </span>
        </router-link>
      </li>
    </ul>

    <div class="flex w-96 items-center justify-end">
      <icon-user /><icon-down :size="12" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@arco-design/web-vue'
import { appRoutes } from '@/router/routes'

const IconFont = Icon.addFromIconFontCn({ src: import.meta.env.VITE_ALI_CDN })
</script>

<style lang="less" scoped>
.navbar-btn {
  &:hover {
    color: rgb(var(--arcoblue-6));
  }
}
</style>
