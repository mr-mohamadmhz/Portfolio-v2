import MenuAppBar from "./components/layout/MenuAppBar";
import AboutSection from "./components/section/Aboutsection";
import HeroSection from "./components/section/HeroSection";
import PortfolioSection from "./components/section/PortfolioSection";
import ProjectTimelineSection from "./components/section/ProjectTimelineSection";

function Home() {
  return (
    <div>
      <MenuAppBar />
      <HeroSection />
      <AboutSection />
      <ProjectTimelineSection />
      <PortfolioSection />
    </div>
  );
}
export default Home;
