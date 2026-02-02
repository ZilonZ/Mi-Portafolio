import { useState, useEffect } from 'react';
import { LanguageContext, ThemeContext } from './contexts';
import es from '../i18n/es.json';
import en from '../i18n/en.json';

const translations = { es, en };

export { LanguageContext, ThemeContext };

export const GlobalProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('language');
      return saved || 'es';
    } catch {
      return 'es';
    }
  });

  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return true; // Siempre inicia en dark mode por defecto
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (isDark) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      console.warn('Error updating theme:', e);
    }
  }, [isDark]);

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch (e) {
      console.warn('Error saving language:', e);
    }
  }, [language]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const t = (key) => {
    try {
      const keys = key.split('.');
      let value = translations[language];
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    } catch (e) {
      console.warn('Error translating:', e);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};
