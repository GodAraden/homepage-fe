<template>
  <div
    id="header"
    class="flex items-center h-16 backdrop-blur bg-slate-700 bg-opacity-20 shadow-md select-none"
    style="font-family: Alimama_DaoLiTi"
  >
    <a href="/" class="flex items-center w-80">
      <img src="/logo.svg" alt="" class="h-12" />
      <a-typography-title :heading="4" class="!mb-0 !font-black ml-2">
        {{ $t(`header.title`) }}
      </a-typography-title>
    </a>

    <ul class="flex justify-center flex-1 gap-6 text-lg font-bold">
      <li
        v-for="item in appRoutes.filter((route) => !route.meta.requiresAuth)"
        :key="item.path"
        :class="
          'g-button relative py-1 px-3 ' +
          ($route.name === item.name ? 'navbar-route-active' : '')
        "
      >
        <router-link :to="item.path">
          <span :class="'iconfont ' + item.meta.icon"></span>
          <span class="ml-1"> {{ $t(`header.navbar.${item.name}`) }} </span>
        </router-link>
      </li>
    </ul>

    <ul class="flex justify-end w-80 gap-2">
      <li class="g-button navbar-btn" @click="changeTheme">
        <icon-computer v-if="currentTheme === 'auto'" :size="ICON_SIZE" />
        <icon-sun-fill v-if="currentTheme === 'light'" :size="ICON_SIZE" />
        <icon-moon-fill v-if="currentTheme === 'dark'" :size="ICON_SIZE" />
      </li>
      <li class="g-button navbar-btn" @click="changeLocale">
        <icon-chinese-fill v-if="currentLocale === 'zh-CN'" :size="ICON_SIZE" />
        <icon-english-fill v-if="currentLocale === 'en-US'" :size="ICON_SIZE" />
      </li>
      <li class="g-button navbar-btn ml-1 gap-0.5">
        <icon-user :size="ICON_SIZE" /><icon-down :size="12" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { appRoutes } from '@/router/routes'
import useTheme from '@/hooks/useTheme'
import useLocale from '@/hooks/useLocale'

const ICON_SIZE = 24
const { currentTheme, changeTheme } = useTheme()
const { currentLocale, changeLocale } = useLocale()
</script>

<style lang="less">
@navbar-btn-size: 36.5px;

#header {
  position: fixed;
  width: 100%;
  z-index: 999;
}

.navbar-btn {
  @apply flex items-center justify-center;
  width: @navbar-btn-size;
  height: @navbar-btn-size;
}

.navbar-route-active::before {
  @apply block absolute -left-1;
  content: '> ';
  animation: flicker 1s steps(1) infinite;
}

@keyframes flicker {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
