<template>
  <div class="g-ref-bgc flex-1 h-screen overflow-y-scroll">
    <div class="grid grid-cols-3 grid-rows-2 h-full pt-20 pb-28 px-4">
      <div
        class="stat-chart col-span-2"
        style="border-right: 1px solid rgba(233, 233, 233, 0.8)"
      >
        <span>{{ $t('blog.stat.heatMapOption.title') }}</span>
        <Chart ref="chartRef" class="flex-1" :option="heatMapOption" />
      </div>
      <div class="stat-chart">
        <span>{{ $t('blog.stat.radarOption.title') }}</span>
        <Chart ref="chartRef" class="flex-1" :option="radarOption" />
      </div>
      <div
        class="stat-chart"
        style="border-right: 1px solid rgba(233, 233, 233, 0.8)"
      >
        <span>{{ $t('blog.stat.lineOption.title') }}</span>
        <Chart ref="chartRef" class="flex-1" :option="lineOption" />
      </div>
      <div
        class="stat-chart"
        style="border-right: 1px solid rgba(233, 233, 233, 0.8)"
      >
        <span>{{ $t('blog.stat.pieOption.title') }}</span>
        <Chart ref="chartRef" class="flex-1" :option="pieOption" />
      </div>
      <div class="stat-chart">
        <span>{{ $t('blog.stat.directOption.title') }}</span>
        <Chart ref="chartRef" class="flex-1" :option="directOption" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getBlogStats } from '@/api/blog'

const heatMapOption = ref({})
const radarOption = ref({})
const lineOption = ref({})
const pieOption = ref({})
const directOption = ref({})

getBlogStats().then((res) => {
  if (!res) return
  heatMapOption.value = {
    tooltip: {
      trigger: 'item',
      formatter: ({ data }) => `${data[0]} 共发表：${data[1]} 篇博客`
    },
    visualMap: {
      min: 1,
      max: 11,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center'
    },
    calendar: {
      left: 30,
      right: 30,
      top: 'center',
      cellSize: 16,
      range: [res.heatMapOption[0][0], res.heatMapOption[179][0]],
      itemStyle: {
        borderWidth: 0.5
      },
      yearLabel: { show: false },
      dayLabel: { firstDay: 1 }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: res.heatMapOption
    }
  }

  radarOption.value = {
    tooltip: {
      trigger: 'item'
    },
    radar: {
      indicator: res.radarOption.indicator
    },
    series: [
      {
        type: 'radar',
        tooltip: {
          trigger: 'item'
        },
        areaStyle: {},
        data: [
          {
            value: res.radarOption.value,
            name: '分类 / 博客数'
          }
        ]
      }
    ]
  }

  lineOption.value = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '10%',
      top: '12%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: res.lineOption.xAxis
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: res.lineOption.value,
        type: 'line',
        smooth: true
      }
    ]
  }

  pieOption.value = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        data: res.pieOption
      }
    ]
  }

  directOption.value = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '10%',
      top: '12%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: res.directOption.xAxis,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        type: 'bar',
        barWidth: '60%',
        data: res.directOption.value
      }
    ]
  }
})
</script>

<style>
.stat-chart {
  @apply flex flex-col p-2;
}
</style>
