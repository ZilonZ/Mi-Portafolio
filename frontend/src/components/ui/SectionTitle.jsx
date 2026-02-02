import { useTheme } from '../../hooks/useTheme';

export const SectionTitle = ({ title, subtitle, className = '' }) => {
  const { isDark } = useTheme();

  return (
    <div className={`mb-12 ${className}`}>
      <h2 className={`text-5xl font-orbitron font-bold mb-3 tracking-wider ${
        isDark ? 'text-primary drop-shadow-[0_0_10px_rgba(125,249,255,0.4)]' : 'text-dark-bg'
      }`}>
        {title}
      </h2>
      <div className="flex items-center gap-3">
        <div className="w-1 h-8 rounded-full bg-primary"></div>
        <p className={`font-inter text-lg font-medium ${
          isDark ? 'text-primary' : 'text-dark-bg'
        }`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};
