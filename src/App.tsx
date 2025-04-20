import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Tracks from './components/Tracks';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
// import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CountdownTimer from './components/CountdownTimer';
import Judges from './components/Judges';
import Mentors from './components/Mentors';
import HostingTeam from './components/HostingTeam';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#000000] text-white overflow-hidden">
      <div className="fixed inset-0 bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      <ParticleBackground />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>
      <Navbar scrollY={scrollY} />
      <main className="relative z-10">
        <Hero />
        <CountdownTimer  />
        <About />
        <Tracks />
        <Schedule />
        <Prizes />
        <Judges />
        <Mentors />
        <HostingTeam />
        {/* <Sponsors /> */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
