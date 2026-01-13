import { useEffect, useRef } from "react";
import gsap from "gsap";
import DepartmentCard from "./DepartmentCard";
import { departments } from "../../data/departments";

const DepartmentsGrid = () => {
    const gridRef = useRef<HTMLDivElement>(null);

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
    }, []);


    return (
        <section
            aria-labelledby="departments-heading"
            className="py-16"
        >
            <h1
                id="departments-heading"
                className="text-3xl font-bold text-center mb-12"
            >
                Departments
            </h1>

            <div
                ref={gridRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                role="list"
            >
                {departments.map((dept) => (
                    <div role="listitem" key={dept.id}>
                        <DepartmentCard {...dept} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DepartmentsGrid;
