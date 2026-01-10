import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";

gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const statsSectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            heroRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8 }
        )
            .fromTo(
                titleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6 },
                "-=0.4"
            )
            .fromTo(
                subtitleRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5 },
                "-=0.3"
            );

        gsap.fromTo(
            cardsRef.current,
            { y: 80, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: statsSectionRef.current,
                    start: "top center",
                    end: "+=300",
                    scrub: true,
                    pin: true,
                },
            }
        );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />

            <section ref={heroRef} className="pt-16 pb-20 px-5 md:px-10 lg:px-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h1
                        ref={titleRef}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                    >
                        Welcome to Dashboard Page
                    </h1>

                    <p
                        ref={subtitleRef}
                        className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
                    >
                        This is a Dashboard Page in  Development Stage
                    </p>
                </div>
            </section>

            <section
                ref={statsSectionRef}
                className="px-5 md:px-10 lg:px-16 pb-24"
            >
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {[
                        {
                            title: "Total Appointments",
                            value: "10",
                            color: "from-blue-500 to-blue-600",
                        },
                        {
                            title: "Pending Reports",
                            value: "7",
                            color: "from-amber-500 to-amber-600",
                        },
                        {
                            title: "Active Patients",
                            value: "2",
                            color: "from-emerald-500 to-emerald-600",
                        },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            ref={(el) => el && (cardsRef.current[i] = el)}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                        >
                            <div className={`h-2 bg-gradient-to-r ${stat.color}`} />
                            <div className="p-6 md:p-8">
                                <h3 className="text-lg font-medium text-gray-600 mb-3">
                                    {stat.title}
                                </h3>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-4xl md:text-5xl font-bold text-gray-900">
                                        {stat.value}
                                    </span>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-5 md:px-10 lg:px-16 pb-24">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
                        Quick Actions
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
                        {["New Appointment", "View Reports", "Patient List", "Settings"].map(
                            (action, i) => (
                                <button
                                    key={action}
                                    className="py-6 px-4 rounded-xl bg-white border border-gray-200 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-blue-50 transition-all duration-300 flex flex-col items-center gap-3 text-gray-700 font-medium"
                                >
                                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                        {i + 1}
                                    </div>
                                    <span>{action}</span>
                                </button>
                            )
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
