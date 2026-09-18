import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: process.env.SITE_BASE_PATH || loadEnv(mode, process.cwd(), 'SITE_').SITE_BASE_PATH || '/',
  server: { port: 5173, strictPort: true },
  preview: { port: 4173, strictPort: true },
}))
