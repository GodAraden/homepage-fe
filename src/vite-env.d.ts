/// <reference types="vite/client" />

interface ImportMetaEnv {
  //  BASIC ENV
  readonly VITE_APP_TITLE: string
  readonly VITE_RUN_BEGIN: string
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
