// vue-i18n 不支持模板字符串里面加冒号，故有此文件
export const zhAddFlinkDescription = `
::: warning 加入本站友链要求：
(一) 能够正常访问

(二) 含本站友链

(三) 网站类型为个人博客
:::

我的友链：

\`\`\`json 
{
  "title": "GodAraden 的主页",
  "description": "24 年毕业的前端程序猿，正在准备今年下半年的秋招",
  "logo": "https://cravatar.cn/avatar/0011681f8b59101b59a4234213975308",
  "link": "http://araden.top/",
  "color": "rgba(255, 125, 0, 0.2)"
}
\`\`\`

添加友链可以发送个人网站信息至我的邮箱：\`hitwh_gyh@qq.com\`

::: tip 提交信息

格式参考同上，字段说明如下：

\`\`\`typescript []
interface FriendLink {
  title: string // 网站标题
  description: string // 网站描述
  logo: string // Logo URL
  link: string // 网站 URL
  color: string // rgb 格式的自定义的背景色，如：rgb(0, 0, 0)
}
\`\`\`
:::
`

export const enAddFlinkDescription = `
::: warning Requirements for joining the friendship link of this site:
(1) Normal access

(2) Including friend links of this site

(3) The website type is a personal blog
:::

My friend link:

\`\`\`json
{
  "title": "GodAraden's homepage",
  "description": "The front-end programmer who graduated in 24 years is preparing for the autumn recruitment in the second half of this year",
  "logo": "https://cravatar.cn/avatar/0011681f8b59101b59a4234213975308",
  "link": "http://araden.top/",
  "color": "rgba(255, 125, 0, 0.2)"
}
\`\`\`

Add a friend link to send personal website information to my email: \`hitwh_gyh@qq.com\`

::: tip Commit message

The format is the same as above, and the field description is as follows:

\`\`\`typescript[]
interface FriendLink {
  title: string // website title
  description: string // website description
  logo: string // Logo URL
  link: string // Website URL
  color: string // custom background color in rgb format, such as: rgb(0, 0, 0)
}
\`\`\`
:::
`
