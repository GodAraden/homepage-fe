<template>
  <!-- PC -->
  <p class="text-center">
    <a-menu mode="horizontal" :selected-keys="null">
      <router-link v-for="item in appRoutes" :key="item.path" :to="item.path">
        <a-menu-item :key="item.path">
          <icon-font :type="item.meta.icon" class="!mr-1" />
          {{ $t(`header.navbar.${item.name}`) }}
        </a-menu-item>
      </router-link>
    </a-menu>
  </p>
</template>

<script setup lang="ts">
import { Icon } from '@arco-design/web-vue'
import { appRoutes } from '@/router/routes'

const IconFont = Icon.addFromIconFontCn({ src: import.meta.env.VITE_ALI_CDN })
</script>

<style scoped></style>
