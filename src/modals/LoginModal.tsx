import { useEffect } from "react";
import LoginForm from "../components/auth/LoginForm";
import Modal from "../components/common/Modal";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    setIsRegisterModalOpen?: (open: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
    isOpen,
    onClose,
    setIsRegisterModalOpen,
}) => {
    useEffect(() => {
        if (isOpen) {
            document.getElementById("login-email")?.focus();
        }
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Welcome Back"
            className="max-w-md sm:max-w-lg"
        >
            <LoginForm
                onSuccess={onClose}
                setIsRegisterModalOpen={setIsRegisterModalOpen}
            />
        </Modal>
    );
};

export default LoginModal;
