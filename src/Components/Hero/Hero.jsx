import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { HashLink } from "react-router-hash-link";
import { FaRocket, FaPaperPlane, FaCode, FaCheckCircle } from "react-icons/fa";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -50;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const Hero = () => {
  return (
    <section id="home" className="w-11/12 mx-auto px-4 md:px-8 py-12 md:py-24 bg-base-100 relative overflow-hidden">
      {/* Ambient background glow elements */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 relative z-10">

        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Tahreem Hossain
            </span>{" "}
            👋
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent mb-6 h-10 flex items-center justify-center md:justify-start">
            <Typewriter
              words={[
                "MERN Stack Developer 💻",
                "Software Engineering Student 🎓",
                "Clean Code Enthusiast ✨",
                "UI/UX Focused Developer 🎨",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-base-content/80 max-w-xl mx-auto md:mx-0 leading-relaxed mb-8">
            Passionate full-stack developer dedicated to building scalable web applications, clean responsive interfaces, and robust backend architectures.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="btn btn-primary btn-lg px-8 rounded-full shadow-lg hover:shadow-primary/30 flex items-center gap-2"
              >
                <FaRocket /> View Projects
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <HashLink
                to="/#contact"
                scroll={scrollWithOffset}
                className="btn btn-outline btn-lg px-8 rounded-full border-2 hover:bg-base-200 flex items-center gap-2"
              >
                <FaPaperPlane /> Contact Me
              </HashLink>
            </motion.div>
          </div>
        </motion.div>

        {/* Image / Illustration with Glassmorphism Badges */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end relative"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative max-w-md w-full">
            {/* Glowing border ring */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-lg group-hover:opacity-50 transition duration-500" />

            <div className="relative bg-base-200/80 backdrop-blur-md rounded-2xl p-4 border border-base-300 shadow-2xl">
              <img
                src="https://www.altamira.ai/wp-content/uploads/2019/09/Full-Stack-DeveloperArtboard-1.png"
                alt="Tahreem Hossain - Full Stack Developer"
                className="w-full h-auto rounded-xl transform hover:scale-[1.02] transition-transform duration-500 object-cover"
              />
            </div>

            {/* Floating Glassmorphism Badge 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-base-100/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-base-300 shadow-xl flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                <FaCode />
              </div>
              <div>
                <p className="text-xs text-base-content/70">Expertise</p>
                <p className="text-xs font-bold text-base-content">MERN Stack</p>
              </div>
            </motion.div>

            {/* Floating Glassmorphism Badge 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 2, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-base-100/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-base-300 shadow-xl flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center">
                <FaCheckCircle />
              </div>
              <div>
                <p className="text-xs text-base-content/70">Focus</p>
                <p className="text-xs font-bold text-base-content">Clean Code</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
