<template>
  <div class="blog">
    <aside
      class="g-ref-gradient-bgc w-64 h-full flex-shrink-0 select-none overflow-y-scroll"
    >
      <div class="h-16"> <!-- 占位用 --> </div>
      <!-- 个人信息 -->
      <div class="blog-info">
        <div class="blog-avatar">
          <img src="/avatar.jpg" class="w-full h-full rounded-full" />
        </div>
        <div>
          <div class="text-center text-lg" style="font-family: Alimama_DaoLiTi">
            {{ $t('blog.aside.title') }}
          </div>
          <p
            class="text-center text-sm"
            :title="$t('blog.aside.description.hidden')"
          >
            {{ $t('blog.aside.description') }}
          </p>
        </div>
      </div>
      <!-- 文章分类 -->
      <div>
        <p class="pl-4 py-2">
          {{ $t('blog.aside.type.title') }}
        </p>
        <div
          @click="$router.replace({ path: 'search' })"
          class="g-ref-gradient-bgc g-cross-center pl-10 pr-1 py-3 hover:border-r-4 hover:pr-0 border-amber-100 cursor-pointer"
        >
          <span class="flex-1"> {{ $t('blog.aside.type.total') }} </span>
          <span
            class="g-ref-bgc w-8 h-4 mr-2 rounded-full text-center text-xs font-black"
          >
            {{ typeList?.reduce((prev, curr) => prev + curr._count.blogs, 0) }}
          </span>
        </div>
        <div
          v-for="item in typeList"
          :key="item.typeName"
          @click="
            $router.replace({ path: 'search', query: { type: item.typeName } })
          "
          class="g-ref-gradient-bgc g-cross-center pl-10 pr-1 py-3 hover:border-r-4 hover:pr-0 border-amber-100 cursor-pointer"
        >
          <span class="flex-1"> {{ item.typeName }} </span>
          <span
            class="g-ref-bgc w-8 h-4 mr-2 rounded-full text-center text-xs font-black"
          >
            {{ item._count?.blogs }}
          </span>
        </div>
      </div>
    </aside>

    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { provideCommonData } from './hooks/useCommonData'
const { typeList } = provideCommonData()
</script>

<style lang="less">
.blog {
  @apply h-screen overflow-hidden flex;
}

.blog-info {
  @apply flex flex-col justify-between h-64 py-6;
}

.blog-avatar {
  @apply w-36 h-36 mx-auto rounded-full;
  transition: all 0.5s ease-in-out;
  &:hover {
    @apply p-1;
    transform: rotate(1turn) scale(1.2);
    background-color: rgba(233, 233, 233, 0.8);
  }
}

body[arco-theme=''] {
  .blog {
    background-image: url(~/images/blog-light.jpeg);
  }
  .blog-info {
    border-bottom: 1px solid #cad8dc;
  }
}

body[arco-theme='dark'] {
  .blog {
    background-image: url(~/images/blog-dark.jpg);
  }
  .blog-info {
    border-bottom: 1px solid #344449;
  }
}
</style>
./hooks/useCommonData ./hooks/useCommonData
