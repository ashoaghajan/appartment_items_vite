import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Babel from 'vite-plugin-babel'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Babel()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@components': path.resolve(__dirname, './src/components'),
      '@core': path.resolve(__dirname, './src/components/core'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
})
