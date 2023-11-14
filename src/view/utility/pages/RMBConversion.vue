<template>
  <section class="utility-item-card">
    <page-header />
    <!-- 输入栏 -->
    <div class="utility-form-row">
      <div class="utility-form-title-col">
        {{ $t('utility.common.input') }}
        <a-switch
          v-model="mode"
          checked-color="#ffb300"
          unchecked-color="#fd9b13"
          checked-value="lowerToUpper"
          unchecked-value="upperToLower"
          @change=";[input, result] = [result, input]"
        >
          <template #checked>
            {{ $t('utility.RMBConversion.lowercase') }}
          </template>
          <template #unchecked>
            {{ $t('utility.RMBConversion.uppercase') }}
          </template>
        </a-switch>
      </div>
      <a-textarea
        allow-clear
        class="sm:col-span-7"
        v-model:model-value="input"
        :auto-size="{ minRows: 1, maxRows: 5 }"
        @input="onInputChange"
      />
    </div>
    <!-- 结果展示 -->
    <div class="utility-form-row">
      <div class="utility-form-title-col">
        {{ $t('utility.common.result') }}
        <a-switch
          disabled
          v-model="mode"
          checked-color="#ffe5a7"
          unchecked-color="#ffc36f"
          checked-value="lowerToUpper"
          unchecked-value="upperToLower"
        >
          <template #checked>
            {{ $t('utility.RMBConversion.uppercase') }}
          </template>
          <template #unchecked>
            {{ $t('utility.RMBConversion.lowercase') }}
          </template>
        </a-switch>
      </div>
      <a-typography-paragraph class="!mb-0 sm:col-span-7" copyable>
        {{
          result === errorTip ? $t('utility.RMBConversion.errorTip') : result
        }}
      </a-typography-paragraph>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'

const input = ref<string>('')
const result = ref<string>('')
const mode = ref<'lowerToUpper' | 'upperToLower'>('lowerToUpper')

const dictionary = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
const integerUnit = ['元', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿']
const decimalUnit = ['角', '分', '厘']

const errorTip = 'ERROR'
const lowercaseReg = /^\d+(\.\d+)?$/

const lowerToUpper = (str: string) => {
  if (str === '') return ''
  if (!lowercaseReg.test(str)) return errorTip

  const [integer, decimal] = str.split('.')
  const res: string[] = []

  if (integer) {
    // 整数部分：从低向高读，将数字其对应的单位、大写数字放到结果中。单位使用单独的计数器
    let currentBit = 0
    for (const char of integer.split('').reverse()) {
      res.push(integerUnit[currentBit++], dictionary[Number(char)])
      if (currentBit === integerUnit.length) currentBit = 1
    }
    res.reverse()
    if (!decimal) res.push('整')
  }

  if (decimal) {
    let currentBit = 0
    for (const char of decimal.split('')) {
      if (decimalUnit[currentBit]) {
        res.push(dictionary[Number(char)], decimalUnit[currentBit++])
      }
    }
  }

  return res.join('')
}

const upperToLower = (str: string) => {
  if (str === '') return ''

  const [integer, decimal] = str.split(integerUnit[0])
  const res: string[] = []

  if (integer) {
    for (const char of integer) {
      const index = dictionary.indexOf(char)
      if (index !== -1) res.push(index.toString())
    }
  }

  if (decimal && !decimal.startsWith('整')) {
    res.push('.')
    for (const char of decimal) {
      const index = dictionary.indexOf(char)
      if (index !== -1) res.push(index.toString())
    }
  }

  // 人民币数额大写的正则好难写，这里取巧使用验算的方式验证输入是否合法
  if (lowerToUpper(res.join('')) !== str) return errorTip

  return res.join('')
}

const onInputChange = (str: string) => {
  if (mode.value === 'lowerToUpper') {
    result.value = lowerToUpper(str)
  } else if (mode.value === 'upperToLower') {
    result.value = upperToLower(str)
  }
}
</script>
