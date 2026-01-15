import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { BodyPart } from "../data/Data";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

interface BodyPartItemProps {
  item: BodyPart;
}

const BodyPartItem = ({ item }: BodyPartItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: false, margin: "-15%" });

  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const styleMap: Record<
    string,
    { ring: string; bg: string; label: string; cardBg: string; cardRing: string }
  > = {
    brain: { ring: "from-cyan-400 to-blue-500", bg: "bg-cyan-50", label: "text-cyan-700", cardBg: "bg-gradient-to-br from-cyan-50 to-blue-50", cardRing: "from-cyan-400/20 to-blue-500/20" },
    eye: { ring: "from-pink-400 to-rose-500", bg: "bg-pink-50", label: "text-rose-700", cardBg: "bg-gradient-to-br from-pink-50 to-rose-50", cardRing: "from-pink-400/20 to-rose-500/20" },
    ear: { ring: "from-yellow-400 to-orange-500", bg: "bg-yellow-50", label: "text-orange-700", cardBg: "bg-gradient-to-br from-yellow-50 to-orange-50", cardRing: "from-yellow-400/20 to-orange-500/20" },
    nose: { ring: "from-indigo-400 to-blue-600", bg: "bg-indigo-50", label: "text-indigo-700", cardBg: "bg-gradient-to-br from-indigo-50 to-blue-50", cardRing: "from-indigo-400/20 to-blue-600/20" },
    chest: { ring: "from-emerald-400 to-teal-500", bg: "bg-emerald-50", label: "text-emerald-700", cardBg: "bg-gradient-to-br from-emerald-50 to-teal- 50", cardRing: "from-emerald-400/20 to-teal-500/20" },
    heart: { ring: "from-red-400 to-rose-600", bg: "bg-rose-50", label: "text-rose-700", cardBg: "bg-gradient-to-br from-rose-50 to-red-50", cardRing: "from-red-400/20 to-rose-600/20" },
    liver: { ring: "from-sky-400 to-cyan-600", bg: "bg-sky-50", label: "text-sky-700", cardBg: "bg-gradient-to-br from-sky-50 to-cyan-50", cardRing: "from-sky-400/20 to-cyan-600/20" },
    "vocal cord": { ring: "from-amber-400 to-yellow-600", bg: "bg-amber-50", label: "text-amber-700", cardBg: "bg-gradient-to-br from-amber-50 to-yellow-50", cardRing: "from-amber-400/20 to-yellow-600/20" },
    arm: { ring: "from-blue-400 to-indigo-600", bg: "bg-blue-50", label: "text-blue-700", cardBg: "bg-gradient-to-br from-blue-50 to-indigo-50", cardRing: "from-blue-400/20 to-indigo-600/20" },
    elbow: { ring: "from-green-400 to-emerald-600", bg: "bg-green-50", label: "text-green-700", cardBg: "bg-gradient-to-br from-green-50 to-emerald-50", cardRing: "from-green-400/20 to-emerald-600/20" },
    stomach: { ring: "from-orange-400 to-amber-600", bg: "bg-orange-50", label: "text-orange-700", cardBg: "bg-gradient-to-br from-orange-50 to-amber-50", cardRing: "from-orange-400/20 to-amber-600/20" },
    kidney: { ring: "from-red-500 to-pink-600", bg: "bg-pink-50", label: "text-pink-700", cardBg: "bg-gradient-to-br from-pink-50 to-red-50", cardRing: "from-red-500/20 to-pink-600/20" },
    "reproductive system": { ring: "from-fuchsia-400 to-purple-600", bg: "bg-fuchsia-50", label: "text-fuchsia-700", cardBg: "bg-gradient-to-br from-fuchsia-50 to-purple-50", cardRing: "from-fuchsia-400/20 to-purple-600/20" },
    knee: { ring: "from-indigo-400 to-violet-600", bg: "bg-violet-50", label: "text-violet-700", cardBg: "bg-gradient-to-br from-violet-50 to-indigo-50", cardRing: "from-indigo-400/20 to-violet-600/20" },
    thigh: { ring: "from-lime-400 to-green-600", bg: "bg-lime-50", label: "text-lime-700", cardBg: "bg-gradient-to-br from-lime-50 to-green-50", cardRing: "from-lime-400/20 to-green-600/20" },
    hip: { ring: "from-amber-400 to-orange-600", bg: "bg-amber-50", label: "text-amber-700", cardBg: "bg-gradient-to-br from-amber-50 to-orange-50", cardRing: "from-amber-400/20 to-orange-600/20" },
    "lower back": { ring: "from-teal-400 to-cyan-600", bg: "bg-teal-50", label: "text-teal-700", cardBg: "bg-gradient-to-br from-teal-50 to-cyan-50", cardRing: "from-teal-400/20 to-cyan-600/20" },
    foot: { ring: "from-purple-400 to-indigo-600", bg: "bg-purple-50", label: "text-purple-700", cardBg: "bg-gradient-to-br from-purple-50 to-indigo-50", cardRing: "from-purple-400/20 to-indigo-600/20" },
    ankle: { ring: "from-slate-400 to-gray-600", bg: "bg-slate-50", label: "text-slate-700", cardBg: "bg-gradient-to-br from-slate-50 to-gray-50", cardRing: "from-slate-400/20 to-gray-600/20" },
    "varicose vein": { ring: "from-rose-400 to-red-600", bg: "bg-rose-50", label: "text-red-700", cardBg: "bg-gradient-to-br from-rose-50 to-red-50", cardRing: "from-rose-400/20 to-red-600/20" },
    default: { ring: "from-gray-300 to-gray-500", bg: "bg-gray-50", label: "text-gray-700", cardBg: "bg-gradient-to-br from-gray-50 to-gray-100", cardRing: "from-gray-300/20 to-gray-500/20" },
  };
  const styles = styleMap[item.name.toLowerCase()] || styleMap.default;

  return (
    <>
      <motion.div
        ref={itemRef}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center cursor-pointer scale-[0.85] sm:scale-100"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`
            w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
            rounded-full bg-gradient-to-br ${styles.ring}
            p-[4px] shadow-xl
            transition-all duration-300
            hover:scale-110
          `}
        >
          <div
            className={`
              w-full h-full rounded-full ${styles.bg}
              flex items-center justify-center
              border-4 border-white
            `}
          >
            <img
              src={item.image}
              alt={`${item.name} icon`}
              className="w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-2 px-3 py-1.5 bg-white/90 rounded-full shadow-md">
          <span className={`text-xs font-bold tracking-wide ${styles.label}`}>
            {item.name.toUpperCase()}
          </span>
        </div>
      </motion.div>

      {showTooltip &&
        createPortal(
          <div
            style={{
              left: position.x,
              top: position.y,
              transform: "translate(-50%, -120%)",
            }}
            className="
              fixed z-[9999]
              w-56
              bg-white rounded-xl shadow-2xl
              border border-gray-200 p-4
            "
            role="tooltip"
          >
            <p className="text-lg font-bold text-gray-900 mb-2">
              Departments
            </p>

            <ul className="space-y-1">
              {item.departments.map((dept) => (
                <li key={dept.name}>
                  <Link
                    to={dept.link}
                    className="text-lg text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>,
          document.body
        )}
    </>
  );
};

export default BodyPartItem;
