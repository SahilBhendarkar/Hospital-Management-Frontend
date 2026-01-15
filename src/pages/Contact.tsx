import { useState } from 'react';
import { MapPin, Phone, Mail, Calendar, User, MessageSquare } from 'lucide-react';
import Header from '../components/layout/Header';

const ContactPage = () => {
    const [service, setService] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        message: '',
    });

    const showDateField = ['doctor_appointment', 'health_package'].includes(service);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { service, ...formData });
        alert('Thank you! Your enquiry has been received.');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="relative h-[480px] sm:h-[560px] md:h-[650px] lg:h-[720px] overflow-hidden">
                <img
                    src="/contact.jpg"
                    alt="Emergency Room Entrance with Ambulance"
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.45] contrast-[1.15] saturate-[1.25]"
                    loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center px-5 sm:px-8 text-white z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-2xl">
                        Contact Us
                    </h1>

                    <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium opacity-95 drop-shadow-lg max-w-4xl mx-auto">
                        24×7 Emergency & General Assistance Available
                    </p>

                    <div className="mt-8 sm:mt-10 flex items-center gap-4 bg-white/15 backdrop-blur-md px-6 sm:px-10 py-4 rounded-full border border-white/20 shadow-xl">
                        <Phone size={28} className="text-white" />
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
                            Emergency: 108 / 102
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-16 -mt-16 relative z-20">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                            <div className="grid md:grid-cols-2">
                                {/* Google Map */}
                                <div className="h-80 md:h-[520px] lg:h-[600px] bg-gray-100">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.274183032!2d78.570307614901!3d20.715416286196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd47f569388b39d%3A0x1cfc63dbdd5f952b!2sDatta%20Meghe%20Institute%20Of%20Medical%20Sciences!5e0!3m2!1sen!2sin!4v1735000000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Datta Meghe Institute of Medical Sciences - Sawangi (Meghe), Wardha"
                                    />
                                </div>

                                {/* Get In Touch Form */}
                                <div className="p-6 md:p-10 lg:p-12 flex flex-col">
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-8 text-center">
                                        Get In Touch
                                    </h2>

                                    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6">
                                        {/* Select with fixed arrow */}
                                        <div className="relative">
                                            <select
                                                value={service}
                                                onChange={(e) => setService(e.target.value)}
                                                className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-full text-gray-700 
                                    appearance-none focus:border-blue-600 focus:ring-2 focus:ring-red-200 
                                    transition-all cursor-pointer pr-12"
                                                required
                                            >
                                                <option value="">Select Service *</option>
                                                <option value="doctor_appointment">Doctor Appointment</option>
                                                <option value="health_package">Health Package Booking</option>
                                                <option value="international_patient">International Patient Services</option>
                                                <option value="job">Career / Job Enquiry</option>
                                                <option value="other">Other Enquiry</option>
                                            </select>
                                            {/* Custom arrow */}
                                            <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                                                <svg
                                                    className="w-5 h-5 text-gray-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Full Name *"
                                                    className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-300 rounded-full"
                                                    required
                                                />
                                            </div>

                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Mobile Number *"
                                                    pattern="[0-9]{10}"
                                                    maxLength={10}
                                                    className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-300 rounded-full"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Address *"
                                                className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-300 rounded-full"
                                                required
                                            />
                                        </div>

                                        {showDateField && (
                                            <div className="relative">
                                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                                <input
                                                    type="date"
                                                    name="date"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-300 rounded-full"
                                                />
                                            </div>
                                        )}

                                        <div className="relative flex-1">
                                            <MessageSquare className="absolute left-4 top-4 text-gray-400" size={20} />
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Your Message / Reason for Contact *"
                                                rows={5}
                                                className="w-full pl-12 pr-5 pt-4 pb-3 bg-gray-50 border border-gray-300 rounded-2xl resize-none"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="mt-2 bg-blue-600 text-white py-4 px-12 rounded-full font-bold text-lg 
                                hover:bg-blue-700 active:bg-blue-800 transition-all shadow-lg hover:shadow-xl 
                                transform hover:-translate-y-1"
                                        >
                                            Submit Enquiry
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Cards */}
                    <div className="space-y-6 lg:space-y-8">
                        {[
                            {
                                icon: Phone,
                                title: 'Emergency / General Enquiry',
                                content: '+91 7152 287 701',
                                type: 'phone',
                            },
                            {
                                icon: Mail,
                                title: 'Email Support',
                                content: 'info@dmimsu.edu.in',
                                type: 'email',
                            },
                            {
                                icon: MapPin,
                                title: 'Hospital Address',
                                content: 'Datta Meghe Institute of Medical Sciences\nSawangi (Meghe), Wardha - 442004\nMaharashtra, India',
                                type: 'address',
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-100 group"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="bg-red-50 p-4 rounded-xl group-hover:bg-red-100 transition-colors">
                                        <item.icon className="text-blue-600" size={28} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-red-700 transition-colors">
                                            {item.title}
                                        </h3>

                                        {item.type === 'phone' ? (
                                            <a
                                                href={`tel:${item.content.replace(/\s/g, '')}`}
                                                className="text-2xl md:text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                                            >
                                                {item.content}
                                            </a>
                                        ) : item.type === 'email' ? (
                                            <a
                                                href={`mailto:${item.content}`}
                                                className="text-xl font-medium text-gray-700 hover:text-blue-600 transition-colors break-all"
                                            >
                                                {item.content}
                                            </a>
                                        ) : (
                                            <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                                                {item.content}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;