import { useRef } from "react";
import Marquee from "react-fast-marquee";
import { motion, useInView } from "framer-motion";
import { services } from "../data/Data";

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isTitleInView = useInView(sectionRef, { once: false, margin: "-20%" });
  const marqueeRef = useRef<HTMLDivElement>(null);
  const isMarqueeInView = useInView(marqueeRef, { once: false, margin: "-15%" });

  return (
    <section
      ref={sectionRef}
      className="mt-20 pb-10"
      role="region"
      aria-labelledby="services-title"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        id="services-title"
        className="text-4xl md:text-5xl font-bold text-center text-blue-ribbon-900 mb-12"
      >
        Our <span className="text-mountain-meadow-600">Specialized </span>Services
      </motion.h2>

      <motion.div
        ref={marqueeRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isMarqueeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Marquee
          speed={36}
          pauseOnHover
          gradient={false}
          aria-label="Hospital specialized services scrolling list"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                mx-8
                w-60 h-40
                flex flex-col items-center justify-center
                rounded-xl
                bg-blue-ribbon-900
                border border-blue-ribbon-100
                shadow-sm
                transition-all duration-300
              "
              role="group"
              aria-label={`Service: ${service.name}`}
            >
              <img
                src={`/services/${service.image}`}
                alt={`${service.name} service`}
                className="h-16 object-contain mb-1"
              />

              <p className="text-sm font-medium text-white text-center">
                {service.name}
              </p>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default Services;