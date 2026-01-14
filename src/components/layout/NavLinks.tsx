import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginModal from "../../modals/LoginModal";

interface NavLinksProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const NavLinks = ({ mobileMenuOpen, setMobileMenuOpen }: NavLinksProps) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

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
    { name: "Gallery", url: "/gallery" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <>
      {/* DESKTOP NAV  */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-10">
        {links.map((link) => (
          <div key={link.name} className="relative group">
            <Link
              to={link.url}
              className={`relative text-lg font-medium pb-2 transition-all duration-300 flex items-center gap-1.5 group-hover:text-blue-700 ${
                location.pathname === link.url
                  ? "text-blue-900"
                  : "text-gray-700"
              }`}
            >
              {link.name}

              {link.dropdown && (
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </Link>

            {/* DROPDOWN */}
            {link.dropdown && (
              <div
                className="
                  absolute left-0 top-full mt-1 w-72
                  bg-white/95 backdrop-blur-xl
                  rounded-2xl shadow-xl border border-white/50
                  overflow-hidden z-50
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-300 ease-out
                  transform scale-95 group-hover:scale-100 origin-top
                "
              >
                <div className="py-3 space-y-0.5">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.url}
                      to={item.url}
                      className={`
                        group/item flex items-center gap-3
                        px-4 py-3 rounded-xl mx-2
                        transition-all duration-200
                        hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50
                        hover:text-blue-900 hover:shadow-sm
                        ${
                          location.pathname === item.url
                            ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-900 shadow-sm border-r-4 border-blue-500"
                            : "text-gray-700"
                        }
                      `}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                      <span className="font-medium tracking-tight">
                        {item.name}
                      </span>
                      <svg
                        className="ml-auto w-4 h-4 text-gray-400 group-hover/item:text-blue-500 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>

                {link.name === "Departments" && (
                  <div className="px-4 pb-4 pt-2">
                    <Link
                      to={link.url}
                      className="
                        w-full block
                        bg-gradient-to-r from-blue-600 to-indigo-600
                        text-white py-3 px-6 rounded-xl
                        font-semibold text-sm uppercase tracking-wide text-center
                        transition-all duration-300
                        hover:from-blue-700 hover:to-indigo-700
                        hover:shadow-lg transform hover:-translate-y-0.5
                      "
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      View All {link.name}
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* LOGIN / LOGOUT */}
        {!isLoggedIn ? (
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="ml-4 border-white bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
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
            className="ml-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Logout
          </button>
        )}
      </nav>

      {/* MOBILE MENU  */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[64px] sm:top-[80px] inset-x-0 bottom-0 bg-white z-[60] overflow-y-auto shadow-lg">
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
              <button
                onClick={() => {
                  setIsLoginModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl shadow-md hover:bg-blue-700 transition"
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
                className="bg-red-600 text-white font-semibold py-4 px-8 rounded-xl shadow-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default NavLinks;
