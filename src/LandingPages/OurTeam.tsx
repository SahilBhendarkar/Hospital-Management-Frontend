import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data/Data";

const OurTeams = () => {
    return (
        <section className="py-16 bg-blue-900 ">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                    OUR TEAMS
                </h2>
                <div className="hidden md:grid grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div>
                <div className="md:hidden flex gap-4 overflow-x-auto pb-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="min-w-[280px]">
                            <TeamCard member={member} />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a
                        href=""
                        target="_blank"
                        className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition"
                    >
                        View All
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OurTeams;
