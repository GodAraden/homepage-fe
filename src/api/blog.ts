import axios from 'axios'

export interface CreateBlogParams {
  title: string
  description: string
  author: string
  content: string
  typeName: string
  tags: string[]
  postAt?: Date
  updateAt?: Date
}

export interface UpdateBlogParams {
  title?: string
  description?: string
  author?: string
  content?: string
  typeName?: string
  createTags?: string[]
  deleteTags?: string[]
  postAt?: Date
  updateAt?: Date
}

export interface GetBlogListParams {
  current: number
  pageSize: number
  typeName?: string
  tags?: string[]
  keyword?: string
  startDate?: Date
  endDate?: Date
  orderBy?: 'readNum' | 'likeNum' | 'postAt'
  order?: 'asc' | 'desc'
}

export type BlogListItem = Omit<Blog, 'content'> & {
  tags: Tag[]
  _count: { comments: number }
}

export type CreateBlogRes = Blog
export type UpdateBlogRes = Blog
export type DeleteBlogRes = Blog
export type GetBlogListRes = {
  data: BlogListItem[]
  total: number
}
export type GetBlogStatRes = {
  radarOption: {
    indicator: { name: string; max: number }[]
    value: number[]
  }
  lineOption: {
    xAxis: string[]
    value: number[]
  }
  heatMapOption: [string, number][]
  pieOption: { name: string; value: number }[]
  directOption: {
    xAxis: string[]
    value: number[]
  }
}
export type GetBlogByIdRes = Blog & {
  tags: Tag[]
  _count: { comments: number }
}
export type LikeBlogRes = { likeNum: number }

export async function createBlog(params: CreateBlogParams) {
  const { data } = await axios.post<CreateBlogRes>('/api/blog', params)
  return data
}

export async function updateBlog(id: string, params: UpdateBlogParams) {
  const { data } = await axios.patch<UpdateBlogRes>(`/api/blog/${id}`, params)
  return data
}

export async function deleteBlog(id: string) {
  const { data } = await axios.delete<DeleteBlogRes>(`/api/blog/${id}`)
  return data
}

export async function getBlogById(id: string) {
  const { data } = await axios.get<GetBlogByIdRes>(`/api/blog/${id}`)
  return data
}

export async function getBlogStats() {
  const { data } = await axios.get<GetBlogStatRes>('/api/blog/stat')
  return data
}

export async function getBlogList(params: GetBlogListParams) {
  const { data } = await axios.post<GetBlogListRes>('/api/blog/list', params)
  return data
}

export async function likeBlog(id: string) {
  const { data } = await axios.post<LikeBlogRes>('/api/blog/like', { id })
  return data
}
