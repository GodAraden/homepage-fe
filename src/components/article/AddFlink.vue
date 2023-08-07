<template>
  <v-md-preview
    :text="addFlinkDescription"
    :style="{ height: '72vh' }"
    class="overflow-y-scroll"
  ></v-md-preview>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useLocale from '@/hooks/useLocale'
import { zhAddFlinkDescription, enAddFlinkDescription } from '@/locale/docs'

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
