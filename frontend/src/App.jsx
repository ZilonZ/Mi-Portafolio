import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';

// Componente raíz de la aplicación
// Gestiona la disposición general: navbar, main sections, y footer
// Aplica estilos de tema (dark/light mode) a todo el documento
function App() {
  const { isDark } = useTheme();

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      {/* Contenedor principal con estilos temáticos aplicados */}
      <div className={`${isDark ? 'bg-dark-bg text-[#E5E7EB]' : 'bg-light-bg text-dark-bg'} min-h-screen`}>
        {/* Navegación pegajosa en la parte superior */}
        <Navbar />
        
        {/* Contenedor de secciones principales */}
        <main>
          {/* Sección Hero: presentación principal */}
          <Hero />
          
          {/* Sección Acerca de: información personal */}
          <About />
          
          {/* Sección Habilidades: skills técnicas */}
          <Skills />
          
          {/* Sección Proyectos: portfolio de trabajos */}
          <Projects />
          
          {/* Sección Experiencia: línea de tiempo laboral */}
          <Experience />
          
          {/* Sección Contacto: información de contacto y redes sociales */}
          <Contact />
        </main>
        
        {/* Pie de página */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
