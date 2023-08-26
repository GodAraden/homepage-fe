import { ref } from 'vue'
import { BlogListItem, GetBlogListParams, getBlogList } from '@/api/blog'
import { CatListItem, getCatList } from '@/api/cat'

export default function useBlogList(pageSize: number, fetchCatList = true) {
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

    if (fetchCatList && renderData.value?.length) {
      // 背景图片的加载不能是 await 异步，否则容易导致加载不出来
      getCatList(renderData.value.length).then((res) => {
        catList.value = res
      })
    }
  }

  return {
    renderData,
    catList,
    pagination,
    fetchData
  }
}
