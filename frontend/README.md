# 🎮 Portafolio Personal - Cristian Morales

Portafolio profesional tipo landing page con estética Cyberpunk + Valorant, especializado en Frontend y UX. Diseñado para impresionar a reclutadores y clientes.

## ✨ Características

- 🎨 **Diseño Cyberpunk Moderno** con efectos neon y micro-animaciones tipo HUD
- 🌍 **Multiidioma** - Español e inglés con toggle en navbar
- 🌓 **Dark/Light Mode** - Tema oscuro por defecto con persistencia
- ⚡ **Alto Rendimiento** - Vite + Tailwind optimizado
- ♿ **Accesible** - WCAG AA+ compliant
- 📱 **Responsive** - Mobile-first design
- 🎯 **Componentes Reutilizables** - Clean architecture

## 🛠️ Stack Técnico

- **React 19** - Framework UI moderno
- **Vite 7** - Build tool ultrarrápido
- **Tailwind CSS 4** - Utilidades CSS personalizadas
- **JavaScript** - Sin TypeScript (máxima simplicidad)
- **i18n Custom** - Sistema multiidioma propio

## 🚀 Inicio Rápido

### Requisitos
- Node.js 16+
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Previsualizar build
npm run preview
```

La aplicación estará disponible en `http://localhost:5174/`

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, About, Skills, Projects, Experience, Contact
│   └── ui/              # Button, Card, SectionTitle
├── data/                # projects.js, skills.js, experience.js
├── i18n/                # es.json, en.json
├── hooks/               # useTheme.js, useLanguage.js
├── styles/              # animations.css
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Paleta de Colores

| Nombre | Hex | Uso |
|--------|-----|-----|
| Cyber Dark | `#0B0F1A` | Fondo principal |
| Cyber Blue | `#2563EB` | Color primario |
| Cyber Neon | `#3B82F6` | Acentos neon |
| Cyber Bright | `#60A5FA` | Texto secundario |
| Cyber Light | `#F9FAFB` | Texto principal |

## 📋 Secciones

1. **Hero** - Presentación principal con CTA
2. **About** - Perfil tipo RPG
3. **Skills** - Loadout de habilidades con barras
4. **Projects** - Missions (proyectos destacados)
5. **Experience** - Timeline profesional
6. **Contact** - End screen de contacto

## 🎯 Hooks Personalizados

### `useTheme()`
Controla el tema oscuro/claro:
```javascript
const { isDark, toggleTheme } = useTheme();
```

### `useLanguage()`
Controla idiomas y traducciones:
```javascript
const { language, toggleLanguage, t } = useLanguage();
```

## 📚 Componentes Reutilizables

### Button
```jsx
<Button variant="primary|secondary|outline|ghost">
  Texto
</Button>
```

### Card
```jsx
<Card hover={true} glow={true}>
  Contenido
</Card>
```

### SectionTitle
```jsx
<SectionTitle title="MISSIONS" subtitle="Proyectos" />
```

## ✨ Animaciones

- `glow-pulse` - Efecto pulsante neon
- `slide-in` - Entrada desde abajo
- `fade-in` - Desvanecimiento
- `float` - Flotación suave
- Más en `src/styles/animations.css`

## 🔧 Personalización

### Cambiar datos
Editar archivos en `src/data/`:
- `projects.js` - Tus proyectos
- `skills.js` - Tus habilidades
- `experience.js` - Tu experiencia

### Agregar idioma
1. Crear `src/i18n/[idioma].json`
2. Actualizar `src/hooks/useLanguage.js`

### Modificar paleta
Editar `tailwind.config.js` en la sección `colors`

## 📊 Performance

- ⚡ Lighthouse 90+
- 🚀 TTI < 2s
- 📈 LCP < 1.5s
- 0️⃣ CLS = 0

## 📝 Scripts disponibles

```bash
npm run dev      # Dev server con HMR
npm run build    # Build optimizado
npm run preview  # Previsualizar build
npm run lint     # ESLint check
```

## 🎓 Características técnicas

- ✅ React Hooks (useState, useEffect)
- ✅ Custom Hooks reutilizables
- ✅ CSS Utilities (Tailwind)
- ✅ Mobile-First responsive
- ✅ State local management
- ✅ Animaciones CSS puro
- ✅ i18n sin librerías
- ✅ A11y compliant
- ✅ SEO optimizado
- ✅ Clean code

## 📝 Licencia

Proyecto personal - Libre para usar y customizar.

---

**Hecho con ❤️ por Cristian Morales**

Transformando ideas en experiencias digitales claras, intuitivas y atractivas.
