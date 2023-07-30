<template>
  <div class="blog">
    <aside> </aside>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.blog {
  @apply h-screen;
}

body[arco-theme=''] .blog {
  background-image: url(~/images/blog-light.jpeg);
}

body[arco-theme='dark'] .blog {
  background-image: url(~/images/blog-dark.jpg);
}
</style>
