import { useParams, Navigate, Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import { doctors } from "../../data/doctors";

const DoctorDetails = () => {
    const { doctorSlug } = useParams();

    const doctor = doctors.find(
        (doc) => doc.profileUrl === `/doctors/${doctorSlug}`
    );

    if (!doctor) {
        return <Navigate to="/doctors" replace />;
    }

    return (
        <main className="bg-slate-50 min-h-screen">
            <Header />

            <section className="bg-white shadow-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col md:flex-row gap-8 items-center">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="
                w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48
                object-contain rounded-xl
                bg-slate-100 p-4
            "
                    />

                    <div>
                        <nav className="text-xs sm:text-sm text-gray-500 mb-2">
                            <Link to="/" className="hover:underline">Home</Link> /{" "}
                            <Link to="/doctors" className="hover:underline">Doctors</Link> /{" "}
                            <span className="text-gray-700">{doctor.name}</span>
                        </nav>

                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            {doctor.name}
                        </h1>

                        <p className="text-blue-600 font-medium mt-1">
                            {doctor.specialization}
                        </p>

                        <p className="text-gray-600 mt-2 text-sm sm:text-base">
                            {doctor.qualification}
                        </p>

                        <p className="text-gray-500 mt-1 text-sm">
                            Experience: {doctor.experience}
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                <div className="md:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                            About Doctor
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            {doctor.name} is a highly experienced {doctor.specialization} with{" "}
                            {doctor.experience} of clinical expertise. Known for
                            patient-centric care and evidence-based treatment.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3">
                            Areas of Expertise
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                            <li>Advanced diagnosis & treatment</li>
                            <li>Minimally invasive procedures</li>
                            <li>Preventive healthcare</li>
                            <li>Post-treatment rehabilitation</li>
                        </ul>
                    </div>
                </div>

                <aside className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg h-fit">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4">
                        Book Appointment
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                        Consult {doctor.name} for expert medical care.
                    </p>
                    <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                        Schedule Appointment
                    </button>
                </aside>
            </section>
        </main>
    );
};

export default DoctorDetails;
