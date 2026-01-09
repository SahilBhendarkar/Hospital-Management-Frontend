import React from 'react';
import surgeryImage from "../assets/images/surgery.png";


const About: React.FC = () => {
    return (
        <div className="container bg-slate-200 mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="aspect-square rounded-3xl mt-20 overflow-hidden shadow-xl">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: ` url('${surgeryImage}')`,
                        }}
                    />
                </div>

                <div className="space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-800 border-b-4 border-blue-600 inline-block pb-3">
                        About Us
                    </h1>

                    <div className="text-lg text-gray-700 space-y-4">
                        <p className="leading-relaxed">
                            At <strong>Hospital UI</strong>, we are committed to providing exceptional healthcare services to our patients, delivered with compassion, expertise, and innovation. As a leading multispecialty hospital, we offer a comprehensive range of medical specialties and treatments, all under one roof, such as
                        </p>

                        <ul className="list-disc list-inside space-y-2 mt-6">
                            <li>
                                <a href="/service/robotic-joint-replacement/" className="text-blue-600 hover:underline font-medium">
                                    Robotic Joint Replacement
                                </a>,
                            </li>
                            <li>
                                <a href="/service/orthopaedic-trauma/" className="text-blue-600 hover:underline font-medium">
                                    Orthopedics and Trauma
                                </a>,
                            </li>
                            <li>
                                <a href="/service/laparoscopic-surgery/" className="text-blue-600 hover:underline font-medium">
                                    Laproscopic Surgery
                                </a>,
                            </li>
                            <li>
                                <a href="/service/cardiology/" className="text-blue-600 hover:underline font-medium">
                                    Cardiology
                                </a>,
                            </li>
                            <li>
                                <a href="/service/neuro-surgery/" className="text-blue-600 hover:underline font-medium">
                                    Neuro Surgery
                                </a>,
                            </li>
                            <li>
                                <a href="/service/neurology/" className="text-blue-600 hover:underline font-medium">
                                    Neurology
                                </a>,
                            </li>
                            <li>
                                <a href="/service/endoscopy/" className="text-blue-600 hover:underline font-medium">
                                    Endoscopy
                                </a>,
                            </li>
                            <li>
                                <a href="/service/oncology-oncosurgery/" className="text-blue-600 hover:underline font-medium">
                                    Oncology &amp; Oncosurgery
                                </a>
                            </li>
                        </ul>

                        <p className="leading-relaxed mt-6">
                            and many others.
                        </p>

                        <p className="leading-relaxed mt-8 text-xl">
                            We have treated <strong>more than 3.5 Lakh OPD</strong> patients till now. Also <strong>more than 40,000 IPD</strong> patients and <strong>more than 25,000 Surgeries</strong> in the last <strong>10 years</strong> (First decade).
                        </p>
                    </div>

                    <div className="mt-10">
                        <a
                            href="https://lifelinesurat.com/about-us/"
                            className="inline-block bg-blue-600 text-white font-semibold text-lg py-4 px-10 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;