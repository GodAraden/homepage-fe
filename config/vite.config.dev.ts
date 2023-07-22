import { UserConfig, mergeConfig } from 'vite'
import baseConfig from './vite.config.base'
import { devServerPort, devServerProxy } from './utils'

export default mergeConfig(
  {
    mode: 'development',
    server: {
      port: devServerPort,
      proxy: devServerProxy
    }
  } as UserConfig,
  baseConfig
)
