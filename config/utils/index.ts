import { ProxyOptions, loadEnv } from 'vite'

const envs = loadEnv(process.env.NODE_ENV || 'development', '')

const proxy = envs.VITE_APP_PROXY.split('~').map((value) => value.split(','))
const parseDevProxy = (proxy: string[][]) => {
  const output: Record<string, ProxyOptions> = {}
  for (const entries of proxy) {
    output[entries[0]] = {
      target: entries[1],
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp(entries[0]), entries[2])
    }
  }
  return output
}

export const devServerProxy = parseDevProxy(proxy)
