import { motion } from "framer-motion";
import LoginForm from "../../components/auth/LoginForm";

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

const Login: React.FC = () => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen flex items-center justify-center"
        >
            <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Welcome Back
                </h2>
                <p className="text-center mb-8 text-gray-600">
                    Sign in to your hospital admin panel
                </p>

                <LoginForm />
            </div>
        </motion.div>
    );
};

export default Login;
