/** @type {import('tailwindcss').Config} */
export default {
  // Especifica qué archivos scannear para clases Tailwind
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  // Modo oscuro: basado en clase CSS (.dark)
  darkMode: 'class',
  theme: {
    extend: {
      // Colores personalizados
      colors: {
        // Color primario: Cyan neon #7DF9FF para accents
        'primary': '#7DF9FF',
        // Fondos: muy oscuro para dark mode
        'dark-bg': '#020617',
        // Cards: oscuro más claro para dark mode
        'dark-card': '#050B14',
        // Fondo light mode: gris muy claro
        'light-bg': '#F8FAFC',
        // Cards light mode: blanco puro
        'light-card': '#FFFFFF',
        // Tokens semánticos para texto
        'base': {
          'dark': '#E5E7EB',   // Texto principal en dark mode
          'light': '#020617',  // Texto principal en light mode
        },
        'muted': {
          'dark': '#94A3B8',   // Texto secundario en dark mode
          'light': '#334155',  // Texto secundario en light mode
        },
      },
      // Fuentes personalizadas
      fontFamily: {
        // Orbitron: fuente futurista para títulos
        orbitron: ['Orbitron', 'sans-serif'],
        // Inter: fuente moderna para cuerpo de texto
        inter: ['Inter', 'sans-serif'],
        // Poppins: fuente versátil alternativa
        poppins: ['Poppins', 'sans-serif'],
      },
      // Sombras personalizadas con efecto glow (neon)
      boxShadow: {
        'glow-sm': '0 0 10px rgba(59, 130, 246, 0.3)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.6)',
        'glow-xl': '0 0 40px rgba(59, 130, 246, 0.7)',
      },
      // Animaciones personalizadas
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
      },
      // Definición de keyframes para las animaciones
      keyframes: {
        // Efecto de pulso de brillo (glow)
        'glow-pulse': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.7)',
          },
        },
        // Slide in: desliza desde abajo con fade
        'slide-in': {
          from: {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        // Fade in: aparece gradualmente
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        // Float: efecto flotante suave
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        // Scan: efecto de escaneo de líneas
        'scan': {
          '0%, 100%': {
            backgroundPosition: '0 0',
          },
          '50%': {
            backgroundPosition: '0 10px',
          },
        },
      },
      // Backdrop blur personalizado
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
