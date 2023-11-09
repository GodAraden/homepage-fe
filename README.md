# Araden 的个人主页 - 前端

技术栈：Vue3 + TypeScript；组件库：Arco Design Vue（主要用于后台管理）

已预装：pinia，vue-router，vue-i18n，@vueuse/core，tailwindcss，less

已预置：Github Action Workflow

# 项目使用的自定义字体？

字体源：[阿里妈妈刀隶体](https://www.iconfont.cn/fonts/detail?spm=a313x.7781069.1998910419.d9df05512&cnid=1ntUmJ7Q4Jhw)

根据需要装饰的文字按需下载，本地存储在 src/assets/font 文件夹下

目前的文字有：

```
QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'，的主页个人博客编程导航实用工具欢迎来访寒舍简陋不足恭迎还望海涵关于我技术栈友情链接最新标签管理写
```

# 语法命名规范

1. CSS 全局样式类使用 g- 开头

# 编码规范

1. 在书写 HTML 类的时候，总体遵循：全局类 - 组件类 - tailwindcss 类 - tailwindcss 响应式类

2. 每种类的书写顺序同 CSS，即布局宽高在前、文本背景在后

# TheCatAPI's KEY

本项目中博客的封面图是通过 [The Cat API](https://thecatapi.com/) 获取到的，发送请求时需在请求头中携带密钥

本项目的密钥存储在项目根目录下的 `.env.local` 文件中（未加入 Git 版本管理），如有 clone 此项目请自行申请 Key 并按以下格式存储：

```bash
VITE_X_API_KEY=xxxxxxxxxxx
```
