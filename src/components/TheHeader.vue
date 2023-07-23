<template>
  <div class="h-16 flex backdrop-blur">
    <a href="/" class="flex items-center w-64">
      <img src="/logo.svg" alt="" class="h-12" />
      <a-typography-title
        :heading="4"
        class="mb-0 ml-2 text-gray-200"
        style="font-family: DaKai_For_Title"
      >
        {{ $t(`header.title`) }}
      </a-typography-title>
    </a>
    <a-menu
      mode="horizontal"
      :default-selected-key="['/']"
      class="flex flex-1 items-center justify-center"
    >
      <router-link
        v-for="item in appRoutes.filter((route) => !route.meta.requiresAuth)"
        :key="item.path"
        :to="item.path"
      >
        <a-menu-item
          :key="item.path"
          class="mr-2 font-black hover:bg-transparent navbar-btn"
        >
          <icon-font :type="item.meta.icon" />
          <span class="-ml-2"> {{ $t(`header.navbar.${item.name}`) }} </span>
        </a-menu-item>
      </router-link>
    </a-menu>
    <div class="flex w-64 items-center justify-end">
      <a-dropdown :popup-max-height="false" position="br" class="w-96">
        <a-button type="outline" size="large" shape="circle">
          <template #icon><icon-user /><icon-down :size="12" /></template>
        </a-button>
        <template #content>
          <a-form :model="form" class="user-panel">
            <a-form-item field="name" label="Username">
              <a-input />
            </a-form-item>
            <a-form-item field="post" label="Post">
              <a-input />
            </a-form-item>
            <a-form-item>
              <a-button html-type="submit">Submit</a-button>
            </a-form-item>
          </a-form>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@arco-design/web-vue'
import { appRoutes } from '@/router/routes'
import { reactive } from 'vue'

const IconFont = Icon.addFromIconFontCn({ src: import.meta.env.VITE_ALI_CDN })

const form = reactive({
  name: '',
  post: ''
})
</script>

<style lang="less" scoped>
.navbar-btn {
  &:hover {
    color: rgb(var(--arcoblue-6));
  }
}

:deep(.arco-menu-overflow-wrap) {
  text-align: center;
}

:deep(.arco-dropdown) {
  background-color: transparent !important;
  border: none;
  background-color: rgba(0, 0, 0, 0.14);
}
</style>
