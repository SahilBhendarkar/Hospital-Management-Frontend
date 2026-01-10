import { useState } from "react";
import { bodyParts } from "../data/Data";
import BodyToggle from "./BodyToggle";
import BodyCenter from "./BodyCenter";
import BodyOrbit from "./BodyOrbit";

const BodySelector = () => {
  const [active, setActive] = useState<"upper" | "lower">("upper");

  const filtered = bodyParts.filter((p) => p.category === active);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f4e4e4] overflow-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-red-700 mb-8 sm:mb-10 md:mb-12 px-4">
        Choose the Area of Concern
      </h2>

      <BodyToggle active={active} setActive={setActive} />

      <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[650px] md:h-[650px] mx-auto">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-300 animate-spin-slow hidden sm:block" />

        <div className="absolute inset-0 flex justify-center items-center">
          <BodyCenter active={active} />
        </div>

        <BodyOrbit parts={filtered} />
      </div>
    </section>
  );
};

export default BodySelector;
