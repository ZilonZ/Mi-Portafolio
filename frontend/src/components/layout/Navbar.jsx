import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';

// Componente de barra de navegación pegajosa (sticky)
// Incluye menú desktop, menú móvil, toggles de tema e idioma
export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  // Estado para controlar la visibilidad del menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para desplazarse suavemente a una sección por su ID
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDark ? 'bg-dark-bg/80 border-primary/20' : 'bg-light-bg/80 border-dark-bg/20'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo: marca con indicador animado */}
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-primary' : 'bg-dark-bg'}`}></div>
            <span className={`font-orbitron font-bold text-xl tracking-wider ${isDark ? 'text-primary' : 'text-dark-bg'}`}>
              CM.DEV
            </span>
          </div>

          {/* Menú Desktop: solo visible en pantallas md y mayores */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:transition-colors font-inter text-sm uppercase tracking-wide hover:underline hover:underline-offset-4 ${isDark ? 'text-[#E5E7EB] hover:text-primary' : 'text-dark-bg/70 hover:text-dark-bg'}`}
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`hover:transition-colors font-inter text-sm uppercase tracking-wide hover:underline hover:underline-offset-4 ${isDark ? 'text-[#E5E7EB] hover:text-primary' : 'text-dark-bg/70 hover:text-dark-bg'}`}
            >
              {t('nav.skills')}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`hover:transition-colors font-inter text-sm uppercase tracking-wide hover:underline hover:underline-offset-4 ${isDark ? 'text-[#E5E7EB] hover:text-primary' : 'text-dark-bg/70 hover:text-dark-bg'}`}
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`hover:transition-colors font-inter text-sm uppercase tracking-wide hover:underline hover:underline-offset-4 ${isDark ? 'text-[#E5E7EB] hover:text-primary' : 'text-dark-bg/70 hover:text-dark-bg'}`}
            >
              {t('nav.experience')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`hover:transition-colors font-inter text-sm uppercase tracking-wide hover:underline hover:underline-offset-4 ${isDark ? 'text-[#E5E7EB] hover:text-primary' : 'text-dark-bg/70 hover:text-dark-bg'}`}
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Controles: tema, idioma, menú móvil */}
          <div className="flex items-center gap-4">
            {/* Botón toggle de tema (dark/light mode) */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition-all ${isDark ? 'bg-dark-card/50 border-primary/20 hover:border-primary/60' : 'bg-light-card/50 border-dark-bg/20 hover:border-dark-bg/60'}`}
              title={isDark ? 'Light Mode' : 'Dark Mode'}
            >
              {isDark ? (
                // Icono de luna para mode oscuro
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                // Icono de sol para modo claro
                <svg className={`w-5 h-5 ${isDark ? 'text-primary' : 'text-dark-bg'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.828-2.828a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm2.828 2.828a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm-4.536 4.536a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707z" clipRule="evenodd"></path>
                </svg>
              )}
            </button>

            {/* Botón toggle de idioma (ES/EN) */}
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-lg border transition-all font-inter text-sm font-bold uppercase ${isDark ? 'bg-dark-card/50 border-primary/20 hover:border-primary/60 text-primary' : 'bg-light-card/50 border-dark-bg/20 hover:border-dark-bg/60 text-dark-bg'}`}
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Botón toggle del menú móvil: solo visible en pantallas menores a md */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg border transition-all ${isDark ? 'bg-dark-card/50 border-primary/20' : 'bg-light-card/50 border-dark-bg/20'}`}
            >
              <svg className={`w-5 h-5 ${isDark ? 'text-primary' : 'text-dark-bg'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  // Icono X cuando el menú está abierto
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Icono hamburguesa cuando el menú está cerrado
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil: solo visible cuando isMobileMenuOpen es true */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 flex flex-col gap-4 border-t transition-colors duration-300 pt-4 ${isDark ? 'border-primary/20' : 'border-dark-bg/20'}`}>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-inter text-sm uppercase tracking-wide ${isDark ? 'text-[#E5E7EB] hover:text-primary' : 'text-dark-bg/70 hover:text-dark-bg'}`}
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`font-inter text-sm uppercase tracking-wide ${isDark ? 'text-[#E5E7EB] hover:text-primary' : 'text-dark-bg/70 hover:text-dark-bg'}`}
            >
              {t('nav.skills')}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`font-inter text-sm uppercase tracking-wide ${isDark ? 'text-[#E5E7EB] hover:text-primary' : 'text-dark-bg/70 hover:text-dark-bg'}`}
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`font-inter text-sm uppercase tracking-wide ${isDark ? 'text-[#E5E7EB] hover:text-primary' : 'text-dark-bg/70 hover:text-dark-bg'}`}
            >
              {t('nav.experience')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-inter text-sm uppercase tracking-wide ${isDark ? 'text-[#E5E7EB] hover:text-primary' : 'text-dark-bg/70 hover:text-dark-bg'}`}
            >
              {t('nav.contact')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
