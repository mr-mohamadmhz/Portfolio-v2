import MenuAppBar from "./components/layout/MenuAppBar";
import About from "./components/section/About";
import Blog from "./components/section/Blog";
import ContactUs from "./components/section/ContactUs";
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
      <Blog />
      <ContactUs />
    </div>
  );
}
export default Home;
