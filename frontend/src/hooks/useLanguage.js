import { useContext } from 'react';
import { LanguageContext } from '../context/GlobalContext';

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de GlobalProvider');
  }
  return context;
};
