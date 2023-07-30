import { provide, inject, ref, Ref } from 'vue'
import { useRoute } from 'vue-router'
import { watchDebounced } from '@vueuse/core'
import { CatListItem } from '@/api/cat'
import { BlogListItem, GetBlogListParams } from '@/api/blog'
import useBlogList from '@/hooks/useBlogList'

const ListDataKey = Symbol('ListDataKey')

export interface ListData {
  renderData: Ref<BlogListItem[]>
  catList: Ref<CatListItem[]>
  pagination: Ref<Pagination>
  onPageChange: (current: number) => void
}

export function provideListData(): ListData {
  const { renderData, catList, fetchData, pagination } = useBlogList(6)

  const route = useRoute()

  const filter = ref<Partial<GetBlogListParams>>({})

  const onPageChange = (current: number) => {
    fetchData({ current })
  }

  watchDebounced(
    route,
    () => {
      if (route.query.type) {
        filter.value.type = route.query.type as string
      }
      if (route.query.tag) {
        filter.value.tags = (route.query.tag as string).split(',')
      }
      fetchData(filter.value)
    },
    { immediate: true }
  )

  const result = {
    renderData,
    catList,
    pagination,
    onPageChange
  }

  provide(ListDataKey, result)

  return result
}

export function useListData(): ListData {
  return inject(ListDataKey) as ListData
}
