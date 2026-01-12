import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base : '/madmin2025/',
  plugins: [react()],
  server: {
    port: 5174, // 👈 change this to your custom port
    strictPort: true,
    allowedHosts: ['havellsmyousic.com']
  },
})
