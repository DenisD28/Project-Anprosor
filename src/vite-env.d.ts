/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL_API: string
  readonly VITE_NAME_COOKIE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
