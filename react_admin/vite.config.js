import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base : '/madmin2025/',
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5174, // 👈 change this to your custom port
    strictPort: true,
    allowedHosts: ['havellsmyousic.com'],
    hmr: false,
    cors: false,
    fs: {
      strict: true
    }
  },
})
