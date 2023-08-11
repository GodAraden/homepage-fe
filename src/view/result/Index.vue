<template>
  <main id="result" class="h-screen !py-24">
    <a-result :status="status" class="g-ref-bgc rounded-xl">
      <template #subtitle>
        {{ $t(`result.${status}.subtitle`) }} {{ $route.query.path }}
      </template>

      <template #extra>
        <a-button type="primary" @click="$router.push('/')">
          {{ $t('result.generic.backToHome') }}
        </a-button>
      </template>
      <a-typography style="background: var(--color-fill-2); padding: 24px">
        <a-typography-paragraph>
          {{ $t('result.generic.tips') }}
        </a-typography-paragraph>
        <ul>
          <li> {{ $t(`result.${status}.tip1`) }} </li>
          <li> {{ $t(`result.${status}.tip2`) }} </li>
        </ul>
      </a-typography>
    </a-result>
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const status = computed(() => route.query.status as any) // 防止 TS 报错
</script>
