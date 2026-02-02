import { useState, useEffect } from 'react';
import { LanguageContext, ThemeContext } from './contexts';
import es from '../i18n/es.json';
import en from '../i18n/en.json';

// Objeto que almacena las traducciones en ambos idiomas (español e inglés)
const translations = { es, en };

export { LanguageContext, ThemeContext };

// Componente proveedor global que maneja el estado de idioma y tema de la aplicación
export const GlobalProvider = ({ children }) => {
  // Estado para almacenar el idioma actual (español por defecto)
  const [language, setLanguage] = useState(() => {
    try {
      // Intenta recuperar el idioma guardado en localStorage
      const saved = localStorage.getItem('language');
      return saved || 'es';
    } catch {
      // Si hay error, usa español como fallback
      return 'es';
    }
  });

  // Estado para almacenar si está activo el modo oscuro
  const [isDark, setIsDark] = useState(() => {
    try {
      // Intenta recuperar la preferencia de tema guardada en localStorage
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      // Si no hay preferencia guardada, inicia siempre en dark mode
      return true;
    } catch {
      // Si hay error, usa dark mode como fallback
      return true;
    }
  });

  // Efecto que aplica la clase 'dark' al HTML y guarda la preferencia en localStorage
  useEffect(() => {
    try {
      const root = document.documentElement;
      if (isDark) {
        // Agrega la clase 'dark' para activar los estilos de dark mode en Tailwind
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        // Remueve la clase 'dark' para usar light mode
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      console.warn('Error updating theme:', e);
    }
  }, [isDark]);

  // Efecto que guarda el idioma actual en localStorage
  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch (e) {
      console.warn('Error saving language:', e);
    }
  }, [language]);

  // Función para alternar entre dark mode y light mode
  const toggleTheme = () => setIsDark(!isDark);
  
  // Función para alternar entre español e inglés
  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  // Función para obtener traducciones anidadas usando rutas con puntos (ej: 'nav.about')
  const t = (key) => {
    try {
      // Divide la clave por puntos para acceder a propiedades anidadas
      const keys = key.split('.');
      let value = translations[language];
      // Recorre la cadena de propiedades anidadas
      for (const k of keys) {
        value = value?.[k];
      }
      // Devuelve la traducción o la clave si no existe
      return value || key;
    } catch (e) {
      console.warn('Error translating:', e);
      return key;
    }
  };

  // Proporciona los contextos a todos los componentes hijos
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};
