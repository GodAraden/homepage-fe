/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RUN_BEGIN: string
  readonly VITE_APP_TITLE: string
  readonly VITE_ALI_CDN: string
  readonly VITE_APP_PORT: string
  readonly VITE_BASE_URL: string
  readonly VITE_APP_PROXY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
