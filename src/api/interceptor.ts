import axios, { AxiosResponse, AxiosError } from 'axios'
import { Message } from '@arco-design/web-vue'

axios.defaults.withCredentials = true

const envs = import.meta.env
const proxies: ProxyConfig[] = []
for (const key in envs) {
  if (key.startsWith('VITE_PROXY')) {
    proxies.push(JSON.parse(envs[key]))
  }
}

// 拦截 request，在生产环境下替换请求的前缀
axios.interceptors.request.use((config) => {
  if (import.meta.env.PROD) {
    for (const { suffix, domain, path } of proxies) {
      const reg = new RegExp(suffix)
      if (reg.test(config.url)) {
        config.url = domain + config.url.replace(reg, path)
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
    if (error?.config?.url.includes('/images/search')) {
      throw 'Failed to fetch images'
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
