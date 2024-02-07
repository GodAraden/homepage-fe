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
    if (error.config?.url.includes('/images/search')) {
      throw '[Resource Load Failed]: The Cat API is not available'
    }

    const { data, status } = error.response
    const { message = 'Request Failed: Unknown Server Error' } = data

    Message.error(message)

    if (status === 500) {
      throw '[Server Side Error]: Unknown server error'
    }
    return data
  }
)

export default axios
