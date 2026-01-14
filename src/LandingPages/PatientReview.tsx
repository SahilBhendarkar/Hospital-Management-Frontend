import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reviews = [
    {
        name: "Mrs. Sunita Sharma",
        date: "12 Jan 2026",
        rating: 5,
        review:
            "The doctors and staff were extremely supportive. The treatment was explained clearly and the care provided was excellent. I am very satisfied with the services.",
    },
    {
        name: "Mr. Rajesh Patil",
        date: "05 Jan 2026",
        rating: 4,
        review:
            "Very clean hospital with well-trained doctors. The appointment process was smooth and the staff was polite throughout my visit.",
    },
    {
        name: "Ms. Neha Kulkarni",
        date: "28 Dec 2025",
        rating: 3,
        review:
            "I had a great experience. The doctors were knowledgeable and the nursing staff was very caring. Highly recommended hospital.",
    },
];

const PatientReviews = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isTitleInView = useInView(sectionRef, { once: false, margin: "-20%" });
    const cardsInView = useInView(sectionRef, { once: false, margin: "-25%" });

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-slate-50"
            role="region"
            aria-labelledby="patient-reviews-title"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    id="patient-reviews-title"
                    className="text-3xl sm:text-5xl font-bold text-center text-blue-900 mb-12"
                >
                    Patient Reviews
                </motion.h2>

                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    role="list"
                    aria-label="Patient testimonials"
                >
                    {reviews.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
                            role="listitem"
                        >
                            <div className="mb-2">
                                <p className="font-semibold text-blue-800 text-lg">
                                    {item.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {item.date}
                                </p>
                            </div>

                            <div
                                className="flex gap-1 mb-4"
                                aria-label={`Rating ${item.rating} out of 5`}
                            >
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span
                                        key={i}
                                        className={
                                            i < item.rating
                                                ? "text-yellow-400 text-lg"
                                                : "text-gray-300 text-lg"
                                        }
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-700 text-sm leading-relaxed">
                                {item.review}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PatientReviews;