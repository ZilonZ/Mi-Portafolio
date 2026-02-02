import { useTheme } from '../../hooks/useTheme';

export const Card = ({ children, className = '', hover = true, glow = true }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`
        rounded-xl backdrop-blur-xs p-6 transition-all duration-300 ${
          isDark
            ? `bg-dark-card border border-primary/20 ${
                hover ? 'hover:border-primary/50 hover:bg-dark-card/80' : ''
              } ${glow ? 'hover:shadow-[0_0_20px_rgba(125,249,255,0.3)]' : ''}`
            : `bg-light-card border border-dark-bg/20 ${
                hover ? 'hover:border-dark-bg/40 hover:shadow-lg' : ''
              }`
        } ${className}
      `}
    >
      {children}
    </div>
  );
};
