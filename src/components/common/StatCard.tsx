import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: ReactNode;
    trend?: {
        value: string;
        label: string;
        isPositive: boolean;
    };
    colorClass?: string; 
    className?: string;
    onClick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    icon,
    trend,
    colorClass = "bg-blue-100 text-blue-600",
    className = "",
    onClick,
}) => {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            onClick={onClick}
            className={`
                bg-white p-6 rounded-2xl shadow-sm border border-gray-100
                transition-all duration-300 hover:shadow-md
                ${onClick ? 'cursor-pointer' : ''}
                ${className}
            `}
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
                        {title}
                    </p>
                    <h3 className="text-3xl font-bold text-gray-800">
                        {value}
                    </h3>
                </div>
                <div className={`p-3 rounded-xl ${colorClass}`}>
                    {icon}
                </div>
            </div>

            {trend && (
                <div className="mt-4 flex items-center text-sm">
                    <span
                        className={`
                            font-medium px-2 py-0.5 rounded-full mr-2
                            ${trend.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
                        `}
                    >
                        {trend.isPositive ? '↑' : '↓'} {trend.value}
                    </span>
                    <span className="text-gray-500">{trend.label}</span>
                </div>
            )}
        </motion.div>
    );
};

export default StatCard;
