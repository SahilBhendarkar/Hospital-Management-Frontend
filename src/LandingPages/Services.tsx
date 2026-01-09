import Marquee from "react-fast-marquee";
import { services } from "../data/Data";


const Services = () => {
  return (
    <div className="mt-20 pb-10">
      <h2 className="text-4xl font-semibold text-center text-blue-ribbon-900 mb-12">
        Our <span className="text-mountain-meadow-600">Specialized </span>Services
      </h2>

      <Marquee speed={36} pauseOnHover gradient={false}>
        {services.map((service, index) => (
          <div
            key={index}
            className="
              mx-8
              w-60 h-40
              flex flex-col items-center justify-center
              rounded-xl
              bg-blue-ribbon-50
              border border-blue-ribbon-100
              shadow-sm
              transition-all duration-300
              hover:bg-mountain-meadow-50
              hover:shadow-md
            "
          >
            <img
              src={`/public/services/${service.image}`}
              alt={service.name}
              className="h-16 object-contain mb- bg-blue-ribbon-950"
            />

            <p className="text-sm font-medium text-blue-ribbon-900 text-center">
              {service.name}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Services;
