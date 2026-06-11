import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lolaskusina/',
  build: {
    outDir: 'dist/lolaskusina',
    emptyOutDir: true,
  },
})
