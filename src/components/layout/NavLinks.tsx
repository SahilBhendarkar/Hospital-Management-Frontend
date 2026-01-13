import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import LoginModal from "../../modals/LoginModal";

const NavLinks = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [mobileMenuOpen]);

  const links = [
    { name: "Home", url: "/" },
    {
      name: "Departments",
      url: "/departments",
      dropdown: [
        { name: "Cardiology", url: "/departments/cardiology" },
        { name: "Orthopaedics", url: "/departments/orthopaedics" },
        { name: "Neurology", url: "/departments/neurology" },
      ],
    },
    {
      name: "Doctors",
      url: "/doctors",
      dropdown: [
        { name: "All Doctors", url: "/doctors" },
        { name: "Surgeons", url: "/doctors/surgeons" },
        { name: "Physicians", url: "/doctors/physicians" },
      ],
    },
    { name: "Appointments", url: "/appointments" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <>
      <nav ref={navRef} className="hidden md:flex items-center gap-8 lg:gap-10">
        {links.map((link) => (
          <div key={link.name} className="relative group">
            <Link
              to={link.url}
              className={`relative text-lg font-medium pb-2 transition-all duration-300 flex items-center gap-1.5 group-hover:text-blue-700 ${
                location.pathname === link.url ? "text-blue-900" : "text-gray-700"
              }`}
            >
              {link.name}
              {link.dropdown && (
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openDropdown === link.name ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>

            {link.dropdown && (
              <div className="absolute left-0 top-full mt-1 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 overflow-hidden z-50 group-hover:opacity-100 opacity-0 invisible group-hover:visible transition-all duration-300 ease-out transform scale-95 group-hover:scale-100 origin-top">
                <div className="py-3 space-y-0.5">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.url}
                      to={item.url}
                      className={`group/item flex items-center gap-3 px-4 py-3 rounded-xl mx-2 transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-900 hover:shadow-sm relative overflow-hidden ${
                        location.pathname === item.url
                          ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-900 shadow-sm border-r-4 border-blue-500"
                          : "text-gray-700 hover:text-blue-900"
                      }`}
                      onClick={() => setOpenDropdown(null)}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                      <span className="font-medium tracking-tight">{item.name}</span>
                      <svg
                        className="ml-auto w-4 h-4 text-gray-400 group-hover/item:text-blue-500 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>

                {link.name === "Departments" && (
                  <div className="px-4 pb-4 pt-2">
                    <Link
                      to={link.url}
                      className="w-full block bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold text-sm uppercase tracking-wide text-center transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5"
                      onClick={() => setOpenDropdown(null)}
                    >
                      View All {link.name}
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {!isLoggedIn ? (
          <div className="flex items-center gap-3 ml-4">
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="border-white bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Login
            </button>

            <Link
              to="/register"
              className="border-2 border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Register
            </Link>
          </div>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              setIsLoggedIn(false);
              window.location.href = "/";
            }}
            className="ml-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Logout
          </button>
        )}
      </nav>

      <div className="md:hidden relative z-[100]">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-3 text-blue-900 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="fixed inset-0 z-[9999] bg-white overflow-y-auto pt-[90px]"
          >
            <div className="p-6 flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-blue-700 transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}

              {!isLoggedIn ? (
                <div className="flex flex-col gap-4 pt-8 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setIsLoginModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl shadow-md hover:bg-blue-700 transition"
                  >
                    Login
                  </button>

                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="border-2 border-blue-600 text-blue-600 font-semibold py-4 px-8 rounded-xl text-center hover:bg-blue-600 hover:text-white transition"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <button
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    setIsLoggedIn(false);
                    setMobileMenuOpen(false);
                    window.location.href = "/";
                  }}
                  className="bg-red-600 text-white font-semibold py-4 px-8 rounded-xl shadow-md hover:bg-red-700 transition"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default NavLinks;