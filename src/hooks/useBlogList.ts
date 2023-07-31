import { ref } from 'vue'
import { BlogListItem, GetBlogListParams, getBlogList } from '@/api/blog'
import { CatListItem, getCatList } from '@/api/cat'

export default function useLoading(pageSize: number) {
  const renderData = ref<BlogListItem[]>()
  const catList = ref<CatListItem[]>()

  const pagination = ref({
    current: 1,
    pageSize,
    total: 0
  })

  const fetchData = async (params?: Partial<GetBlogListParams>) => {
    catList.value = null
    renderData.value = null

    const mergedParams = Object.assign({}, pagination.value, params)
    delete mergedParams.total

    const res = await getBlogList(mergedParams)
    if (!res) return

    renderData.value = res.data
    pagination.value.total = res.total

    if (renderData.value) {
      catList.value = await getCatList(renderData.value.length)
    }
  }

  return {
    renderData,
    catList,
    pagination,
    fetchData
  }
}
