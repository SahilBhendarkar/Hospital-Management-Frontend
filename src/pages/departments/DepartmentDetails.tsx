import { useLocation, Navigate, Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import { departments } from "../../data/departments";
import { doctors } from "../../data/doctors";

const DepartmentDetails = () => {
    const location = useLocation();

    const department = departments.find(
        (dept) => dept.link === location.pathname
    );

    if (!department) {
        return <Navigate to="/departments" replace />;
    }

    const departmentDoctors = doctors.filter((doctor) =>
        doctor.departments.includes(department.title)
    );

    return (
        <main className="bg-slate-50 min-h-screen">
            <Header />

            <section className="relative">
                <img
                    src={department.image}
                    alt={department.title}
                    className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center">
                    <div className="max-w-6xl mx-auto px-6 text-white">

                        <h1 className="text-4xl md:text-5xl font-bold">
                            {department.title}
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg text-white/90">
                            {department.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-14 space-y-16">

                <div className="grid md:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-semibold mb-4">
                            About {department.title}
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            {department.description}
                        </p>

                        <h3 className="text-xl font-semibold mb-3">
                            Services Offered
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-y-2 list-disc list-inside text-gray-700">
                            <li>Advanced diagnostics</li>
                            <li>Expert specialist consultations</li>
                            <li>Modern treatment facilities</li>
                            <li>24×7 patient care</li>
                            <li>Minimally invasive procedures</li>
                            <li>Post-treatment rehabilitation</li>
                        </ul>
                    </div>

                </div>

                {departmentDoctors.length > 0 && (
                    <aside>
                        <h2 className="text-2xl font-semibold mb-8 text-center">
                            Our Specialists
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {departmentDoctors.map((doctor) => (
                                <div
                                    key={doctor.id}
                                    className="bg-white rounded-2xl shadow-lg p-6 text-center"
                                >
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-36 h-36 object-cover rounded-xl mx-auto mb-4"
                                    />
                                    <h3 className="text-lg font-bold">
                                        {doctor.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {doctor.specialization}
                                    </p>
                                    <p className="text-gray-500 text-sm mt-1">
                                        {doctor.experience}
                                    </p>

                                    <Link
                                        to={doctor.profileUrl}
                                        className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
                                    >
                                        View Profile →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </aside>
                )}

                <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                        Take the First Step Towards Better Health
                    </h3>
                    <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                        Schedule an Appointment
                    </button>
                </div>
            </section>
        </main>
    );
};

export default DepartmentDetails;
