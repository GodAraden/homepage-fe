import axios from 'axios'

export interface CreateTagParams {
  tagName: string
}
export interface UpdateTagParams {
  tagName: string
}

export type TagItem = Tag & { _count: { blogs: number } }

export type FindAllTagRes = TagItem[]
export type CreateTagRes = Tag
export type UpdateTagRes = Tag
export type DeleteTagRes = Tag

export async function findAllTag() {
  const { data } = await axios.get<FindAllTagRes>('/api/tag')
  return data
}

export async function createTag(params: CreateTagParams) {
  const { data } = await axios.post<CreateTagRes>('/api/tag', params)
  return data
}

export async function updateTag(id: number, params: UpdateTagParams) {
  const { data } = await axios.patch<UpdateTagRes>(`/api/tag/${id}`, params)
  return data
}

export async function deleteTag(id: number) {
  const { data } = await axios.delete<DeleteTagRes>(`/api/tag/${id}`)
  return data
}
