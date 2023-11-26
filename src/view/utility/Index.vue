<template>
  <main id="utility" class="g-scrollbar h-screen !pt-16 !pb-4">
    <RouterView v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in" appear>
        <KeepAlive>
          <component v-if="$route.path === '/utility'" :is="Component" />
          <section v-else class="utility-item-card">
            <div class="flex items-center">
              <a-button
                type="dashed"
                shape="circle"
                @click="$router.push('/utility')"
              >
                <icon-arrow-left />
              </a-button>
              <a-divider direction="vertical" />
              <a-typography-title :heading="6" class="!mb-0 !font-black">
                {{ $t(`utility.title.${String($route.name)}`) }}
              </a-typography-title>
            </div>
            <a-divider />
            <component :is="Component" />
          </section>
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
