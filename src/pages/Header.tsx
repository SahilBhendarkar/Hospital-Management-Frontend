import hospitalLogo from "../assets/images/hospital.png";
import {
  IconPhone,
  IconMail,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-blue-900 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-center sm:text-left">
              <span className="flex items-center gap-1">
                <IconPhone size={14} />
                +91-9099433366
              </span>

              <span className="hidden sm:inline">|</span>
              <span>+91-9099733366</span>

              <span className="hidden sm:inline">|</span>
              <span>+91-9099433360</span>

              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1 break-all">
                <IconMail size={14} />
                Ruganalay@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-blue-300 transition">
                <IconBrandFacebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-300 transition">
                <IconBrandTwitter size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-red-400 transition">
                <IconBrandYoutube size={18} />
              </a>
              <a href="#" aria-label="WhatsApp" className="hover:text-green-400 transition">
                <IconBrandWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link
              to="/"
              className="flex items-center gap-3 sm:gap-4 cursor-pointer hover:opacity-90 transition"
            >
              <img
                src={hospitalLogo}
                alt="Hospital Logo"
                className="h-12 sm:h-16 w-auto"
              />
              <div className="leading-tight">
                <h1 className="text-lg sm:text-2xl font-bold text-blue-900">
                  Hospital UI
                </h1>
                <p className="text-xs sm:text-sm text-blue-600 font-medium hidden sm:block">
                  Partners in Quality Healthcare
                </p>
              </div>
            </Link>

            <nav className="hidden md:flex">
              <NavLinks />
            </nav>

            <button
              className="md:hidden text-blue-900 focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
