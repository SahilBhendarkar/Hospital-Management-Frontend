import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import RegisterForm from "../components/auth/RegisterForm";

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.getElementById("register-name")?.focus();
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    backgroundColor: "rgba(0,0,0,0.6)",
                }}
            >
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="register-modal-title"
                    initial={{ scale: 0.9, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 30 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="
                        relative
                        w-full
                        max-w-sm sm:max-w-md lg:max-w-lg
                        mx-4 sm:mx-auto
                        bg-white/95 backdrop-blur-sm
                        rounded-3xl
                        shadow-2xl border border-white/20
                        overflow-hidden
                        max-h-[85vh] sm:max-h-[90vh]
                    "
                >
                    <button
                        onClick={onClose}
                        aria-label="Close register modal"
                        className="
                            absolute top-4 right-4 p-2
                            rounded-lg hover:bg-gray-100 transition-all
                            focus:outline-none focus:ring-2 focus:ring-blue-500
                        "
                    >
                        <X size={22} className="text-gray-600 hover:text-gray-900" />
                    </button>

                    <div className="p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
                        <h2
                            id="register-modal-title"
                            className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-900"
                        >
                            Create Account
                        </h2>
                        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
                            Join our hospital management system
                        </p>

                        <RegisterForm onSuccess={onClose} />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
};

export default RegisterModal;
