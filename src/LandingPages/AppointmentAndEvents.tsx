import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Users, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const events = [
    {
        date: "17-03-2024",
        title: "Umbergaon Taluka Medico Club",
        description: "Medical professionals gathering for knowledge exchange & networking",
        image: "/events/event1.jpg",
        link: "#",
    },
    {
        date: "10-03-2024",
        title: "Ankleshwar DOCTOR'S Club Cricket Tournament",
        description: "Annual cricket tournament for doctors",
        image: "/events/event2.jpg",
        link: "#",
    },
    {
        date: "09-03-2024",
        title: "Senior Citizen Camp",
        description: "Free health checkup camp for senior citizens",
        image: "/events/event3.jpg",
        link: "#",
    },
];

const AppointmentAndEvents = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const eventsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                formRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 80%",
                        toggleActions: "play reset play reset",
                    },
                }
            );

            gsap.fromTo(
                eventsRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 0.7,
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
            className="py-24 bg-slate-50"
            role="region"
            aria-labelledby="appointment-events-title"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 xl:grid-cols-2 gap-16">
                <div
                    ref={formRef}
                    className="bg-white rounded-3xl shadow-xl p-10"
                >
                    <h2
                        id="appointment-events-title"
                        className="text-3xl font-bold text-blue-900 mb-2"
                    >
                        Appointment Form
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Book your appointment – response within 30 minutes
                    </p>

                    <form className="space-y-5" aria-label="Appointment booking form">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Full Name*"
                                required
                                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number*"
                                required
                                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="email"
                                placeholder="Email Address*"
                                required
                                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="date"
                                required
                                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <select className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500">
                            <option>Select Doctor</option>
                            <option>Dr. Rajiv Pandya</option>
                            <option>Dr. Ankur Chaudhari</option>
                            <option>Dr. Nainesh Patel</option>
                        </select>

                        <textarea
                            rows={4}
                            placeholder="Message*"
                            required
                            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 resize-none"
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"
                        >
                            <Calendar className="w-5 h-5" />
                            Schedule Appointment
                        </button>
                    </form>
                </div>

                <div>
                    <div className="mb-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold mb-4">
                            <MapPin className="w-4 h-4" />
                            Upcoming Events
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">
                            Medical Community Events
                        </h3>
                    </div>

                    <div className="space-y-6">
                        {events.map((event, i) => (
                            <div
                                key={event.title}
                                ref={(el) => {
                                    if (el) eventsRef.current[i] = el;
                                }}
                                className="flex gap-4 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition focus-within:ring-2 focus-within:ring-emerald-500"
                                tabIndex={0}
                                role="article"
                                aria-label={`Event ${event.title}`}
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-24 h-20 object-cover rounded-xl flex-shrink-0"
                                />

                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
                                            {event.date}
                                        </span>
                                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                    </div>

                                    <h4 className="font-bold text-lg text-gray-900">
                                        {event.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-2">
                                        {event.description}
                                    </p>

                                    <a
                                        href={event.link}
                                        className="text-emerald-600 font-semibold text-sm hover:underline"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <a
                            href="/events"
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl"
                        >
                            <Users className="w-5 h-5" />
                            View All Events
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentAndEvents;
