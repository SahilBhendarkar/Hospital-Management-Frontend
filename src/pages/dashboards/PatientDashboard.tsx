import { motion } from "framer-motion";
import Header from "../../components/layout/Header";
import { useAppSelector } from "../../store/store";

const PatientDashboard = () => {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <div className="min-h-screen bg-teal-50">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl font-bold text-teal-900">
                        Hello, {user?.name || user?.email}
                    </h1>
                    <p className="text-teal-600 mt-2">Welcome to your patient portal. Manage your health conveniently.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Quick Action Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100"
                    >
                        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 text-teal-600">
                            📅
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">My Appointments</h3>
                        <p className="text-sm text-gray-500 mb-4">View upcoming visits and schedule new ones.</p>
                        <button className="text-teal-600 font-medium hover:underline">View Schedule &rarr;</button>
                    </motion.div>

                    {/* Quick Action Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                            💊
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Prescriptions</h3>
                        <p className="text-sm text-gray-500 mb-4">Access your current medications and history.</p>
                        <button className="text-blue-600 font-medium hover:underline">View Prescriptions &rarr;</button>
                    </motion.div>

                    {/* Quick Action Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-teal-100"
                    >
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                            👨‍⚕️
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Find a Doctor</h3>
                        <p className="text-sm text-gray-500 mb-4">Search for specialists and book consultations.</p>
                        <button className="text-purple-600 font-medium hover:underline">Search Doctors &rarr;</button>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default PatientDashboard;
