import { motion } from "framer-motion";

interface Properties {
    title: string;
    description: string;
    image: string;
    link: string;
}

const DepartmentCard = ({ title, description, image, link }: Properties) => {
    return (
        <motion.article
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl
            focus-within:ring-4 focus-within:ring-blue-500/40"
            role="article"
            aria-labelledby={title}
        >
            <a
                href={link}
                className="block focus:outline-none"
                aria-label={`View details for ${title}`}
            >
                <img
                    src={image}
                    alt={`${title} department`}
                    className="w-full h-48 object-contain p-6"
                />

                <div className="px-6 pb-6 text-center">
                    <h3
                        id={title}
                        className="text-lg font-semibold text-gray-900"
                    >
                        {title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600">
                        {description}
                    </p>
                </div>
            </a>
        </motion.article>
    );
};

export default DepartmentCard;
