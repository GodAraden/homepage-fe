<template>
  <div class="overflow-hidden select-none">
    <page-title :title="$t('home.stack.title')" />
    <!-- 技术栈 Logo 展示 -->
    <div class="flex flex-col mt-8 max-sm:gap-1 max-sm:justify-center">
      <div class="stack-grid-5">
        <stack-item
          v-for="item in TechStack.slice(BreakPoints[0], BreakPoints[1])"
          :key="item.key"
          :title="item.value"
          :img-src="`/icon/${item.key}.svg`"
        />
      </div>
      <div class="stack-grid-4">
        <stack-item
          v-for="item in TechStack.slice(BreakPoints[1], BreakPoints[2])"
          :key="item.key"
          :title="item.value"
          :img-src="`/icon/${item.key}.svg`"
        />
      </div>
      <div class="stack-grid-5">
        <stack-item
          v-for="item in TechStack.slice(BreakPoints[2], BreakPoints[3])"
          :key="item.key"
          :title="item.value"
          :img-src="`/icon/${item.key}.svg`"
        />
      </div>
      <div class="stack-grid-4">
        <stack-item
          v-for="item in TechStack.slice(BreakPoints[3], BreakPoints[4])"
          :key="item.key"
          :title="item.value"
          :img-src="`/icon/${item.key}.svg`"
        />
      </div>
    </div>
    <!-- 技能熟练度展示 -->
    <div class="flex flex-wrap justify-evenly mt-20">
      <a-progress
        v-for="item in SkillProficiency"
        :key="item.key"
        type="circle"
        size="large"
        class="g-ref-bgc rounded-full"
        :color="item.color"
        :percent="item.value"
      >
        <template v-slot:text="{ percent }">
          <span
            :style="{ color: item.color }"
            :title="$t(`home.stack.col.${item.key}`)"
            class="font-black text-xs cursor-default"
          >
            {{ $t(`home.stack.col.${item.key}`) }}:{{ percent * 100 }}%
          </span>
        </template>
      </a-progress>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageTitle from './Base/Title.vue'
import StackItem from './Base/StackItem.vue'
import { TechStack, SkillProficiency } from '@/utils/constants'

const BreakPoints = [0, 5, 9, 14, TechStack.length]
</script>

<style lang="less">
@stack-grid-item-size: 4.5rem;
@stack-grid-item-gap: 5rem;

.stack-grid-4,
.stack-grid-5 {
  @apply grid mx-auto max-sm:!gap-1 max-sm:!w-auto;
  gap: @stack-grid-item-gap;
}

.stack-grid-4 {
  grid-template-columns: repeat(4, @stack-grid-item-size);
  grid-auto-rows: @stack-grid-item-size;
  width: 4 * @stack-grid-item-size + 3 * @stack-grid-item-gap;
}
.stack-grid-5 {
  grid-template-columns: repeat(5, @stack-grid-item-size);
  grid-auto-rows: @stack-grid-item-size;
  width: 5 * @stack-grid-item-size + 4 * @stack-grid-item-gap;
}
</style>
