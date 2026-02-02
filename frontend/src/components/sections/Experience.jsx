import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import { SectionTitle } from '../ui/SectionTitle';

export const Experience = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  const experienceData = t('experience.items') || [];

  return (
    <section id="experience" className={`py-20 relative transition-colors duration-300 ${
      isDark ? 'bg-cyber-dark' : 'bg-light-bg'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-cyber-blue-600 via-cyber-neon to-transparent ${
            isDark ? '' : 'opacity-50'
          }`}></div>

          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <div key={idx} className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-start ${
                idx % 2 === 0 ? 'md:text-right' : ''
              }`}>
                {/* Year/Timeline Point */}
                <div className={`${idx % 2 === 0 ? 'md:col-span-1' : 'md:col-start-2 md:col-span-1'}`}>
                  <div className={`flex items-center ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    {/* Dot */}
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

                {/* Content */}
                <div className={`${idx % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}`}>
                  <div className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'bg-cyber-black/50 border border-cyber-blue-600/30 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(125,249,255,0.3)]'
                      : 'bg-white border border-dark-bg/20 hover:border-dark-bg/40 hover:shadow-lg'
                  }`}>
                    <h3 className={`font-orbitron text-lg uppercase tracking-wider mb-1 ${
                      isDark ? 'text-primary' : 'text-dark-bg'
                    }`}>
                      {exp.title}
                    </h3>
                    <p className={`font-inter text-sm mb-3 ${
                      isDark ? 'text-[#94A3B8]' : 'text-[#334155]'
                    }`}>
                      {exp.company}
                    </p>
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
