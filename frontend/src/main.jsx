import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalProvider } from './context/GlobalContext'

// Punto de entrada de la aplicación React
// Renderiza el componente raíz en el elemento #root del HTML
// Envuelve la aplicación con GlobalProvider para acceso global a tema e idioma
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Proveedor global: inyecta theme e language en contexto */}
    <GlobalProvider>
      {/* Componente raíz de la aplicación */}
      <App />
    </GlobalProvider>
  </StrictMode>,
)
