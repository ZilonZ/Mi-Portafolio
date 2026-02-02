# 🚀 Guía de Desarrollo - Portafolio Cyberpunk

## Primeros Pasos

### 1. Instalar Dependencias
```bash
cd frontend
npm install
```

### 2. Iniciar Servidor
```bash
npm run dev
```
Abre `http://localhost:5174/` en tu navegador.

### 3. Hacer Cambios
- Los archivos React se actualizarán automáticamente con HMR
- Los cambios en CSS/Tailwind son instantáneos
- Sin necesidad de recargar la página

## 📁 Estructura de Carpetas

### `/src/components/layout`
Componentes de estructura global:
- **Navbar.jsx** - Navegación sticky con toggles
- **Footer.jsx** - Pie de página

### `/src/components/sections`
Secciones de contenido principal:
- **Hero.jsx** - Presentación (100vh)
- **About.jsx** - Perfil profesional
- **Skills.jsx** - Habilidades técnicas
- **Projects.jsx** - Proyectos destacados
- **Experience.jsx** - Timeline profesional
- **Contact.jsx** - Contacto

### `/src/components/ui`
Componentes reutilizables:
- **Button.jsx** - Botón con 4 variantes
- **Card.jsx** - Tarjeta con glow
- **SectionTitle.jsx** - Título de sección

### `/src/data`
Datos editables:
```javascript
// projects.js
export const projectsData = [
  {
    id: 1,
    name: 'Nombre',
    role: 'Tu rol',
    description: 'Descripción',
    technologies: ['Tech1', 'Tech2'],
    status: 'completed|in_production',
    link: 'url',
    image: 'url'
  }
]

// skills.js
export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 }
    ]
  }
]

// experience.js
export const experienceData = [
  {
    year: '2023 - Presente',
    title: 'Título',
    company: 'Empresa',
    description: 'Descripción'
  }
]
```

### `/src/i18n`
Traducciones:
- **es.json** - Textos en español
- **en.json** - Textos en inglés

Estructura:
```json
{
  "nav": { "projects": "Proyectos" },
  "hero": { "name": "Cristian Morales" },
  ...
}
```

### `/src/hooks`
Custom hooks:

**useTheme.js**
```javascript
const { isDark, toggleTheme } = useTheme();
// isDark: boolean
// toggleTheme: function
```

**useLanguage.js**
```javascript
const { language, toggleLanguage, t } = useLanguage();
// language: 'es' | 'en'
// toggleLanguage: function
// t: (key) => string - acceder a traducciones
```

## 🎨 Personalización

### Cambiar Colores
**tailwind.config.js:**
```javascript
colors: {
  'cyber-dark': '#0B0F1A',
  'cyber-blue': {
    600: '#2563EB',
    // ...
  }
}
```

Usar en componentes:
```jsx
<div className="bg-cyber-dark text-cyber-neon">
```

### Cambiar Tipografías
**tailwind.config.js:**
```javascript
fontFamily: {
  orbitron: ['Orbitron', 'sans-serif'],
  inter: ['Inter', 'sans-serif'],
  poppins: ['Poppins', 'sans-serif'],
}
```

**index.css:**
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

### Agregar Nueva Sección
1. Crear componente en `/src/components/sections/NewSection.jsx`
2. Importar en `App.jsx`
3. Agregar a la estructura HTML
4. Agregar datos en `/src/data/`
5. Agregar textos en `/src/i18n/*.json`

Ejemplo:
```jsx
// NewSection.jsx
import { useLanguage } from '../../hooks/useLanguage';

export const NewSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="new-section" className="py-20">
      <h2>{t('newsection.title')}</h2>
      {/* Contenido */}
    </section>
  );
};
```

### Agregar Nuevo Idioma
1. Crear `src/i18n/fr.json` (ejemplo francés)
2. Copiar estructura de `es.json`
3. Traducir textos

**useLanguage.js:**
```javascript
import es from '../i18n/es.json';
import en from '../i18n/en.json';
import fr from '../i18n/fr.json';

const translations = { es, en, fr };
```

**Navbar.jsx** - Actualizar toggle:
```jsx
const toggleLanguage = () => {
  const langs = ['es', 'en', 'fr'];
  const idx = langs.indexOf(language);
  setLanguage(langs[(idx + 1) % langs.length]);
};
```

## ✨ Animaciones

