import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../ui/Button';

// Sección Hero (principal) del portafolio
// Incluye presentación, foto de avatar, estadísticas rápidas y llamadas a acción
export const Hero = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  // Función para desplazarse suavemente a una sección
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20 ${
      isDark ? 'bg-dark-bg' : 'bg-light-bg'
    }`}>
      {/* Background Grid Effect: Solo en dark mode para efecto neon */}
      {isDark && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 24%, rgba(125, 249, 255, .05) 25%, rgba(125, 249, 255, .05) 26%, transparent 27%, transparent 74%, rgba(125, 249, 255, .05) 75%, rgba(125, 249, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(125, 249, 255, .05) 25%, rgba(125, 249, 255, .05) 26%, transparent 27%, transparent 74%, rgba(125, 249, 255, .05) 75%, rgba(125, 249, 255, .05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Grid de dos columnas: texto a la izquierda, avatar a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: texto, descripción y botones */}
          <div className="space-y-6">
            {/* Indicador de estado con punto animado */}
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full animate-pulse ${
                isDark ? 'bg-primary' : 'bg-dark-bg'
              }`}></div>
              <span className={`font-orbitron text-sm uppercase tracking-wider ${
                isDark ? 'text-primary' : 'text-dark-bg'
              }`}>
                {t('hero.status')}
              </span>
            </div>

            {/* Saludo principal con nombre grande */}
            <h1 className={`text-5xl lg:text-7xl font-orbitron font-bold leading-tight ${
              isDark ? 'text-primary drop-shadow-[0_0_10px_rgba(125,249,255,0.4)]' : 'text-dark-bg'
            }`}>
              {t('hero.greeting')} <br />
              <span className={isDark ? 'text-primary' : 'text-dark-bg'}>{t('hero.name')}</span>
            </h1>

            {/* Título/rol profesional */}
            <p className={`text-2xl lg:text-3xl font-inter font-semibold ${
              isDark ? 'text-primary' : 'text-dark-bg'
            }`}>
              {t('hero.title')}
            </p>

            {/* Descripción breve */}
            <p className={`text-lg font-inter leading-relaxed max-w-xl ${
              isDark ? 'text-[#E5E7EB]' : 'text-[#020617]'
            }`}>
              {t('hero.subtitle')}
            </p>

            {/* Botones de llamada a acción */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                onClick={() => scrollToSection('projects')}
                variant="primary"
                className="justify-center sm:justify-start"
              >
                <span>→</span>
                {t('hero.cta_projects')}
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="secondary"
                className="justify-center sm:justify-start"
              >
                {t('hero.cta_contact')}
              </Button>
            </div>

            {/* Estadísticas rápidas */}
            <div className={`flex gap-8 pt-8 border-t ${
              isDark ? 'border-primary/20' : 'border-dark-bg/20'
            }`}>
              <div>
                <p className={`font-orbitron text-2xl font-bold ${
                  isDark ? 'text-primary' : 'text-dark-bg'
                }`}>1+</p>
                <p className={`text-sm font-inter ${
                  isDark ? 'text-[#94A3B8]' : 'text-[#334155]'
                }`}>Años de experiencia</p>
              </div>
              <div>
                <p className={`font-orbitron text-2xl font-bold ${
                  isDark ? 'text-primary' : 'text-dark-bg'
                }`}>3+</p>
                <p className={`text-sm font-inter ${
                  isDark ? 'text-[#94A3B8]' : 'text-[#334155]'
                }`}>Proyectos completados</p>
              </div>
              <div>
                <p className={`font-orbitron text-2xl font-bold ${
                  isDark ? 'text-primary' : 'text-dark-bg'
                }`}>100%</p>
                <p className={`text-sm font-inter ${
                  isDark ? 'text-[#94A3B8]' : 'text-[#334155]'
                }`}>Dedicación</p>
              </div>
            </div>
          </div>

          {/* Columna derecha: Avatar con efecto flotante */}
          <div className="flex items-center justify-center">
            <div className="relative w-72 h-96 animate-float">
              {/* Fondo con glow (brillo): efecto neon sutil */}
              <div className={`absolute inset-0 rounded-lg blur-3xl opacity-30 ${
                isDark 
                  ? 'bg-primary' 
                  : 'bg-dark-bg'
              }`}></div>

              {/* Caja principal con avatar */}
              <div className={`absolute inset-0 border-2 rounded-lg flex items-center justify-center overflow-hidden ${
                isDark
                  ? 'bg-dark-card border-primary/50'
                  : 'bg-light-card border-dark-bg/30'
              }`}>
                {/* Imagen de perfil */}
                <img 
                  src="/src/assets/img/Avatar ZilonZ.png" 
                  alt="Cristian Morales" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Elementos decorativos: pequeños cuadrados en las esquinas */}
              <div className={`absolute -top-2 -right-2 w-8 h-8 border-2 rounded ${
                isDark ? 'border-primary' : 'border-dark-bg'
              }`}></div>
              <div className={`absolute -bottom-2 -left-2 w-8 h-8 border-2 rounded ${
                isDark ? 'border-primary' : 'border-dark-bg'
              }`}></div>

              {/* Nombre de usuario (username) */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center">
                <p className={`font-orbitron text-xl font-bold ${
                  isDark ? 'text-primary' : 'text-dark-bg'
                }`}>ZilonZ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
