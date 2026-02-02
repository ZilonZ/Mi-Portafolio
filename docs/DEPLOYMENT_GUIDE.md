# 🚀 GUÍA DE DESPLIEGUE - Mi Portafolio

## 📦 Compilación para Producción

### 1. Construir la aplicación

```bash
cd frontend
npm run build
```

Esto genera una carpeta `dist/` con los archivos optimizados listos para producción.

### 2. Preview de la compilación

```bash
npm run preview
```

Esto permite ver cómo se vería la versión de producción localmente.

---

## 🌐 Opciones de Despliegue

### Opción 1: **Vercel** (Recomendado)

**Ventajas:**
- Despliegue automático desde Git
- CDN global
- SSL gratis
- Configuración mínima

**Pasos:**
1. Ir a https://vercel.com
2. Conectar tu repositorio de GitHub
3. Seleccionar la rama `main`
4. Configurar:
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Hacer clic en "Deploy"

### Opción 2: **Netlify**

**Ventajas:**
- Fácil integración con Git
- Formularios integrados
- Analytics
- Despliegue rápido

**Pasos:**
1. Ir a https://netlify.com
2. Conectar repositorio de GitHub
3. Configurar:
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Deploy automático

### Opción 3: **GitHub Pages**

**Para desplegar manualmente:**

```bash
# 1. Compilar
npm run build

# 2. Copiar los archivos de dist/ a gh-pages branch
# (Requiere configuración previa en package.json)
npm run deploy
```

### Opción 4: **Servidor Propio (VPS)**

```bash
# 1. Compilar
npm run build

# 2. Copiar la carpeta dist/ al servidor
scp -r dist/* usuario@servidor:/var/www/portfolio/

# 3. Configurar Nginx/Apache para servir la carpeta dist/
```

---

## 🔧 Configuración Recomendada

### Headers de Seguridad (Nginx)

```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
```

### Performance

- **Compresión Gzip:** Habilitada automáticamente en Vercel/Netlify
- **Cache:** 30 días para archivos estáticos
- **Code Splitting:** Vite ya lo hace automáticamente

---

## 📊 Optimizaciones

El proyecto ya incluye:

✅ **Tailwind CSS** - Solo CSS usado es incluido (purging)
✅ **Vite** - Build ultra rápido y optimizado
✅ **Code Splitting** - Lazy loading de componentes
✅ **Image Optimization** - Imágenes optimizadas
✅ **Dark Mode** - Bajo costo de performance
✅ **i18n Estático** - Traducciones sin overhead

---

## 🔐 Variables de Entorno

Crear archivo `.env.production` en `/frontend`:

```env
VITE_API_URL=https://tu-api.com
VITE_APP_NAME=Mi Portfolio
```

---

## 📈 Analytics (Opcional)

Agregar a `src/main.jsx`:

```javascript
// Google Analytics
import ReactGA from 'react-ga4';
ReactGA.initialize('G-XXXXXXXXXX');

// O Vercel Analytics (automático si usas Vercel)
import { Analytics } from '@vercel/analytics/react';
```

---

## ✅ Checklist Antes de Desplegar

- [ ] Todas las traducciones están correctas (ES/EN)
- [ ] Links de contacto funcionan (email, WhatsApp, LinkedIn, GitHub)
- [ ] Imagenes/avatares están configurados
- [ ] Dark mode y Light mode funcionan correctamente
- [ ] Responsive en mobile, tablet, desktop
- [ ] Velocidad de carga aceptable (< 2s)
- [ ] SEO básico (meta tags, title, description)
- [ ] No hay errores en consola

---

## 🎯 Próximos Pasos

1. **Dominio personalizado:** 
   - Apunta tu dominio a Vercel/Netlify
   - Tiempo: 1-2 horas para propagar DNS

2. **Email personalizado:** 
   - Si usas dominio, puedes crear emails como contacto@tu-dominio.com

3. **Actualizaciones:**
   - Los cambios en Git se despliegan automáticamente

---

## 📞 Soporte

Para problemas en despliegue:

- **Vercel:** https://vercel.com/docs
- **Netlify:** https://docs.netlify.com
- **Vite:** https://vitejs.dev/guide/static-deploy.html

---

**¡Tu portfolio está listo para conquistar el mundo! 🚀**

