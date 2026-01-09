import Services from "../LandingPages/Services";
import Header from "./Header";
import Footer from "../footer/Footer";
import About from "../LandingPages/About";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <About />
      <Services/>
      <Footer/>
    </div>
  );
}