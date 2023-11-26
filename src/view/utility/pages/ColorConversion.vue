<template>
  <div class="utility-form-row">
    <div class="utility-form-title-col">
      {{ $t('utility.ColorConversion.selectColor') }}
    </div>
    <a-input :error="!hexColorReg.test(color)" v-model="color" />
    <input type="color" class="w-full" v-model="color" />
  </div>

  <div class="utility-form-row">
    <div class="utility-form-title-col">
      {{ $t('utility.ColorConversion.selectTransparency') }}
    </div>
    <a-input-number
      :min="0"
      :max="1"
      :precision="2"
      v-model="transparency"
      model-event="input"
      hide-button
    />
    <a-slider :min="0" :max="1" :step="0.01" v-model="transparency" />
  </div>
  <!-- 结果展示 -->
  <div v-for="item in formats" :key="item.type" class="utility-form-row">
    <div class="utility-form-title-col">
      {{ item.type }}
      <div class="w-8 h-4" :style="{ backgroundColor: item.ref.value }"></div>
    </div>
    <a-typography-paragraph
      class="!mb-0 w-full break-all sm:col-span-7"
      copyable
    >
      {{ item.ref.value }}
    </a-typography-paragraph>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const hexColorReg = /^#[\da-fA-F]{6}$/

const color = ref<string>('#000000')
const transparency = ref<number>(1)

const wrap = (str: string) => {
  if (hexColorReg.test(color.value)) return str
  else return t('utility.ColorConversion.errorTip')
}

const rgbTuple = computed(() => {
  const res: [number, number, number] = [0, 0, 0]
  for (let i = 0; i < 3; i++) {
    res[i] = parseInt(color.value.slice(2 * i + 1, 2 * i + 3), 16)
  }
  return res
})

const hexString = computed(() => wrap(color.value))
const hex8String = computed(() =>
  wrap(
    `${color.value}${Math.floor(transparency.value * 255)
      .toString(16)
      .padStart(2, '0')}`
  )
)
const rgbString = computed(() => wrap(`rgb(${rgbTuple.value.join(', ')})`))
const rgbaString = computed(() =>
  wrap(`rgba(${[...rgbTuple.value, transparency.value].join(', ')})`)
)

const formats = [
  { type: 'hex', ref: hexString },
  { type: 'hex8', ref: hex8String },
  { type: 'rgb', ref: rgbString },
  { type: 'rgba', ref: rgbaString }
]
</script>
