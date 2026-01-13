import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect } from "react";

import LoginForm from "../components/auth/LoginForm";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}


const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    useEffect(() => {
        if (isOpen) {
            document.getElementById("login-email")?.focus();
        }
    }, [isOpen]);

    return createPortal(
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/60 flex items-center justify-center"
                onClick={onClose}
            >
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="login-modal-title"
                    className="bg-white rounded-2xl p-8 w-full max-w-md relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 id="login-modal-title" className="text-3xl font-bold text-center mb-6">
                        Welcome Back
                    </h2>

                    <button
                        onClick={onClose}
                        aria-label="Close login modal"
                        className="absolute top-4 right-4"
                    >
                        <X size={22} />
                    </button>

                    <LoginForm onSuccess={onClose} />
                </motion.div>

            </motion.div>
        </AnimatePresence>,
        document.body
    );
};

export default LoginModal;
