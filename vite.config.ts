import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // La app siempre se abre en http://localhost:3000.
    port: 3000,
    // Si el puerto 3000 está ocupado, avisa con un error en vez de usar otro.
    strictPort: true,
  },
})
