<template>
  <div
    :title="title"
    class="g-ref-bgc stack-item-box w-18 h-18 rounded p-3 rotate-45"
  >
    <img :src="imgSrc" :alt="title" class="stack-item-img -rotate-45" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imgSrc: string
  title: string
}>()
</script>
