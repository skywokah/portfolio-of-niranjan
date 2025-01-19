import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Add the path to the external assets here
        '@assets/home-main.svg',
        '@assets/about.png',
        '@assets/NiranjanKrishna_Web_Developer_Resume.pdf',
        '@assets/Projects/emotion.png',
        // Add other external assets as needed
      ],
    },
  },
})
