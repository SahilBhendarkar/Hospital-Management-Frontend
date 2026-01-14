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
                    className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            {department.title}
                        </h1>
                        <p className="mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base md:text-lg text-white/90">
                            {department.description}
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-14">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    <div className="md:col-span-2">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                            About {department.title}
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base">
                            {department.description}
                        </p>

                        <h3 className="text-lg sm:text-xl font-semibold mb-3">
                            Services Offered
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 list-disc list-inside text-gray-700 text-sm sm:text-base">
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
                        <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-center">
                            Our Specialists
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {departmentDoctors.map((doctor) => (
                                <div
                                    key={doctor.id}
                                    className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
                                >
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-xl mx-auto mb-4"
                                    />
                                    <h3 className="text-base sm:text-lg font-bold">
                                        {doctor.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {doctor.specialization}
                                    </p>
                                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                                        {doctor.experience}
                                    </p>

                                    <Link
                                        to={doctor.profileUrl}
                                        className="inline-block mt-4 text-blue-600 font-semibold text-sm hover:underline"
                                    >
                                        View Profile →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </aside>
                )}

                <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                        Take the First Step Towards Better Health
                    </h3>
                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition text-sm sm:text-base">
                        Schedule an Appointment
                    </button>
                </div>
            </section>
        </main>
    );
};

export default DepartmentDetails;
