import { useLanguage } from '../../hooks/useLanguage';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-primary/20 dark:border-primary/20 bg-dark-bg/50 dark:bg-dark-bg/50 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-1 h-1 bg-primary rounded-full"></div>
            <span className="text-primary font-orbitron text-sm tracking-wider uppercase">
              CM.DEV
            </span>
            <div className="w-1 h-1 bg-primary rounded-full"></div>
          </div>
          <p className="text-muted dark:text-[#94A3B8] font-inter text-sm">
            {t('footer.credits')}
          </p>
        </div>
        <div className="border-t border-primary/20 dark:border-primary/20 pt-6">
          <p className="text-muted dark:text-[#94A3B8]/50 font-inter text-xs">
            © {t('footer.year')}
          </p>
        </div>
      </div>
    </footer>
  );
};
