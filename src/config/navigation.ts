// 定义排除类型：将U从T中剔除, keyof 会取出T与U的所有键, 限定P的取值范围为T中的所有键, 并将其类型设为never
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

// 定义互斥类型，T或U只有一个能出现（互相剔除时，被剔除方必须存在）
type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T)

// 仅用于提示键名
interface I18n {
  label?: string
  name?: string
  title?: string
  description?: string
}

interface I18nBase {
  key: string
  zhCN?: I18n
  enUS?: I18n
}

export type ConstantWithI18n = I18nBase &
  XOR<{ value: string }, { children: ConstantWithI18n[] }>

// 编程导航内容，包含了对应的 i18n 映射
export const navigations: ConstantWithI18n[] = [
  {
    key: 'vue',
    zhCN: { title: 'Vue.js 及其生态' },
    enUS: { title: 'Vue.js and its ecosystem' },
    children: [
      {
        key: 'vue3',
        value: 'https://v3.cn.vuejs.org/',
        zhCN: {
          title: 'Vue 3.x',
          description:
            '实话说，我更喜欢 vue 组件化的写法，jsx / tsx 什么的写起来别扭'
        },
        enUS: {
          title: 'Vue 3.x',
          description:
            'To be honest, I prefer vue component writing, jsx / tsx are awkward to write'
        }
      },
      {
        key: 'router',
        value: 'https://router.vuejs.org/zh/',
        zhCN: {
          title: 'Vue Router',
          description: 'Vue 官方路由'
        },
        enUS: {
          title: 'Vue Router',
          description: 'Vue Official Routing'
        }
      },
      {
        key: 'pinia',
        value: 'https://pinia.vuejs.org/zh/',
        zhCN: {
          title: 'Pinia',
          description: '新一代 Vue.js 状态管理库'
        },
        enUS: {
          title: 'Pinia',
          description: 'A new generation Vue.js state management library'
        }
      },
      {
        key: 'vueuse',
        value: 'https://vueuse.org/',
        zhCN: {
          title: 'VueUse',
          description: 'Vue 实用组合式函数集'
        },
        enUS: {
          title: 'VueUse',
          description: 'Vue utility composition function set'
        }
      },
      {
        key: 'vuepress',
        value: 'https://v2.vuepress.vuejs.org/zh/',
        zhCN: {
          title: 'Vuepress',
          description: '文档生成器, 根据 markdown 文档自动生成站点'
        },
        enUS: {
          title: 'Vuepress',
          description:
            'Document generator, automatically generate site based on markdown documents'
        }
      },
      {
        key: 'nuxt',
        value: 'https://nuxt.com/',
        zhCN: {
          title: 'Nuxt',
          description: '基于 Vue 的 SSR 框架'
        },
        enUS: {
          title: 'Nuxt',
          description: 'Vue-based SSR framework'
        }
      },
      {
        key: 'vue-i18n',
        value: 'https://kazupon.github.io/vue-i18n/zh/',
        zhCN: {
          title: 'vue-i18n',
          description: '国际化库'
        },
        enUS: {
          title: 'vue-i18n',
          description: 'Internationalization library'
        }
      },
      {
        key: 'nuxt-image',
        value: 'https://v1.image.nuxtjs.org/',
        zhCN: {
          title: 'NuxtImage',
          description: '更方便的在 nuxt 项目中使用图片'
        },
        enUS: {
          title: 'NuxtImage',
          description: 'It is more convenient to use images in nuxt projects'
        }
      },
      {
        key: 'v-md-editor',
        value: 'https://ckang1229.gitee.io/vue-markdown-editor/zh/',
        zhCN: {
          title: 'v-md-editor',
          description: 'vue markdown 编辑器'
        },
        enUS: {
          title: 'v-md-editor',
          description: 'vue markdown editor'
        }
      },
      {
        key: 'vue-apollo',
        value: 'https://v4.apollo.vuejs.org/zh-cn/',
        zhCN: {
          title: 'Vue Apollo',
          description: '在 Vue 项目中使用 GraphQL'
        },
        enUS: {
          title: 'Vue Apollo',
          description: 'Using GraphQL in Vue projects'
        }
      },
      {
        key: 'vue2',
        value: 'https://v2.cn.vuejs.org/',
        zhCN: {
          title: 'vue2',
          description: '老版本的 vue, 那时候还是选项式 API'
        },
        enUS: {
          title: 'vue2',
          description: 'Old version of vue, back then it was an optional API'
        }
      },
      {
        key: 'vuex',
        value: 'https://vuex.vuejs.org/zh/',
        zhCN: {
          title: 'vuex',
          description: 'Vue 经典状态管理库, 不过我更喜欢pinia'
        },
        enUS: {
          title: 'vuex',
          description:
            'Vue classic state management library, but I prefer pinia'
        }
      }
    ]
  },
  {
    key: 'component',
    zhCN: { title: '各种组件库' },
    enUS: { title: 'Various component libraries' },
    children: [
      {
        key: 'arco-vue',
        value: 'https://arco.design/vue/docs/start',
        zhCN: {
          title: 'Arco Design Vue',
          description: '字节跳动的 Vue 组件库'
        },
        enUS: {
          title: 'Arco Design Vue',
          description: "ByteDance's Vue component library"
        }
      },
      {
        key: 'ant-vue',
        value: 'https://www.antdv.com/components/overview-cn',
        zhCN: {
          title: 'Ant Design Vue',
          description: '蚂蚁集团的 Vue 组件库 (貌似是社区运营的)'
        },
        enUS: {
          title: 'Ant Design Vue',
          description:
            "Ant Group's Vue component library (seems to be operated by the community)"
        }
      },
      {
        key: 'element',
        value: 'https://element-plus.gitee.io/zh-CN/',
        zhCN: {
          title: 'element-plus',
          description: '饿了么的 Vue 组件库 (貌似是)'
        },
        enUS: {
          title: 'element-plus',
          description: "Ele.me's Vue component library (seems to be)"
        }
      },
      {
        key: 'naive',
        value: 'https://www.naiveui.com/zh-CN/os-theme',
        zhCN: {
          title: 'Naive-UI',
          description: '一个比较有意思的 Vue 组件库'
        },
        enUS: {
          title: 'Naive-UI',
          description: 'An interesting Vue component library'
        }
      },
      {
        key: 'arco-react',
        value: 'https://arco.design/react/docs/start',
        zhCN: {
          title: 'Arco Design React',
          description: '字节跳动的 React 组件库'
        },
        enUS: {
          title: 'Arco Design React',
          description: "ByteDance's React component library"
        }
      },
      {
        key: 'ant-react',
        value: 'https://ant.design/index-cn',
        zhCN: {
          title: 'Ant Design',
          description: '蚂蚁集团的 React 组件库 (貌似是社区运营的)'
        },
        enUS: {
          title: 'Ant Design',
          description:
            "Ant Group's React component library (seems to be operated by the community)"
        }
      },
      {
        key: 'vant-weapp',
        value: 'https://vant-contrib.gitee.io/vant-weapp/#/home',
        zhCN: {
          title: 'Vant WeApp',
          description: 'Vant 微信小程序组件库'
        },
        enUS: {
          title: 'Vant WeApp',
          description: 'Vant WeChat applet component library'
        }
      }
    ]
  },
  {
    key: 'visual',
    zhCN: { title: '可视化库' },
    enUS: { title: 'Visual library' },
    children: [
      {
        key: 'echarts',
        value: 'https://echarts.apache.org/zh/index.html',
        zhCN: {
          title: 'Apache Echarts',
          description: '经典可视化库，基于 JavaScript'
        },
        enUS: {
          title: 'Apache Echarts',
          description: 'Classic visualization library, JavaScript based'
        }
      },
      {
        key: 'antv',
        value: 'https://antv.gitee.io/zh',
        zhCN: {
          title: '蚂蚁数据可视化',
          description: '蚂蚁集团全新一代数据可视化解决方案'
        },
        enUS: {
          title: 'Ant Data Visualization ',
          description:
            "Ant Group's new generation of data visualization Solutions"
        }
      },
      {
        key: 'chartjs',
        value: 'https://www.chartjs.org/',
        zhCN: {
          title: 'Chart.js',
          description: '用于现代网络的简单而灵活的 JavaScript 图表库'
        },
        enUS: {
          title: 'Chart.js',
          description:
            'Simple yet flexible JavaScript charting library for the modern web'
        }
      },
      {
        key: 'vis',
        value: 'https://visjs.org/',
        zhCN: {
          title: 'vis.js',
          description: '一个动态的、基于浏览器的可视化库'
        },
        enUS: {
          title: 'vis.js',
          description: 'A dynamic, browser based visualization library. '
        }
      },
      {
        key: 'threejs',
        value: 'https://threejs.org/',
        zhCN: {
          title: 'three.js',
          description: '基于 WebGL 的 3D 可视化库'
        },
        enUS: {
          title: 'three.js',
          description: 'WebGL-based 3D Visualization Library'
        }
      }
    ]
  },
  {
    key: 'backend',
    zhCN: { title: '后端技术' },
    enUS: { title: 'Backend technology' },
    children: [
      {
        key: 'django',
        value: 'https://docs.djangoproject.com/zh-hans/4.1/',
        zhCN: {
          title: 'Django',
          description: 'Python MTV 后端框架，大而全'
        },
        enUS: {
          title: 'three.js',
          description: 'Python MTV Backend Framework, big and complete'
        }
      },
      {
        key: 'strapi',
        value: 'https://strapi.io/',
        zhCN: {
          title: 'Strapi',
          description: 'Strapi 是一种灵活的、开放源码的无头CMS (内容管理系统)'
        },
        enUS: {
          title: 'Strapi',
          description:
            'Strapi is a flexible, open source headless CMS (Content Management System)'
        }
      },
      {
        key: 'koa',
        value: 'https://koajs.com/',
        zhCN: {
          title: 'Koa.js',
          description:
            '洋葱模型，极简的http请求框架，仅实现了网络请求相关的核心功能，额外的功能依靠社区提供的中间件'
        },
        enUS: {
          title: 'Koa.js',
          description:
            'The onion model, a minimalist http request framework, only implements core functions related to network requests, and additional functions rely on middleware provided by the community'
        }
      },
      {
        key: 'nest',
        value: 'https://nestjs.com/',
        zhCN: {
          title: 'Nest.js',
          description:
            '和传统的后端架构很相似，支持TypeScript，结合了OOP（面向对象编程）、FP（功能编程）、FRP（功能反应式编程）。'
        },
        enUS: {
          title: 'Nest.js',
          description:
            'It is very similar to the traditional back-end architecture, supports TypeScript, and combines OOP (object-oriented programming), FP (functional programming), and FRP (functional reactive programming). '
        }
      },
      {
        key: 'express',
        value: 'https://www.expressjs.com.cn/',
        zhCN: {
          title: 'Express.js',
          description: '老牌的 Nodejs 后端框架，具有丰富的中间件系统'
        },
        enUS: {
          title: 'Express.js',
          description:
            'Old Nodejs backend framework with rich middleware system'
        }
      },
      {
        key: 'prisma',
        value: 'https://prisma.yoga/',
        zhCN: {
          title: 'Prisma',
          description:
            '下一代 Node.js、TypeScript、Go 的数据库 ORM，源自 GraphCool'
        },
        enUS: {
          title: 'Prisma',
          description:
            'The next generation of Node.js, TypeScript, Go database ORM. From GraphCool'
        }
      }
    ]
  },
  {
    key: 'react',
    zhCN: { title: 'React.js 及其生态' },
    enUS: { title: 'React.js  and its ecosystem' },
    children: [
      {
        key: 'react',
        value: 'https://zh-hans.reactjs.org/',
        zhCN: {
          title: 'React.js 核心库',
          description: '用过函数式组件，感觉使用体验不如 Vue（'
        },
        enUS: {
          title: 'React.js Core Library',
          description:
            'I have used functional components, but I feel that the experience is not as good as Vue('
        }
      },
      {
        key: 'router',
        value: 'http://react-guide.github.io/react-router-cn/',
        zhCN: {
          title: 'React Router',
          description: '完整的 React 路由解决方案'
        },
        enUS: {
          title: 'React Router',
          description: 'Complete React routing solution'
        }
      },
      {
        key: 'router-dom',
        value: 'https://reactrouter.com/en/main',
        zhCN: {
          title: 'React Router Dom?',
          description:
            '加入书签的时候是这么个名，但好像并不是（不管了，反正暂时用不上）'
        },
        enUS: {
          title: 'React Router Dom?',
          description:
            "It was such a name when it was added to the bookmark, but it doesn't seem to be (don't care, it won't be used for the time being anyway)"
        }
      },
      {
        key: 'redux',
        value: 'https://cn.react-redux.js.org/',
        zhCN: {
          title: 'React Redux',
          description: '官方的 React 对 Redux 绑定库'
        },
        enUS: {
          title: 'React Redux',
          description: 'Official React to Redux binding library'
        }
      },
      {
        key: 'ahooks',
        value: 'https://ahooks.js.org/zh-CN/',
        zhCN: {
          title: 'ahooks',
          description: '一套高质量可靠的 React Hooks 库'
        },
        enUS: {
          title: 'ahooks',
          description: 'A set of high quality and reliable React Hooks library'
        }
      },
      {
        key: 'next',
        value: 'https://nextjs.org/',
        zhCN: {
          title: 'Next.js',
          description: '一个轻量级的 React 服务端渲染应用框架'
        },
        enUS: {
          title: 'Next.js',
          description:
            'A lightweight React server-side rendering application framework'
        }
      },
      {
        key: 'react-use',
        value: 'https://github.com/zenghongtu/react-use-chinese',
        zhCN: {
          title: 'react-use',
          description: 'React hooks 集合'
        },
        enUS: {
          title: 'react-use',
          description: 'A collection of React hooks'
        }
      }
    ]
  },
  {
    key: 'other',
    zhCN: { title: '其它相关库' },
    enUS: { title: 'other related libs' },
    children: [
      {
        key: 'moment',
        value: 'http://momentjs.cn/',
        zhCN: {
          title: 'Moment.js',
          description: 'JavaScript 日期处理类库'
        },
        enUS: {
          title: 'Moment.js',
          description: 'JavaScript date processing library'
        }
      },
      {
        key: 'day',
        value: 'https://dayjs.gitee.io/docs/zh-CN/installation/installation',
        zhCN: {
          title: 'Day.js',
          description: 'Moment.js 的 2kB 轻量化方案，拥有同样强大的 API'
        },
        enUS: {
          title: 'Day.js',
          description:
            '2kB lightweight solution of Moment.js, with the same powerful API'
        }
      },
      {
        key: 'axios',
        value: 'http://www.axios-js.com/',
        zhCN: {
          title: 'Axios',
          description: '易用、简洁且高效的http库'
        },
        enUS: {
          title: 'Axios',
          description: 'Easy to use, concise and efficient http library'
        }
      },
      {
        key: 'graphql',
        value: 'https://graphql.cn/',
        zhCN: {
          title: 'GraphQL',
          description: '一种用于 API 的查询语言'
        },
        enUS: {
          title: 'GraphQL',
          description: 'A query language for APIs'
        }
      },
      {
        key: 'mock',
        value: 'http://mockjs.com/',
        zhCN: {
          title: 'Mockjs',
          description: '生成随机数据，拦截 Ajax 请求'
        },
        enUS: {
          title: 'Mockjs',
          description: 'Generate random data, intercept Ajax requests'
        }
      },
      {
        key: 'tailwind',
        value: 'https://tailwindcss.com/',
        zhCN: {
          title: 'Tailwind CSS',
          description: '原子化的 CSS 框架'
        },
        enUS: {
          title: 'Tailwind CSS',
          description: 'Atomized CSS framework'
        }
      },
      {
        key: 'windi',
        value: 'https://windicss.org/',
        zhCN: {
          title: 'Windi CSS',
          description: '下一代实用程序优先的 CSS 框架'
        },
        enUS: {
          title: 'Windi CSS',
          description: 'Next generation utility-first CSS framework.'
        }
      },
      {
        key: 'puppeteer',
        value: 'https://pptr.dev/',
        zhCN: {
          title: 'Puppeteer',
          description: '提供了控制 Chrome/Chromium 的一组 API'
        },
        enUS: {
          title: 'Puppeteer',
          description: 'Provides a set of APIs to control Chrome/Chromium'
        }
      }
    ]
  },
  {
    key: 'tool',
    zhCN: { title: '工具链' },
    enUS: { title: 'tools chain' },
    children: [
      {
        key: 'npm',
        value: 'https://www.npmjs.com/',
        zhCN: {
          title: 'NPM',
          description:
            'Nodejs 自带的包管理器（但总有种 Windows 自带的 IE 的既视感）'
        },
        enUS: {
          title: 'NPM',
          description:
            'The package manager that comes with Nodejs (but there is always a sense of IE that comes with Windows)'
        }
      },
      {
        key: 'yarn',
        value: 'https://www.yarnpkg.cn/',
        zhCN: {
          title: 'Yarn',
          description: '比 NPM 更安全、稳定、快速'
        },
        enUS: {
          title: 'Yarn',
          description: 'More secure, stable and faster than NPM'
        }
      },
      {
        key: 'pnpm',
        value: 'https://pnpm.io/zh/',
        zhCN: {
          title: 'PNPM',
          description: '更快! 更省空间, 非扁平的 node_modules'
        },
        enUS: {
          title: 'PNPM',
          description: 'Faster! More space efficient, non-flat node_modules'
        }
      },
      {
        key: 'vite',
        value: 'https://cn.vitejs.dev/',
        zhCN: {
          title: 'vite',
          description: '下一代的前端构建工具'
        },
        enUS: {
          title: 'vite',
          description: 'The next generation of front-end build tools'
        }
      },
      {
        key: 'vitest',
        value: 'https://cn.vitest.dev/',
        zhCN: {
          title: 'Vitest',
          description: '一个 Vite 原生的单元测试框架。非常的快！'
        },
        enUS: {
          title: 'Vitest',
          description: 'A Vite native unit testing framework. Very fast! '
        }
      },
      {
        key: 'eslint',
        value: 'https://eslint.org/',
        zhCN: {
          title: 'ESLint',
          description: '插件式 JavaScript/JSX 静态代码检查工具'
        },
        enUS: {
          title: 'ESLint',
          description: 'The pluggable linting utility for JavaScript and JSX'
        }
      },
      {
        key: 'prettier',
        value: 'https://prettier.io/',
        zhCN: {
          title: 'Prettier',
          description: '插件式 JavaScript 代码格式化工具'
        },
        enUS: {
          title: 'Prettier',
          description: 'Plug-in JavaScript code formatter'
        }
      }
    ]
  },
  {
    key: 'language',
    zhCN: { title: '编程语言参考' },
    enUS: { title: 'Coding Language Refer' },
    children: [
      {
        key: 'mdn',
        value: 'https://developer.mozilla.org/zh-CN/',
        zhCN: {
          title: 'MDN 文档',
          description:
            '自 2005 年以来记录 Web 技术，包括 CSS、HTML 和 JavaScript'
        },
        enUS: {
          title: 'MDN Documentation',
          description:
            'Documenting web technologies since 2005, including CSS, HTML, and JavaScript'
        }
      },
      {
        key: 'typeScript',
        value: 'https://www.typescriptlang.org/',
        zhCN: {
          title: 'TypeScript',
          description: 'TypeScript 官方文档, 但中文翻译跟没有似的'
        },
        enUS: {
          title: 'TypeScript',
          description:
            'TypeScript Official documents, but the Chinese translation does not seem to have any'
        }
      },
      {
        key: 'node',
        value: 'https://nodejs.cn/',
        zhCN: {
          title: 'Nodejs',
          description: 'Nodejs 官方文档'
        },
        enUS: {
          title: 'Nodejs',
          description: 'Nodejs Official documents'
        }
      },
      {
        key: 'sass',
        value: 'https://www.sass.hk/',
        zhCN: {
          title: 'Sass',
          description: 'CSS 预处理语言'
        },
        enUS: {
          title: 'Sass',
          description: 'CSS Preprocessing Language'
        }
      },
      {
        key: 'less',
        value: 'https://less.bootcss.com/',
        zhCN: {
          title: 'Less',
          description: 'CSS 预处理语言'
        },
        enUS: {
          title: 'Less',
          description: 'CSS Preprocessing Language'
        }
      },
      {
        key: 'stylus',
        value: 'https://www.stylus-lang.cn/',
        zhCN: {
          title: 'Stylus',
          description: 'CSS 预处理语言'
        },
        enUS: {
          title: 'Stylus',
          description: 'CSS Preprocessing Language'
        }
      }
    ]
  },
  {
    key: 'framework',
    zhCN: { title: '其他框架' },
    enUS: { title: 'other frameworks' },
    children: [
      {
        key: 'auto',
        value: 'https://pro.autojs.org/',
        zhCN: {
          title: 'Auto.js',
          description: '使用 JavaScript 编写安卓应用'
        },
        enUS: {
          title: 'Auto.js',
          description: 'Writing an Android application using JavaScript'
        }
      },
      {
        key: 'uniapp',
        value: 'https://uniapp.dcloud.net.cn/',
        zhCN: {
          title: 'uniapp',
          description:
            '使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序'
        },
        enUS: {
          title: 'uniapp',
          description:
            'Using Vue.js to develop a framework for all front-end applications, developers write a set of codes that can be published to iOS, Android, Web (responsive), and various small programs'
        }
      },
      {
        key: 'electorn',
        value: 'https://www.electronjs.org/zh/',
        zhCN: {
          title: 'Electorn',
          description: '使用 HTML, CSS, JavaScript 编写跨平台的桌面应用'
        },
        enUS: {
          title: 'Electorn',
          description:
            'Build cross-platform desktop apps with JavaScript, HTML, and CSS'
        }
      },
      {
        key: 'weapp',
        value: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
        zhCN: {
          title: '微信小程序文档',
          description: '我用的时候感觉特别像 vue2'
        },
        enUS: {
          title: 'WeApp Documentation',
          description: 'I feel like vue2 when I use it'
        }
      }
    ]
  },
  {
    key: 'platform',
    zhCN: { title: '平台' },
    enUS: { title: 'platform' },
    children: [
      {
        key: 'github',
        value: 'https://github.com/',
        zhCN: {
          title: 'Github',
          description: '面向开源及私有软件项目的托管平台'
        },
        enUS: {
          title: 'Github',
          description:
            'A hosting platform for open source and proprietary software projects'
        }
      },
      {
        key: 'gitee',
        value: 'https://gitee.com/',
        zhCN: {
          title: 'Gitee',
          description: '开源中国（OSChina）推出的基于Git的代码托管服务'
        },
        enUS: {
          title: 'Gitee',
          description:
            'Git-based code hosting service launched by Open Source China (OSChina)'
        }
      },
      {
        key: 'iconfont',
        value: 'https://www.iconfont.cn/',
        zhCN: {
          title: 'Iconfont',
          description: '阿里巴巴字体图标库'
        },
        enUS: {
          title: 'Iconfont',
          description: 'Alibaba font icon library'
        }
      },
      {
        key: 'iconify',
        value: 'https://icon-sets.iconify.design/',
        zhCN: {
          title: 'Iconify',
          description: '一个开源图标库'
        },
        enUS: {
          title: 'Iconify',
          description: 'An open source icon library'
        }
      },
      {
        key: 'fffuel',
        value: 'https://fffuel.co/',
        zhCN: {
          title: 'fffuel',
          description: '用于生成渐变、图案、纹理、形状和背景的 SVG 等格式图片'
        },
        enUS: {
          title: 'fffuel',
          description:
            'Images in formats such as SVG for generating gradients, patterns, textures, shapes, and backgrounds'
        }
      }
    ]
  },
  {
    key: 'job',
    zhCN: { title: '求职面试' },
    enUS: { title: 'Job search and interview' },
    children: [
      {
        key: 'leetcode',
        value: 'https://leetcode.cn/problemset/all/',
        zhCN: {
          title: '力扣',
          description: '刷刷刷'
        },
        enUS: {
          title: 'leetcode',
          description: 'coding...'
        }
      },
      {
        key: 'labuladong',
        value: 'https://labuladong.gitee.io/algo/',
        zhCN: {
          title: 'labuladong 的算法小抄',
          description: '依据力扣题目做出的算法讲解, 面向求职者'
        },
        enUS: {
          title: "labuladong's algorithm cheat sheet",
          description:
            'Algorithm explanation based on Lituo topic, for job seekers'
        }
      },
      {
        key: 'nowcoder',
        value: 'https://www.nowcoder.com/',
        zhCN: {
          title: '牛客',
          description: '前面忘了, 中间忘了, 后面忘了, 总之狠狠地赚一笔'
        },
        enUS: {
          title: 'NowCoder',
          description:
            'Forget it in the front, forget it in the middle, forget it in the back, in short, make a lot of money'
        }
      },
      {
        key: 'xiaolin',
        value: 'https://xiaolincoding.com/',
        zhCN: {
          title: '小林 coding',
          description: '图解计算机基础, 面试必备八股文'
        },
        enUS: {
          title: 'XiaoLin coding',
          description:
            'Illustrated computer basics, necessary stereotyped essays for interviews'
        }
      },
      {
        key: 'onepiece',
        value: 'https://vue3js.cn/',
        zhCN: {
          title: 'Vue 社群',
          description:
            '由 Vue 爱好者搭建, 下面推荐了很多面试相关与日常开发相关的仓库'
        },
        enUS: {
          title: 'Vue Community',
          description:
            'Builded by Vue enthusiasts, the following recommends a lot of warehouses related to interviews and daily development'
        }
      },
      {
        key: 'experience-1',
        value: 'https://juejin.cn/post/6905294475539513352',
        zhCN: {
          title: '前端面经 - 1',
          description: '面前刷一遍'
        },
        enUS: {
          title: 'Front interview experience - 1',
          description: 'Swipe before interview'
        }
      }
    ]
  }
]
