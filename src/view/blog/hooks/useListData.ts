import { provide, inject, ref, Ref } from 'vue'
import { useRoute } from 'vue-router'
import { BlogListItem, GetBlogListParams, getBlogList } from '@/api/blog'
import { CatListItem, getCatList } from '@/api/cat'

const ListDataKey = Symbol('ListDataKey')

export interface ListData {
  renderData: Ref<BlogListItem[]>
  catList: Ref<CatListItem[]>
  pagination: Ref<Pagination>
  onPageChange: (current: number) => void
}

export function provideListData(): ListData {
  const route = useRoute()

  const renderData = ref<BlogListItem[]>()
  const catList = ref<CatListItem[]>()
  const pagination = ref({
    current: 1,
    pageSize: 12,
    total: 0
  })
  const filter = ref<Partial<GetBlogListParams>>({})

  const fetchData = async (params?: Partial<GetBlogListParams>) => {
    catList.value = null
    renderData.value = null

    const mergedParams = Object.assign({}, pagination.value, params)
    delete mergedParams.total

    const res = await getBlogList(mergedParams)
    renderData.value = res.data
    pagination.value.total = res.total

    catList.value = await getCatList(renderData.value.length)
  }

  if (route.query.type) {
    filter.value.type = route.query.type as string
  }
  if (route.query.tag) {
    filter.value.tags = (route.query.tag as string).split(',')
  }

  fetchData(filter.value)

  const onPageChange = (current: number) => {
    fetchData({ current })
  }

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
