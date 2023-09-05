import axios, { AxiosResponse, AxiosError } from 'axios'
import { Message } from '@arco-design/web-vue'

const BaseUrl = import.meta.env.VITE_BASE_URL

axios.defaults.withCredentials = true

if (import.meta.env.PROD) {
  axios.defaults.baseURL = BaseUrl
}

// 拦截 request，在生产环境下替换请求的前缀
axios.interceptors.request.use((config) => {
  if (import.meta.env.PROD) {
    const proxy = import.meta.env.VITE_APP_PROXY.split('~').map((value) => {
      return value.split(',')
    })
    for (const [regStr, baseUrl, target] of proxy) {
      const reg = new RegExp(regStr)
      if (reg.test(config.url)) {
        config.url = baseUrl + config.url.replace(reg, target)
      }
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
    // 第三方图片 API 请求超时的情况
    if (error?.config?.url === '/cat/images/search') {
      throw 'Failed to fetch blog background image'
    }

    if (!error.response) return {}

    const { statusCode = error.response.status, message = error.message } =
      error.response.data

    if (statusCode === 500) {
      Message.error('服务端异常，请联系管理员')
      return {}
    }

    Message.error('Error: ' + statusCode + ' ' + message)
    // `${statusCode}: ${i18n.global.t('tips.http.error.' + message)}`
    return error.response.data
  }
)

export default axios
