import Header from "../../components/layout/Header";
import { galleryItems } from "../../data/gallery";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <main className="bg-slate-50 min-h-screen">
            <Header />

            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16">
                <div className="mb-8 sm:mb-12 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                        Gallery
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                        Explore highlights from our medical events, camps, and hospital
                        activities.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {galleryItems.map((item) => (
                        <motion.article
                            key={item.id}
                            whileHover={{ y: -6, scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-2xl overflow-hidden transition"
                        >
                            <Link
                                to="/gallery/details"
                                state={item}
                                aria-label={`View details of ${item.title}`}
                            >
                                <div className="relative h-40 sm:h-48 md:h-52">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />

                                    {item.date && (
                                        <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                                            {item.date}
                                        </span>
                                    )}
                                </div>

                                <div className="p-4 sm:p-6 text-center">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>

                                    <span className="inline-block mt-4 text-blue-600 font-semibold text-sm">
                                        View Details →
                                    </span>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Gallery;
