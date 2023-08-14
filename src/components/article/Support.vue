<template>
  <div class="overflow-y-scroll" style="height: 72vh">
    <div class="grid grid-cols-2 gap-x-16 gap-y-2 mb-4">
      <div class="g-main-center">
        <img class="w-5/6" src="/alipay.png" alt="支付宝收款码" />
      </div>
      <div class="g-main-center">
        <img class="w-5/6" src="/wechatpay.png" alt="支付宝收款码" />
      </div>
      <span class="text-center">
        <icon-alipay-circle />
        {{ $t('blog.detail.support.alipay') }}
      </span>
      <span class="text-center">
        <icon-wechatpay />
        {{ $t('blog.detail.support.wechatpay') }}
      </span>
    </div>
    <p class="text-2xl text-center mb-2">
      {{ $t('blog.detail.support.description') }}
    </p>
    <v-md-preview :text="supportDescription"></v-md-preview>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { zhSupportDescription, enSupportDescription } from '@/locale/docs'
import { useLocaleStore } from '@/store'

const localeStore = useLocaleStore()

const supportDescription = computed(() => {
  switch (localeStore.currentLocale) {
    case 'zh-CN':
      return zhSupportDescription
    case 'en-US':
      return enSupportDescription
  }
})
</script>
