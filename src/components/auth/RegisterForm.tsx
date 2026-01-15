import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../common/Button";

interface RegisterFormProps {
    onSuccess?: () => void;
}

const registerSchema = z.object({
    role: z.enum(["patient", "doctor"], {
        errorMap: () => ({ message: "Please select Patient or Doctor" })
    }),
    name: z.string().min(2, "Name must be at least 2 characters").max(50),
    email: z.string().email("Enter a valid email address"),
    phone: z
        .string()
        .min(10, "Phone number must be 10 digits")
        .max(10, "Phone number must be 10 digits")
        .regex(/^\d{10}$/, "Phone number must contain exactly 10 digits (no letters or special characters)"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    dateOfBirth: z.string().min(1, "Date of birth is required"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        mode: "onBlur",
    });

    useEffect(() => {
        const phoneInput = document.getElementById("register-phone") as HTMLInputElement;
        if (phoneInput) {
            const handleInput = (e: Event) => {
                const target = e.target as HTMLInputElement;
                target.value = target.value.replace(/[^0-9]/g, "").slice(0, 10);
            };

            const handleKeyPress = (e: KeyboardEvent) => {
                if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab") {
                    e.preventDefault();
                }
            };

            phoneInput.addEventListener("input", handleInput);
            phoneInput.addEventListener("keypress", handleKeyPress);
            
            return () => {
                phoneInput.removeEventListener("input", handleInput);
                phoneInput.removeEventListener("keypress", handleKeyPress);
            };
        }
    }, []);

    const onSubmit = (data: RegisterFormData) => {
        const userProfile = {
            ...data,
            isLoggedIn: true,
            id: `user_${Date.now()}`,
            registrationDate: new Date().toISOString(),
        };
        
        localStorage.setItem("user", JSON.stringify(userProfile));
        localStorage.setItem("isLoggedIn", "true");
        
        reset();
        onSuccess?.();
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* ROLE SELECTION */}
            <div>
                <label className="block text-sm font-bold mb-3">Account Type</label>
                <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center p-3 border-2 rounded-xl cursor-pointer hover:border-blue-400 transition-all group">
                        <input
                            type="radio"
                            value="patient"
                            {...register("role")}
                            className="sr-only"
                        />
                        <div className="w-5 h-5 border-2 rounded-full mr-3 flex-shrink-0 group-hover:border-blue-500 transition-all">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mx-auto my-auto opacity-0 data-[state=checked]:opacity-100 transition-all mt-0.5" />
                        </div>
                        <div>
                            <div className="font-semibold text-gray-900">Patient</div>
                            <div className="text-xs text-gray-600">Book appointments</div>
                        </div>
                    </label>
                    <label className="flex items-center p-3 border-2 rounded-xl cursor-pointer hover:border-blue-400 transition-all group">
                        <input
                            type="radio"
                            value="doctor"
                            {...register("role")}
                            className="sr-only"
                        />
                        <div className="w-5 h-5 border-2 rounded-full mr-3 flex-shrink-0 group-hover:border-blue-500 transition-all">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mx-auto my-auto opacity-0 data-[state=checked]:opacity-100 transition-all mt-0.5" />
                        </div>
                        <div>
                            <div className="font-semibold text-gray-900">Doctor</div>
                            <div className="text-xs text-gray-600">Manage patients</div>
                        </div>
                    </label>
                </div>
                {errors.role && (
                    <p className="mt-2 text-sm text-red-600" role="alert">{errors.role.message}</p>
                )}
            </div>

            {/* FULL NAME */}
            <div>
                <label htmlFor="register-name" className="block text-sm font-bold mb-2">
                    Full Name
                </label>
                <input
                    id="register-name"
                    type="text"
                    {...register("name")}
                    aria-invalid={!!errors.name}
                    className={`w-full px-5 py-4 border-2 rounded-2xl focus:outline-none focus:border-blue-500 transition-all ${errors.name ? "border-red-500" : "border-gray-300"}`}
                    placeholder="John Doe"
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-600" role="alert">{errors.name.message}</p>
                )}
            </div>

            {/* EMAIL */}
            <div>
                <label htmlFor="register-email" className="block text-sm font-bold mb-2">
                    Email Address
                </label>
                <input
                    id="register-email"
                    type="email"
                    {...register("email")}
                    aria-invalid={!!errors.email}
                    className={`w-full px-5 py-4 border-2 rounded-2xl focus:outline-none focus:border-blue-500 transition-all ${errors.email ? "border-red-500" : "border-gray-300"}`}
                    placeholder="john@hospital.com"
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600" role="alert">{errors.email.message}</p>
                )}
            </div>

            {/* PHONE - 10 DIGITS ONLY */}
            <div>
                <label htmlFor="register-phone" className="block text-sm font-bold mb-2">
                    Phone Number
                </label>
                <input
                    id="register-phone"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    {...register("phone")}
                    aria-invalid={!!errors.phone}
                    className={`w-full px-5 py-4 border-2 rounded-2xl focus:outline-none focus:border-blue-500 transition-all ${errors.phone ? "border-red-500 ring-2 ring-red-200" : "border-gray-300"}`}
                    placeholder="9876543210"
                />
                {errors.phone && (
                    <p className="mt-1 text-sm text-red-600" role="alert">{errors.phone.message}</p>
                )}
            </div>

            {/* DATE OF BIRTH */}
            <div>
                <label htmlFor="register-dob" className="block text-sm font-bold mb-2">
                    Date of Birth
                </label>
                <input
                    id="register-dob"
                    type="date"
                    {...register("dateOfBirth")}
                    aria-invalid={!!errors.dateOfBirth}
                    className={`w-full px-5 py-4 border-2 rounded-2xl focus:outline-none focus:border-blue-500 transition-all ${errors.dateOfBirth ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.dateOfBirth && (
                    <p className="mt-1 text-sm text-red-600" role="alert">{errors.dateOfBirth.message}</p>
                )}
            </div>

            {/* PASSWORD */}
            <div>
                <label htmlFor="register-password" className="block text-sm font-bold mb-2">
                    Password
                </label>
                <div className="relative">
                    <input
                        id="register-password"
                        type={showPassword ? "text" : "password"}
                        {...register("password")}
                        aria-invalid={!!errors.password}
                        className={`w-full px-5 py-4 pr-14 border-2 rounded-2xl focus:outline-none focus:border-blue-500 transition-all ${errors.password ? "border-red-500" : "border-gray-300"}`}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-all"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
                {errors.password && (
                    <p className="mt-1 text-sm text-red-600" role="alert">{errors.password.message}</p>
                )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
                <label htmlFor="register-confirm-password" className="block text-sm font-bold mb-2">
                    Confirm Password
                </label>
                <div className="relative">
                    <input
                        id="register-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        {...register("confirmPassword")}
                        aria-invalid={!!errors.confirmPassword}
                        className={`w-full px-5 py-4 pr-14 border-2 rounded-2xl focus:outline-none focus:border-blue-500 transition-all ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-all"
                    >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
                {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-600" role="alert">{errors.confirmPassword.message}</p>
                )}
            </div>

            <Button
                type="submit"
                label={isSubmitting ? "Creating Account..." : "Create Account"}
                disabled={isSubmitting}
                className="w-full py-5 rounded-2xl text-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
            />

            <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <button
                    type="button"
                    onClick={onSuccess}
                    className="font-bold text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Sign In
                </button>
            </p>
        </form>
    );
};

export default RegisterForm;
