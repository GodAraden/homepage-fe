<template>
  <a-config-provider :locale="locale">
    <the-header />

    <router-view class="main" v-slot="{ Component, route }">
      <transition name="page" mode="out-in" appear>
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </router-view>

    <the-footer />
  </a-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn'
import enUS from '@arco-design/web-vue/es/locale/lang/en-us'

import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import useLocale from '@/hooks/useLocale'

const { currentLocale } = useLocale()

const locale = computed(() => {
  switch (currentLocale.value) {
    case 'zh-CN':
      return zhCN
    case 'en-US':
      return enUS
  }
})
</script>

<style>
.main {
  flex: 1;
}
</style>
