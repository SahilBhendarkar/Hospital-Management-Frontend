import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginModal from "./auth/LoginModal";
import { motion, AnimatePresence } from "framer-motion";

const NavLinks: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: "Appointments", url: "/appointments" },
    { name: "Contact", url: "/contact" },
  ];

  const location = useLocation();

  return (
    <>
      <nav className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <div
            key={link.name}
            className="relative"
            onMouseEnter={() => setOpenDropdown(link.name)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              to={link.url}
              className={`relative text-lg font-medium transition-colors duration-300 pb-1
                ${
                  location.pathname === link.url
                    ? "text-blue-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-600"
                    : "text-gray-700 hover:text-blue-900"
                }`}
            >
              {link.name}
            </Link>

            {link.dropdown && openDropdown === link.name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-4 w-56 bg-white rounded-xl shadow-xl border z-50"
              >
                {link.dropdown.map((item) => (
                  <Link
                    key={item.url}
                    to={item.url}
                    className="block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ))}

        {!isLoggedIn ? (
          <motion.button
            onClick={() => setIsLoginModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-lg py-3 px-8 rounded-3xl shadow-lg"
          >
            Login
          </motion.button>
        ) : (
          <motion.button
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              setIsLoggedIn(false);
              window.location.href = "/";
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-red-500 hover:bg-red-600 text-white text-lg py-3 px-8 rounded-full shadow-lg"
          >
            Logout
          </motion.button>
        )}
      </nav>

      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-blue-900"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-full w-full bg-white shadow-xl border-t z-40"
            >
              <div className="flex flex-col p-6 gap-4">
                {links.map((link) => (
                  <div key={link.name}>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.name ? null : link.name)
                      }
                      className="w-full text-left text-lg font-medium text-gray-800"
                    >
                      {link.name}
                    </button>

                    {link.dropdown && openDropdown === link.name && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
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
                  </div>
                ))}

                {!isLoggedIn ? (
                  <button
                    onClick={() => {
                      setIsLoginModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="mt-4 bg-blue-500 text-white py-3 rounded-xl"
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
                    className="mt-4 bg-red-500 text-white py-3 rounded-xl"
                  >
                    Logout
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default NavLinks;
