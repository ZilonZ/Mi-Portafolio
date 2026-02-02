import { useTheme } from '../../hooks/useTheme';

// Componente de encabezado para secciones principales
// Muestra título, subtítulo y una barra decorativa con colores temáticos
export const SectionTitle = ({ title, subtitle, className = '' }) => {
  const { isDark } = useTheme();

  return (
    <div className={`mb-12 ${className}`}>
      {/* Título principal: cyan neon en dark mode, dark-bg en light mode */}
      <h2 className={`text-5xl font-orbitron font-bold mb-3 tracking-wider ${
        isDark ? 'text-primary drop-shadow-[0_0_10px_rgba(125,249,255,0.4)]' : 'text-dark-bg'
      }`}>
        {title}
      </h2>
      {/* Barra vertical decorativa + subtítulo con color temático */}
      <div className="flex items-center gap-3">
        {/* Barra vertical de decoración que cambia color según el modo */}
        <div className={`w-1 h-8 rounded-full ${
          isDark ? 'bg-primary' : 'bg-dark-bg'
        }`}></div>
        <p className={`font-inter text-lg font-medium ${
          isDark ? 'text-primary' : 'text-dark-bg'
        }`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};
