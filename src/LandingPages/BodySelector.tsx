import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bodyParts } from "../data/Data";
import BodyToggle from "./BodyToggle";
import BodyCenter from "./BodyCenter";
import BodyOrbit from "./BodyOrbit";

gsap.registerPlugin(ScrollTrigger);

const BodySelector = () => {
  const [active, setActive] = useState<"upper" | "lower">("upper");

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  const filtered = bodyParts.filter((p) => p.category === active);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [titleRef.current, subtitleRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        toggleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visualRef.current,
            start: "top 85%",
            toggleActions: "play reset play reset",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-[#f4e4e4] overflow-hidden"
      role="region"
      aria-labelledby="body-selector-title"
      aria-describedby="body-selector-subtitle"
    >
      <h2
        ref={titleRef}
        id="body-selector-title"
        className="text-4xl sm:text-3xl md:text-4xl font-bold text-center text-red-700 mb-8 sm:mb-10 md:mb-12 px-4"
      >
        Choose the Area of Concern
      </h2>

      <h2
        ref={subtitleRef}
        id="body-selector-subtitle"
        className="text-4xl sm:text-3xl md:text-3xl font-semibold text-center text-black mb-8 sm:mb-10 md:mb-12 px-4"
      >
        Find the appropriate specialist for targeted care.
      </h2>

      <div ref={toggleRef}>
        <BodyToggle active={active} setActive={setActive} />
      </div>

      <div
        ref={visualRef}
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
      </div>
    </section>
  );
};

export default BodySelector;
