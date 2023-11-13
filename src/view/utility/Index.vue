<template>
  <main id="utility" class="g-scrollbar h-screen !pt-16 !pb-4">
    <RouterView v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in" appear>
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </transition>
    </RouterView>
  </main>
</template>

<style lang="less">
.utility-item-card {
  @apply p-8 m-4 rounded-2xl;
  min-height: 80vh;
}

.utility-form-row {
  @apply grid gap-4 mb-4 sm:grid-cols-8;
}

.utility-form-title-col {
  @apply flex items-center justify-between gap-1 text-base select-none;
}

body[arco-theme=''] {
  .utility-item-card {
    background-color: #fafaf9;
  }
}

body[arco-theme='dark'] {
  .utility-item-card {
    background-color: #232425;
  }
}
</style>
