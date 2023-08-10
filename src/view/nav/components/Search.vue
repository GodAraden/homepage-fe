<template>
  <div class="g-ref-bgc mb-4 h-20 mx-auto !rounded-3xl">
    <a-input
      v-model="keyword"
      size="large"
      allow-clear
      :placeholder="$t('nav.search.placeholder')"
      class="g-ref-bgc nav-search-input"
      @input="onSearch"
    >
      <template #prefix>
        <icon-search class="!text-3xl" />
      </template>
      <template #suffix>
        <a-space size="large">
          <a-divider direction="vertical" class="!h-8 !mr-0" />
          <a-button
            size="large"
            type="primary"
            shape="round"
            class="w-30"
            @click="onSearch"
          >
            {{ $t('nav.search.title') }}
          </a-button>
        </a-space>
      </template>
    </a-input>
    <!-- 检索结果栏 -->
    <div
      class="nav-search-result hidden relative mx-6 py-2 z-50"
      :style="{ backgroundColor: 'var(--color-bg-5)' }"
    >
      <a-empty v-if="!result?.length" />
      <a-list v-else :bordered="false">
        <a-list-item
          v-for="item in result"
          :key="item.getAttribute('data-item-key')"
          class="nav-result-item cursor-pointer"
          @click="() => onJump(item)"
        >
          <div>
            <a-divider
              direction="vertical"
              :size="4"
              class="nav-result-bookmark !ml-0"
            />
            <span> {{ item.getAttribute('data-item-key') }} </span>
          </div>
          <template #actions>
            <icon-right />
          </template>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const keyword = ref<string>()
const result = ref<NodeListOf<Element>>()

const onSearch = () => {
  const res = document.querySelectorAll(`div[data-item-key*="${keyword.value}"`)
  result.value = res
}

const onJump = (item: Element) => {
  keyword.value = ''
  result.value = null
  item.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<style lang="less">
.nav-search-input {
  padding-right: 24px !important;
  padding-left: 24px !important;
  border-radius: 20px !important;

  .arco-input.arco-input-size-large {
    font-size: 1rem !important;
    line-height: 4.125 !important;
  }
}

.arco-input-focus ~ .nav-search-result {
  display: block;
}

.nav-search-result:hover {
  display: block;
}

.nav-result-item:hover .nav-result-bookmark {
  border-color: #ff8d1f;
}
</style>
