<template>
  <div
    :title="title"
    class="g-ref-bgc stack-item-box w-18 h-18 rounded p-3 rotate-45 max-sm:rotate-0"
  >
    <img :src="imgSrc" :alt="title" class="-rotate-45 max-sm:rotate-0" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imgSrc: string
  title: string
}>()
</script>
