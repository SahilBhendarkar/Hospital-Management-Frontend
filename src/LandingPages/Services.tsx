import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../data/Data";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        marqueeRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: marqueeRef.current,
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
      className="mt-20 pb-10"
      role="region"
      aria-labelledby="services-title"
    >
      <h2
        ref={titleRef}
        id="services-title"
        className="text-4xl md:text-5xl font-bold text-center text-blue-ribbon-900 mb-12"
      >
        Our <span className="text-mountain-meadow-600">Specialized </span>Services
      </h2>

      <div ref={marqueeRef}>
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
                src={`/public/services/${service.image}`}
                alt={`${service.name} service`}
                className="h-16 object-contain mb-1"
              />

              <p className="text-sm font-medium text-white text-center">
                {service.name}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Services;
