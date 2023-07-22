<template>
  <a-config-provider :locale="locale">
    <a-button @click="changeTheme">
      <!-- FIXME: 测试用代码 -->
      <template #icon>
        <icon-computer v-if="currentTheme === 'auto'" />
        <icon-sun-fill v-if="currentTheme === 'light'" />
        <icon-moon-fill v-if="currentTheme === 'dark'" />
      </template>
      {{ currentTheme }}
    </a-button>
    <router-view />
  </a-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn'
import enUS from '@arco-design/web-vue/es/locale/lang/en-us'
import useLocale from '@/hooks/useLocale'
import useTheme from '@/hooks/useTheme'

const { currentLocale } = useLocale()
const { currentTheme, changeTheme } = useTheme()

const locale = computed(() => {
  switch (currentLocale.value) {
    case 'zh-CN':
      return zhCN
    case 'en-US':
      return enUS
  }
})
</script>
