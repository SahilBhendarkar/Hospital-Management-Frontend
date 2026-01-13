import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { heroSlides } from '../data/Data'; 

const IndexSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return;

    const track = trackRef.current;
    const containerWidth = containerRef.current.offsetWidth;

    const slideWidth = containerWidth; 
    let currentIndex = 0;
    const totalSlides = heroSlides.length;

    const slide = () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      gsap.to(track, {
        x: -currentIndex * slideWidth,
        duration: 1.2,
        ease: 'power2.inOut',
      });
    };

    const interval = setInterval(slide, 4000); 

    const handleResize = () => {
      const newWidth = containerRef.current?.offsetWidth || containerWidth;
      gsap.set(track, { x: -currentIndex * newWidth });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white">
      <div
        ref={containerRef}
        className="
          relative w-full 
          aspect-[4/3] sm:aspect-[16/9] md:aspect-[5/3] 
          max-h-[700px] mx-auto
          overflow-hidden
        "
      >
        <div
          ref={trackRef}
          className="absolute inset-0 flex will-change-transform"
        >
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full relative"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="
                  w-full h-full object-cover brightness-[0.85]
                "
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="max-w-4xl text-white text-center">
                  <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-5 tracking-wide drop-shadow-lg">
                    {slide.subtitle}
                  </h2>

                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight drop-shadow-2xl">
                    {slide.title}
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndexSlider;