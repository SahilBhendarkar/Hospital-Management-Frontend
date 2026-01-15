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
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="
        group bg-white rounded-3xl overflow-hidden
        shadow-xl hover:shadow-2xl
        border border-gray-100"
        >
            <Link to={link} className="block focus:outline-none">
                <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                        src={image}
                        alt={title}
                        className=" w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    />

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                        <span className="text-white font-semibold text-sm">
                            View {title}
                        </span>
                    </div>
                </div>

                <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900">
                        {title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                        {description}
                    </p>
                </div>
            </Link>
        </motion.article>
    );
};

export default GalleryCard;
