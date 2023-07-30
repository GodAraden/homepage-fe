import { Ref, inject, provide, ref } from 'vue'
import { FindAllTypeRes, findAllType } from '@/api/type'
import { findAllTag } from '@/api/tag'
import { BlogListItem, getBlogList } from '@/api/blog'

interface CommonData {
  typeList: Ref<FindAllTypeRes>
  tagList: Ref<Tag[]>
  recommendList: Ref<BlogListItem[]>

  initSearchAside: () => void
}

const CommonDataKey = Symbol('CommonDataKey')

export function provideCommonData(): CommonData {
  const typeList = ref<FindAllTypeRes>()
  const tagList = ref<Tag[]>()
  const recommendList = ref<BlogListItem[]>()

  const initTypeList = async () => {
    typeList.value = await findAllType()
  }

  const initSearchAside = async () => {
    if (typeList.value && recommendList.value) return
    tagList.value = await findAllTag()
    recommendList.value = (
      await getBlogList({ current: 1, pageSize: 5, orderBy: 'readNum' })
    ).data
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
