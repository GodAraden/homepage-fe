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

<script lang="ts" setup>
import { getBlogStats } from '@/api/blog'
import { getStartOfDayString } from '@/utils/parse'
import useChartOptions from '@/hooks/useChartOptions'
// FIXME: 切换显示模式时 用 ComputedRef 配置的样式不会随之改变
const res = await getBlogStats()

const { chartOption: heatMapOption } = useChartOptions((isDark) => ({
  darkMode: isDark,
  tooltip: {
    trigger: 'item',
    formatter: (params: any) =>
      `${params.data[0]} 共发表：${params.data[1]} 篇博客`
  },
  visualMap: {
    min: 1,
    max: 6,
    type: 'piecewise',
    orient: 'horizontal',
    left: 'center',
    textStyle: {
      color: isDark ? '#9C9DA0' : '#000'
    },
    inRange: {
      color: ['#C7DBFF', '#5291FF']
    }
  },
  calendar: {
    left: 30,
    right: 30,
    top: 'center',
    cellSize: 16,
    range: [getStartOfDayString(179), getStartOfDayString(0)],
    itemStyle: {
      borderWidth: 0.5,
      color: isDark ? '#777' : '#fff'
    },
    yearLabel: { show: false },
    dayLabel: { firstDay: 1 }
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
    data: res.heatMapOption
  }
}))

const { chartOption: radarOption } = useChartOptions((isDark) => ({
  tooltip: {
    trigger: 'item'
  },
  radar: {
    indicator: res.radarOption.indicator,
    axisName: {
      color: isDark ? '#9C9DA0' : '#000'
    }
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
}))

const { chartOption: lineOption } = useChartOptions(() => ({
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
}))

const { chartOption: pieOption } = useChartOptions((isDark) => ({
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    min: 0,
    max: 2 * Math.max(...res.pieOption.map((item) => item.value)),
    padding: 1,
    inRange: {
      colorLightness: [1, 0]
    }
  },
  series: [
    {
      type: 'pie',
      radius: '61.8%',
      data: res.pieOption,
      label: {
        color: isDark ? '#9C9DA0' : '#000'
      },
      itemStyle: {
        opacity: 0.8,
        borderWidth: 1,
        borderColor: '#B5ADE0'
      }
    }
  ]
}))

const { chartOption: directOption } = useChartOptions(() => ({
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
}))
</script>

<style>
.stat-chart {
  @apply flex flex-col p-2;
}
</style>
