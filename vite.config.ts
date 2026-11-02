/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  server: {
    proxy: {
      '/api/produtos': {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        rewrite: () => '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    css: false,
  },
})
