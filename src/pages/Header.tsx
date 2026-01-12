import { useEffect, useRef } from "react";
import gsap from "gsap";
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
  const headerRef = useRef<HTMLElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const mainBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headerRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
      .fromTo(
        topBarRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        "-=0.3"
      )
      .fromTo(
        mainBarRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-full border-b border-gray-200 sticky top-0 z-50 bg-white shadow-sm"
      role="banner"
    >
      <div
        ref={topBarRef}
        className="bg-blue-900 text-white text-xs sm:text-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div
              className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-center sm:text-left"
              aria-label="Hospital contact information"
            >
              <span className="flex items-center gap-1" aria-label="Primary contact number">
                <IconPhone size={14} aria-hidden="true" />
                +91-9099433366
              </span>

              <span className="hidden sm:inline" aria-hidden="true">|</span>
              <span aria-label="Secondary contact number">+91-9099733366</span>

              <span className="hidden sm:inline" aria-hidden="true">|</span>
              <span aria-label="Alternate contact number">+91-9099433360</span>

              <span className="hidden sm:inline" aria-hidden="true">|</span>
              <span
                className="flex items-center gap-1 break-all"
                aria-label="Hospital email address"
              >
                <IconMail size={14} aria-hidden="true" />
                Ruganalay@gmail.com
              </span>
            </div>

            <div
              className="flex items-center gap-4"
              aria-label="Social media links"
            >
              <a href="#" aria-label="Hospital Facebook page" className="hover:text-blue-300 transition">
                <IconBrandFacebook size={18} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Hospital Twitter profile" className="hover:text-blue-300 transition">
                <IconBrandTwitter size={18} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Hospital YouTube channel" className="hover:text-red-400 transition">
                <IconBrandYoutube size={18} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Hospital WhatsApp contact" className="hover:text-green-400 transition">
                <IconBrandWhatsapp size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div ref={mainBarRef} className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
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
              <div className="leading-tight">
                <h1 className="text-lg sm:text-2xl font-bold text-blue-900">
                  Hospital UI
                </h1>
                <p className="text-xs sm:text-sm text-blue-600 font-medium hidden sm:block">
                  Partners in Quality Healthcare
                </p>
              </div>
            </Link>

            <nav className="hidden md:flex" aria-label="Primary navigation">
              <NavLinks />
            </nav>

            <button
              className="md:hidden text-blue-900 focus:outline-none"
              aria-label="Open navigation menu"
              aria-expanded="false"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
