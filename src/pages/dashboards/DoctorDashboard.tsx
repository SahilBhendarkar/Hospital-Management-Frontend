import { motion } from "framer-motion";
import Header from "../../components/layout/Header";
import { useAppSelector } from "../../store/store";
import StatCard from "../../components/common/StatCard";

const DoctorDashboard = () => {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <div className="min-h-screen bg-indigo-50">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl font-bold text-indigo-900">
                        Dr. {user?.name || "Smith"}
                    </h1>
                    <p className="text-indigo-600 mt-2">Welcome back. You have 4 appointments today.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatCard
                        title="Today's Appointments"
                        value="8"
                        icon={<span className="text-2xl">🗓️</span>}
                        colorClass="bg-indigo-100 text-indigo-600"
                        trend={{ value: "2", label: "vs yesterday", isPositive: true }}
                    />
                    <StatCard
                        title="Pending Reports"
                        value="5"
                        icon={<span className="text-2xl">📝</span>}
                        colorClass="bg-orange-100 text-orange-600"
                    />
                    <StatCard
                        title="Patient Messages"
                        value="3"
                        icon={<span className="text-2xl">💬</span>}
                        colorClass="bg-blue-100 text-blue-600"
                    />
                </div>

                <div className="mt-8 bg-white rounded-2xl shadow-sm border border-indigo-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="font-bold text-gray-800">Next Appointment</h2>
                        <span className="text-sm text-gray-500">Today, 10:30 AM</span>
                    </div>
                    <div className="p-6 flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">Sarah Johnson</h3>
                            <p className="text-gray-600">Follow-up: Cardiology</p>
                            <div className="flex gap-2 mt-2">
                                <button className="text-sm px-3 py-1 bg-indigo-600 text-white rounded-lg">View History</button>
                                <button className="text-sm px-3 py-1 border border-gray-300 text-gray-700 rounded-lg">Reschedule</button>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default DoctorDashboard;
