/**
 * ⚙️ CONFIGURACIÓN DEL PORTAFOLIO
 * 
 * Este archivo contiene todas las constantes y configuraciones
 * que puedes personalizar fácilmente.
 */

// 🎨 Colores Personalizados
export const COLORS = {
  primary: '#2563EB',
  neon: '#3B82F6',
  bright: '#60A5FA',
  dark: '#0B0F1A',
  darker: '#0A0E1A',
  black: '#111827',
  light: '#F9FAFB',
};

// 🔤 Tipografías
export const FONTS = {
  heading: 'Orbitron',
  body: 'Inter',
  alt: 'Poppins',
};

// 📱 Breakpoints
export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '1024px',
  desktop: '1280px',
};

// ⏱️ Duraciones de Animación (ms)
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 1000,
};

// 🌐 Idiomas Soportados
export const SUPPORTED_LANGUAGES = ['es', 'en'];
export const DEFAULT_LANGUAGE = 'es';

// 🎭 Temas
export const THEMES = {
  dark: 'dark',
  light: 'light',
};
export const DEFAULT_THEME = 'dark';

// 👤 Información Personal (PERSONALIZA ESTO)
export const PERSONAL_INFO = {
  name: 'Cristian Morales',
  title: 'Frontend Developer & UX Specialist',
  description: 'Transformo ideas en experiencias digitales claras, intuitivas y atractivas.',
  email: 'contacto@cristianmorales.dev',
  phone: '+1 234 567 8900',
  location: 'Tu Ciudad, País',
  
  // Redes Sociales
  social: {
    github: 'https://github.com/cristianmorales',
    linkedin: 'https://linkedin.com/in/cristianmorales',
    whatsapp: 'https://wa.me/1234567890',
    twitter: 'https://twitter.com/cristianmorales',
    portfolio: 'https://cristianmorales.dev',
  },

  // Experiencia
  experience: {
    years: 5,
    projectsCompleted: 20,
    satisfaction: 100,
  },
};

// 🛠️ Stack Técnico (Personaliza según tus skills)
export const TECH_STACK = {
  frontend: [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Vite', level: 85 },
    { name: 'Performance', level: 85 },
  ],
  backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'REST APIs', level: 85 },
  ],
  tools: [
    { name: 'Figma', level: 85 },
    { name: 'Git', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Firebase', level: 80 },
    { name: 'Webpack', level: 75 },
  ],
};

// 📊 Estadísticas Quick (Hero Section)
export const QUICK_STATS = [
  {
    value: '5+',
    label: 'Años de experiencia',
  },
  {
    value: '20+',
    label: 'Proyectos completados',
  },
  {
    value: '100%',
    label: 'Dedicación',
  },
];

// 🔗 Links de Navegación
export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

// 📧 Contacto
export const CONTACT_METHODS = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'contacto@cristianmorales.dev',
    href: 'mailto:contacto@cristianmorales.dev',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+1 234 567 8900',
    href: 'https://wa.me/1234567890',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'Cristian Morales',
    href: 'https://linkedin.com/in/cristianmorales',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'cristianmorales',
    href: 'https://github.com/cristianmorales',
    color: 'from-gray-600 to-gray-800',
  },
];

// 🎬 Proyectos (Personaliza esto)
export const FEATURED_PROJECTS = [
  {
    id: 1,
    name: 'KCJ Dev Studio',
    role: 'Founder & Lead Developer',
    description: 'Plataforma de desarrollo y consultoría especializada en soluciones web modernas.',
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB'],
    status: 'in_production',
    link: '#',
    image: 'https://via.placeholder.com/600x400?text=KCJ+Dev+Studio',
  },
  {
    id: 2,
    name: 'GEMA',
    role: 'Frontend Developer',
    description: 'Sistema de gestión empresarial con dashboard interactivo en tiempo real.',
    technologies: ['React', 'Tailwind CSS', 'Chart.js', 'Firebase'],
    status: 'completed',
    link: '#',
    image: 'https://via.placeholder.com/600x400?text=GEMA',
  },
];

// 📈 Experiencia Profesional (Personaliza esto)
export const PROFESSIONAL_EXPERIENCE = [
  {
    year: '2023 - Presente',
    title: 'Fundador & Developer',
    company: 'KCJ Dev Studio',
    description: 'Liderazgo en la creación de soluciones web modernas y consultoría especializada.',
  },
  {
    year: '2021 - 2023',
    title: 'Freelance Developer',
    company: 'Independiente',
    description: 'Desarrollo de proyectos web personalizados para empresas y emprendimientos.',
  },
  {
    year: '2019 - 2021',
    title: 'Estudiante & Aprendiz',
    company: 'Autodidacta',
    description: 'Formación en desarrollo web, diseño UX y mejores prácticas de programación.',
  },
];

// 🎓 Especialidades
export const SPECIALTIES = [
  'React',
  'UI/UX',
  'Tailwind CSS',
  'Performance',
  'Accessibility',
];

// 🌈 Paleta Tailwind Personalizada
export const TAILWIND_COLORS = {
  'cyber-dark': '#0B0F1A',
  'cyber-darker': '#0A0E1A',
  'cyber-black': '#111827',
  'cyber-blue': {
    50: '#F0F9FF',
    100: '#E0F2FE',
    200: '#BAE6FD',
    300: '#7DD3FC',
    400: '#38BDF8',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },
  'cyber-neon': '#3B82F6',
  'cyber-bright': '#60A5FA',
  'cyber-light': '#F9FAFB',
};

// 🎯 Configuración SEO
export const SEO = {
  title: 'Cristian Morales - Frontend Developer & UX Specialist',
  description: 'Portafolio profesional de Cristian Morales. Frontend Developer especializado en React, Tailwind CSS y experiencias web modernas.',
  keywords: ['Frontend', 'React', 'UX', 'Tailwind CSS', 'Portafolio', 'Desarrollador'],
  author: 'Cristian Morales',
  image: '/og-image.png',
  url: 'https://cristianmorales.dev',
};

// 🔊 Notificaciones
export const NOTIFICATIONS = {
  copiedEmail: 'Email copiado al portapapeles',
  contactSent: 'Mensaje enviado exitosamente',
  error: 'Ocurrió un error, intenta de nuevo',
};

export default {
  COLORS,
  FONTS,
  BREAKPOINTS,
  ANIMATION_DURATION,
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  DEFAULT_THEME,
  PERSONAL_INFO,
  TECH_STACK,
  QUICK_STATS,
  NAV_LINKS,
  CONTACT_METHODS,
  FEATURED_PROJECTS,
  PROFESSIONAL_EXPERIENCE,
  SPECIALTIES,
  TAILWIND_COLORS,
  SEO,
  NOTIFICATIONS,
};
