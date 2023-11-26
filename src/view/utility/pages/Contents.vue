<template>
  <div class="grid gap-4 m-4 sm:grid-cols-4">
    <!-- 动态类名会被 tree-shaking 掉，所以添加一个 hidden 元素帮忙引入一下 -->
    <div
      class="hidden sm:col-span-1 sm:col-span-2 sm:col-span-3 sm:col-span-4"
    ></div>

    <RouterLink
      v-for="(item, index) in utilityRoutes"
      :key="item.name"
      :to="`/utility/${item.path}`"
      :class="`g-ref-bgc flex flex-col justify-center items-center gap-3 p-12 rounded-2xl text-lg italic font-black select-none sm:col-span-${itemSpan[index]}`"
    >
      <span :class="`iconfont ${item.meta.icon} !text-4xl`"></span>
      <span class="text-center"> {{ $t(`utility.title.${item.name}`) }} </span>
    </RouterLink>
    <RouterLink
      to="/utility"
      class="g-ref-bgc flex flex-col justify-center items-center gap-3 p-12 rounded-2xl text-lg italic font-black select-none"
    >
      正在施工中...<br />
      Under construction...
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { utilityRoutes } from '@/router/routes'

const generateItemSpan = (col = 4, length = utilityRoutes.length) => {
  const result: number[] = []
  for (let i = 0; i < length; ) {
    let restCol = col
    for (; restCol > 0 && i < length; i++) {
      const currCol = Math.floor(Math.random() * col) + 1
      if (restCol < currCol) {
        result.push(restCol)
        restCol = 0
      } else {
        result.push(currCol)
        restCol -= currCol
      }
    }
  }
  return result
}

const itemSpan = generateItemSpan()
</script>
