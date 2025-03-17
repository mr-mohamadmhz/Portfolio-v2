import MenuAppBar from "./components/layout/MenuAppBar";
import About from "./components/section/About";
import Hero from "./components/section/Hero";
import Portfolio from "./components/section/Portfolio";
import ProjectTimeline from "./components/section/ProjectTimeline";
import Services from "./components/section/Services";
import Testimonials from "./components/section/Testimonials";

function Home() {
  return (
    <div>
      <MenuAppBar />
      <Hero />
      <About />
      <ProjectTimeline />
      <Portfolio />
      <Services />
      <Testimonials />
    </div>
  );
}
export default Home;
