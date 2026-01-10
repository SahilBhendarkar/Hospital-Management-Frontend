import { useState } from "react";
import { bodyParts } from "../data/Data";
import BodyToggle from "./BodyToggle";
import BodyCenter from "./BodyCenter";
import BodyOrbit from "./BodyOrbit";

const BodySelector = () => {
  const [active, setActive] = useState<"upper" | "lower">("upper");

  const filtered = bodyParts.filter((p) => p.category === active);

  return (
    <section className="py-20 bg-[#f4e4e4] overflow-hidden hover:overflow-visible">
      <h2 className="text-4xl font-bold text-center text-red-700 mb-12">
        Choose the Area of Concern
      </h2>

      <BodyToggle active={active} setActive={setActive} />

      <div className="relative w-[650px] h-[650px] mx-auto">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-300 animate-spin-slow" />


        <div className="absolute inset-0 flex justify-center items-center">
          <BodyCenter active={active} />
        </div>

        <BodyOrbit parts={filtered} />
      </div>
    </section>
  );
};

export default BodySelector;
