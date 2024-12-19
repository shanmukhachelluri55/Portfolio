import Cursor from './components/ui/Cursor';
import ParticlesBackground from './components/ui/ParticlesBackground';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Summary from './components/sections/Summary';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Header from './components/sections/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <Header />  {/* Header will have the normal cursor */}
      <Cursor />  {/* Custom cursor will be active outside the Header */}
      <ParticlesBackground />
      
      <main className="relative z-10">
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      
      <footer className="relative z-10 bg-black/50 backdrop-blur-lg text-white py-8 text-center">
        <p>© 2024 Chelluri Shanmukha Anantha Jayaram. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
