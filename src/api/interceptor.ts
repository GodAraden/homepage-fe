import axios, { AxiosResponse, AxiosError } from 'axios'
import { Message } from '@arco-design/web-vue'

const BaseUrl = import.meta.env.VITE_BASE_URL

if (import.meta.env.PROD) {
  axios.defaults.baseURL = BaseUrl
}

// 拦截 request，在生产环境下替换请求的前缀
axios.interceptors.request.use((config) => {
  if (import.meta.env.PROD) {
    if (/^\/api/g.test(config.url)) {
      config.url = BaseUrl + config.url.replace(/^\/api/g, '')
    }
  }
  return config
})

// 拦截 response，统一处理 Http 错误
axios.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response.data
  },
  async (error: AxiosError<any>) => {
    const { statusCode = 'unknown', message = 'unknown' } = error.response.data
    Message.error('Error: ' + statusCode + ' ' + message)
    // `${statusCode}: ${i18n.global.t('tips.http.error.' + message)}`
    return error.response
  }
)

export default axios
