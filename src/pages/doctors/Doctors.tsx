import DoctorsGrid from "../../components/doctors/DoctorsGrid";
import Header from "../../components/layout/Header";

const Doctors = () => {
    return (
        <main role="main" className="min-h-screen bg-slate-50">
            <Header />

            <section className="max-w-7xl mx-auto px-4 sm:px-6">
                <DoctorsGrid />
            </section>
        </main>
    );
};

export default Doctors;
