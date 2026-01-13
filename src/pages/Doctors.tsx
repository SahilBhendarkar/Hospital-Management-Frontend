import DoctorsGrid from "../components/doctors/DoctorsGrid";
import Header from "../components/layout/Header";

const Doctors = () => {
    return (
        <main
            role="main"
            className="min-h-screen bg-slate-50"
        >
            <Header />
            <DoctorsGrid />
        </main>
    );
};

export default Doctors;
