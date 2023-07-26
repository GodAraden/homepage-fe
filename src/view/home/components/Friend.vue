<template>
  <div>
    <div class="overflow-hidden">
      <page-title :title="$t('home.friend.title')" />
      <page-title :title="$t('home.support.title')" />
    </div>
    <the-footer class="bottom-0" />
  </div>
</template>

<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import PageTitle from './Base/Title.vue'
</script>
