import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';

// Sección "Acerca de mí"
// Muestra foto, descripción personal, estadísticas y especialidades
export const About = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-20 relative transition-colors duration-300 ${
      isDark ? 'bg-cyber-darker' : 'bg-light-bg'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado de sección */}
        <SectionTitle
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        {/* Grid de dos columnas: imagen a la izquierda, contenido a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: Foto/Avatar */}
          <div className="flex justify-center">
            <Card className="w-80 h-96 flex items-center justify-center overflow-hidden hover:scale-105">
              <img 
                src="/src/assets/img/Cris.JPG" 
                alt="Cristian Morales" 
                className="w-full h-full object-cover"
              />
            </Card>
          </div>

          {/* Columna derecha: Contenido, estadísticas y especialidades */}
          <div className="space-y-6">
            {/* Descripción personal */}
            <p className={`font-inter text-lg leading-relaxed ${
              isDark ? 'text-cyber-light/80' : 'text-light-text/80'
            }`}>
              {t('about.description')}
            </p>

            {/* Grid de estadísticas: nivel, experiencia, enfoque */}
            <div className={`grid grid-cols-3 gap-4 py-6 border-t border-b ${
              isDark ? 'border-cyber-blue-600/30' : 'border-light-border'
            }`}>
              {/* Nivel/Proficiency */}
              <div>
                <p className={`font-orbitron text-3xl font-bold ${
                  isDark ? 'text-cyber-neon' : 'text-cyber-blue-600'
                }`}>
                  {t('about.levelValue')}
                </p>
                <p className={`text-sm font-inter ${
                  isDark ? 'text-cyber-light/60' : 'text-light-text/60'
                }`}>
                  {t('about.levelLabel')}
                </p>
              </div>
              {/* Años de experiencia */}
              <div>
                <p className={`font-orbitron text-3xl font-bold ${
                  isDark ? 'text-cyber-neon' : 'text-cyber-blue-600'
                }`}>
                  {t('about.experienceValue')}
                </p>
                <p className={`text-sm font-inter ${
                  isDark ? 'text-cyber-light/60' : 'text-light-text/60'
                }`}>
                  {t('about.experienceLabel')}
                </p>
              </div>
              {/* Foco principal */}
              <div>
                <p className={`font-orbitron text-3xl font-bold ${
                  isDark ? 'text-cyber-neon' : 'text-cyber-blue-600'
                }`}>
                  {t('about.focusValue')}
                </p>
                <p className={`text-sm font-inter ${
                  isDark ? 'text-cyber-light/60' : 'text-light-text/60'
                }`}>
                  {t('about.focusLabel')}
                </p>
              </div>
            </div>

            {/* Especialidades como etiquetas */}
            <div className="space-y-3">
              <h3 className={`font-orbitron text-lg uppercase tracking-wider ${
                isDark ? 'text-cyber-neon' : 'text-cyber-blue-600'
              }`}>
                Especialidades
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'UI/UX', 'Tailwind CSS', 'Performance', 'Accessibility'].map((item) => (
                  <div
                    key={item}
                    className={`px-4 py-2 rounded-lg font-inter text-sm transition-all ${
                      isDark
                        ? 'bg-cyber-blue-600/20 border border-cyber-blue-600/50 text-cyber-bright hover:bg-cyber-blue-600/30 hover:border-cyber-blue-600/80'
                        : 'bg-cyber-blue-100 border border-cyber-blue-300 text-cyber-blue-700 hover:bg-cyber-blue-200 hover:border-cyber-blue-500'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
