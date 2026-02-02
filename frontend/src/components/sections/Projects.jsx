import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { SectionTitle } from '../ui/SectionTitle';

// Sección de proyectos del portafolio
// Muestra tarjetas con proyectos completados con descripción, tecnologías usadas y enlaces
export const Projects = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  // Obtiene los proyectos desde las traducciones (i18n)
  const projectsData = t('projects.projects') || [];

  return (
    <section id="projects" className={`py-20 relative transition-colors duration-300 ${
      isDark ? 'bg-cyber-darker' : 'bg-light-bg'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado de sección con título y subtítulo */}
        <SectionTitle
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        {/* Grid de proyectos: 1 columna en mobile, 2 en lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden hover:scale-105">
              {/* Imagen del proyecto con gradiente de fondo */}
              <div className={`h-48 flex items-center justify-center border-b overflow-hidden transition-colors duration-300 ${
                isDark
                  ? 'bg-linear-to-br from-cyber-blue-600/20 to-cyber-neon/20 border-cyber-blue-600/30'
                  : 'bg-linear-to-br from-cyber-blue-100 to-cyber-blue-50 border-light-border'
              }`}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover opacity-50"
                />
              </div>

              {/* Contenido del proyecto: nombre, rol, descripción, tecnologías */}
              <div className="flex-1 flex flex-col p-6 space-y-4">
                <div>
                  {/* Nombre del proyecto en uppercase con fuente orbitron */}
                  <h3 className={`font-orbitron text-xl uppercase tracking-wider mb-2 ${
                    isDark ? 'text-cyber-neon' : 'text-cyber-blue-600'
                  }`}>
                    {project.name}
                  </h3>
                  {/* Rol/posición dentro del proyecto */}
                  <p className={`font-inter text-sm uppercase tracking-wide ${
                    isDark ? 'text-cyber-bright' : 'text-cyber-blue-600'
                  }`}>
                    {project.role}
                  </p>
                </div>

                {/* Descripción breve del proyecto */}
                <p className={`font-inter text-sm leading-relaxed flex-1 ${
                  isDark ? 'text-cyber-light/70' : 'text-light-text/70'
                }`}>
                  {project.description}
                </p>

                {/* Etiquetas de tecnologías usadas */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full font-inter transition-colors duration-300 ${
                        isDark
                          ? 'bg-cyber-blue-600/20 border border-cyber-blue-600/50 text-cyber-bright'
                          : 'bg-cyber-blue-100 border border-cyber-blue-300 text-cyber-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Estado del proyecto y botón de enlace */}
                <div className={`flex items-center justify-between pt-4 border-t transition-colors duration-300 ${
                  isDark ? 'border-cyber-blue-600/30' : 'border-light-border'
                }`}>
                  {/* Estado: Completado o En Producción */}
                  <span
                    className={`text-xs uppercase font-orbitron tracking-wider ${
                      project.status === 'completed'
                        ? isDark ? 'text-green-400' : 'text-green-600'
                        : isDark ? 'text-cyber-neon' : 'text-cyber-blue-600'
                    }`}
                  >
                    {project.status === 'completed'
                      ? t('projects.status.completed')
                      : t('projects.status.inProduction')}
                  </span>
                  {/* Botón para ver proyecto en sitio externo */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" className="px-4 py-2 text-sm">
                      {t('projects.viewProject')} →
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
