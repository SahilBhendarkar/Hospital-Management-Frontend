import Services from "../LandingPages/Services";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import About from "../LandingPages/About";
import IndexSlider from "../LandingPages/IndexSlider";
import BodySelector from "../LandingPages/BodySelector";
import OurTeam from "../LandingPages/OurTeam";
import PatientReviews from "../LandingPages/PatientReview";
import AppointmentAndEvents from "../LandingPages/AppointmentAndEvents";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Header />
      <IndexSlider />
      <About />
      <OurTeam />
      <Services />
      <BodySelector />
      <AppointmentAndEvents />
      <PatientReviews />
      <Footer />
    </div>
  );
}