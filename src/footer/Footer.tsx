import React from "react";
import { easeOut, motion } from "framer-motion";
import hospitalLogo from "../assets/images/hospital.png";


const Footer: React.FC = () => {
  return (
    <footer id="colophon" className="bg-gray-900 text-gray-200">
      <div className="py-20">
        <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <img
              src={hospitalLogo}
              alt="moshpital"
              className="mb-4"
            />
            <p className="text-sm leading-relaxed">
              To improve the health of those we serve with a commitment to
              excellence in all that we do. Our goal is to provide quality
              healthcare services in all specialties to every sector of society.
            </p>
            <a
              href="/about-us"
              className="inline-block mt-3 text-blue-400 hover:underline"
            >
              Read More →
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Home",
                "About Us",
                "Available Facilities",
                "Mediclaim / Cashless Facilities",
                "Health Checkup Plans",
                "Departments",
                "Our Doctor Teams",
                "Gallery",
                "Testimonials",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Details</h4>

            <p className="text-sm mb-3">
              Sawangi Meghe, Wardha – 442001.
            </p>

            <div className="text-sm space-y-1">
              <a href="tel:+919099433366" className="block hover:text-blue-400">
                +91-9099433366
              </a>
              <a href="tel:+919099733366" className="block hover:text-blue-400">
                +91-9099733366
              </a>
              <a href="tel:+919099433360" className="block hover:text-blue-400">
                +91-9099433360
              </a>
            </div>

            <div className="mt-3 text-sm">
              <a
                href="mailto:lifelinehospitalsurat@gmail.com"
                className="block hover:text-blue-400"
              >
                hospital@gmail.com
              </a>
              <a
                href="mailto:infolifelinesurat@gmail.com"
                className="block hover:text-blue-400"
              >
                hospital123@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              Sign Up To Newsletter
            </h4>

            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded text-black"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 20, mass: 0.5}}
                className="inline-block bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg text-lg text-white shadow-lg"
              >
                Send
              </motion.button>

            </form>

            <div className="mt-5 text-xs leading-relaxed">
              Legal business name – MEGHE GROUP<br />
              Address – Sawangi Meghe, Wardha – 442001 <br />
              Business phone – 79846 17050 <br />
              Website – https://hospital.com <br />
              GSTIN – 24AALCA7858G1ZD
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-4">

          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Multispeciality Hospital. All
            Rights Reserved.
          </p>

          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com/Lifelinesurat" target="_blank">
              <img
                src="https://lifelinesurat.com/wp-content/uploads/2023/04/facebook-app-symbol-1.png"
                className="h-6"
              />
            </a>
            <a href="https://twitter.com/Lifelinesurat" target="_blank">
              <img
                src="https://lifelinesurat.com/wp-content/uploads/2023/06/twitter-2.png"
                className="h-6"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://lifelinesurat.com/wp-content/uploads/2023/06/youtube-1.png"
                className="h-6"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919099433366"
              target="_blank"
            >
              <img
                src="https://lifelinesurat.com/wp-content/uploads/2023/06/whatsapp-3.png"
                className="h-6"
              />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
