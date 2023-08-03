import { ref } from 'vue'
import { findAllTag } from '@/api/tag'
import { FindAllTypeRes, findAllType } from '@/api/type'

export default function useCategory() {
  const typeList = ref<FindAllTypeRes>()
  const tagList = ref<Tag[]>()

  const initTypeList = async () => {
    typeList.value = await findAllType()
  }

  const initTagList = async () => {
    tagList.value = await findAllTag()
  }

  return {
    typeList,
    initTypeList,
    tagList,
    initTagList
  }
}
