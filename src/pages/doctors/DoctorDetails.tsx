import {
    useParams,
    Navigate,
    Link
} from "react-router-dom";

import {
    useEffect,
    useState
} from "react";

import Header from "../../components/layout/Header";

import type { Doctor }
    from "../../data/doctors";

import api from "../../api/axios";

const DoctorDetails = () => {

    const { doctorSlug } = useParams();

    // STORE DOCTOR
    const [doctor, setDoctor] =
        useState<Doctor | null>(null);

    // LOADING STATE
    const [loading, setLoading] =
        useState(true);

    // FETCH DOCTOR DATA
    useEffect(() => {

        const fetchDoctor = async () => {

            try {

                const response = await api.get(
                    "/api/doctors"
                );

                const doctorsData =
                    response.data;

                // FIND MATCHING DOCTOR
                const foundDoctor =
                    doctorsData.find(
                        (doc: Doctor) =>
                            doc.profileUrl ===
                            `/doctors/${doctorSlug}`
                    );

                setDoctor(foundDoctor || null);

            } catch (error) {

                console.error(
                    "Error fetching doctor:",
                    error
                );

            } finally {

                setLoading(false);
            }
        };

        fetchDoctor();

    }, [doctorSlug]);

    // LOADING
    if (loading) {

        return (
            <div className="p-10 text-center">
                Loading...
            </div>
        );
    }

    // REDIRECT IF DOCTOR NOT FOUND
    if (!doctor) {

        return (
            <Navigate
                to="/doctors"
                replace
            />
        );
    }

    return (
        <main className="bg-slate-50 min-h-screen">

            <Header />

            {/* HERO SECTION */}
            <section className="bg-white shadow-sm">

                <div
                    className="
                        max-w-6xl mx-auto
                        px-6 py-12
                        flex flex-col md:flex-row
                        gap-10 items-center
                    "
                >

                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="
                            w-48 h-48
                            object-contain
                            rounded-xl
                            bg-slate-100
                            p-4
                        "
                    />

                    <div>

                        <nav
                            className="
                                text-sm text-gray-500
                                mb-2
                            "
                        >

                            <Link
                                to="/"
                                className="hover:underline"
                            >
                                Home
                            </Link>

                            {" / "}

                            <Link
                                to="/doctors"
                                className="hover:underline"
                            >
                                Doctors
                            </Link>

                            {" / "}

                            <span className="text-gray-700">
                                {doctor.name}
                            </span>

                        </nav>

                        <h1
                            className="
                                text-3xl
                                font-bold text-gray-900
                            "
                        >
                            {doctor.name}
                        </h1>

                        <p
                            className="
                                text-blue-600
                                font-medium mt-1
                            "
                        >
                            {doctor.specialization}
                        </p>

                        <p className="text-gray-600 mt-2">
                            {doctor.qualification}
                        </p>

                        <p className="text-gray-500 mt-1">
                            Experience: {doctor.experience}
                        </p>

                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section
                className="
                    max-w-6xl mx-auto
                    px-6 py-14
                    grid md:grid-cols-3
                    gap-10
                "
            >

                {/* LEFT SECTION */}
                <div
                    className="
                        md:col-span-2
                        space-y-10
                    "
                >

                    <div>

                        <h2
                            className="
                                text-2xl
                                font-semibold
                                mb-3
                            "
                        >
                            About Doctor
                        </h2>

                        <p
                            className="
                                text-gray-700
                                leading-relaxed
                            "
                        >

                            {doctor.name}
                            {" "}is a highly experienced{" "}
                            {doctor.specialization}
                            {" "}with{" "}
                            {doctor.experience}
                            {" "}of clinical expertise.
                            Known for patient-centric care
                            and evidence-based treatment.

                        </p>
                    </div>

                    {/* EXPERTISE */}
                    <div>

                        <h3
                            className="
                                text-xl
                                font-semibold
                                mb-3
                            "
                        >
                            Areas of Expertise
                        </h3>

                        <ul
                            className="
                                list-disc list-inside
                                text-gray-700
                                space-y-1
                            "
                        >

                            <li>
                                Advanced diagnosis & treatment
                            </li>

                            <li>
                                Minimally invasive procedures
                            </li>

                            <li>
                                Preventive healthcare
                            </li>

                            <li>
                                Post-treatment rehabilitation
                            </li>

                        </ul>
                    </div>

                    {/* DEPARTMENTS */}
                    <div>

                        <h3
                            className="
                                text-xl
                                font-semibold
                                mb-3
                            "
                        >
                            Departments
                        </h3>

                        <div
                            className="
                                flex flex-wrap gap-3
                            "
                        >

                            {doctor.departments.map(
                                (dept, index) => (

                                    <span
                                        key={index}
                                        className="
                                            px-4 py-2
                                            bg-blue-100
                                            text-blue-700
                                            rounded-full
                                            text-sm
                                            font-medium
                                        "
                                    >
                                        {dept}
                                    </span>
                                )
                            )}

                        </div>
                    </div>
                </div>

                {/* SIDEBAR */}
                <aside
                    className="
                        bg-white p-6
                        rounded-2xl
                        shadow-lg h-fit
                    "
                >

                    <h3
                        className="
                            text-xl
                            font-semibold
                            mb-4
                        "
                    >
                        Book Appointment
                    </h3>

                    <p
                        className="
                            text-gray-600
                            mb-6
                        "
                    >
                        Consult {doctor.name}
                        {" "}for expert medical care.
                    </p>

                    <button
                        className="
                            w-full px-6 py-3
                            bg-blue-600 text-white
                            rounded-xl
                            font-semibold
                            hover:bg-blue-700
                            transition
                        "
                    >
                        Schedule Appointment
                    </button>

                </aside>
            </section>
        </main>
    );
};

export default DoctorDetails;