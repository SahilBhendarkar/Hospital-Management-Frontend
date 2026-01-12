import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play reset play reset",
                    },
                }
            );

            gsap.fromTo(
                cardsRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play reset play reset",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-slate-50"
            role="region"
            aria-labelledby="patient-reviews-title"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2
                    ref={titleRef}
                    id="patient-reviews-title"
                    className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12"
                >
                    Patient Reviews
                </h2>

                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    role="list"
                    aria-label="Patient testimonials"
                >
                    {reviews.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el;
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PatientReviews;
