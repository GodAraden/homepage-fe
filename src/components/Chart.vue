<template>
  <VCharts
    v-if="renderChart"
    :option="options"
    :autoresize="autoResize"
    :style="{ width, height }"
    :theme="currentTheme === 'dark' ? 'dark' : ''"
  />
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import VCharts from 'vue-echarts'
import useTheme from '@/hooks/useTheme'

defineProps({
  options: {
    type: Object,
    default() {
      return {}
    }
  },
  autoResize: {
    type: Boolean,
    default: true
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  }
})

// FIXME: 切换主题时热力图的主题不会立即切换
const { currentTheme } = useTheme()

const renderChart = ref(false)

nextTick(() => {
  renderChart.value = true
})
</script>
