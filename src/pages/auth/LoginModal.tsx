import { useEffect, useRef, useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modal = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 30 },
};

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const modalRef = useRef<HTMLDivElement | null>(null);
    const lastFocusedElement = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        lastFocusedElement.current = document.activeElement as HTMLElement;

        const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
            'button, input, a, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        focusable?.[0]?.focus();

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }

            if (e.key === "Tab" && focusable && focusable.length > 0) {
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }

                if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            lastFocusedElement.current?.focus();
        };
    }, [isOpen, onClose]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email && password) {
            localStorage.setItem("isLoggedIn", "true");
            onClose();
            navigate("/dashboard");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
                    onClick={onClose}
                >
                    <motion.div
                        ref={modalRef}
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 sm:p-10 relative"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="login-modal-title"
                        aria-describedby="login-modal-description"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
                            aria-label="Close login modal"
                        >
                            <X size={22} aria-hidden="true" />
                        </button>

                        <div className="text-center">
                            <h2
                                id="login-modal-title"
                                className="text-3xl font-bold text-gray-900"
                            >
                                Welcome Back
                            </h2>
                            <p
                                id="login-modal-description"
                                className="mt-2 text-sm text-gray-600"
                            >
                                Sign in to your hospital admin panel
                            </p>
                        </div>

                        <form
                            className="mt-8 space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label
                                    htmlFor="modal-email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="modal-email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="modal-password"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="modal-password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                        aria-pressed={showPassword}
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} aria-hidden="true" />
                                        ) : (
                                            <Eye size={18} aria-hidden="true" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                            >
                                Sign In
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoginModal;
