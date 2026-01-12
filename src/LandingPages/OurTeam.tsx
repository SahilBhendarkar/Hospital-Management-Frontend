import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data/Data";

gsap.registerPlugin(ScrollTrigger);

const OurTeams = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const buttonRef = useRef<HTMLAnchorElement>(null);

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
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );

            gsap.fromTo(
                buttonRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: buttonRef.current,
                        start: "top 90%",
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
            className="relative py-16 overflow-hidden bg-white"
            role="region"
            aria-labelledby="our-teams-title"
        >
            <div
                className="absolute inset-0 bg-blue-900 rounded-b-[80%] md:rounded-b-[60%] h-[420px] md:h-[680px]"
                aria-hidden="true"
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <h2
                    ref={titleRef}
                    id="our-teams-title"
                    className="text-2xl sm:text-4xl font-bold text-white text-center mb-12"
                >
                    OUR TEAMS
                </h2>

                <div
                    className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
                    role="list"
                    aria-label="Hospital team members"
                >
                    {teamMembers.slice(0, 4).map((member, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el;
                            }} role="listitem"
                        >
                            <TeamCard member={member} />
                        </div>
                    ))}
                </div>

                <div
                    className="md:hidden flex gap-4 overflow-x-auto pb-6 px-1"
                    role="list"
                    aria-label="Hospital team members carousel"
                >
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            className="min-w-[260px]"
                            role="listitem"
                        >
                            <TeamCard member={member} />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        ref={buttonRef}
                        href="/doctors"
                        className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition"
                        aria-label="View all doctors"
                    >
                        View All
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OurTeams;
