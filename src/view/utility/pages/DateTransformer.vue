<template>
  <a-typography-title :heading="5" class="text-center">
    {{
      $t('utility.DateTransformer.dateRange', { span: end.diff(start, 'day') })
    }}
  </a-typography-title>

  <div class="flex justify-center gap-2 text-center items-center">
    <section class="w-36">
      <a-typography-title :heading="6">
        {{ $t('utility.DateTransformer.start') }}
      </a-typography-title>
      <a-typography-paragraph copyable>
        {{ start.format(DateFormatter) }}
      </a-typography-paragraph>
      <a-input
        size="small"
        search-button
        @press-enter="(ev) => move((ev.target as HTMLInputElement).value, 'start')"
      >
        <template #prefix>
          {{ $t('utility.DateTransformer.move') }}
        </template>
        <template #button-icon><icon-play-arrow /></template>
        <template #suffix>
          {{ $t('utility.DateTransformer.day') }}
        </template>
      </a-input>
    </section>
    <a-range-picker
      v-if="!isRefresh"
      hide-trigger
      class="flex-1"
      :day-start-of-week="beginOfWeek"
      :model-value="range"
      @change="onChange"
    />
    <section class="w-36">
      <a-typography-title :heading="6" class="text-center">
        {{ $t('utility.DateTransformer.end') }}
      </a-typography-title>
      <a-typography-paragraph copyable>
        {{ end.format(DateFormatter) }}
      </a-typography-paragraph>
      <a-input
        size="small"
        search-button
        @press-enter="(ev) => move((ev.target as HTMLInputElement).value, 'end')"
      >
        <template #prefix>
          {{ $t('utility.DateTransformer.move') }}
        </template>
        <template #button-icon><icon-play-arrow /></template>
        <template #suffix>
          {{ $t('utility.DateTransformer.day') }}
        </template>
      </a-input>
    </section>
  </div>

  <p class="text-center mt-2 text-lg">
    {{ $t('utility.common.operation') }}:
    <a-space>
      <template #split>
        <a-divider direction="vertical" />
      </template>
      <a-button size="small" type="secondary" @click="onReset">
        <template #icon><icon-refresh /></template>
        {{ $t('utility.common.reset') }}
      </a-button>
      <a-select size="small" v-model="beginOfWeek">
        <template #prefix>
          {{ $t('utility.DateTransformer.beginOfWeek') }}
        </template>
        <a-option :value="1">
          {{ $t('utility.DateTransformer.Monday') }}
        </a-option>
        <a-option :value="0">
          {{ $t('utility.DateTransformer.Sunday') }}
        </a-option>
      </a-select>
    </a-space>
  </p>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import dayjs from 'dayjs'
import { useI18n } from 'vue-i18n'
import useRefresh from '@/hooks/useRefresh'
import { showWarnTip } from '@/utils/tools'

const DateFormatter = 'YYYY-MM-DD'

const { t } = useI18n()
const beginOfWeek = ref<0 | 1>(1)
const { isRefresh, refresh } = useRefresh()

const start = ref(dayjs())
const end = ref(dayjs().add(1, 'day'))
const range = computed(() => {
  return [start.value, end.value].map((date) => date.format(DateFormatter))
})

const moveMethods = {
  start(offset: number) {
    if (dayjs(start.value).add(offset, 'day').diff(end.value) <= 0) {
      start.value = start.value.add(offset, 'day')
    } else {
      showWarnTip(t('utility.DateTransformer.move.rangeWarning.start'))
    }
  },
  end(offset: number) {
    if (dayjs(end.value).add(offset, 'day').diff(start.value, 'day') >= 0) {
      end.value = end.value.add(offset, 'day')
    } else {
      showWarnTip(t('utility.DateTransformer.move.rangeWarning.end'))
    }
  }
}

const move = (input: string, target: keyof typeof moveMethods) => {
  const offset = Number(input)
  if (!Number.isInteger(offset)) return
  moveMethods[target](offset)
  refresh()
}

const onChange = ([newStart, newEnd]: [string, string]) => {
  start.value = dayjs(newStart)
  end.value = dayjs(newEnd)
}

const onReset = () => {
  start.value = dayjs()
  end.value = dayjs().add(1, 'day')
  refresh()
}
</script>
