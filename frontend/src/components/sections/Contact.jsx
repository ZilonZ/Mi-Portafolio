import { useLanguage } from '../../hooks/useLanguage';
import { useTheme } from '../../hooks/useTheme';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { SectionTitle } from '../ui/SectionTitle';

export const Contact = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  const contactLinks = [
    {
      icon: '✉️',
      label: t('contact.socials.email'),
      value: 'zilonoy19@gmail.com',
      href: 'mailto:zilonoy19@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: '💬',
      label: t('contact.socials.whatsapp'),
      value: '+57 3114014791',
      href: 'https://wa.me/573114014791',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: '💼',
      label: t('contact.socials.linkedin'),
      value: 'Cristian Morales',
      href: 'https://www.linkedin.com/in/cristian-stiven-morales-muñoz-3b286a332/',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: '🐙',
      label: t('contact.socials.github'),
      value: 'ZilonZ',
      href: 'https://github.com/ZilonZ',
      color: 'from-gray-600 to-gray-800',
    },
  ];

  return (
    <section id="contact" className={`py-20 relative transition-colors duration-300 ${
      isDark ? 'bg-cyber-darker' : 'bg-light-bg'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="max-w-3xl mx-auto">
          {/* Contact Message */}
          <Card className="text-center p-12 mb-12">
            <h3 className={`font-orbitron text-2xl uppercase tracking-wider mb-4 ${
              isDark ? 'text-cyber-bright' : 'text-cyber-blue-600'
            }`}>
              {t('contact.subtitle')}
            </h3>
            <p className={`font-inter text-lg leading-relaxed ${
              isDark ? 'text-cyber-light/70' : 'text-light-text/70'
            }`}>
              {t('contact.description')}
            </p>
          </Card>

          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactLinks.map((link, idx) => (
              <Card
                key={idx}
                className="cursor-pointer transform hover:scale-105"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-start gap-4 p-4">
                    <div className="text-4xl">{link.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-orbitron text-sm uppercase tracking-wider ${
                        isDark ? 'text-cyber-bright' : 'text-cyber-blue-600'
                      }`}>
                        {link.label}
                      </p>
                      <p className={`font-inter text-sm truncate ${
                        isDark ? 'text-cyber-light/70' : 'text-light-text/70'
                      }`}>
                        {link.value}
                      </p>
                    </div>
                    <svg className={`w-5 h-5 shrink-0 mt-1 ${
                      isDark ? 'text-cyber-neon' : 'text-cyber-blue-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              variant="primary"
              className="text-lg px-10 py-4 shadow-glow-lg hover:shadow-glow-xl"
            >
              {t('contact.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
