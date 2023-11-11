<template>
  <main id="utility" class="h-screen !pt-16 !pb-4">
    <RouterView></RouterView>
  </main>
</template>

<style lang="less">
.utility-item-card {
  @apply p-8 m-4 rounded-2xl;
  min-height: 80vh;
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
