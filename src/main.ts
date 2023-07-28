import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.less'
import { VMdPreview, VueMarkdownEditor } from './utils/editor'

import App from './App.vue'
import { router } from './router'
import store from './store'
import i18n from './locale'

import './index.css'
import '~/style/global.less'
import '~/style/md-editor.less'
import './api/interceptor'

const app = createApp(App)

app.use(ArcoVue, {})
app.use(ArcoVueIcon)

app.use(router)
app.use(store)
app.use(i18n)

app.use(VueMarkdownEditor)
app.use(VMdPreview)

app.mount('#app')
