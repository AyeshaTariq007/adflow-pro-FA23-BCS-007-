import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './', // Ye line lazmi check karein
  build: {
    outDir: 'dist',
  }
})
