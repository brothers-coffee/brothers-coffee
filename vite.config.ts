import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: true,
    watch: {
      usePolling: process.env.VITE_USE_POLLING === '1',
    },
  },
  preview: {
    host: true,
    allowedHosts: true,
  },
})
