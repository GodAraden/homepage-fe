import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.less'
import { VMdPreview, VueMarkdownEditor } from './plugin/editor'

import App from './App.vue'
import { router } from './router'
import store from './store'
import i18n from './locale'
import directive from './directive'
import globalComponents from './components'

import '~/style/project.less'
import '~/style/global.less'
import '~/style/md-editor.less'
import './api/interceptor'
import './plugin/dayjs'

const app = createApp(App)

app.use(ArcoVue, {})
app.use(ArcoVueIcon)

app.use(router)
app.use(store)
app.use(i18n)
app.use(directive)
app.use(globalComponents)

app.use(VueMarkdownEditor)
app.use(VMdPreview)

app.mount('#app')
