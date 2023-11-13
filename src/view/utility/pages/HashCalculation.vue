<template>
  <section class="utility-item-card">
    <page-header />
    <!-- 输入栏 -->
    <div class="utility-form-row">
      <div class="utility-form-title-col">
        {{ $t('utility.common.input') }}
      </div>
      <a-textarea
        allow-clear
        class="sm:col-span-7"
        v-model:model-value="input"
        :auto-size="{ minRows: 1, maxRows: 5 }"
      />
    </div>
    <!-- 结果展示 -->
    <div v-for="method in methods" :key="method" class="utility-form-row">
      <div class="utility-form-title-col">{{ method }}</div>
      <a-typography-paragraph
        class="!mb-0 w-full break-all sm:col-span-7"
        copyable
      >
        {{ CryptoJS[method](input) }}
      </a-typography-paragraph>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CryptoJS from 'crypto-js'
import PageHeader from '../components/PageHeader.vue'

const input = ref<string>('')
const methods = ['MD5', 'SHA1', 'SHA3', 'SHA224', 'SHA256', 'SHA384', 'SHA512']
</script>
