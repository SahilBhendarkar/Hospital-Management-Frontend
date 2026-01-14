import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
    title: string;
    description: string;
    image: string;
    link: string;
}

const GalleryCard = ({ title, description, image, link }: Props) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            className="
        group bg-white
        rounded-xl sm:rounded-2xl
        overflow-hidden
        shadow-md sm:shadow-lg hover:shadow-2xl
        border border-gray-100
        max-w-sm mx-auto"
        >
            <Link to={link} className="block focus:outline-none">
                <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden bg-slate-100">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-3 sm:p-4">
                        <span className="text-white font-semibold text-xs sm:text-sm">
                            View {title}
                        </span>
                    </div>
                </div>

                <div className="p-4 sm:p-6 text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        {title}
                    </h3>

                    <p className="mt-2 text-sm sm:text-base text-gray-600 line-clamp-3">
                        {description}
                    </p>
                </div>
            </Link>
        </motion.article>
    );
};

export default GalleryCard;
