import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';

// Sección de habilidades técnicas
// Muestra categorías de habilidades (Frontend, Backend, Tools) con sus correspondientes skills
export const Skills = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  // Agrupa las habilidades en categorías obtenidas desde las traducciones
  const skillsData = [
    {
      category: t('skills.frontend.category'),
      skills: t('skills.frontend.skills') || []
    },
    {
      category: t('skills.backend.category'),
      skills: t('skills.backend.skills') || []
    },
    {
      category: t('skills.tools.category'),
      skills: t('skills.tools.skills') || []
    }
  ];

  return (
    <section id="skills" className={`py-20 relative transition-colors duration-300 ${
      isDark ? 'bg-cyber-dark' : 'bg-light-bg'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado de sección */}
        <SectionTitle
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        {/* Grid de 3 columnas (1 en mobile, 3 en lg) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Itera sobre cada categoría de habilidades */}
          {skillsData.map((category, idx) => (
            <Card key={idx} className="p-6">
              {/* Título de la categoría */}
              <h3 className={`font-orbitron text-xl uppercase tracking-wider mb-6 ${
                isDark ? 'text-cyber-neon' : 'text-cyber-blue-600'
              }`}>
                {category.category}
              </h3>

              {/* Lista de habilidades de la categoría */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className={`p-3 rounded-lg transition-colors duration-300 ${
                    isDark
                      ? 'bg-cyber-black/30 border border-cyber-blue-600/20 hover:border-cyber-blue-600/50'
                      : 'bg-cyber-blue-50 border border-cyber-blue-200 hover:border-cyber-blue-400'
                  }`}>
                    <span className={`text-sm font-inter ${
                      isDark ? 'text-cyber-light' : 'text-light-text'
                    }`}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
