<template>
  <div class="g-ref-bgc flex-1 h-screen overflow-y-scroll">
    <article class="g-ref-deep-bgc min-h-screen pt-16">
      {{ $route }}
    </article>
  </div>

  <aside
    class="g-ref-bgc w-64 h-full flex-shrink-0 select-none overflow-y-scroll"
  >
    <div class="h-16"> <!-- 占位用 --> </div>
  </aside>
</template>

<script setup lang="ts"></script>
