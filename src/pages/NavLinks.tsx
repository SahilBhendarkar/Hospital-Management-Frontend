import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginModal from "./auth/LoginModal";
import { motion } from "framer-motion";


const NavLinks: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);


  const links = [
    { name: "Home", url: "/" },
    { name: "Departments", url: "/departments" },
    { name: "Doctors", url: "/doctors" },
    { name: "Appointments", url: "/appointments" },
    { name: "Contact", url: "/contact" },
  ];

  const location = useLocation();

  return (
    <>
      <nav className="flex items-center gap-10">
        {links.map((link) => (
          <Link
            key={link.url}
            to={link.url}
            className={`relative text-lg font-medium transition-colors duration-300 pb-1
              ${location.pathname === link.url
                ? "text-blue-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-600"
                : "text-gray-700 hover:text-blue-900"
              }`}
          >
            {link.name}
          </Link>
        ))}

        {!isLoggedIn && (
          <motion.button
            onClick={() => setIsLoginModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-lg py-3 px-8 rounded-3xl shadow-lg"
          >
            Login
          </motion.button>
        )}

        {isLoggedIn && (
          <motion.button
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              setIsLoggedIn(false);
              window.location.href = "/";
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-red-500 hover:bg-red-600 text-white font-normal text-lg py-3 px-8 rounded-full shadow-lg"
          >
            Logout
          </motion.button>
        )}



      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default NavLinks;