import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-dark-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-primary/20 dark:border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-orbitron font-bold text-xl tracking-wider">
              CM.DEV
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-base dark:text-[#E5E7EB] hover:text-primary transition-colors font-inter text-sm uppercase tracking-wide hover:underline hover:underline-offset-4"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-base dark:text-[#E5E7EB] hover:text-primary transition-colors font-inter text-sm uppercase tracking-wide hover:underline hover:underline-offset-4"
            >
              {t('nav.skills')}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-base dark:text-[#E5E7EB] hover:text-primary transition-colors font-inter text-sm uppercase tracking-wide hover:underline hover:underline-offset-4"
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-base dark:text-[#E5E7EB] hover:text-primary transition-colors font-inter text-sm uppercase tracking-wide hover:underline hover:underline-offset-4"
            >
              {t('nav.experience')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-base dark:text-[#E5E7EB] hover:text-primary transition-colors font-inter text-sm uppercase tracking-wide hover:underline hover:underline-offset-4"
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-dark-card/50 dark:bg-dark-card/50 border border-primary/20 dark:border-primary/20 hover:border-primary/60 dark:hover:border-primary/60 transition-all"
              title={isDark ? 'Light Mode' : 'Dark Mode'}
            >
              {isDark ? (
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.828-2.828a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm2.828 2.828a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm-4.536 4.536a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707z" clipRule="evenodd"></path>
                </svg>
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-dark-card/50 dark:bg-dark-card/50 border border-primary/20 dark:border-primary/20 hover:border-primary/60 dark:hover:border-primary/60 transition-all font-inter text-sm font-bold uppercase text-primary"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-dark-card/50 dark:bg-dark-card/50 border border-primary/20 dark:border-primary/20"
            >
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 border-t border-primary/20 dark:border-primary/20 pt-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-base dark:text-[#E5E7EB] hover:text-primary transition-colors font-inter text-sm uppercase tracking-wide"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-base dark:text-[#E5E7EB] hover:text-primary transition-colors font-inter text-sm uppercase tracking-wide"
            >
              {t('nav.skills')}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-base dark:text-[#E5E7EB] hover:text-primary transition-colors font-inter text-sm uppercase tracking-wide"
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-base dark:text-[#E5E7EB] hover:text-primary transition-colors font-inter text-sm uppercase tracking-wide"
            >
              {t('nav.experience')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-base dark:text-[#E5E7EB] hover:text-primary transition-colors font-inter text-sm uppercase tracking-wide"
            >
              {t('nav.contact')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
