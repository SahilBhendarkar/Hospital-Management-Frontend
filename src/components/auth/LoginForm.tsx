import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { loginUser } from "../../store/slices/authSlice";
import Button from "../common/Button";
import Input from "../common/Input";

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
            <Input
                label="Email Address"
                id="login-email"
                type="email"
                registration={register("email")}
                error={errors.email}
                placeholder="admin@hospital.com"
                disabled={loading}
            />

            {/* PASSWORD */}
            <Input
                label="Password"
                id="login-password"
                type={showPassword ? "text" : "password"}
                registration={register("password")}
                error={errors.password}
                disabled={loading}
                icon={showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                onIconClick={() => setShowPassword(!showPassword)}
            />

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