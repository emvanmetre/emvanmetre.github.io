import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import githubPages from 'vite-plugin-github-pages'

export default defineConfig({
  plugins: [react(), githubPages()],
  base: '/',
  build: {
    outDir: 'dist', // CRA's default build output
  },
})
