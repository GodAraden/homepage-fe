import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'

import App from './App.vue'
import { router } from './router'
import store from './store'
import i18n from './locale'

import './index.css'
import './api/interceptor'

// 测试代码
import axios from 'axios'
axios.get('/api').then((val) => {
  console.log(val)
})

const app = createApp(App)

app.use(ArcoVue, {})
app.use(ArcoVueIcon)

app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
