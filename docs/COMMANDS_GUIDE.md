# 🛠️ GUÍA DE COMANDOS - Mi Portfolio

## 📦 Instalación Inicial

```bash
# Navegar a la carpeta frontend
cd frontend

# Instalar dependencias
npm install

# O si tienes pnpm
pnpm install
```

---

## 🚀 Desarrollo

### Iniciar servidor de desarrollo
```bash
npm run dev
```
Acceso: **http://localhost:5175/**

Características:
- Hot Module Replacement (HMR) habilitado
- Recarga automática de cambios
- Mensajes de error en tiempo real

### Parar el servidor
```
Presiona: Ctrl + C
```

---

## 🔨 Compilación

### Compilar para producción
```bash
npm run build
```

Genera:
- Carpeta `/dist` con archivos optimizados
- Bundle minificado
- Code splitting automático
- Assets optimizadas

### Preview de la compilación
```bash
npm run preview
```

Sirve localmente los archivos compilados para ver cómo se vería en producción.

---

## 📝 Edición de Contenido

### Cambiar Textos (Español)
**Archivo:** `src/i18n/es.json`

```json
{
  "hero": {
    "name": "Cambiar Nombre",
    "title": "Cambiar Título",
    "subtitle": "Cambiar Descripción"
  }
}
```

### Cambiar Textos (Inglés)
**Archivo:** `src/i18n/en.json`

Misma estructura que es.json pero en inglés.

### Actualizar Habilidades
**Archivo:** `src/data/skills.js`

```javascript
{
  category: 'Frontend',
  skills: [
    { name: 'React', level: 95 },
    { name: 'Nueva Tecnología', level: 85 }
  ]
}
```

### Actualizar Proyectos
**Archivo:** `src/data/projects.js`

```javascript
{
  id: 1,
  name: 'Nombre del Proyecto',
  description: 'Descripción',
  link: 'https://ejemplo.com',
  technologies: ['React', 'Tailwind']
}
```

### Actualizar Experiencia
**Archivo:** `src/data/experience.js`

```javascript
{
  year: '2024 - Presente',
  title: 'Tu Puesto',
  company: 'Tu Empresa',
  description: 'Qué hiciste'
}
```

### Actualizar Contacto
**Archivo:** `src/components/sections/Contact.jsx`

Busca `const contactLinks` y actualiza los valores.

---

## 🎨 Personalización

### Cambiar Colores
**Archivo:** `tailwind.config.js`

```javascript
colors: {
  'cyber-dark': '#0B0F1A',     // Fondo principal
  'cyber-neon': '#3B82F6',     // Acentos principales
  'cyber-bright': '#60A5FA',   // Texto secundario
  'cyber-light': '#F9FAFB',    // Texto principal
}
```

### Agregar Animaciones
**Archivo:** `src/styles/animations.css`

```css
@keyframes mi-animacion {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}
```

Luego añade a `tailwind.config.js`:
```javascript
animation: {
  'mi-animacion': 'mi-animacion 1s ease-in-out',
}
```

### Cambiar Fuentes
**Archivo:** `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=MiFuente:wght@400;700&display=swap');
```

Luego en `tailwind.config.js`:
```javascript
fontFamily: {
  'mi-fuente': ['MiFuente', 'sans-serif'],
}
```

---

## 🔍 Debugging

### Ver errores de consola
Abre DevTools: `F12` o `Ctrl + Shift + I`

### Ver estado React
Instala React Developer Tools para Chrome/Firefox

### Ver cambios en tiempo real
El HMR muestra los cambios instantáneamente sin perder el estado.

---

## 📊 Optimizaciones

### Tamaño del bundle
```bash
npm run build
# Ver tamaño en dist/
```

### Análisis de performance
Usa Chrome DevTools → Lighthouse

### Compresión
Ya está habilitada automáticamente en Vercel/Netlify.

---

## 🚀 Despliegue Rápido

### Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Conectar dominio
vercel domains add mi-dominio.com
```

### Netlify
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Desplegar
netlify deploy --prod
```

### GitHub Pages
```bash
# Compilar
npm run build

# Empujar a gh-pages
git subtree push --prefix dist origin gh-pages
```

---

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── SectionTitle.jsx
│   ├── data/
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── experience.js
│   ├── hooks/
│   │   ├── useTheme.js
│   │   └── useLanguage.js
│   ├── context/
│   │   └── GlobalContext.jsx
│   ├── i18n/
│   │   ├── es.json
│   │   └── en.json
│   ├── styles/
│   │   └── animations.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── config.js
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── .gitignore
```

---

## 🐛 Problemas Comunes

### Cambios no se reflejan
1. Verifica que el servidor esté corriendo
2. Actualiza la página: `Ctrl + Shift + R` (hard refresh)
3. Limpia la caché del navegador

### Errores de dependencias
```bash
# Eliminar node_modules
rm -rf node_modules

# Reinstalar
npm install
```

### Puerto ocupado
```bash
# Matar proceso en puerto 5175
netstat -ano | findstr :5175
taskkill /PID <PID> /F
```

---

## 📚 Recursos Útiles

### Documentación
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [MDN Web Docs](https://developer.mozilla.org)

### Herramientas
- [Can I Use](https://caniuse.com) - Compatibilidad de navegadores
- [Web.dev](https://web.dev) - Auditorías de performance
- [Lighthouse](https://chrome.google.com/webstore) - Chrome extension

---

## 💡 Tips & Tricks

### Producción sin CLI
1. Ejecuta `npm run build`
2. Sube la carpeta `dist/` completa a tu hosting
3. Configura el hosting para servir `index.html` en rutas no encontradas

### Mantener actualizado
```bash
# Ver dependencias desactualzadas
npm outdated

# Actualizar todas
npm update

# Actualizar package.json
npm install -g npm-check-updates
ncu -u
npm install
```

### Hacer backup
```bash
# Antes de cambios importantes
git stash

# O crear rama
git checkout -b mi-rama-nueva
```

---

## 🎯 Workflow Típico

```bash
# 1. Abrir proyecto
cd frontend

# 2. Iniciar servidor
npm run dev

# 3. Editar archivos (cambios automáticos)

# 4. Cuando termines
npm run build

# 5. Desplegar
vercel deploy --prod  # o netlify deploy --prod

# 6. Verificar
https://mi-dominio.com
```

---

## 📞 Contacto para Soporte

Si tienes dudas:
- GitHub Issues: https://github.com/ZilonZ
- Email: zilonoy19@gmail.com
- WhatsApp: +57 3114014791

---

**¡Happy Coding! 🚀**

