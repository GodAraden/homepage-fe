<template>
  <div class="navigation">
    <!-- 根据 settings 中的变量，渲染每一组导航及其内部 -->
    <div
      v-for="group in navigations"
      :key="group.key"
      class="g-ref-bgc rounded-xl mb-6"
    >
      <h1 class="text-xl font-black pt-2 px-4">
        {{ $t(`navigation.${group.key}.title`) }}
      </h1>
      <div class="grid grid-cols-3 gap-x-6 gap-y-8 p-4">
        <div
          v-for="item in group.children"
          :key="item.key"
          class="g-ref-bgc navigation-card"
        >
          <a width="100%" ref="cards" :href="item.value" target="_blank">
            <img :src="`/navigations/${group.key}/${item.key}.png`" />
          </a>
          <div class="p-2">
            <p class="text-lg font-mono">
              {{ $t(`navigation.${group.key}.${item.key}.title`) }}
            </p>
            <p
              class="truncate"
              :title="$t(`navigation.${group.key}.${item.key}.description`)"
            >
              {{ $t(`navigation.${group.key}.${item.key}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { navigations } from '@/config/navigation'
</script>

<style>
.navigation {
  @apply h-screen !pt-20;
  background-image: url(~/images/navigator.jpeg);
}

.navigation-card:hover {
  @apply shadow-lg -translate-y-2 scale-105 transition-all;
}
</style>
