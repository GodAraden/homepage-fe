declare module '@kangc/v-md-editor'
declare module '@kangc/v-md-editor/lib/preview'
declare module '@kangc/v-md-editor/lib/theme/github.js'
declare module '@kangc/v-md-editor/lib/plugins/tip/index'
declare module '@kangc/v-md-editor/lib/plugins/line-number/index'
declare module '@kangc/v-md-editor/lib/plugins/copy-code/index'
declare module '@kangc/v-md-editor/lib/lang/zh-CN'
declare module '@kangc/v-md-editor/lib/lang/en-US'

const enum Role {
  admin = 'admin'
}

interface User {
  role?: Role
}

interface Pagination {
  current: number
  pageSize: number
  total?: number
}

interface Tag {
  id: number
  tagName: string
}

interface Type {
  id: number
  typeName: string
}

interface BlogComment {
  id: number
  likeNum: number
  avatar: string
  email: string
  name: string
  date: Date
  blogId: string
  parentId: number
}

interface Blog {
  id: string
  title: string
  description: string
  author: string
  content: string
  typeName: string
  postAt: Date
  updateAt: Date
  readNum: number
  likeNum: number
}

interface BookmarkItem {
  title: string
  uri?: string
  children?: BookmarkItem[]
}
