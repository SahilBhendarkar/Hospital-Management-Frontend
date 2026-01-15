import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { loginUser } from "../../store/slices/authSlice";
import Button from "../common/Button";

const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Enter a valid email address"),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginFormProps {
    onSuccess?: () => void;
    setIsRegisterModalOpen?: (open: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, setIsRegisterModalOpen = () => { } }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: "onBlur",
    });

    useEffect(() => {
        const savedEmail = localStorage.getItem("rememberedEmail");
        if (savedEmail) {
            setValue("email", savedEmail);
            setRememberMe(true);
        }
    }, [setValue]);

    const onSubmit = async (data: LoginFormData) => {
        if (rememberMe) {
            localStorage.setItem("rememberedEmail", data.email);
        } else {
            localStorage.removeItem("rememberedEmail");
        }

        const resultAction = await dispatch(loginUser(data.email));

        if (loginUser.fulfilled.match(resultAction)) {
            onSuccess?.();
            navigate("/dashboard");
        }
    };

    return (
        <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-describedby="login-form-description"
        >
            <p id="login-form-description" className="sr-only">
                Login form for hospital admin panel
            </p>

            {/* EMAIL */}
            <div>
                <label
                    htmlFor="login-email"
                    className="block text-sm font-bold mb-2"
                >
                    Email Address
                </label>
                <input
                    id="login-email"
                    type="email"
                    {...register("email")}
                    aria-invalid={!!errors.email}
                    className={`w-full px-5 py-4 border-2 rounded-2xl ${errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                    placeholder="admin@hospital.com"
                    disabled={loading}
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* PASSWORD */}
            <div>
                <label
                    htmlFor="login-password"
                    className="block text-sm font-bold mb-2"
                >
                    Password
                </label>
                <div className="relative">
                    <input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        {...register("password")}
                        aria-invalid={!!errors.password}
                        className={`w-full px-5 py-4 pr-14 border-2 rounded-2xl ${errors.password ? "border-red-500" : "border-gray-300"
                            }`}
                        disabled={loading}
                    />
                    <button
                        type="button"
                        onClick={() => { setShowPassword(!showPassword) }}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                        disabled={loading}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
                {errors.password && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                        {errors.password.message}
                    </p>
                )}
            </div>

            <label className="flex items-center gap-2 text-sm">
                <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={loading}
                />
                Remember me
            </label>

            {error && (
                <div role="alert" className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
                    {error}
                </div>
            )}

            <Button
                type="submit"
                label={loading ? "Signing In..." : "Sign In"}
                disabled={loading}
                className="w-full py-5 rounded-2xl text-xl font-bold text-white bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed"
            />

            <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                    type="button"
                    onClick={() => { onSuccess?.(); setIsRegisterModalOpen(true) }}
                    className="text-black font-bold"
                    disabled={loading}
                >
                    Create Account
                </button>
            </p>
        </form>
    );
};

export default LoginForm;