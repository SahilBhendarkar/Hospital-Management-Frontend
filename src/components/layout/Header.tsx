import { useEffect, useState } from "react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Menu,
  X,
} from "lucide-react";

import hospitalLogo
  from "../../assets/images/hospital.png";

import {
  IconPhone,
  IconMail,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

import { useAppDispatch, useAppSelector }
  from "../../store/store";

import { logout }
  from "../../store/slices/authSlice";

const NAV_LINKS = [

  {
    name: "Home",
    path: "/"
  },

  {
    name: "Departments",
    path: "/departments"
  },

  {
    name: "Doctors",
    path: "/doctors"
  },

  {
    name: "Gallery",
    path: "/gallery"
  },

  {
    name: "Health Plans",
    path: "/health-plans"
  },

  {
    name: "Contact",
    path: "/contact"
  },
];

const Header = () => {

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { isAuthenticated } =
    useAppSelector(
      (state) => state.auth
    );

  // SCROLL EFFECT
  useEffect(() => {

    const handleScroll = () => {

      setScrolled(
        window.scrollY > 20
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  // LOGOUT
  const handleLogout = () => {

    // CLEAR REDUX
    dispatch(logout());

    // CLEAR STORAGE
    localStorage.removeItem("user");

    localStorage.removeItem("isLoggedIn");

    // CLOSE MENU
    setMobileMenuOpen(false);

    // REDIRECT HOME
    navigate("/");

    // REFRESH UI
    window.location.reload();
  };

  return (

    <header
      className={`
        sticky top-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white"
        }
      `}
    >

      {/* TOP BAR */}
      <div
        className="
          hidden lg:flex
          bg-blue-900
          text-white
          text-sm
          px-8 py-2
          justify-between
          items-center
        "
      >

        <div className="flex gap-6">

          <span className="flex items-center gap-2">
            <IconPhone size={14} />
            +91-9099433366
          </span>

          <span className="flex items-center gap-2">
            <IconMail size={14} />
            ruganalaya@gmail.com
          </span>

        </div>

        <div className="flex gap-4">

          <IconBrandFacebook
            size={18}
            className="cursor-pointer"
          />

          <IconBrandTwitter
            size={18}
            className="cursor-pointer"
          />

          <IconBrandYoutube
            size={18}
            className="cursor-pointer"
          />

          <IconBrandWhatsapp
            size={18}
            className="cursor-pointer"
          />

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-20
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}
        <Link
          to="/"
          className="
            flex items-center gap-4
          "
        >

          <img
            src={hospitalLogo}
            alt="Hospital Logo"
            className="
              h-14
              w-auto
            "
          />

          <div>

            <h1
              className="
                text-2xl
                font-bold
                text-blue-900
              "
            >
              Hospital UI
            </h1>

            <p
              className="
                text-xs
                text-gray-500
              "
            >
              Partners in Quality Healthcare
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className="
            hidden lg:flex
            items-center gap-8
          "
        >

          {NAV_LINKS.map((link) => {

            const isActive =
              location.pathname ===
              link.path;

            return (

              <Link
                key={link.name}
                to={link.path}
                className={`
                  relative
                  font-medium
                  transition-all duration-200
                  hover:text-blue-900

                  ${
                    isActive
                      ? "text-blue-900"
                      : "text-gray-700"
                  }
                `}
              >

                {link.name}

                {isActive && (

                  <motion.div
                    layoutId="navbar-indicator"
                    className="
                      absolute
                      -bottom-2 left-0
                      w-full h-1
                      bg-blue-900
                      rounded-full
                    "
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div
          className="
            hidden lg:flex
            items-center gap-4
          "
        >

          {!isAuthenticated ? (

            <button
              onClick={() =>
                navigate("/login")
              }
              className="
                px-6 py-3
                rounded-full
                bg-blue-900
                hover:bg-blue-800
                text-white
                font-semibold
                transition-all duration-300
                shadow-md hover:shadow-xl
              "
            >
              Login
            </button>

          ) : (

            <button
              onClick={handleLogout}
              className="
                px-6 py-3
                rounded-full
                bg-red-600
                hover:bg-red-700
                text-white
                font-semibold
                transition-all duration-300
                shadow-md hover:shadow-xl
              "
            >
              Logout
            </button>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() =>
            setMobileMenuOpen(
              !mobileMenuOpen
            )
          }
          className="
            lg:hidden
            text-blue-900
          "
        >

          {
            mobileMenuOpen
              ? <X size={28} />
              : <Menu size={28} />
          }

        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}

            animate={{
              opacity: 1,
              height: "auto",
            }}

            exit={{
              opacity: 0,
              height: 0,
            }}

            className="
              lg:hidden
              bg-white
              border-t
              shadow-xl
            "
          >

            <div
              className="
                px-6 py-6
                flex flex-col gap-5
              "
            >

              {NAV_LINKS.map((link) => (

                <Link
                  key={link.name}
                  to={link.path}

                  onClick={() =>
                    setMobileMenuOpen(false)
                  }

                  className="
                    text-gray-700
                    font-medium
                    hover:text-blue-900
                  "
                >
                  {link.name}
                </Link>
              ))}

              {!isAuthenticated ? (

                <button
                  onClick={() => {

                    navigate("/login");

                    setMobileMenuOpen(false);
                  }}

                  className="
                    bg-blue-900
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                  "
                >
                  Login
                </button>

              ) : (

                <button
                  onClick={handleLogout}

                  className="
                    bg-red-600
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                  "
                >
                  Logout
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;