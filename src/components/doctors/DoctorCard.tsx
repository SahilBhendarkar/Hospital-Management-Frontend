import { motion } from "framer-motion";
import type { Doctor } from "../../data/doctors";

interface Props {
    doctor: Doctor;
}

const DoctorCard = ({ doctor }: Props) => {
    return (
        <motion.article
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl
                focus-within:ring-4 focus-within:ring-blue-500/40"
            role="article"
            aria-labelledby={`doctor-${doctor.id}`}
        >
            <a
                href={doctor.profileUrl}
                className="block focus:outline-none"
                aria-label={`View profile of ${doctor.name}`}
            >
                <img
                    src={doctor.image}
                    alt={`Portrait of ${doctor.name}`}
                    className="w-full h-56 object-contain p-6"
                />

                <div className="px-6 pb-6 text-center">
                    <h3
                        id={`doctor-${doctor.id}`}
                        className="text-lg font-semibold text-gray-900"
                    >
                        {doctor.name}
                    </h3>

                    <p className="text-sm text-blue-600 font-medium">
                        {doctor.specialization}
                    </p>

                    <p className="mt-2 text-sm text-gray-600">
                        {doctor.qualification}
                    </p>

                    <p className="text-sm text-gray-500">
                        Experience: {doctor.experience}
                    </p>
                </div>
            </a>
        </motion.article>
    );
};

export default DoctorCard;
