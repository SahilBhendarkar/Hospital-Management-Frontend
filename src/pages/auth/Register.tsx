import { motion } from "framer-motion";
import RegisterForm from "../../components/auth/RegisterForm";

const Register: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-h-screen flex items-center justify-center"
        >
            <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Create Account
                </h2>
                <p className="text-center mb-8 text-gray-600">
                    Register to access hospital admin panel
                </p>

                <RegisterForm />
            </div>
        </motion.div>
    );
};

export default Register;
