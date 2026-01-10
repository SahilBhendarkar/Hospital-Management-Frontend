import type { BodyPart } from "../data/Data";

interface BodyPartItemProps {
  item: BodyPart;
}

const BodyPartItem = ({ item }: BodyPartItemProps) => {
  const colorMap: Record<string, string> = {
    brain: "bg-cyan-300",
    eye: "bg-pink-300",
    ear: "bg-lime-300",
    nose: "bg-indigo-300",
    chest: "bg-teal-300",
    heart: "bg-rose-300",
    liver: "bg-cyan-300",
    vocal: "bg-emerald-300",
    arm: "bg-blue-400",
    elbow: "bg-green-300",
    default: "bg-gray-300",
  };

  const bgColor = colorMap[item.name.toLowerCase()] || colorMap.default;

  return (
    <div className="group relative flex flex-col items-center scale-[0.85] sm:scale-100">
      <div
        className={`
          w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
          ${bgColor}
          rounded-full
          flex items-center justify-center
          shadow-lg shadow-black/20
          border-4 border-white
          transition-all duration-300
          group-hover:scale-110 group-hover:shadow-xl
          relative z-10
        `}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 object-contain drop-shadow-md rounded-3xl"
        />
      </div>

      <div className="mt-2 sm:mt-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
        <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wide text-gray-800">
          {item.name.toUpperCase()}
        </span>
      </div>

      {item.departments && item.departments.length > 0 && (
        <div
          className="
            absolute z-20
            bottom-full mb-3 left-1/2 -translate-x-1/2
            hidden md:group-hover:block
            w-max min-w-[200px]
            bg-white rounded-xl shadow-2xl
            border border-gray-200/80
            overflow-hidden
          "
        >
          <div className="bg-gradient-to-r from-gray-50 to-white px-4 py-2 border-b">
            <p className="text-xs font-medium text-gray-500">
              Specialist{item.departments.length > 1 ? "s" : ""}
            </p>
          </div>

          <div className="p-2">
            {item.departments.map((dept) => (
              <a
                key={dept.name}
                href={dept.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block px-4 py-2 text-sm
                  text-cyan-700 hover:text-cyan-900
                  hover:bg-cyan-50 rounded-lg
                  transition-colors
                "
              >
                {dept.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyPartItem;
