<template>
  <div class="manage">
    <a-card class="w-full h-full rounded-2xl">
      <a-tabs
        lazy-load
        destroy-on-hide
        :default-active-key="
          typeof $route.query.tab === 'string' ? $route.query.tab : 'blog'
        "
        @change="(key) => $router.push({ query: { tab: key } })"
      >
        <a-tab-pane key="blog">
          <template #title> <icon-book /> 博客 </template>
          <blog-list></blog-list>
        </a-tab-pane>
        <a-tab-pane key="tag">
          <template #title> <icon-tags /> 标签 </template>
          <tag-list></tag-list>
        </a-tab-pane>
        <a-tab-pane key="type">
          <template #title> <icon-apps /> 分类 </template>
          <type-list></type-list>
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { provideFetchData } from './hooks/useFetchData'
import BlogList from './components/BlogList.vue'
import TagList from './components/TagList.vue'
import TypeList from './components/TypeList.vue'

provideFetchData(10)
</script>

<style>
.manage {
  @apply h-screen !pt-20 !pb-6;
  background-image: url(~/images/manage.jpg);
}
</style>
