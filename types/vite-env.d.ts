/// <reference types="vite/client" />

// API 代理配置：key 以 VITE_PROXY_ 开头，value 为实现了此接口的对象的 JSON 格式
interface ProxyConfig {
  suffix: string
  domain: string
  path: string
}

interface ImportMetaEnv {
  //  BASIC ENV
  readonly VITE_APP_OWNER: string
  readonly VITE_APP_OWNER_BIRTH: string
  readonly VITE_APP_OWNER_EMAIL: string
  readonly VITE_APP_OWNER_GITHUB: string
  readonly VITE_APP_OWNER_LINK: string
  readonly VITE_APP_OWNER_LOGO: string
  readonly VITE_APP_OWNER_COLOR: string

  readonly VITE_APP_BEIANHAO: string
  readonly VITE_APP_START: string
  readonly VITE_BLOG_AUTHOR: string

  readonly VITE_SIGNATURE_ZH: string
  readonly VITE_SIGNATURE_EN: string
  // LOCAL ENV
  readonly VITE_X_API_KEY: string

  // DEV ONLY ENV
  readonly VITE_APP_PORT: string

  // DEV & PROD ENV
  readonly VITE_PROXY_BACKEND: string
  readonly VITE_PROXY_CAT_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
