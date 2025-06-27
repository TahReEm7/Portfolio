import { Link } from "react-router";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { HashLink } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -50;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};
const Hero = () => {
  return (
    <section className="w-11/12 mx-auto px-6 md:px-12 py-10 md:py-16 bg-base-100">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">

        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Hi, I'm Tahreem Hossain 👋
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-accent mb-2">
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

          <p className="text-base md:text-lg mt-4 mb-6 max-w-xl mx-auto md:mx-0 text-base-content">
            I build full-stack apps with clean code, intuitive UI, and seamless user experience.
          </p>

          <div className="flex justify-center md:justify-start flex-col md:flex-row gap-6">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/projects"
                className="btn btn-primary btn-lg px-8 rounded-full"
              >
                🚀 View Projects
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <HashLink
                to="#contact"
                scroll={scrollWithOffset}
                className="btn btn-outline btn-lg px-8 rounded-full"
              >
                📬 Contact Me
              </HashLink>
            </motion.div>
          </div>
        </motion.div>

        {/* Image or Illustration */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://i.ibb.co/Y0zYq1R/profile-pic.png"
            alt="Tahreem Hossain"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl object-cover border-4 border-primary"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
