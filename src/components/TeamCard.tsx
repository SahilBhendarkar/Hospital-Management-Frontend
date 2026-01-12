type TeamMember = {
    name: string;
    degree: string;
    experience: string;
    image: string;
    link?: string;
};

const TeamCard = ({ member }: { member: TeamMember }) => {
    return (
        <a
            href={member.link ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition w-full overflow-hidden"
            aria-label={`View profile of ${member.name}`}
        >
            <div className="h-48 sm:h-56 md:h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                    src={member.image}
                    alt={`${member.name} profile photo`}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            <div className="p-4 sm:p-6 text-center">
                <h4 className="text-base sm:text-xl font-semibold text-white">
                    {member.name}
                </h4>
                <p className="text-xs sm:text-sm text-white">
                    {member.degree}
                </p>
                <p className="text-xs sm:text-sm text-white">
                    {member.experience}
                </p>
            </div>
        </a>
    );
};

export default TeamCard;
