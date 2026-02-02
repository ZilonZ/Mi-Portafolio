# 🎯 PERSONALIZACIÓN RÁPIDA

Este archivo te guía para personalizar el portafolio con tus datos en 5 minutos.

## ⚡ Paso 1: Información Personal (src/config.js)

```javascript
export const PERSONAL_INFO = {
  name: 'TU NOMBRE', // Cambiar aquí
  title: 'Tu Título',
  description: 'Tu descripción profesional',
  email: 'tu@email.com',
  phone: '+1 234 567 8900',
  location: 'Tu ciudad',
  
  social: {
    github: 'https://github.com/tuusuario',
    linkedin: 'https://linkedin.com/in/tuusuario',
    // ...
  },
};
```

## ⚡ Paso 2: Editar Proyectos (src/data/projects.js)

```javascript
export const projectsData = [
  {
    id: 1,
    name: 'Nombre de tu proyecto',
    role: 'Tu rol en el proyecto',
    description: 'Descripción breve',
    technologies: ['React', 'Tailwind'],
    status: 'completed', // o 'in_production'
    link: 'https://enlace-proyecto.com',
    image: 'url-de-imagen',
  },
  // Agregar más proyectos...
];
```

## ⚡ Paso 3: Actualizar Skills (src/data/skills.js)

```javascript
export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 90 }, // 0-100
      { name: 'Vue', level: 75 },
      // ...
    ],
  },
  // ...
];
```

## ⚡ Paso 4: Cambiar Experiencia (src/data/experience.js)

```javascript
export const experienceData = [
  {
    year: '2024 - Presente',
    title: 'Tu puesto actual',
    company: 'Tu empresa',
    description: 'Lo que haces aquí',
  },
  // ...
];
```

## ⚡ Paso 5: Traducciones (src/i18n/)

### Español (es.json)
```json
{
  "hero": {
    "name": "TU NOMBRE",
    "title": "Tu profesión"
  }
}
```

### Inglés (en.json)
```json
{
  "hero": {
    "name": "YOUR NAME",
    "title": "Your profession"
  }
}
```

## 🎨 Paso 6: Paleta de Colores (tailwind.config.js)

```javascript
colors: {
  'cyber-blue': {
    600: '#TU_COLOR', // Cambiar aquí
  }
}
```

## 🖼️ Paso 7: Imágenes (public/)

- `favicon.svg` - Icono de pestaña
- `og-image.png` - Imagen OpenGraph (para compartir)
- `avatar.png` - Tu foto (opcional)

## 🔤 Paso 8: Cambiar Tipografía (index.css)

```css
@import url('https://fonts.googleapis.com/css2?family=TuFuente:wght@400;700&display=swap');
```

```javascript
fontFamily: {
  orbitron: ['TuFuente', 'sans-serif'],
}
```

## 🌐 Paso 9: Meta Tags (index.html)

```html
<meta property="og:title" content="Tu Nombre - Tu Profesión" />
<meta property="og:description" content="Tu descripción" />
<meta property="og:image" content="/og-image.png" />
```

## 📝 Paso 10: Deploy

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Conectar repo en netlify.com
2. Build: `npm run build`
3. Publish: `dist`

---

## ✅ Checklist de Personalización

- [ ] Cambié mi nombre en config.js
- [ ] Actualicé proyectos en src/data/projects.js
- [ ] Edité skills en src/data/skills.js
- [ ] Cambié experiencia en src/data/experience.js
- [ ] Traduje textos en src/i18n/
- [ ] Personalicé colores (opcional)
- [ ] Cambié tipografía (opcional)
- [ ] Agregué imágenes en public/
- [ ] Actualicé meta tags en index.html
- [ ] Hice build: `npm run build`

## 🚀 Deploy Final

```bash
# Build optimizado
npm run build

# Verificar
npm run preview

# Deploy a Vercel/Netlify
vercel
```

¡Listo! Tu portafolio personalizado está online! 🎉

## 📞 Soporte

Para ayuda con algún paso:
1. Revisar README.md
2. Revisar DEVELOPMENT.md
3. Revisar archivos comentados del proyecto
