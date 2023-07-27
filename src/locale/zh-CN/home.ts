export default {
  'home.welcome.title': '欢迎来访 GodAraden 的个人主页',
  'home.welcome.description': '寒舍简陋，不足恭迎，还望海涵',
  // House is rough, maybe inconsiderate hospitality, hope for tolerance
  'home.about.title': '关于我',

  'home.about.col.nickname': '昵称',
  'home.about.col.age': '年龄',
  'home.about.col.school': '学校',
  'home.about.col.direction': '就业方向',
  'home.about.col.from': '来自',
  'home.about.col.nowAt': '现住址',
  'home.about.col.like': '兴趣爱好',
  'home.about.col.games': '常玩的游戏',
  'home.about.col.singer': '喜欢的歌手',
  'home.about.col.email': 'Email',
  'home.about.col.github': 'Github',

  'home.about.val.school': '哈尔滨工业大学（威海）',
  'home.about.val.direction': '前端开发',
  'home.about.val.from': '吉林省长春市',
  'home.about.val.nowAt': '山东省威海市',
  'home.about.val.like': '运动健身，但仅限于跑步之类的单人运动',
  'home.about.val.games': '偶尔玩，偏向于沙盒生存类：饥荒、我的世界、缺氧...',
  'home.about.val.singer': '（有且仅有）河图',

  'home.stack.title': '技术栈',
  'home.stack.col.engineering': '前端工程',
  'home.stack.col.ecosystem': 'Vue 生态',
  'home.stack.col.frontend': '前端领域',
  'home.stack.col.backend': '后端领域',
  'home.stack.col.abutment': '前后对接',

  'home.recent.title': '最新博客',
  'home.tags.title': '博客标签',

  'home.friend.title': '友情链接',
  'home.friend.add': '互换友链',
  'home.friend.add.title': '欢迎互换友链！',
  'home.friend.add.description': `
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
  "logo": "https://www.gravatar.com/avatar/0011681f8b59101b59a4234213975308",
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
  color: string // rgb 格式的自定义的背景色，如：rgba(0, 0, 0)
}
\`\`\`
:::
`,

  'home.support.title': '赞助名单',
  'home.support.description': '感谢各位大佬的支持'
}
