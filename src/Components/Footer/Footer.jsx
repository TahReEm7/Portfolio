import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -50;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="bg-base-300/80 backdrop-blur-md pt-12 pb-8 px-6 md:px-20 border-t border-base-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-base-content/10 pb-10">
        {/* Brand */}
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Tahreem
          </h1>
          <p className="text-sm text-base-content/80 leading-relaxed">
            Building modern, high-performance web applications with clean code & thoughtful UI/UX design.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold text-base-content mb-4 uppercase tracking-wider text-xs text-primary">
            Quick Navigation
          </h2>
          <ul className="space-y-2.5 text-sm text-base-content/80">
            <li>
              <HashLink smooth to="/#about" scroll={scrollWithOffset} className="hover:text-primary transition-colors">
                About Me
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#skills" scroll={scrollWithOffset} className="hover:text-primary transition-colors">
                Skills & Tech
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#experience" scroll={scrollWithOffset} className="hover:text-primary transition-colors">
                Experience
              </HashLink>
            </li>
            <li>
              <Link to="/projects" className="hover:text-primary transition-colors">
                Projects Showcase
              </Link>
            </li>
            <li>
              <HashLink smooth to="/#contact" scroll={scrollWithOffset} className="hover:text-primary transition-colors">
                Contact Me
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold text-base-content mb-4 uppercase tracking-wider text-xs text-primary">
            Get In Touch
          </h2>
          <div className="space-y-2 text-sm text-base-content/80">
            <p><span className="font-semibold text-base-content">Email:</span> tahreem17.dev@gmail.com</p>
            <p><span className="font-semibold text-base-content">Location:</span> Dhaka, Bangladesh</p>
            <p><span className="font-semibold text-base-content">Status:</span> Open for opportunities</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold text-base-content mb-4 uppercase tracking-wider text-xs text-primary">
            Connect With Me
          </h2>
          <div className="flex space-x-3">
            <a
              href="https://github.com/TahReEm7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-base-200 p-3 rounded-xl text-base-content hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-sm"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://linkedin.com/in/tahreemhossain-cr07"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-base-200 p-3 rounded-xl text-base-content hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn className="text-lg" />
            </a>
            <a
              href="mailto:tahreem17.dev@gmail.com"
              className="bg-base-200 p-3 rounded-xl text-base-content hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 shadow-sm"
              aria-label="Send Email"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-base-content/60 text-sm mt-8">
        &copy; {new Date().getFullYear()} Tahreem Hossain. Crafted with React & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
