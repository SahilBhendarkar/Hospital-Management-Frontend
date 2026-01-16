import { useEffect } from "react";
import RegisterForm from "../components/auth/RegisterForm";
import Modal from "../components/common/Modal";

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.getElementById("register-name")?.focus();
        }
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Create Account"
            className="max-w-sm sm:max-w-md lg:max-w-lg mx-4 sm:mx-auto"
        >
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base">
                Join our hospital management system
            </p>
            <RegisterForm onSuccess={onClose} />
        </Modal>
    );
};

export default RegisterModal;
