import { useContext } from 'react';
import { LanguageContext } from '../context/GlobalContext';

// Hook personalizado para acceder al contexto de idioma desde cualquier componente
// Proporciona acceso a: language (idioma actual), toggleLanguage (cambiar idioma), t (función de traducción)
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  // Valida que el hook se use dentro del proveedor GlobalProvider
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de GlobalProvider');
  }
  return context;
};
