import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import RegisterForm from "../components/auth/RegisterForm";

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="register-backdrop"
                    className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        key="register-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="register-modal-title"
                        className="bg-white rounded-2xl p-8 w-full max-w-md relative"
                        initial={{ scale: 0.95, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 40 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            aria-label="Close register modal"
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                        >
                            <X size={22} />
                        </button>

                        <h2
                            id="register-modal-title"
                            className="text-3xl font-bold text-center mb-6"
                        >
                            Create Account
                        </h2>

                        <RegisterForm onSuccess={onClose} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default RegisterModal;
