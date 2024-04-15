import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // ... build options
    rollupOptions: {
      external: ['react-slick'], // List react-slick as external
    },
  },
})
