import type { BodyPart } from "../data/Data";

interface BodyPartItemProps {
  item: BodyPart;
}

const BodyPartItem = ({ item }: BodyPartItemProps) => {
  const styleMap: Record<
    string,
    { ring: string; bg: string; label: string }
  > = {
    brain: { ring: "from-cyan-400 to-blue-500", bg: "bg-cyan-50", label: "text-cyan-700" },
    eye: { ring: "from-pink-400 to-rose-500", bg: "bg-pink-50", label: "text-rose-700" },
    ear: { ring: "from-yellow-400 to-orange-500", bg: "bg-yellow-50", label: "text-orange-700" },
    nose: { ring: "from-indigo-400 to-blue-600", bg: "bg-indigo-50", label: "text-indigo-700" },
    chest: { ring: "from-emerald-400 to-teal-500", bg: "bg-emerald-50", label: "text-emerald-700" },
    heart: { ring: "from-red-400 to-rose-600", bg: "bg-rose-50", label: "text-rose-700" },
    liver: { ring: "from-sky-400 to-cyan-600", bg: "bg-sky-50", label: "text-sky-700" },
    vocal: { ring: "from-amber-400 to-yellow-600", bg: "bg-amber-50", label: "text-amber-700" },
    arm: { ring: "from-blue-400 to-indigo-600", bg: "bg-blue-50", label: "text-blue-700" },
    elbow: { ring: "from-green-400 to-emerald-600", bg: "bg-green-50", label: "text-green-700" },

    stomach: { ring: "from-orange-400 to-amber-600", bg: "bg-orange-50", label: "text-orange-700" },
    kidney: { ring: "from-red-500 to-pink-600", bg: "bg-pink-50", label: "text-pink-700" },
    "reproductive system": { ring: "from-fuchsia-400 to-purple-600", bg: "bg-fuchsia-50", label: "text-fuchsia-700" },
    knee: { ring: "from-indigo-400 to-violet-600", bg: "bg-violet-50", label: "text-violet-700" },
    thigh: { ring: "from-lime-400 to-green-600", bg: "bg-lime-50", label: "text-lime-700" },
    hip: { ring: "from-amber-400 to-orange-600", bg: "bg-amber-50", label: "text-amber-700" },
    "lower back": { ring: "from-teal-400 to-cyan-600", bg: "bg-teal-50", label: "text-teal-700" },

    default: { ring: "from-gray-300 to-gray-500", bg: "bg-gray-50", label: "text-gray-700" },
  };

  const styles =
    styleMap[item.name.toLowerCase()] || styleMap.default;

  return (
    <div className="group relative flex flex-col items-center scale-[0.85] sm:scale-100">
      <div
        className={`
          w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
          rounded-full
          bg-gradient-to-br ${styles.ring}
          p-[4px]
          shadow-xl shadow-black/25
          transition-all duration-300
          group-hover:scale-110
        `}
      >
        <div
          className={`
            w-full h-full rounded-full
            ${styles.bg}
            flex items-center justify-center
            border-4 border-white
          `}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 object-contain drop-shadow-md"
          />
        </div>
      </div>

      <div className="mt-2 sm:mt-3 px-3 py-1.5 bg-white rounded-full shadow-md">
        <span
          className={`text-[10px] sm:text-xs md:text-sm font-bold tracking-wide ${styles.label}`}
        >
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
