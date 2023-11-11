<template>
  <div class="flex items-center">
    <a-button type="dashed" shape="circle" @click="$router.push('/utility')">
      <icon-arrow-left />
    </a-button>
    <a-divider direction="vertical" />
    <a-typography-title :heading="6" class="!mb-0 !font-black">
      {{ $t(`utility.title.${String($route.name)}`) }}
    </a-typography-title>
  </div>
  <a-divider />
</template>
