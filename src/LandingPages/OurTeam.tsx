import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data/Data";

const OurTeams = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isTitleInView = useInView(sectionRef, { once: false, margin: "-20%" });
    const cardsInView = useInView(sectionRef, { once: false, margin: "-25%" });
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const isButtonInView = useInView(buttonRef, { once: false, margin: "-10%" });

    return (
        <section
            ref={sectionRef}
            className="relative py-16 overflow-hidden bg-slate-200"
            role="region"
            aria-labelledby="our-teams-title"
        >
            <div
                className="absolute inset-0 bg-blue-900 rounded-b-[80%] md:rounded-b-[60%] h-[420px] md:h-[680px]"
                aria-hidden="true"
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    id="our-teams-title"
                    className="text-2xl sm:text-4xl font-bold text-white text-center mb-12"
                >
                    OUR TEAMS
                </motion.h2>

                <div
                    className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
                    role="list"
                    aria-label="Hospital team members"
                >
                    {teamMembers.slice(0, 4).map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.15,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            role="listitem"
                        >
                            <TeamCard member={member} />
                        </motion.div>
                    ))}
                </div>

                <div
                    className="md:hidden flex gap-4 overflow-x-auto pb-6 px-1"
                    role="list"
                    aria-label="Hospital team members carousel"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.15,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="min-w-[260px]"
                            role="listitem"
                        >
                            <TeamCard member={member} />
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <motion.a
                        ref={buttonRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        href="/doctors"
                        className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition"
                        aria-label="View all doctors"
                    >
                        View All
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default OurTeams;