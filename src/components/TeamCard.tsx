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
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden"
        >
            <div className="h-64 bg-gray-100 flex items-center justify-center">
                <img
                    src={member.image}
                    alt={member.name}
                    className="h-full object-contain group-hover:scale-110 transition"
                />
            </div>

            <div className="p-6 text-center">
                <h4 className="text-lg font-semibold text-blue-700">
                    {member.name}
                </h4>
                <p className="text-sm text-gray-600 mt-1">{member.degree}</p>
                <p className="text-sm text-gray-500 mt-1">
                    {member.experience}
                </p>
            </div>
        </a>
    );
};

export default TeamCard;
