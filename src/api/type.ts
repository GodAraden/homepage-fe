import axios from 'axios'

export interface CreateTypeParams {
  typeName: string
}
export interface UpdateTypeParams {
  typeName: string
}

export type CreateTypeRes = Type
export type UpdateTypeRes = Type
export type DeleteTypeRes = Type

export async function createType(params: CreateTypeParams) {
  const { data } = await axios.post<CreateTypeRes>('/api/type', params)
  return data
}

export async function updateType(id: number, params: UpdateTypeParams) {
  const { data } = await axios.patch<UpdateTypeRes>(`/api/type/${id}`, params)
  return data
}

export async function deleteType(id: number) {
  const { data } = await axios.delete<DeleteTypeRes>(`/api/type/${id}`)
  return data
}
