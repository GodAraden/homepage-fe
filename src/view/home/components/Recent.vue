<template>
  <div class="overflow-hidden">
    <page-title :title="$t('home.recent.title')" />
    <page-title :title="$t('home.tags.title')" />
  </div>
</template>

<script setup lang="ts">
import PageTitle from './Base/Title.vue'
</script>
