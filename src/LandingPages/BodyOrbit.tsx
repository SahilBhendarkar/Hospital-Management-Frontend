import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { BodyPart } from "../data/Data";
import BodyPartItem from "../LandingPages/BodyPartItem";

gsap.registerPlugin(ScrollTrigger);

const BodyOrbit = ({ parts }: { parts: BodyPart[] }) => {
  const orbitRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: orbitRef.current,
            start: "top 80%",
            toggleActions: "play reset play reset",
          },
        }
      );
    }, orbitRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={orbitRef}
      className="relative w-full aspect-square max-w-[95vw] sm:max-w-[650px] md:max-w-[750px] lg:max-w-[900px] mx-auto"
      role="region"
      aria-label="Human body parts interactive orbit"
      style={
        {
          "--orbit-radius": "min(42vmin, 420px)",
        } as React.CSSProperties
      }
    >
      {parts.map((item, i) => (
        <div
          key={item.id ?? i}
          ref={(el) => {
            if (el) itemsRef.current[i] = el;
          }}
          className="absolute left-1/2 top-1/2 origin-center"
          role="group"
          aria-label={item.name ?? `Body part ${i + 1}`}
          style={{
            transform: `
              translate(-50%, -50%)
              rotate(${item.angle}deg)
              translate(var(--orbit-radius))
              rotate(-${item.angle}deg)
            `,
          }}
        >
          <BodyPartItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default BodyOrbit;