### Usar animaciones predefinidas
```jsx
// Slide in
<div className="animate-slide-in">Content</div>

// Fade in
<div className="animate-fade-in">Content</div>

// Float
<div className="animate-float">Content</div>

// Glow pulse
<div className="animate-glow-pulse">Content</div>
```

### Crear nueva animación
**animations.css:**
```css
@keyframes mi-animacion {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-mi-animacion {
  animation: mi-animacion 0.5s ease-out;
}
```

**tailwind.config.js:**
```javascript
animation: {
  'mi-animacion': 'mi-animacion 0.5s ease-out',
}
```

## 🧩 Crear Componentes

### Componente UI Reutilizable
```jsx
// src/components/ui/Badge.jsx
export const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-cyber-blue-600/20 text-cyber-blue-600',
    success: 'bg-green-600/20 text-green-400',
    warning: 'bg-yellow-600/20 text-yellow-400',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-inter ${variants[variant]}`}>
      {children}
    </span>
  );
};
```

Usar:
```jsx
<Badge variant="success">Completed</Badge>
```

### Componente de Sección
```jsx
// src/components/sections/NewSection.jsx
import { useLanguage } from '../../hooks/useLanguage';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

export const NewSection = () => {
  const { t } = useLanguage();

  return (
    <section id="new-section" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title={t('newsection.title')}
          subtitle={t('newsection.subtitle')}
        />
        
        <Card>
          {/* Contenido */}
        </Card>
      </div>
    </section>
  );
};
```

## 🔍 Debugging

### Verificar elementos
```javascript
// En la consola del navegador
document.documentElement.classList // Ver si 'dark' está presente
localStorage.getItem('theme') // Verificar tema guardado
localStorage.getItem('language') // Verificar idioma guardado
```

### HMR (Hot Module Replacement)
Si algo no actualiza:
- Presiona Ctrl+Shift+R para recargar completamente
- Cierra y reabre el servidor con `npm run dev`

### Errores comunes

**Imports incorrectos:**
```javascript
// ❌ Mal
import Button from './components/ui/Button';

// ✅ Bien
import { Button } from './components/ui/Button';
```

**Clases Tailwind no aparecen:**
- Verificar que esté en el `content` de `tailwind.config.js`
- No mezclar notación de gradientes (solo `bg-linear-to-*`)

**Traducciones no funcionan:**
- Verificar que la clave existe en el JSON
- Usar sintaxis: `t('seccion.key')`

## 📦 Build y Deploy

### Compilar para producción
```bash
npm run build
```

Genera carpeta `dist/` con archivos optimizados.

### Previsualizar build
```bash
npm run preview
```

Simula el servidor de producción localmente.

### Deploying

**Vercel (recomendado):**
```bash
npm i -g vercel
vercel
```

**Netlify:**
- Conectar repo en netlify.com
- Build command: `npm run build`
- Publish: `dist`

**GitHub Pages:**
```bash
npm run build
# Copiar contenido de dist/ a gh-pages branch
```

## 🧪 Testing Manual

### Checklist antes de deploy

- [ ] Responsive en mobile/tablet/desktop
- [ ] Dark mode funciona
- [ ] Light mode funciona
- [ ] Cambio de idioma funciona
- [ ] Links de navegación van a secciones
- [ ] Links de contacto abren aplicaciones
- [ ] Animaciones son suaves
- [ ] Sin errores en consola
- [ ] Sin warnings de ESLint

## 🚀 Performance Optimization

### Lazy Loading
```jsx
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./sections/Projects'));

<Suspense fallback={<div>Cargando...</div>}>
  <Projects />
</Suspense>
```

### Image Optimization
```jsx
// Usar WebP con fallback
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="description" />
</picture>
```

### CSS Purging
Tailwind purga automáticamente clases no usadas en build.

## 📚 Recursos Útiles

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Can I Use](https://caniuse.com)
- [Web Accessibility](https://www.w3.org/WAI/)

## 💡 Tips Productividad

1. **Atajos Vite:**
   - `h` + Enter: Ver comandos
   - `r` + Enter: Reiniciar servidor
   - `u` + Enter: Mostrar opciones de URL

2. **DevTools:**
   - Abrir con F12
   - Usar React DevTools extension
   - Revisar Network para performance

3. **Git Workflow:**
   ```bash
   git add .
   git commit -m "feat: descripción"
   git push
   ```

---

¡Listo para empezar! Cualquier duda, revisa los archivos comentados o la documentación oficial.
