import { App } from 'vue'
import { use } from 'echarts/core'
import { SVGRenderer } from 'echarts/renderers'
import {
  HeatmapChart,
  LineChart,
  PieChart,
  BarChart,
  RadarChart
} from 'echarts/charts'
import {
  GridComponent,
  TitleComponent,
  CalendarComponent,
  TooltipComponent,
  VisualMapComponent,
  ToolboxComponent,
  LegendComponent
} from 'echarts/components'
import { UniversalTransition, LabelLayout } from 'echarts/features'
import Chart from './Chart.vue'

use([
  SVGRenderer,
  HeatmapChart,
  LineChart,
  PieChart,
  BarChart,
  RadarChart,
  GridComponent,
  TitleComponent,
  CalendarComponent,
  TooltipComponent,
  VisualMapComponent,
  ToolboxComponent,
  LegendComponent,
  UniversalTransition,
  LabelLayout
])

export default {
  install(Vue: App) {
    Vue.component('Chart', Chart)
  }
}
