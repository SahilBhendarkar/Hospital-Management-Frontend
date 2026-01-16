import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";
import { useAppSelector } from "../../store/store";
import StatCard from "../../components/common/StatCard";

const PatientDashboard = () => {
    const { user } = useAppSelector((state) => state.auth);
    const navigate = useNavigate();

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
                    <StatCard
                        title="My Appointments"
                        value="3"
                        icon={<span className="text-2xl">📅</span>}
                        colorClass="bg-teal-100 text-teal-600"
                        trend={{ value: "Next: Tomorrow", label: "General Checkup", isPositive: true }}
                    />

                    <StatCard
                        title="Prescriptions"
                        value="12"
                        icon={<span className="text-2xl">💊</span>}
                        colorClass="bg-blue-100 text-blue-600"
                        trend={{ value: "2 Active", label: "medications", isPositive: true }}
                    />

                    <StatCard
                        title="Find a Doctor"
                        value="Search"
                        icon={<span className="text-2xl">👨‍⚕️</span>}
                        colorClass="bg-purple-100 text-purple-600"
                        onClick={() => navigate("/doctors")}
                            />
                </div>
            </main>
        </div>
    );
};

export default PatientDashboard;
