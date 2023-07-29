<template>
  <div
    class="mt-24 text-center text-lg select-none"
    style="font-family: Alimama_DaoLiTi"
  >
    <icon-caret-right class="left-float" />
    {{ title }}
    <icon-caret-left class="right-float" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style>
.left-float {
  animation: left-float 0.5s linear infinite alternate;
}

.right-float {
  animation: right-float 0.5s linear infinite alternate;
}

@keyframes left-float {
  100% {
    transform: translateX(5px);
  }
}

@keyframes right-float {
  100% {
    transform: translateX(-5px);
  }
}
</style>
