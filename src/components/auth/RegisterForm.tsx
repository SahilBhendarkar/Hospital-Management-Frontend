import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../common/Button";
import Input from "../common/Input";

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
            <Input
                label="Full Name"
                id="register-name"
                type="text"
                registration={register("name")}
                error={errors.name}
                placeholder="John Doe"
            />

            {/* EMAIL */}
            <Input
                label="Email Address"
                id="register-email"
                type="email"
                registration={register("email")}
                error={errors.email}
                placeholder="john@hospital.com"
            />

            {/* PHONE - 10 DIGITS ONLY */}
            <Input
                label="Phone Number"
                id="register-phone"
                type="tel"
                registration={register("phone")}
                error={errors.phone}
                placeholder="9876543210"
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
            />

            {/* DATE OF BIRTH */}
            <Input
                label="Date of Birth"
                id="register-dob"
                type="date"
                registration={register("dateOfBirth")}
                error={errors.dateOfBirth}
            />

            {/* PASSWORD */}
            <Input
                label="Password"
                id="register-password"
                type={showPassword ? "text" : "password"}
                registration={register("password")}
                error={errors.password}
                icon={showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                onIconClick={() => setShowPassword(!showPassword)}
            />

            {/* CONFIRM PASSWORD */}
            <Input
                label="Confirm Password"
                id="register-confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                registration={register("confirmPassword")}
                error={errors.confirmPassword}
                icon={showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                onIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />

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
