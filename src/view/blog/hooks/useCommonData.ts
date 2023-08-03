import { Ref, inject, provide, ref } from 'vue'
import { FindAllTypeRes } from '@/api/type'
import { BlogListItem, getBlogList } from '@/api/blog'
import useCategory from '@/hooks/useCategory'

interface CommonData {
  typeList: Ref<FindAllTypeRes>
  tagList: Ref<Tag[]>
  recommendList: Ref<BlogListItem[]>

  initSearchAside: () => void
}

const CommonDataKey = Symbol('CommonDataKey')

export function provideCommonData(): CommonData {
  const { typeList, tagList, initTypeList, initTagList } = useCategory()

  const recommendList = ref<BlogListItem[]>()

  const initSearchAside = async () => {
    if (typeList.value && recommendList.value) return
    await initTagList()
    recommendList.value = (
      await getBlogList({ current: 1, pageSize: 5, orderBy: 'readNum' })
    )?.data
  }

  initTypeList()

  const result = {
    typeList,
    tagList,
    recommendList,
    initSearchAside
  }

  provide(CommonDataKey, result)

  return result
}

export function injectCommonData() {
  return inject(CommonDataKey) as CommonData
}
