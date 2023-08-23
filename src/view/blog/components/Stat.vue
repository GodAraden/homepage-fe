<template>
  <div class="g-ref-bgc g-scrollbar flex-1 h-screen overflow-y-scroll">
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

const res = await getBlogStats()

const { chartOption: heatMapOption } = useChartOptions((isDark) => ({
  darkMode: isDark,
  tooltip: {
    trigger: 'item',
    formatter: (params: any) =>
      params.data[1] === 0
        ? ''
        : `${params.data[0]} 共发表：${params.data[1]} 篇博客`
  },
  visualMap: {
    pieces: [
      { gte: 1, lte: 1 },
      { gte: 2, lte: 2 },
      { gte: 3, lte: 3 },
      { gte: 4, lte: 4 }
    ],
    type: 'piecewise',
    showLabel: false,
    itemSymbol: 'none',
    inRange: {
      color: ['#C7DBFF', '#4360B5']
    }
  },
  calendar: {
    left: 30,
    right: 30,
    top: 'center',
    cellSize: 16,
    range: [getStartOfDayString(179), getStartOfDayString(0)],
    itemStyle: {
      borderWidth: 0.2,
      color: isDark ? '#777' : '#fff'
    },
    yearLabel: { show: false },
    monthLabel: { color: isDark ? '#9C9DA0' : '#000' },
    dayLabel: {
      firstDay: 1,
      color: isDark ? '#9C9DA0' : '#000'
    }
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
    },
    radius: '50%'
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
    bottom: '9%',
    top: '18%',
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
      data: res.pieOption,
      radius: ['40%', '70%'],
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 18,
          fontWeight: 'bold',
          formatter: '{b} 共 {c} 篇'
        }
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
