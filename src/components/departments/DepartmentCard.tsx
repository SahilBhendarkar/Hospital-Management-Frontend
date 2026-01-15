import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Properties {
    title: string;
    description: string;
    image: string;
    link: string;
}

const DepartmentCard = ({ title, description, image, link }: Properties) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -12,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            className="
                group relative bg-gradient-to-br from-white to-blue-50/50
                rounded-3xl shadow-xl hover:shadow-2xl
                border border-white/50 hover:border-blue-200/50
                overflow-hidden h-full max-w-sm mx-auto
                focus-within:ring-4 focus-within:ring-blue-500/30
            "
            role="article"
            aria-labelledby={`${title}-heading`}
            tabIndex={0}
        >
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white/80 backdrop-blur-sm flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-200 animate-pulse" />
                </div>
            )}

            <Link
                to={link}
                className="block p-1 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                aria-label={`View ${title} department details`}
            >
                <div className="relative overflow-hidden rounded-2xl h-56 bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                    <motion.img
                        src={image}
                        alt={`${title} department`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        onLoad={() => setIsLoaded(true)}
                        loading="lazy"
                    />

                    <motion.div
                        className="
                            absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
                            opacity-0 group-hover:opacity-100
                            transition-all duration-300
                            flex items-end p-4
                        "
                    >
                        <motion.div
                            className="
                                px-4 py-2 bg-white/90 backdrop-blur-sm
                                rounded-full text-sm font-semibold text-blue-900
                                shadow-lg flex items-center space-x-2
                                opacity-0 group-hover:opacity-100
                                transition-all duration-300
                            "
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>View Details</span>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="p-8 text-center relative z-10">
                    <motion.h3
                        id={`${title}-heading`}
                        className="
                            text-2xl font-bold bg-gradient-to-r
                            from-gray-900 to-gray-700
                            bg-clip-text text-transparent
                            mb-3 pt-2 leading-tight
                        "
                    >
                        {title}
                    </motion.h3>

                    <p className="text-base text-gray-600 leading-relaxed line-clamp-3">
                        {description}
                    </p>

                    <motion.div
                        className="
                            absolute -top-3 left-1/2 -translate-x-1/2
                            bg-blue-500/90 text-white px-4 py-1
                            rounded-full text-xs font-semibold shadow-md
                        "
                        initial={{ scale: 0.8, y: -10 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        Specialty
                    </motion.div>
                </div>
            </Link>
        </motion.article>
    );
};

export default DepartmentCard;
