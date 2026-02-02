import { useContext } from 'react';
import { ThemeContext } from '../context/GlobalContext';

// Hook personalizado para acceder al contexto de tema desde cualquier componente
// Proporciona acceso a: isDark (booleano del modo oscuro), toggleTheme (cambiar tema)
export const useTheme = () => {
  const context = useContext(ThemeContext);
  // Valida que el hook se use dentro del proveedor GlobalProvider
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de GlobalProvider');
  }
  return context;
};
