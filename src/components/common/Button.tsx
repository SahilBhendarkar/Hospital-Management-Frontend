import { motion } from "framer-motion";

type ButtonProps = {
    label: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    type = "button",
    disabled = false,
    className = "",
}) => {
    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={className}
        >
            {label}
        </motion.button>
    );
};

export default Button;
