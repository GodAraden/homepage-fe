<template>
  <a-config-provider :locale="locale">
    header
    <router-view />
    footer
  </a-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn'
import zhTW from '@arco-design/web-vue/es/locale/lang/zh-tw'
import enUS from '@arco-design/web-vue/es/locale/lang/en-us'
import useLocale from '@/hooks/useLocale'

const { currentLocale } = useLocale()

const locale = computed(() => {
  switch (currentLocale.value) {
    case 'zh-CN':
      return zhCN
    case 'zh-TW':
      return zhTW
    case 'en-US':
      return enUS
  }
})
</script>
