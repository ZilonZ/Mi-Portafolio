import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';

export const Footer = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <footer className={`border-t backdrop-blur-md py-8 transition-colors duration-300 ${isDark ? 'border-primary/20 bg-dark-bg/50' : 'border-dark-bg/20 bg-light-bg/50'}`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="flex items-center justify-center gap-2">
            <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-primary' : 'bg-dark-bg'}`}></div>
            <span className={`font-orbitron text-sm tracking-wider uppercase ${isDark ? 'text-primary' : 'text-dark-bg'}`}>
              CM.DEV
            </span>
            <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-primary' : 'bg-dark-bg'}`}></div>
          </div>
          <p className={`font-inter text-sm ${isDark ? 'text-[#94A3B8]' : 'text-[#334155]'}`}>
            {t('footer.credits')}
          </p>
        </div>
        <div className={`border-t pt-6 transition-colors duration-300 ${isDark ? 'border-primary/20' : 'border-dark-bg/20'}`}>
          <p className={`font-inter text-xs ${isDark ? 'text-[#94A3B8]/50' : 'text-[#334155]/50'}`}>
            © {t('footer.year')}
          </p>
        </div>
      </div>
    </footer>
  );
};
