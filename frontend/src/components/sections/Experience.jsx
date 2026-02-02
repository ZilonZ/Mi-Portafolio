import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import { SectionTitle } from '../ui/SectionTitle';

// Sección de experiencia laboral y educación
// Muestra una línea de tiempo con alternancia derecha-izquierda de experiencias
export const Experience = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  // Obtiene los elementos de experiencia desde las traducciones
  const experienceData = t('experience.items') || [];

  return (
    <section id="experience" className={`py-20 relative transition-colors duration-300 ${
      isDark ? 'bg-cyber-dark' : 'bg-light-bg'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado de sección */}
        <SectionTitle
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
        />

        <div className="relative">
          {/* Línea vertical de la línea de tiempo: solo visible en md+ */}
          <div className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-cyber-blue-600 via-cyber-neon to-transparent ${
            isDark ? '' : 'opacity-50'
          }`}></div>

          {/* Contenedor con todos los elementos de experiencia */}
          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <div key={idx} className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-start ${
                // Alterna la alineación: índices pares a la derecha, impares a la izquierda
                idx % 2 === 0 ? 'md:text-right' : ''
              }`}>
                {/* Año/Punto de línea de tiempo */}
                <div className={`${idx % 2 === 0 ? 'md:col-span-1' : 'md:col-start-2 md:col-span-1'}`}>
                  <div className={`flex items-center ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    {/* Punto decorativo en la línea de tiempo */}
                    <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 shadow-glow hidden md:block ${
                      isDark
                        ? 'bg-primary border-dark-bg'
                        : 'bg-dark-bg border-light-bg'
                    }`}></div>
                    
                    <p className={`font-orbitron text-lg uppercase tracking-wider ${
                      isDark ? 'text-primary' : 'text-dark-bg'
                    }`}>
                      {exp.year}
                    </p>
                  </div>
                </div>

                {/* Contenido de la experiencia: tarjeta con hover */}
                <div className={`${idx % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}`}>
                  <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'bg-cyber-black/50 border border-cyber-blue-600/30 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(125,249,255,0.3)]'
                      : 'bg-white border border-dark-bg/20 hover:border-dark-bg/40 hover:shadow-lg'
                  }`}>
                    {/* Título del puesto */}
                    <h3 className={`font-orbitron text-lg uppercase tracking-wider mb-1 ${
                      isDark ? 'text-primary' : 'text-dark-bg'
                    }`}>
                      {exp.title}
                    </h3>
                    {/* Empresa/Institución */}
                    <p className={`font-inter text-sm mb-3 ${
                      isDark ? 'text-[#94A3B8]' : 'text-[#334155]'
                    }`}>
                      {exp.company}
                    </p>
                    {/* Descripción breve */}
                    <p className={`font-inter text-sm leading-relaxed ${
                      isDark ? 'text-[#E5E7EB]/70' : 'text-dark-bg/70'
                    }`}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
