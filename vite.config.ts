import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Fix: Cannot find name '__dirname'
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
