import NavBar from './components/NavBar.tsx';
import HeroSection from './components/HeroSection.tsx';
import AboutUs from './components/AboutUs.tsx';
import ReasonProjects from './components/ReasonProjects.tsx';

function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <NavBar />
      <HeroSection />
      <AboutUs />
      <ReasonProjects />
    </div>
  );
}

export default App;
