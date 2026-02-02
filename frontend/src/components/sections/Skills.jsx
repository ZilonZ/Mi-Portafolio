import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import { skillsData } from '../../data/skills';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';

export const Skills = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section id="skills" className={`py-20 relative transition-colors duration-300 ${
      isDark ? 'bg-cyber-dark' : 'bg-light-bg'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <Card key={idx} className="p-6">
              <h3 className={`font-orbitron text-xl uppercase tracking-wider mb-6 ${
                isDark ? 'text-cyber-neon' : 'text-cyber-blue-600'
              }`}>
                {category.category}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className={`flex justify-between items-center mb-2 text-sm font-inter ${
                      isDark ? 'text-cyber-light' : 'text-light-text'
                    }`}>
                      <span>{skill.name}</span>
                      <span className={`font-orbitron text-xs ${
                        isDark ? 'text-cyber-bright' : 'text-cyber-blue-600'
                      }`}>{skill.level}%</span>
                    </div>
                    {/* Skill Bar */}
                    <div className={`w-full h-2 rounded-full overflow-hidden border transition-colors duration-300 ${
                      isDark
                        ? 'bg-cyber-black/50 border-cyber-blue-600/30'
                        : 'bg-light-border border-cyber-blue-300'
                    }`}>
                      <div
                        className={`h-full rounded-full shadow-glow-sm transition-all duration-500 ${
                          isDark
                            ? 'bg-linear-to-r from-cyber-blue-600 to-cyber-neon'
                            : 'bg-linear-to-r from-cyber-blue-500 to-cyber-blue-400'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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
