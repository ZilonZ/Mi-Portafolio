import { useContext } from 'react';
import { ThemeContext } from '../context/GlobalContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de GlobalProvider');
  }
  return context;
};
