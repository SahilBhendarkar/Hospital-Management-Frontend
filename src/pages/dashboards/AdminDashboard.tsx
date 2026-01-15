import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Header from "../../components/layout/Header";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { fetchDashboard } from "../../store/slices/dashboardSlice";

const AdminDashboard = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const statsSectionRef = useRef<HTMLDivElement>(null);
    const isStatsInView = useInView(statsSectionRef, { once: false, margin: "-100px" });

    const dispatch = useAppDispatch();
    const { stats, appointments, loading, error } = useAppSelector((state) => state.dashboard);

    useEffect(() => {
        dispatch(fetchDashboard());
    }, [dispatch]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading Dashboard...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center max-w-md p-8 bg-white rounded-xl shadow-lg border border-red-100">
                    <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h2>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button
                        onClick={() => dispatch(fetchDashboard())}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100"
            role="main"
            aria-labelledby="dashboard-title"
        >
            <Header />

            <motion.section
                ref={heroRef}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="pt-16 pb-12 px-5 md:px-10 lg:px-16"
            >
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5"
                    >
                        Hospital Admin Dashboard
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Manage appointments, patients, doctors, billing &amp; reports in one place
                    </motion.p>
                </div>
            </motion.section>

            <section
                ref={statsSectionRef}
                className="px-5 md:px-10 lg:px-16 pb-16"
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 80, opacity: 0 }}
                            animate={isStatsInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.1,
                                ease: [0.22, 1, 0.36, 1]
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
                        </motion.div>
                    ))}
                </div>
            </section>

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
                                        {appointments.map((appt, index) => (
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

                    <div className="lg:col-span-4 space-y-8">
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


                        <div className="bg-white rounded-xl shadow-sm border p-6">
                            <h2 className="text-xl font-semibold mb-6">Notices & Pending Tasks</h2>

                            <div className="space-y-4">
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

export default AdminDashboard;
