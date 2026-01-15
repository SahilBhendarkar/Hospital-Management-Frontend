import DoctorsGrid from "../../components/doctors/DoctorsGrid";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const Doctors = () => {
    return (
        <main
            role="main"
            className="min-h-screen bg-slate-300"
        >
            <Header />
            <DoctorsGrid />
            <Footer />
        </main>
    );
};

export default Doctors;



