import { useState } from "react";
import { Link } from "react-router-dom";
import hospitalLogo from "../../assets/images/hospital.png";

import {
  IconPhone,
  IconMail,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

import NavLinks from "./NavLinks";
import LoginModal from "../../modals/LoginModal";
import RegisterModal from "../../modals/RegisterModal";

const navLinks = [
  { name: "Home", url: "/" },
  { name: "Departments", url: "/departments" },
  { name: "Doctors", url: "/doctors" },
  { name: "Gallery", url: "/gallery" },
  { name: "Contact", url: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <>
      <header
        className="w-full border-b border-gray-200 sticky top-0 z-50 bg-white shadow-sm"
        role="banner"
      >
        {/* ================= TOP BAR ================= */}
        <div className="bg-blue-900 text-white text-xs sm:text-sm">
          <div className="mx-auto px-4 sm:px-6 py-2">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-center sm:text-left">
                <span className="flex items-center gap-1">
                  <IconPhone size={14} /> +91-9099433366
                </span>

                <span className="hidden sm:inline">|</span>
                <span>+91-9099733366</span>

                <span className="hidden sm:inline">|</span>
                <span>+91-9099433360</span>

                <span className="hidden sm:inline">|</span>
                <span className="flex items-center gap-1 break-all">
                  <IconMail size={14} /> Ruganalay@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <IconBrandFacebook size={18} />
                <IconBrandTwitter size={18} />
                <IconBrandYoutube size={18} />
                <IconBrandWhatsapp size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 sm:h-20 min-w-fit">
              <Link
                to="/"
                className="flex items-center gap-3 sm:gap-4 cursor-pointer hover:opacity-90 transition"
                aria-label="Go to home page"
              >
                <img
                  src={hospitalLogo}
                  alt="Hospital logo"
                  className="h-12 sm:h-16 w-auto"
                />
                <div className="leading-tight hidden sm:block">
                  <h1 className="text-lg font-bold whitespace-nowrap">
                    Hospital UI
                  </h1>
                  <p className="text-xs text-blue-600 whitespace-nowrap">
                    Partners in Quality Healthcare
                  </p>
                </div>
              </Link>

              {/* DESKTOP NAV */}
              <nav className="hidden md:flex min-w-fit" aria-label="Primary navigation">
                <NavLinks
                  mobileMenuOpen={mobileMenuOpen}
                  setMobileMenuOpen={setMobileMenuOpen}
                />
              </nav>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      mobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/*  MOBILE MENU  */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}

                <button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm mt-4"
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        setIsRegisterModalOpen={(open) => {
          setIsLoginModalOpen(false);
          setIsRegisterModalOpen(open);
        }}
      />


      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </>
  );
};

export default Header;