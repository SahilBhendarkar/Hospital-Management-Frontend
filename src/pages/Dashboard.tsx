import { motion } from "framer-motion";
import Header from "./Header";

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

const Dashboard: React.FC = () => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="min-h-screen bg-gray-100"
        >
            <Header />
                <h1 className="text-4xl font-bold text-blue-900 ml-9">
                    Dashboard
                </h1>
            

            <main className="p-8">
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Login Successful
                    </h2>
                    <p className="mt-2 text-gray-600">
                        You are now logged in. This is your dashboard page.
                    </p>
                </div>
            </main>
        </motion.div>
    );
};

export default Dashboard;
