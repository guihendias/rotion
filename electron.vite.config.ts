import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import tsconfigPathsPlugin from 'vite-tsconfig-paths'

const tsConfigPaths = tsconfigPathsPlugin({
  projects: [resolve('tsconfig.json')],
})

export default defineConfig({
  main: {
    plugins: [tsConfigPaths, externalizeDepsPlugin()],

    publicDir: resolve(__dirname, 'resources'),
  },
  preload: {
    plugins: [tsConfigPaths, externalizeDepsPlugin()],
  },
  renderer: {
    define: {
      'process.platform': JSON.stringify(process.platform),
    },
    css: {
      postcss: {
        plugins: [
          tailwindcss({
            config: resolve(__dirname, 'src', 'renderer', 'tailwind.config.js'),
          }),
        ],
      },
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      },
    },
    plugins: [tsConfigPaths, react()],
  },
})
