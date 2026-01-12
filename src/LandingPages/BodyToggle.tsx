import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import upperBodyImg from "../assets/images/upperbody.png";
import lowerBodyImg from "../assets/images/lowerbody.png";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  active: "upper" | "lower";
  setActive: (v: "upper" | "lower") => void;
}

const BodyToggle = ({ active, setActive }: Props) => {
  const toggleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: toggleRef.current,
            start: "top 85%",
            toggleActions: "play reset play reset",
          },
        }
      );
    }, toggleRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={toggleRef}
      className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-10 px-4"
      role="group"
      aria-label="Body section selector"
    >
      {[
        { type: "upper" as const, label: "Upper Body", img: upperBodyImg },
        { type: "lower" as const, label: "Lower Body", img: lowerBodyImg },
      ].map(({ type, label, img }, i) => (
        <button
          key={type}
          ref={(el) => {
            if (el) buttonsRef.current[i] = el;
          }}
          onClick={() => setActive(type)}
          className={`group relative px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base flex items-center gap-2 overflow-hidden shadow-sm
            ${active === type
              ? "bg-red-600 text-white shadow-lg hover:shadow-xl"
              : "bg-white/80 text-red-600 border-2 border-red-200 hover:border-red-400 hover:bg-white"
            }`}
          aria-pressed={active === type}
          aria-label={`Select ${label.toLowerCase()}`}
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all group-hover:scale-110">
            <img
              src={img}
              alt={`${label} icon`}
              className={`w-full h-full object-cover transition-all duration-200 group-hover:scale-110 ${active === type
                ? "brightness-0 invert filter drop-shadow-lg"
                : "drop-shadow-md"
                }`}
            />
          </div>

          <span className="font-medium">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default BodyToggle;
