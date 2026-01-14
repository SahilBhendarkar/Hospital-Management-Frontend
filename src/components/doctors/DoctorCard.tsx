import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Doctor } from "../../data/doctors";

interface Props {
    doctor: Doctor;
}

const DoctorCard = ({ doctor }: Props) => {
    return (
        <motion.article
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="
        group bg-white
        rounded-xl sm:rounded-2xl
        shadow-md sm:shadow-lg hover:shadow-2xl
        transition overflow-hidden
        focus-within:ring-4 focus-within:ring-blue-500/40
        max-w-sm mx-auto"
            role="article"
            aria-labelledby={`doctor-${doctor.id}`}
        >
            <Link
                to={doctor.profileUrl}
                className="block focus:outline-none"
                aria-label={`View profile of ${doctor.name}`}
            >
                <div className="h-40 sm:h-48 md:h-52 flex items-center justify-center bg-slate-50">
                    <img
                        src={doctor.image}
                        alt={`Portrait of ${doctor.name}`}
                        className="
                h-28 sm:h-32 md:h-36 w-auto object-contain
                transition-transform duration-300
                group-hover:scale-105
            "
                        loading="lazy"
                    />
                </div>

                <div className="px-4 sm:px-6 pb-5 pt-4 text-center">
                    <h3
                        id={`doctor-${doctor.id}`}
                        className="text-base sm:text-lg font-semibold text-gray-900"
                    >
                        {doctor.name}
                    </h3>

                    <p className="text-sm text-blue-600 font-medium mt-1">
                        {doctor.specialization}
                    </p>

                    <p className="mt-2 text-sm text-gray-600">
                        {doctor.qualification}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Experience: {doctor.experience}
                    </p>

                    <span
                        className="
                inline-block mt-4 text-blue-600
                font-semibold text-sm
                group-hover:underline
            "
                    >
                        View Profile →
                    </span>
                </div>
            </Link>
        </motion.article>
    );
};

export default DoctorCard;
