<template>
  <a-typography-title :heading="5" class="text-center">
    {{
      $t('utility.DateTransformer.dateRange', {
        span: dayjs(data[1]).diff(dayjs(data[0]), 'day')
      })
    }}
  </a-typography-title>
  <div class="sm:flex gap-2 text-center">
    <section class="w-36">
      <a-typography-title :heading="6">
        {{ $t('utility.DateTransformer.start') }}
      </a-typography-title>
      <a-typography-paragraph copyable>
        {{ data[0] }}
      </a-typography-paragraph>
    </section>
    <a-range-picker hide-trigger v-model="data" class="flex-1" />
    <section class="w-36">
      <a-typography-title :heading="6" class="text-center">
        {{ $t('utility.DateTransformer.end') }}
      </a-typography-title>
      <a-typography-paragraph copyable>
        {{ data[1] }}
      </a-typography-paragraph>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'

const DateFormatter = 'YYYY-MM-DD'

const data = ref<[string, string]>([
  dayjs().format(DateFormatter),
  dayjs().add(1, 'day').format(DateFormatter)
])
</script>
