import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    className?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    title,
    className = "",
}) => {
    useEffect(() => {
        if (isOpen) {
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
                    initial={{ scale: 0.9, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 30 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className={`
                        relative
                        w-full
                        bg-white
                        rounded-2xl
                        shadow-2xl
                        border border-white/20
                        overflow-hidden
                        max-h-[90vh]
                        ${className}
                    `}
                >
                    <button
                        onClick={onClose}
                        aria-label="Close modal"
                        className="
                            absolute
                            top-4
                            right-4
                            p-2
                            rounded-lg
                            hover:bg-gray-100
                            transition-colors
                            text-gray-600
                            focus:outline-none focus:ring-2 focus:ring-blue-500
                        "
                    >
                        <X size={22} />
                    </button>

                    <div className="p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
                        {title && (
                            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-black">
                                {title}
                            </h2>
                        )}
                        {children}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
};

export default Modal;
