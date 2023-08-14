<template>
  <header
    id="header"
    class="g-cross-center g-ground-glass h-16 select-none"
    style="font-family: Alimama_DaoLiTi"
  >
    <!-- Logo & 标题 -->
    <a href="/" class="g-cross-center w-80">
      <img src="/logo.svg" alt="logo" class="h-12" />
      <a-typography-title
        :heading="4"
        class="!mb-0 !font-black ml-2 max-sm:!hidden"
      >
        {{ $t(`header.title`) }}
      </a-typography-title>
    </a>
    <!-- 导航栏 -->
    <div class="flex justify-evenly flex-1 text-lg font-bold">
      <router-link
        v-for="item in appRoutes"
        :key="item.path"
        :to="item.path"
        :class="
          'g-text-button relative py-1 px-3 ' +
          ($route.meta.routerViewKey === item.meta.routerViewKey
            ? 'navbar-route-active'
            : '')
        "
      >
        <span :class="'iconfont ' + item.meta.icon + ' max-sm:text-xl'"></span>
        <span class="max-sm:!hidden ml-1">
          {{ $t(`header.navbar.${item.name}`) }}
        </span>
      </router-link>
    </div>
    <!-- 功能栏 -->
    <ul class="flex justify-end w-80 gap-2">
      <li class="g-text-button navbar-btn" @click="themeStore.changeTheme">
        <icon-computer
          v-if="themeStore.currentTheme === 'auto'"
          :size="ICON_SIZE"
        />
        <icon-sun-fill
          v-if="themeStore.currentTheme === 'light'"
          :size="ICON_SIZE"
        />
        <icon-moon-fill
          v-if="themeStore.currentTheme === 'dark'"
          :size="ICON_SIZE"
        />
      </li>
      <li class="g-text-button navbar-btn" @click="changeLocale">
        <icon-chinese-fill v-if="currentLocale === 'zh-CN'" :size="ICON_SIZE" />
        <icon-english-fill v-if="currentLocale === 'en-US'" :size="ICON_SIZE" />
      </li>
      <li
        class="g-text-button navbar-btn ml-1 gap-0.5"
        @click="visible = !visible"
      >
        <icon-user :size="ICON_SIZE" />
        <icon-down v-if="!visible" :size="12" />
        <icon-up v-if="visible" :size="12" />
      </li>
      <!-- 登陆面板 -->
      <div
        v-if="visible"
        class="g-ground-glass-light absolute z-50 flex flex-col top-16 w-80 h-fit p-4 gap-4 rounded-lg"
      >
        <template v-if="!userStore.user.role">
          <div class="flex flex-col">
            <span> {{ $t(`header.login.username`) }}</span>
            <input type="text" class="g-custom-input" v-model="username" />
          </div>
          <div class="flex flex-col">
            <span> {{ $t(`header.login.password`) }}</span>
            <input type="password" class="g-custom-input" v-model="password" />
          </div>
          <button
            style="background: linear-gradient(45deg, #f59e0b, #fde68a)"
            class="py-2 rounded-full text-sm text-white"
            @click="onUserLogin"
          >
            {{ $t(`header.login.submit`) }}
          </button>
        </template>
        <template v-else-if="userStore.user.role === 'admin'">
          <div class="flex">
            <img
              src="/avatar.jpg"
              alt="avatar"
              class="rounded-full w-16 h-16 mx-auto"
            />
            <span class="g-perfect-center flex-1 text-2xl">
              {{ $t(`header.user.welcome`) }}
            </span>
          </div>
          <div class="flex flex-col w-full text-lg">
            <router-link
              v-for="item in adminRoutes"
              :key="item.path"
              :to="item.path"
              :class="
                'g-text-button relative py-1 px-3 ' +
                ($route.name === item.name ? 'navbar-route-active' : '')
              "
            >
              <span :class="'iconfont ' + item.meta.icon"></span>
              <span class="ml-1"> {{ $t(`header.navbar.${item.name}`) }} </span>
            </router-link>
          </div>
          <button
            style="background: linear-gradient(45deg, #f59e0b, #fde68a)"
            class="py-2 rounded-full text-sm text-white"
            @click="userStore.logout"
          >
            {{ $t(`header.user.logout`) }}
          </button>
        </template>
        <template v-else> error: {{ userStore.user }} </template>
      </div>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MD5 } from 'crypto-js'
import { appRoutes, adminRoutes } from '@/router/routes'
import useLocale from '@/hooks/useLocale'
import { useUserStore, useThemeStore } from '@/store'

const ICON_SIZE = 24
const visible = ref(false)
const username = ref('')
const password = ref('')

const userStore = useUserStore()
const themeStore = useThemeStore()
const { currentLocale, changeLocale } = useLocale()

const onUserLogin = () => {
  userStore.login({
    username: username.value,
    password: MD5(password.value).toString()
  })
}
</script>

<style lang="less">
@navbar-btn-size: 36.5px;

#header {
  position: fixed;
  width: 100%;
  z-index: 99;
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
