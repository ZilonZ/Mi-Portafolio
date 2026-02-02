import { useTheme } from '../../hooks/useTheme';

// Componente reutilizable de tarjeta/card para contenedores de contenido
// Proporciona estilos consistentes con soporte para dark/light mode
export const Card = ({ children, className = '', hover = true, glow = true }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`
        rounded-xl backdrop-blur-xs p-6 transition-all duration-300 ${
          isDark
            ? `bg-dark-card border border-primary/20 ${
                // En dark mode: borde cyan que se intensifica al hover, con efecto glow
                hover ? 'hover:border-primary/50 hover:bg-dark-card/80' : ''
              } ${glow ? 'hover:shadow-[0_0_20px_rgba(125,249,255,0.3)]' : ''}`
            : `bg-light-card border border-dark-bg/20 ${
                // En light mode: borde dark-bg sutil con sombra al hover
                hover ? 'hover:border-dark-bg/40 hover:shadow-lg' : ''
              }`
        } ${className}
      `}
    >
      {children}
    </div>
  );
};
