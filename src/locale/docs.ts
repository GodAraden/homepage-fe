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
  "title": "${import.meta.env.VITE_APP_OWNER} 的主页",
  "description": "${import.meta.env.VITE_SIGNATURE_ZH}",
  "logo": "${import.meta.env.VITE_APP_OWNER_LOGO}",
  "link":  "${import.meta.env.VITE_APP_OWNER_LINK}",
  "color": "${import.meta.env.VITE_APP_OWNER_COLOR}"
}
\`\`\`

添加友链可以发送个人网站信息至我的邮箱：\`${
  import.meta.env.VITE_APP_OWNER_EMAIL
}\`

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
  "title": "${import.meta.env.VITE_APP_OWNER}'s homepage",
  "description": "${import.meta.env.VITE_SIGNATURE_EN}",
  "logo":  "${import.meta.env.VITE_APP_OWNER_LOGO}",
  "link": "${import.meta.env.VITE_APP_OWNER_LINK}",
  "color": "${import.meta.env.VITE_APP_OWNER_COLOR}"
}
\`\`\`

Add a friend link to send personal website information to my email: \`${
  import.meta.env.VITE_APP_OWNER_EMAIL
}\`

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

export const zhSupportDescription = `
::: tip 题外话
本来想做一个感谢页面的，但是感觉一时半会也不会有人打赏，所以就先鸽掉了

（等什么时候收到第一笔打赏再做吧）
:::
`

export const enSupportDescription = `
::: tip Digression
I originally wanted to make a thank you page, but I felt that no one would reward me for a while, so I dropped it first

(Wait until the first tip is received)
:::
`
