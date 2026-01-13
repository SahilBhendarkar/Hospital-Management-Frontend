import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";

interface RegisterFormProps {
    onSuccess?: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) return;
        if (password !== confirmPassword) return;

        localStorage.setItem("isRegistered", "true");

        onSuccess?.();
        navigate("/login");
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm font-bold mb-2">Full Name</label>
                <input
                    type="text"
                    required
                    aria-required="true"
                    aria-label="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border-2 rounded-xl"
                    placeholder="John Doe"
                />
            </div>

            <div>
                <label className="block text-sm font-bold mb-2">Email Address</label>
                <input
                    type="email"
                    required
                    aria-required="true"
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 rounded-xl"
                    placeholder="admin@hospital.com"
                />
            </div>

            <div>
                <label className="block text-sm font-bold mb-2">Password</label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        required
                        aria-required="true"
                        aria-label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 pr-12 border-2 rounded-xl"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold mb-2">
                    Confirm Password
                </label>
                <input
                    type={showPassword ? "text" : "password"}
                    required
                    aria-required="true"
                    aria-label="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 border-2 rounded-xl"
                />
            </div>

            <Button
                type="submit"
                label="Register"
                aria-label="Submit registration form"

                className="w-full py-4 rounded-xl text-lg font-bold text-white bg-blue-600 hover:bg-blue-700"
            />

            <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="font-bold text-blue-600">
                    Login
                </Link>
            </p>
        </form>
    );
};

export default RegisterForm;
