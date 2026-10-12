import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig(({ mode, isSsrBuild }) => ({
  plugins: [react()],
  build: {
    manifest: true,
    ...(!isSsrBuild && {
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [{
              name: 'app-core',
              test: /node_modules[\\/](?:react|react-dom|scheduler)[\\/]|src[\\/](?:App|main)\.tsx$/,
              includeDependenciesRecursively: true,
            }],
          },
        },
      },
    }),
  },
  resolve: {
    alias: { '#page-components': fileURLToPath(new URL(isSsrBuild ? './src/page-components.server.ts' : './src/page-components.ts', import.meta.url)) },
  },
  base: process.env.SITE_BASE_PATH || loadEnv(mode, process.cwd(), 'SITE_').SITE_BASE_PATH || '/',
  server: { port: 5173, strictPort: true },
  preview: { port: 4173, strictPort: true },
}))
