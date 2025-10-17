import NavBar from './components/NavBar.tsx';
import HeroSection from './components/HeroSection.tsx';
import AboutUs from './components/AboutUs.tsx';

function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <NavBar />
      <HeroSection />
      <AboutUs />
    </div>
  );
}

export default App;
