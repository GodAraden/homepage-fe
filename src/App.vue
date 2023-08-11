<template>
  <the-header />

  <router-view
    class="bg-cover bg-no-repeat overflow-y-scroll overflow-x-hidden"
    v-slot="{ Component, route }"
  >
    <transition name="page" mode="out-in" appear>
      <component :is="Component" :key="route.meta.routerViewKey" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>
