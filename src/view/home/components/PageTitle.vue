<template>
  <div class="text-lg">
    <icon-caret-right />
    {{ title }}
    <icon-caret-left />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
