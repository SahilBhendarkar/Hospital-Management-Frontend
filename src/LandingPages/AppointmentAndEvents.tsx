import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Users, Star } from "lucide-react";
import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import event3 from "../assets/images/event3.jpg";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const events = [
    {
        date: "17-03-2026",
        title: "Umbergaon Taluka Medico Club",
        description:
            "Medical professionals gathering for knowledge exchange & networking",
        image: event1,
        link: "#",
    },
    {
        date: "10-03-2026",
        title: "Ankleshwar DOCTOR'S Club Cricket Tournament",
        description: "Annual cricket tournament for doctors",
        image: event2,
        link: "#",
    },
    {
        date: "09-03-2026",
        title: "Senior Citizen Camp",
        description: "Free health checkup camp for senior citizens",
        image: event3,
        link: "#",
    },
];

const AppointmentAndEvents = () => {

    const sectionRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const eventsRef = useRef<HTMLDivElement[]>([]);

    // FORM STATE
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        appointmentDate: "",
        doctorName: "",
        message: ""
    });

    // HANDLE INPUT CHANGE
    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // HANDLE FORM SUBMIT
    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        try {

            const response = await fetch(
                "http://localhost:8080/api/appointments",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            if (response.ok) {

                alert("Appointment Booked Successfully!");

                setFormData({
                    fullName: "",
                    phoneNumber: "",
                    email: "",
                    appointmentDate: "",
                    doctorName: "",
                    message: ""
                });

            } else {

                alert("Failed to book appointment");
            }

        } catch (error) {

            console.error(error);

            alert("Server Error");
        }
    };

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
            className="py-24 bg-slate-200"
            role="region"
            aria-labelledby="appointment-events-title"
        >

            <div className="mx-auto px-4 sm:px-6 grid grid-cols-1 xl:grid-cols-2 gap-16">

                {/* APPOINTMENT FORM */}
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
                        Book your appointment - response within 30 minutes
                    </p>

                    <form
                        className="space-y-5"
                        aria-label="Appointment booking form"
                        onSubmit={handleSubmit}
                    >

                        {/* NAME + PHONE */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Full Name*"
                                required
                                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Phone Number*"
                                required
                                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                            />

                        </div>

                        {/* EMAIL + DATE */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address*"
                                required
                                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="date"
                                name="appointmentDate"
                                value={formData.appointmentDate}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                            />

                        </div>

                        {/* SELECT DOCTOR */}
                        <select
                            name="doctorName"
                            value={formData.doctorName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                        >

                            <option value="">Select Doctor</option>
                            <option>Dr. Rajiv Pandya</option>
                            <option>Dr. Ankur Chaudhari</option>
                            <option>Dr. Nainesh Patel</option>

                        </select>

                        {/* MESSAGE */}
                        <textarea
                            rows={4}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message*"
                            required
                            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 resize-none"
                        />

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2"
                        >

                            <Calendar className="w-5 h-5" />

                            Schedule Appointment

                        </button>

                    </form>
                </div>

                {/* EVENTS SECTION */}
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

                        <Link
                            to="/gallery"
                            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl transition"
                            aria-label="View all events gallery"
                        >

                            <Users className="w-5 h-5" />

                            View All Events

                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentAndEvents;