import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  active: "upper" | "lower";
}

const BodyCenter = ({ active }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const isInView = useInView(imageRef, { once: false, margin: "-20%" });


  return (
    <motion.img
      ref={imageRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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