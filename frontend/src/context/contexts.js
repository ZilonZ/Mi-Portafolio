import { createContext } from 'react';

// Contexto para manejar el idioma de la aplicación (español/inglés)
// Permite cambiar dinámicamente el idioma en toda la aplicación sin prop drilling
export const LanguageContext = createContext();

// Contexto para manejar el tema de la aplicación (dark mode / light mode)
// Permite cambiar entre modo oscuro y claro de forma global
export const ThemeContext = createContext();
