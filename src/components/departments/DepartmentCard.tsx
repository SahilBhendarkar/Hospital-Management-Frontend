import { motion } from "framer-motion";
import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
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
                y: -8,               // smaller lift for mobile
                scale: 1.01,
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
            }}
            className="
        group relative
        bg-gradient-to-br from-white to-blue-50/50
        rounded-2xl sm:rounded-3xl
        shadow-md sm:shadow-xl hover:shadow-2xl
        border border-white/60 hover:border-blue-200/50
        overflow-hidden
        w-full max-w-sm mx-auto
        focus-within:ring-4 focus-within:ring-blue-500/30
      "
            role="article"
            aria-labelledby={`${title}-heading`}
            tabIndex={0}
        >
            {/* Skeleton */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white/80 flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-blue-200 animate-pulse" />
                </div>
            )}

            <Link
                to={link}
                className="block p-1 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                aria-label={`View ${title} department details`}
            >
                {/* IMAGE */}
                <div className="
          relative overflow-hidden
          rounded-xl sm:rounded-2xl
          h-40 sm:h-48 md:h-52
          bg-gradient-to-br from-blue-100/50 to-indigo-100/50
        ">
                    <motion.img
                        src={image}
                        alt={`${title} department`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        onLoad={() => setIsLoaded(true)}
                        loading="lazy"
                    />

                    <div className="
            absolute inset-0 bg-gradient-to-t from-black/25 to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            flex items-end p-3">
                        <div className=" px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-blue-900 shadow-md flex items-center gap-2">
                            <HeartIcon className="w-4 h-4" />
                            <span>View Details</span>
                        </div>
                    </div>
                </div>

                <div className="p-4 sm:p-6 text-center relative">
                    <h3
                        id={`${title}-heading`}
                        className=" text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight "
                    >
                        {title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
                        {description}
                    </p>

                    <div
                        className=" absolute -top-2 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold shadow"
                    >
                        Specialty
                    </div>
                </div>
            </Link>
        </motion.article>
    );
};

export default DepartmentCard;
