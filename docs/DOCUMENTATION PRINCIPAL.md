# Documentación del Portafolio - Cristian Morales

## Descripción General
Portfolio profesional interactivo desarrollado con React 19.2.0 y Vite 7.3.1, con tema estético Cyberpunk/Valorant. La aplicación incluye soporte completo para modo oscuro/claro y multiidioma (ES/EN).

## Estructura del Proyecto

### `/src`
- **context/**: Gestión de estado global (tema e idioma)
  - `GlobalContext.jsx`: Proveedor central de contexto
  - `contexts.js`: Definiciones de contextos (LanguageContext, ThemeContext)

- **hooks/**: Hooks personalizados para acceder al contexto
  - `useLanguage.js`: Hook para acceso a idioma y función de traducción
  - `useTheme.js`: Hook para acceso a tema y funciones de toggle

- **components/**: Componentes React reutilizables
  - **ui/**: Componentes base de interfaz
    - `Button.jsx`: Botón reutilizable (4 variantes: primary, secondary, outline, ghost)
    - `Card.jsx`: Tarjeta/contenedor con efecto hover
    - `SectionTitle.jsx`: Encabezado de sección con barra decorativa
  
  - **layout/**: Componentes de estructura
    - `Navbar.jsx`: Barra de navegación sticky con menú responsive
    - `Footer.jsx`: Pie de página con información de contacto
  
  - **sections/**: Secciones principales
    - `Hero.jsx`: Sección de bienvenida con avatar y CTA
    - `About.jsx`: Información personal y estadísticas
    - `Skills.jsx`: Grid de habilidades técnicas por categoría
    - `Projects.jsx`: Portfolio de proyectos completados
    - `Experience.jsx`: Línea de tiempo de experiencia laboral
    - `Contact.jsx`: Información de contacto y redes sociales

- **i18n/**: Archivo de internacionalización
  - `es.json`: Traducciones al español
  - `en.json`: Traducciones al inglés

- **data/**: Datos de respaldo (deprecados, usar i18n)
  - `projects.js`: Datos de proyectos (copia)
  - `experience.js`: Datos de experiencia (copia)
  - `skills.js`: Datos de habilidades (copia)

- **assets/**: Recursos estáticos
  - `img/`: Imágenes del portafolio
    - `Avatar ZilonZ.png`: Avatar principal
    - `Cris.JPG`: Foto personal
    - `Ejemplo_KCJ.png`: Screenshot del proyecto KCJ
    - `Ejemplo_gema.png`: Screenshot del proyecto GEMA

- **App.jsx**: Componente raíz que organiza las secciones
- **main.jsx**: Punto de entrada de React
- **index.css**: Estilos globales y animaciones

### Archivos de Configuración
- **tailwind.config.js**: Configuración de Tailwind con tokens semánticos
- **vite.config.js**: Configuración de Vite
- **postcss.config.js**: Configuración de PostCSS
- **index.html**: HTML principal

## Sistema de Colores

### Colores Primarios
- **Primary (Cyan Neon)**: `#7DF9FF` - Accents, hover effects
- **Dark BG**: `#020617` - Fondo oscuro, texto principal en light mode
- **Dark Card**: `#050B14` - Cards en dark mode
- **Light BG**: `#F8FAFC` - Fondo claro
- **Light Card**: `#FFFFFF` - Cards en light mode

### Colores Semánticos
- **Base (texto principal)**:
  - Dark mode: `#E5E7EB`
  - Light mode: `#020617`

- **Muted (texto secundario)**:
  - Dark mode: `#94A3B8`
  - Light mode: `#334155`

## Sistema de Tema

El portafolio implementa un sistema de tema dark/light que respeta las preferencias del usuario:

1. **Inicialización**: Siempre comienza en **dark mode** (configurable en `GlobalContext.jsx`)
2. **Persistencia**: Se guarda en `localStorage` bajo `theme`
3. **Toggle**: Botón en la navbar permite cambiar entre modos
4. **Sincronización**: Todos los componentes se actualizan automáticamente

### Colores por Modo

**Dark Mode:**
- Fondo: dark-bg (`#020617`)
- Cards: dark-card (`#050B14`)
- Primary: cyan (`#7DF9FF`)
- Texto: base (`#E5E7EB`)

**Light Mode:**
- Fondo: light-bg (`#F8FAFC`)
- Cards: light-card (`#FFFFFF`)
- Primary: dark-bg (`#020617`) - solo para accents
- Texto: dark-bg (`#020617`)

## Internacionalización (i18n)

La aplicación soporta dos idiomas: Español e Inglés.

### Estructura de Traducción
```json
{
  "nav": { /* navegación */ },
  "hero": { /* sección hero */ },
  "about": { /* sección about */ },
  "skills": { /* habilidades */ },
  "projects": { /* proyectos */ },
  "experience": { /* experiencia */ },
  "contact": { /* contacto */ },
  "footer": { /* pie de página */ }
}
```

### Uso
```jsx
const { t } = useLanguage();
<p>{t('hero.greeting')}</p>
```

## Animaciones

### Animaciones Disponibles
- `animate-float`: Flotación vertical suave (3s)
- `animate-slide-in-down`: Slide desde arriba (0.5s)
- `animate-pulse`: Efecto de pulso
- `glow-pulse`: Pulso de brillo neon (2s)

### Sombras Glow
- `shadow-glow`: Sombra azul suave
- `shadow-glow-lg`: Sombra azul grande
- `shadow-glow-xl`: Sombra azul extra grande

## Tipografía

- **Orbitron**: Fuentes futuristas para títulos
- **Inter**: Texto corporal moderno
- **Poppins**: Alternativa versátil

## Componentes Principales

### Button
```jsx
<Button variant="primary|secondary|outline|ghost">
  Texto del botón
</Button>
```

### Card
```jsx
<Card className="custom-class" hover={true} glow={true}>
  Contenido
</Card>
```

### SectionTitle
```jsx
<SectionTitle title="Título" subtitle="Subtítulo" />
```

## Flujo de Datos

1. **GlobalContext** proporciona `theme` e `language` a toda la app
2. **Hooks** (useTheme, useLanguage) acceden a estos valores
3. **Componentes** usan los hooks para aplicar estilos dinámicos
4. **localStorage** persiste preferencias entre sesiones

## Desarrollo

### Servidor de Desarrollo
```bash
npm run dev
```
La aplicación se abrirá en `http://localhost:5175`

### Variables de Entorno
No se requieren variables de entorno en este momento.

## Notas Técnicas

- **React 19.2.0**: Utiliza hooks y Context API (sin Redux)
- **Vite 7.3.1**: Empaquetador rápido con HMR
- **Tailwind CSS v4**: Sistema de diseño con tokens semánticos
- **Responsividad**: Diseño mobile-first con breakpoints en md (768px), lg (1024px)
- **Accesibilidad**: Contraste de colores y navegación por teclado

## Archivos Deprecados

Los siguientes archivos contienen datos de respaldo (no se utilizan):
- `src/data/projects.js`
- `src/data/experience.js`
- `src/data/skills.js`

Los datos principales están en `src/i18n/es.json` y `src/i18n/en.json`.

## Mejoras Futuras

- [ ] Modo Valorant con efectos VFX adicionales
- [ ] Animaciones de scroll más complejas
- [ ] Lazy loading de imágenes
- [ ] PWA (Progressive Web App)
- [ ] Blog o sección de artículos
- [ ] Dashboard de analytics
