import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import LoginModal from "./auth/LoginModal";

const NavLinks: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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

        <button
          onClick={() => setIsLoginModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Login
        </button>
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default NavLinks;