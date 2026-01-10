import Services from "../LandingPages/Services";
import Header from "./Header";
import Footer from "../footer/Footer";
import About from "../LandingPages/About";
import IndexSlider from "../LandingPages/IndexSlider";
import BodySelector from "../LandingPages/BodySelector";
import OurTeam from "../LandingPages/OurTeam";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <IndexSlider/>
      <About />
      <OurTeam />
      <Services/>
      <BodySelector/>
      <Footer/>
    </div>
  );
}