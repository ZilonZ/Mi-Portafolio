import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';

function App() {
  const { isDark } = useTheme();

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className={`${isDark ? 'bg-dark-bg text-[#E5E7EB]' : 'bg-light-bg text-dark-bg'} min-h-screen`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
