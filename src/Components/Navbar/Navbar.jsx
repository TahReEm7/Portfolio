import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import ThemeToggle from "../../Context/ThemeContext";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -50;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (location.pathname === "/") {
      const sections = ["home", "about", "contact"];

      const handleScroll = () => {
        const scrollPosition = window.scrollY + 60;

        let current = "home";
        for (let i = 0; i < sections.length; i++) {
          const section = document.getElementById(sections[i]);
          if (section && scrollPosition >= section.offsetTop) {
            current = sections[i];
          }
        }
        setActiveSection(current);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setActiveSection(null);
    }
  }, [location]);

  const linkClass = (section) => {
    if (location.pathname === "/projects") {
      return "hover:text-primary transition cursor-pointer";
    }
    return activeSection === section
      ? "text-primary border-b-2 border-primary pb-1 cursor-pointer"
      : "hover:text-primary transition cursor-pointer";
  };

  return (
    <div className="drawer sticky top-0 z-50 w-full bg-base-100/60 backdrop-blur-md shadow-md">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content w-full">
        <div className="max-w-11/12 mx-auto flex justify-between items-center px-4 py-3 md:py-4">
          {/* Logo */}
          <span
            onClick={() => {
              navigate("/");
              setActiveSection("home");
              scrollToTop();
            }}
            className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary cursor-pointer"
          >
            Tahreem
          </span>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-base font-medium">
            {/* Home */}
            <span
              onClick={() => {
                navigate("/");
                setActiveSection("home");
                scrollToTop();
              }}
              className={linkClass("home")}
            >
              Home
            </span>

            {/* About */}
            <HashLink
              smooth
              to="/#about"
              scroll={scrollWithOffset}
              onClick={() => setActiveSection("about")}
              className={linkClass("about")}
            >
              About
            </HashLink>

            {/* Projects */}
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "hover:text-primary transition"
              }
            >
              Projects
            </NavLink>

            {/* Contact */}
            <HashLink
              smooth
              to="/#contact"
              scroll={scrollWithOffset}
              onClick={() => setActiveSection("contact")}
              className={linkClass("contact")}
            >
              Contact
            </HashLink>

            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <label htmlFor="nav-drawer" className="md:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className="drawer-side z-50">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content space-y-2">
          <div className="flex justify-between items-center mb-4">
            <span
              onClick={() => {
                navigate("/");
                setActiveSection("home");
                scrollToTop();
                document.getElementById("nav-drawer").checked = false;
              }}
              className="text-xl font-bold text-primary cursor-pointer"
            >
              Tahreem.dev
            </span>
            <label
              htmlFor="nav-drawer"
              className="btn btn-sm btn-circle cursor-pointer"
            >
              ✕
            </label>
          </div>

          <li>
            <span
              onClick={() => {
                navigate("/");
                setActiveSection("home");
                scrollToTop();
                document.getElementById("nav-drawer").checked = false;
              }}
              className="rounded hover:bg-base-300 cursor-pointer"
            >
              Home
            </span>
          </li>

          <li>
            <HashLink
              smooth
              to="/#about"
              scroll={scrollWithOffset}
              onClick={() => {
                setActiveSection("about");
                document.getElementById("nav-drawer").checked = false;
              }}
              className="rounded hover:bg-base-300 cursor-pointer"
            >
              About
            </HashLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              onClick={() =>
                (document.getElementById("nav-drawer").checked = false)
              }
              className="rounded hover:bg-base-300"
            >
              Projects
            </NavLink>
          </li>

          <li>
            <HashLink
              smooth
              to="/#contact"
              scroll={scrollWithOffset}
              onClick={() => {
                setActiveSection("contact");
                document.getElementById("nav-drawer").checked = false;
              }}
              className="rounded hover:bg-base-300 cursor-pointer"
            >
              Contact
            </HashLink>
          </li>

          <div className="mt-4">
            <ThemeToggle />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
