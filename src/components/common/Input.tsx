import React from 'react';
import type { ReactNode } from 'react';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    registration: UseFormRegisterReturn;
    error?: FieldError | undefined;
    icon?: ReactNode;
    onIconClick?: () => void;
    containerClassName?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    registration,
    error,
    icon,
    onIconClick,
    containerClassName = "",
    className = "",
    type = "text",
    id,
    disabled,
    ...props
}) => {
    return (
        <div className={containerClassName}>
            <label
                htmlFor={id || registration.name}
                className="block text-sm font-bold mb-2"
            >
                {label}
            </label>
            <div className="relative">
                <input
                    id={id || registration.name}
                    type={type}
                    {...registration}
                    disabled={disabled}
                    className={`
                        w-full px-5 py-4 border-2 rounded-2xl transition-all
                        focus:outline-none focus:border-blue-500
                        ${error ? "border-red-500" : "border-gray-300"}
                        ${icon ? "pr-14" : ""}
                        ${disabled ? "opacity-70 cursor-not-allowed" : ""}
                        ${className}
                    `}
                    aria-invalid={!!error}
                    {...props}
                />
                {icon && (
                    <button
                        type="button"
                        onClick={onIconClick}
                        disabled={disabled}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        tabIndex={-1} 
                    >
                        {icon}
                    </button>
                )}
            </div>
            {error && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                    {error.message}
                </p>
            )}
        </div>
    );
};

export default Input;
