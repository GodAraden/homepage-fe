/// <reference types="vite/client" />

interface ImportMetaEnv {
  //  BASIC ENV
  readonly VITE_APP_OWNER: string
  readonly VITE_APP_OWNER_BIRTH: string
  readonly VITE_APP_BEIANHAO: string
  readonly VITE_APP_START: string
  readonly VITE_BLOG_AUTHOR: string

  readonly VITE_SIGNATURE_ZH: string
  readonly VITE_SIGNATURE_EN: string
  // LOCAL ENV
  readonly VITE_X_API_KEY: string
  // DEV & PROD ENV
  readonly VITE_APP_PROXY: string
  // PROD ONLY ENV
  readonly VITE_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
