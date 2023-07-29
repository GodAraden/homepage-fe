<template>
  <div class="g-cross-center flex-col justify-evenly select-none">
    <div
      id="welcome"
      style="font-family: Alimama_DaoLiTi"
      class="g-perfect-center relative flex-col w-2/3 h-64 p-2 text-center bg-black bg-opacity-10 bg-clip-content"
    >
      <a-typography-title :heading="1" class="!font-black">
        {{ $t('home.welcome.title') }}
      </a-typography-title>
      <a-typography-title :heading="2">
        {{ $t('home.welcome.description') }}
      </a-typography-title>
    </div>
    <div class="center text-5xl text-amber-100 animate-bounce">
      <icon-double-down />
    </div>
  </div>
</template>

<style>
#welcome::before,
#welcome::after {
  @apply block absolute w-full h-full top-0 left-0 right-0 bottom-0 border-amber-100 border-2;
  content: '';
  animation: clippath 5s infinite linear;
}

#welcome::after {
  animation-delay: -2.5s;
}

@keyframes clippath {
  0%,
  100% {
    clip-path: inset(0 0 95% 0);
  }
  25% {
    clip-path: inset(0 95% 0 0);
  }
  50% {
    clip-path: inset(95% 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 95%);
  }
}
</style>
