import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginModal from "./auth/LoginModal";
import { motion } from "framer-motion";


const NavLinks: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);


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
      <nav className="flex items-center gap-10">
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
          ${location.pathname === link.url
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