<template>
  <div class="overflow-hidden">
    <page-title :title="$t('home.about.title')" />
    <div
      id="about"
      class="g-ref-bgc mt-4 mx-auto grid w-2/3 p-2 shadow-2xl rounded-2xl leading-tight max-sm:flex max-sm:flex-col max-sm:w-11/12"
    >
      <div class="relative w-36 h-36 mx-auto mt-12">
        <div class="avatar-frame avatar-frame-lt"></div>
        <div class="avatar-frame avatar-frame-rt"></div>
        <div class="avatar-frame avatar-frame-lb"></div>
        <div class="avatar-frame avatar-frame-rb"></div>
        <img src="/avatar.jpg" alt="avatar" width="144" height="144" />
      </div>
      <div id="info" class="grid grid-cols-2 my-6 gap-y-2 max-sm:gap-y-6">
        <template v-for="item in PersonalInfo" :key="item.key">
          <span>{{ $t(`home.about.col.${item.key}`) }}</span>
          <span>{{ item.value || $t(`home.about.val.${item.key}`) }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageTitle from './Base/Title.vue'
import { PersonalInfo } from '@/config/personalInfo'
</script>

<style>
#about {
  grid-template-columns: 12rem 1fr;
}

#info {
  grid-template-columns: 6rem 1fr;
  grid-auto-rows: 2rem;
}

.avatar-frame {
  @apply absolute w-4 h-4 border-2 border-stone-500;
}

.avatar-frame-lt {
  @apply -left-1 -top-1;
  border-bottom: none;
  border-right: none;
}

.avatar-frame-rt {
  @apply -right-1 -top-1;
  border-bottom: none;
  border-left: none;
}

.avatar-frame-lb {
  @apply -left-1 -bottom-1;
  border-top: none;
  border-right: none;
}

.avatar-frame-rb {
  @apply -right-1 -bottom-1;
  border-top: none;
  border-left: none;
}
</style>
