<template>
  <v-md-preview
    :text="addFlinkDescription"
    :style="{ height: '72vh' }"
    class="overflow-y-scroll"
  ></v-md-preview>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { zhAddFlinkDescription, enAddFlinkDescription } from '@/locale/docs'
import { useLocaleStore } from '@/store'

const localeStore = useLocaleStore()

const addFlinkDescription = computed(() => {
  switch (localeStore.currentLocale) {
    case 'zh-CN':
      return zhAddFlinkDescription
    case 'en-US':
      return enAddFlinkDescription
  }
})
</script>
