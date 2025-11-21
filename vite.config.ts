import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Sets the base path for user.github.io
  build: {
    outDir: 'dist',
  }
})
