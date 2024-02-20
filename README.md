# Araden 的个人主页 - 前端

技术栈：Vue3 + TypeScript；组件库：Arco Design Vue（主要用于后台管理）

已预装：pinia，vue-router，vue-i18n，@vueuse/core，tailwindcss，less

已预置：Github Action Workflow

# 项目使用的自定义字体？

字体源：[钉钉进步体](https://www.iconfont.cn/fonts/detail?spm=a313x.fonts_index.i1.d9df05512.635c3a81JRttvn&cnid=clpB5hhpYWUN)

根据需要装饰的文字按需下载，本地存储在 src/assets/font 文件夹下

目前的文字有：

```
QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'，
个人博客 编程导航 实用工具 博客管理 写博客 用户名 密码
你好，这里是 欢迎来到我的主页 关于我 技术栈 最新博客 友情链接
```

# 语法命名规范

1. CSS 全局样式类使用 g- 开头

# 编码规范

1. 在书写 HTML 类的时候，总体遵循：全局类 - 组件类 - tailwindcss 类 - tailwindcss 响应式类

2. 每种类的书写顺序同 CSS，即布局宽高在前、文本背景在后
