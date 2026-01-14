import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { heroSlides } from '../data/Data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const IndexSlider = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white">
      <div
        className="
          relative w-full 
          aspect-[4/3] sm:aspect-[16/9] md:aspect-[5/3] 
          max-h-[700px] mx-auto
          overflow-hidden
        "
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1200}
          className="w-full h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full relative">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default IndexSlider;