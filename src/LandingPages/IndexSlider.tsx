import { useEffect, useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroSlides } from "../data/Data";

gsap.registerPlugin(ScrollTrigger);

const IndexSlider = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRefs.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
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
      className="w-full"
      role="region"
      aria-label="Hero image slideshow"
    >
      <Carousel
        withIndicators
        height="100%"
        slideSize="100%"
        emblaOptions={{ loop: true }}
        plugins={[autoplay.current]}
        onMouseLeave={() => autoplay.current.play()}
        nextControlIcon={<IconArrowRight size={22} aria-hidden="true" />}
        previousControlIcon={<IconArrowLeft size={22} aria-hidden="true" />}
        aria-label="Homepage hero carousel"
        className="
          [&_button]:bg-white/90
          [&_button]:backdrop-blur-sm
          [&_button]:text-blue-ribbon-700
          [&_button]:shadow-lg
          [&_button]:opacity-0
          hover:[&_button]:opacity-100
          [&_button]:transition-all
          [&_button]:hover:scale-110
        "
        classNames={{
          indicator:
            "bg-white/70 data-[active]:bg-mountain-meadow-500 backdrop-blur-sm rounded-full w-3 h-3",
        }}
      >
        {heroSlides.map((slide, index) => (
          <Carousel.Slide
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1}: ${slide.title}`}
          >
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] overflow-hidden rounded-none md:rounded-2xl">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover brightness-75"
              />

              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-ribbon-900/60 via-transparent to-indigo-900/50"
                aria-hidden="true"
              />

              <div className="relative z-10 h-full max-w-7xl mx-auto flex items-center px-4 sm:px-6 md:px-10">
                <div
                  ref={(el) => {
                    if (el) contentRefs.current[index] = el;
                  }}
                  className="max-w-xl text-white text-left"
                >
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
                    {slide.title}
                  </h1>

                  <h2 className="text-base sm:text-lg md:text-2xl font-bold mb-3 sm:mb-4 opacity-95">
                    {slide.subtitle}
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-md">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
};

export default IndexSlider;
