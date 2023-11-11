<template>
  <div class="utility-contents-row sm:grid-cols-4">
    <RouterLink
      to="/utility/RMB-Conversion"
      class="g-ref-bgc utility-contents-card sm:col-span-3"
    >
      <span class="iconfont icon-xingzhuangjiehe"></span>
      {{ $t(`utility.title.RMB-Conversion`) }}
    </RouterLink>
    <RouterLink
      to="/utility"
      class="g-ref-bgc utility-contents-card sm:col-span-1"
    >
      正在施工中...<br />
      Under construction...
    </RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
.utility-contents-row {
  @apply grid gap-4 m-4;
}

.utility-contents-card {
  @apply flex flex-col justify-center items-center gap-3 p-12 rounded-2xl text-lg italic font-black select-none;
  .iconfont {
    @apply text-4xl;
  }
}
</style>
