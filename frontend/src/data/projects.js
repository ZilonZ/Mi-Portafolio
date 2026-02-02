// Array de datos de proyectos completados y destacados
// NOTA: Esta es una copia de respaldo. Los datos principales se encuentran en src/i18n/es.json
// Los componentes usan la versión de i18n con la función t('projects.projects')
export const projectsData = [
  {
    id: 1,
    name: 'KCJ Dev Studio',
    role: 'Cofundador & Desarrollador Frontend',
    description: 'Sitio web corporativo oficial de KCJ Dev Studio. Presenta servicios, enfoque y metodología del estudio con interfaz moderna y orientada a conversión. Responsable de diseño completo, maquetación responsive e implementación en React.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    status: 'completed',
    link: 'https://kcjdevstudio.com/',
    image: '/src/assets/img/Ejemplo_KCJ.png',
  },
  {
    id: 2,
    name: 'GEMA',
    role: 'Desarrollador Frontend (80%) | Apoyo Backend (10%)',
    description: 'Plataforma web desarrollada para cliente real, utilizada por Servimacons del Meta. Participé principalmente en diseño y desarrollo del frontend, así como experiencia de usuario. Enfoque en arquitectura visual y flujos de interacción profesionales.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'MySQL'],
    status: 'completed',
    link: 'https://www.gema-co.site/',
    image: '/src/assets/img/Ejemplo_gema.png',
  },
];
