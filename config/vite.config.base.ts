import { UserConfig, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, '../src')
      },
      {
        find: '~',
        replacement: resolve(__dirname, '../src/assets')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'arcoblue-1': '#fff7e8',
          'arcoblue-2': '#ffe4ba',
          'arcoblue-3': '#ffCf8b',
          'arcoblue-4': '#ffb65d',
          'arcoblue-5': '#ff9a2e',
          'arcoblue-6': '#ff7d00'
        },
        javascriptEnabled: true
      }
    }
  }
}) as UserConfig
