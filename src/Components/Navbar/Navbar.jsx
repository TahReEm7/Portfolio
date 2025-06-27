import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 60; // 60 = navbar height + offset buffer

      let current = "home"; // default
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          if (scrollPosition >= section.offsetTop) {
            current = sections[i];
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Helper to add active classes
  const linkClass = (section) =>
    activeSection === section
      ? "text-primary border-b-2 border-primary pb-1 cursor-pointer"
      : "hover:text-primary transition cursor-pointer";

  return (
    <div className="drawer sticky top-0 z-50 w-full bg-base-100/60 backdrop-blur-md shadow-md">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main content */}
      <div className="drawer-content w-full">
        <div className="max-w-11/12 mx-auto flex justify-between items-center px-4 py-3 md:py-4">
          {/* Logo */}
          <HashLink
            to="/"
            onClick={() => {
              scrollToTop();
              setActiveSection("home");
            }}
            className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary cursor-pointer"
          >
            Tahreem
          </HashLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-base font-medium">
            <HashLink
              to="/"
              scroll={scrollToTop}
              onClick={() => setActiveSection("home")}
              className={linkClass("home")}
            >
              Home
            </HashLink>

            <HashLink
              smooth
              to="/#about"
              scroll={scrollWithOffset}
              onClick={() => setActiveSection("about")}
              className={linkClass("about")}
            >
              About
            </HashLink>

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

          {/* Mobile menu button */}
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

      {/* Drawer menu */}
      <div className="drawer-side z-50">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content space-y-2">
          <div className="flex justify-between items-center mb-4">
            <HashLink
              to="/"
              onClick={() => {
                scrollToTop();
                setActiveSection("home");
                document.getElementById("nav-drawer").checked = false;
              }}
              className="text-xl font-bold text-primary cursor-pointer"
            >
              Tahreem.dev
            </HashLink>
            <label
              htmlFor="nav-drawer"
              className="btn btn-sm btn-circle cursor-pointer"
            >
              ✕
            </label>
          </div>

          <li>
            <HashLink
              to="/"
              scroll={scrollToTop}
              onClick={() => {
                setActiveSection("home");
                document.getElementById("nav-drawer").checked = false;
              }}
              className="rounded hover:bg-base-300 cursor-pointer"
            >
              Home
            </HashLink>
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
