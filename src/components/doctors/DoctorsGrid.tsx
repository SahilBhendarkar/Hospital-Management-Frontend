import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import DoctorCard from "./DoctorCard";
import type { Doctor } from "../../data/doctors";
import api from "../../api/axios";

const DoctorsGrid = () => {

    const gridRef = useRef<HTMLDivElement>(null);

    // STORE DOCTORS FROM BACKEND
    const [doctors, setDoctors] = useState<Doctor[]>([]);

    // FETCH DOCTORS FROM SPRING BOOT BACKEND
    useEffect(() => {

        const fetchDoctors = async () => {

            try {

                const response = await api.get(
                    "/api/doctors"
                );

                const data = response.data;

                setDoctors(data);

            } catch (error) {

                console.error(
                    "Error fetching doctors:",
                    error
                );
            }
        };

        fetchDoctors();

    }, []);

    // GSAP ANIMATION
    useEffect(() => {

        if (!gridRef.current) return;

        gsap.fromTo(
            gridRef.current.children,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
            }
        );

    }, [doctors]);

    return (
        <section
            aria-labelledby="doctors-heading"
            className="py-16"
        >

            <h1
                id="doctors-heading"
                className="text-5xl font-bold text-center mb-12"
            >
                Our Doctors
            </h1>

            <div
                ref={gridRef}
                className="
                    grid grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-8
                "
                role="list"
            >

                {doctors.map((doctor) => (

                    <div
                        role="listitem"
                        key={doctor.id}
                    >

                        <DoctorCard doctor={doctor} />

                    </div>
                ))}

            </div>

        </section>
    );
};

export default DoctorsGrid;