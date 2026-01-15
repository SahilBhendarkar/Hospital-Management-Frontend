import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { bodyParts } from "../data/Data";
import BodyToggle from "./BodyToggle";
import BodyCenter from "./BodyCenter";
import BodyOrbit from "./BodyOrbit";

const BodySelector = () => {
  const [active, setActive] = useState<"upper" | "lower">("upper");

  const sectionRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(sectionRef, { once: false, margin: "-20%" });
  const toggleRef = useRef<HTMLDivElement>(null);
  const isToggleInView = useInView(toggleRef, { once: false, margin: "-25%" });
  const visualRef = useRef<HTMLDivElement>(null);
  const isVisualInView = useInView(visualRef, { once: false, margin: "-15%" });

  const filtered = bodyParts.filter((p) => p.category === active);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-[#f4e4e4] overflow-hidden"
      role="region"
      aria-labelledby="body-selector-title"
      aria-describedby="body-selector-subtitle"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        id="body-selector-title"
        className="text-4xl sm:text-3xl md:text-4xl font-bold text-center text-red-700 mb-8 sm:mb-10 md:mb-12 px-4"
      >
        Choose the Area of Concern
      </motion.h2>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        id="body-selector-subtitle"
        className="text-4xl sm:text-3xl md:text-3xl font-semibold text-center text-black mb-8 sm:mb-10 md:mb-12 px-4"
      >
        Find the appropriate specialist for targeted care.
      </motion.h2>
      <motion.div
        ref={toggleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isToggleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 sm:mb-12 md:mb-16"
      >
        <BodyToggle active={active} setActive={setActive} />
      </motion.div>

      <motion.div
        ref={visualRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isVisualInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[650px] md:h-[650px] mx-auto"
        aria-label="Human body selector visualization"
      >
        <div
          className="absolute inset-0 rounded-full border-2 border-dashed border-red-300 animate-spin-slow hidden sm:block"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex justify-center items-center">
          <BodyCenter active={active} />
        </div>

        <BodyOrbit parts={filtered} />
      </motion.div>
    </section>
  );
};

export default BodySelector;