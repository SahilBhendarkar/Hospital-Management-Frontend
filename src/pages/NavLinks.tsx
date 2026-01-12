import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import LoginModal from "./auth/LoginModal";

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
    if (mobileMenuOpen) {
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
      <nav
        ref={navRef}
        className="hidden md:flex items-center gap-8 lg:gap-10"
        aria-label="Primary navigation"
      >
        {links.map((link) => (
          <div
            key={link.name}
            className="relative"
            onMouseEnter={() => setOpenDropdown(link.name)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              to={link.url}
              aria-haspopup={!!link.dropdown}
              aria-expanded={openDropdown === link.name}
              className={`relative text-lg font-medium pb-1 transition-colors duration-300 ${
                location.pathname === link.url
                  ? "text-blue-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              {link.name}
            </Link>

            {link.dropdown && openDropdown === link.name && (
              <div
                className="absolute left-0 top-full mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
                role="menu"
              >
                {link.dropdown.map((item) => (
                  <Link
                    key={item.url}
                    to={item.url}
                    role="menuitem"
                    className="block px-6 py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {!isLoggedIn ? (
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full shadow-md transition"
            aria-label="Open login modal"
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              setIsLoggedIn(false);
              window.location.href = "/";
            }}
            className="ml-4 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-full shadow-md transition"
            aria-label="Logout"
          >
            Logout
          </button>
        )}
      </nav>

      <div className="md:hidden relative z-[100]">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-3 text-blue-900"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="fixed inset-x-0 top-[72px] bottom-0 bg-white shadow-2xl overflow-y-auto z-[9999]"
            role="dialog"
            aria-modal="true"
          >
            <div className="p-6 flex flex-col gap-6">
              {links.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.name ? null : link.name)
                        }
                        className="w-full text-left text-lg font-medium text-gray-800 py-2 flex justify-between"
                        aria-expanded={openDropdown === link.name}
                      >
                        {link.name}
                        <span>{openDropdown === link.name ? "▲" : "▼"}</span>
                      </button>

                      {openDropdown === link.name && (
                        <div className="pl-6 flex flex-col gap-3 py-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.url}
                              to={item.url}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-gray-600 hover:text-blue-700"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.url}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-gray-800 py-2 block"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-6 pt-6 border-t">
                {!isLoggedIn ? (
                  <button
                    onClick={() => {
                      setIsLoginModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg"
                  >
                    Login
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      localStorage.removeItem("isLoggedIn");
                      setIsLoggedIn(false);
                      setMobileMenuOpen(false);
                      window.location.href = "/";
                    }}
                    className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold text-lg"
                  >
                    Logout
                  </button>
                )}
              </div>
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
