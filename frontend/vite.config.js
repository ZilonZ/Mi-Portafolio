import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuración de Vite: empaquetador y servidor de desarrollo para la aplicación React
export default defineConfig({
  // Plugins: React para JSX y Tailwind CSS para estilos
  plugins: [react(), tailwindcss()],
})
