import NavBar from './components/NavBar.tsx';
import HeroSection from './components/HeroSection.tsx';
import AboutUs from './components/AboutUs.tsx';
import ReasonProjects from './components/ReasonProjects.tsx';
import Assets from './components/Assets.tsx';
import Subscription from './components/subscription.tsx';

function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <NavBar />
      <HeroSection />
      <AboutUs />
      <ReasonProjects />
      <Assets />
      <Subscription />
    </div>
  );
}

export default App;
