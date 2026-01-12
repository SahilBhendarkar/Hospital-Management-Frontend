import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  active: "upper" | "lower";
}

const BodyCenter = ({ active }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play reset play reset",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <img
      ref={imageRef}
      src={`/anatomy/Body-Anatomy-${active === "upper" ? "Upper" : "Lower"}.png`}
      alt={
        active === "upper"
          ? "Human upper body anatomy illustration"
          : "Human lower body anatomy illustration"
      }
      aria-label={
        active === "upper"
          ? "Human upper body anatomy"
          : "Human lower body anatomy"
      }
      className="h-[260px] sm:h-[320px] md:h-[420px] z-10 mx-auto"
    />
  );
};

export default BodyCenter;
