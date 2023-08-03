import { inject, provide } from 'vue'
import useBlogList from '@/hooks/useBlogList'
import useCategory from '@/hooks/useCategory'

const FetchDataKey = Symbol('FetchDataKey')

export function provideFetchData(blogPageSize = 10) {
  const {
    renderData: blogList,
    fetchData: fetchBlogList,
    pagination
  } = useBlogList(blogPageSize, false)
  const { typeList, tagList, initTagList, initTypeList } = useCategory()

  const result = {
    blogList,
    fetchBlogList,
    pagination,
    typeList,
    tagList,
    initTagList,
    initTypeList
  }

  provide(FetchDataKey, result)

  return result
}

export function injectFetchData() {
  return inject(FetchDataKey) as ReturnType<typeof provideFetchData>
}
