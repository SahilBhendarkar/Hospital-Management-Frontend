import { Carousel } from "@mantine/carousel";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { heroSlides } from "../data/Data";


const IndexSlider = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,            
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="w-full">
      <Carousel
        withIndicators
        height={520}
        loop
        align="start"
        slideSize="50%"
        slideGap="md"
        slidesToScroll={1}
        plugins={[autoplay.current]}
        onMouseLeave={autoplay.current.reset}
        breakpoints={[
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
          { maxWidth: "md", slideSize: "50%", slideGap: "md" },
          { minWidth: "lg", slideSize: "50%", slideGap: "lg" },
        ]}
        nextControlIcon={<IconArrowRight size={22} />}
        previousControlIcon={<IconArrowLeft size={22} />}
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
          controls: "gap-0",
        }}
      >
        {heroSlides.map((slide, index) => (
          <Carousel.Slide key={index}>
            <div className="relative w-full h-[520px] overflow-hidden rounded-2xl">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover brightness-75 hover:brightness-100 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-blue-ribbon-900/60 via-transparent to-indigo-900/50" />

              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full flex items-center justify-end pr-8 md:pr-16">
                <div className="max-w-lg text-white text-right">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <h2 className="text-lg md:text-2xl font-bold mb-4 opacity-95">
                    {slide.subtitle}
                  </h2>
                  <p className="text-base md:text-lg mb-8 text-white/90 leading-relaxed max-w-md">
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
