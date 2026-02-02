import { useTheme } from '../../hooks/useTheme';

// Componente reutilizable de botón con múltiples variantes de estilo
// Soporta dark mode y light mode con estilos coherentes
export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const { isDark } = useTheme();
  
  // Estilos base aplicados a todos los botones
  const baseStyles = 'px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 active:scale-95';
  
  // Objeto con las variantes de botón (primary, secondary, outline, ghost)
  // Cada variante tiene estilos diferentes para dark mode y light mode
  const variants = {
    // Botón principal: fondo cyan en dark mode, dark-bg en light mode
    primary: isDark
      ? 'bg-primary text-dark-bg hover:shadow-[0_0_20px_rgba(125,249,255,0.6)] border border-primary'
      : 'bg-dark-bg text-light-bg hover:shadow-lg border border-dark-bg hover:border-primary',
    // Botón secundario: transparente con borde
    secondary: isDark
      ? 'bg-transparent text-primary border border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(125,249,255,0.4)]'
      : 'bg-transparent text-dark-bg border border-dark-bg hover:bg-dark-bg/10 hover:shadow-lg',
    // Botón de contorno: borde sutil que se enfatiza al hover
    outline: isDark
      ? 'bg-transparent text-base border border-base/30 hover:border-primary hover:text-primary'
      : 'bg-transparent text-dark-bg border border-dark-bg/20 hover:border-dark-bg hover:text-dark-bg',
    // Botón fantasma: solo texto, sin borde ni fondo
    ghost: isDark
      ? 'bg-transparent text-base hover:text-primary'
      : 'bg-transparent text-dark-bg hover:text-primary',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
