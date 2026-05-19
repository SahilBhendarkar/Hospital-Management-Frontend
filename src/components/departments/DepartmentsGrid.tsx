import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import DepartmentCard from "./DepartmentCard";
import type { Department } from "../../types/Department";

const DepartmentsGrid = () => {

    const gridRef = useRef<HTMLDivElement>(null);

    // STORE BACKEND DATA
    const [departments, setDepartments] =
        useState<Department[]>([]);

    // FETCH DEPARTMENTS FROM BACKEND
    useEffect(() => {

        const fetchDepartments = async () => {

            try {

                const response = await fetch(
                    "http://localhost:8080/api/departments"
                );

                const data = await response.json();

                setDepartments(data);

            } catch (error) {

                console.error(
                    "Error fetching departments:",
                    error
                );
            }
        };

        fetchDepartments();

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
                stagger: 0.08,
                duration: 0.8,
                ease: "power3.out",
            }
        );

    }, [departments]);

    return (
        <section
            aria-labelledby="departments-heading"
            className="py-16"
        >

            <h1
                id="departments-heading"
                className="
                    text-5xl font-bold
                    text-center mb-12
                "
            >
                Departments
            </h1>

            <div
                ref={gridRef}
                className="
                    grid grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-8
                "
                role="list"
            >

                {departments.map((dept) => (

                    <div
                        role="listitem"
                        key={dept.id}
                    >

                        <DepartmentCard
                            title={dept.title}
                            description={dept.description}
                            image={dept.image}
                            link={dept.link}
                        />

                    </div>
                ))}

            </div>

        </section>
    );
};

export default DepartmentsGrid;