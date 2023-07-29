import { UserConfig, mergeConfig } from 'vite'
import baseConfig from './vite.config.base'
import { devServerProxy } from './utils'

export default mergeConfig(
  {
    mode: 'development',
    server: {
      port: 8080,
      proxy: devServerProxy
    }
  } as UserConfig,
  baseConfig
)
