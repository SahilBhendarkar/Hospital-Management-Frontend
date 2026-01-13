import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/layout/Header";

gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const statsSectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            heroRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8 }
        )
            .fromTo(
                titleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6 },
                "-=0.4"
            )
            .fromTo(
                subtitleRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5 },
                "-=0.3"
            );

        gsap.fromTo(
            cardsRef.current,
            { y: 80, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: statsSectionRef.current,
                    start: "top center",
                    end: "+=300",
                    scrub: true,
                    // pin: true,                // ← usually better without pin for dashboard
                },
            }
        );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100"
            role="main"
            aria-labelledby="dashboard-title"
        >
            <Header />

            {/* Hero / Welcome area */}
            <section ref={heroRef} className="pt-16 pb-12 px-5 md:px-10 lg:px-16">
                <div className="max-w-7xl mx-auto text-center">
                    <h1
                        ref={titleRef}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5"
                    >
                        Hospital Dashboard
                    </h1>

                    <p
                        ref={subtitleRef}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Manage appointments, patients, doctors, billing & reports in one place
                    </p>
                </div>
            </section>

            {/* Quick Stats - Cards */}
            <section
                ref={statsSectionRef}
                className="px-5 md:px-10 lg:px-16 pb-16"
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* You can duplicate & modify these cards later */}
                    {[
                        { title: "Today's Appointments", value: "24", color: "from-blue-500 to-blue-600" },
                        { title: "In-Patients", value: "18", color: "from-emerald-500 to-emerald-600" },
                        { title: "Pending Bills", value: "₹1.24L", color: "from-amber-500 to-amber-600" },
                        { title: "Doctors On Duty", value: "11", color: "from-indigo-500 to-indigo-600" },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                if (el) cardsRef.current[i] = el
                            }}
                            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div className={`h-2 bg-gradient-to-r ${stat.color}`} />
                            <div className="p-6">
                                <h3 className="text-sm font-medium text-gray-500 mb-1">
                                    {stat.title}
                                </h3>
                                <div className="text-3xl md:text-4xl font-bold text-gray-800">
                                    {stat.value}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ──────────────────────────────────────────────── */}
            {/*               Main Dashboard Content Area         */}
            {/* ──────────────────────────────────────────────── */}

            <section className="px-5 md:px-10 lg:px-16 pb-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                    <div className="lg:col-span-8 space-y-8">



                        <div className="bg-white rounded-xl shadow-sm border p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">Today's Appointments</h2>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {new Date().toLocaleDateString('en-IN', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-gray-600">
                                        Total: <span className="text-indigo-600 font-semibold">24</span>
                                    </span>
                                    <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                        New Appointment
                                    </button>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Time
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Patient
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                                                Doctor
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Purpose
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                                                Status
                                            </th>
                                            <th scope="col" className="relative px-4 py-3">
                                                <span className="sr-only">Actions</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {[
                                            { time: "09:00", patient: "Aarav Sharma", age: 34, doctor: "Dr. Priya Mehta", purpose: "Follow-up", status: "Confirmed" },
                                            { time: "09:30", patient: "Priyanka Desai", age: 28, doctor: "Dr. Rajesh Kumar", purpose: "Consultation", status: "Waiting" },
                                            { time: "10:15", patient: "Vikram Patil", age: 45, doctor: "Dr. Priya Mehta", purpose: "Blood Test Review", status: "Confirmed" },
                                            { time: "11:00", patient: "Sneha Joshi", age: 19, doctor: "Dr. Anjali Verma", purpose: "First Visit", status: "Arrived" },
                                            { time: "11:45", patient: "Rohan Gupta", age: 52, doctor: "Dr. Rajesh Kumar", purpose: "Cardiology", status: "Confirmed" },
                                        ].map((appt, index) => (
                                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {appt.time}
                                                </td>
                                                <td className="px-4 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{appt.patient}</div>
                                                    <div className="text-xs text-gray-500">Age {appt.age}</div>
                                                </td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 hidden md:table-cell">
                                                    {appt.doctor}
                                                </td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    {appt.purpose}
                                                </td>
                                                <td className="px-4 py-4 whitespace-nowrap hidden sm:table-cell">
                                                    <span className={`px-2.5 py-1 inline-flex text-xs leading-tight font-semibold rounded-full ${appt.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                                                        appt.status === 'Arrived' ? 'bg-blue-100 text-blue-800' :
                                                            appt.status === 'Waiting' ? 'bg-amber-100 text-amber-800' :
                                                                'bg-gray-100 text-gray-800'
                                                        }`}>
                                                        {appt.status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                                                        View
                                                    </button>
                                                    <button className="text-gray-600 hover:text-gray-900">
                                                        ⋮
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination / Load more */}
                            <div className="mt-6 flex items-center justify-between">
                                <div className="text-sm text-gray-600">
                                    Showing 1–5 of 24 appointments
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50" disabled>
                                        Previous
                                    </button>
                                    <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Recent Patients / Activity */}


                        <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                                <div>
                                    <p className="font-semibold text-gray-800">Ramesh Patel</p>
                                    <p className="text-gray-500">Cardiology • Age 54</p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-medium">
                                    Admitted
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <div>
                                    <p className="font-semibold text-gray-800">Anita Sharma</p>
                                    <p className="text-gray-500">Gynecology • Age 37</p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
                                    Under Observation
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <div>
                                    <p className="font-semibold text-gray-800">Mohit Verma</p>
                                    <p className="text-gray-500">Orthopedics • Age 29</p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                                    Discharged
                                </span>
                            </div>

                            <div className="pt-3 border-t text-right">
                                <span className="text-blue-600 text-sm font-medium cursor-pointer hover:underline">
                                    View all patient activity →
                                </span>
                            </div>
                        </div>



                    </div>

                    {/* Right sidebar column */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Quick Actions */}
                        <div className="grid grid-cols-2 gap-4">
                            <button className="py-5 px-4 rounded-xl bg-white border border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 flex flex-col items-center gap-2 text-gray-800 font-medium">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-lg font-bold">
                                    NA
                                </div>
                                <span className="text-sm font-semibold">New Appointment</span>
                                <span className="text-xs text-gray-500 text-center">
                                    Schedule patient visit instantly
                                </span>
                            </button>

                            <button className="py-5 px-4 rounded-xl bg-white border border-gray-200 hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 transition-all duration-300 flex flex-col items-center gap-2 text-gray-800 font-medium">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-lg font-bold">
                                    MP
                                </div>
                                <span className="text-sm font-semibold">Medical Reports</span>
                                <span className="text-xs text-gray-500 text-center">
                                    View lab & diagnostic results
                                </span>
                            </button>

                            <button className="py-5 px-4 rounded-xl bg-white border border-gray-200 hover:bg-gradient-to-br hover:from-purple-50 hover:to-fuchsia-50 transition-all duration-300 flex flex-col items-center gap-2 text-gray-800 font-medium">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-lg font-bold">
                                    PR
                                </div>
                                <span className="text-sm font-semibold">Patient Records</span>
                                <span className="text-xs text-gray-500 text-center">
                                    Access complete patient history
                                </span>
                            </button>

                            <button className="py-5 px-4 rounded-xl bg-white border border-gray-200 hover:bg-gradient-to-br hover:from-gray-50 hover:to-slate-50 transition-all duration-300 flex flex-col items-center gap-2 text-gray-800 font-medium">
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-lg font-bold">
                                    ⚙
                                </div>
                                <span className="text-sm font-semibold">System Settings</span>
                                <span className="text-xs text-gray-500 text-center">
                                    Manage hospital configuration
                                </span>
                            </button>
                        </div>


                        {/* Quick Stats / Notices / Upcoming Tasks */}
                        <div className="bg-white rounded-xl shadow-sm border p-6">
                            <h2 className="text-xl font-semibold mb-6">Notices & Pending Tasks</h2>

                            <div className="space-y-4">
                                {/* Notice */}
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-50 border border-blue-100">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-600" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">
                                            OPD Schedule Update
                                        </p>
                                        <p className="text-xs text-gray-600 mt-1">
                                            OPD timings for Cardiology department have been revised starting
                                            tomorrow.
                                        </p>
                                    </div>
                                </div>

                                {/* Task */}
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-yellow-50 border border-yellow-100">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">
                                            Pending Lab Reports
                                        </p>
                                        <p className="text-xs text-gray-600 mt-1">
                                            12 laboratory reports are pending review and approval.
                                        </p>
                                    </div>
                                </div>

                                {/* Task */}
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-red-50 border border-red-100">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-red-500" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">
                                            Billing Verification Required
                                        </p>
                                        <p className="text-xs text-gray-600 mt-1">
                                            5 patient bills require admin verification before discharge.
                                        </p>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-200">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-gray-500" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">
                                            Staff Meeting Reminder
                                        </p>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Monthly department meeting scheduled for Friday at 4:00 PM.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;