import { mergeConfig } from 'vite'
import baseConfig from './vite.config.base'

export default mergeConfig(
  {
    mode: 'development',
    server: {
      proxy: {
        '^/api': {
          target: 'http://127.0.0.1:3000', //实际请求地址
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/')
        }
      }
    }
  },
  baseConfig
)
