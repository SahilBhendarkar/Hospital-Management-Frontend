import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import { galleryItems } from "../../data/gallery";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <main className="bg-slate-300 min-h-screen">
            <Header />
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Gallery</h1>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        Explore highlights from our medical events, camps, and hospital
                        activities.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item) => (
                        <motion.article
                            key={item.id}
                            whileHover={{ y: -8, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            className=" bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition"
                        >
                            <Link
                                to="/gallery/details"
                                state={item}
                                aria-label={`View details of ${item.title}`}
                            >
                                <div className="relative h-56">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />

                                    {item.date && (
                                        <span
                                            className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md"
                                        >
                                            {item.date}
                                        </span>
                                    )}
                                </div>

                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3">
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
            <Footer />
        </main>
    );
};

export default Gallery;
