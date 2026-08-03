import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "react-icons/si";

const SCROLL_DURATION = 25; // seconds

const defaultSkills = [
  { name: "JavaScript", icon: "SiJavascript", color: "#f7df1e", category: "Languages" },
  { name: "React", icon: "SiReact", color: "#61dafb", category: "Frontend" },
  { name: "Node.js", icon: "SiNodedotjs", color: "#339933", category: "Backend" },
  { name: "Express", icon: "SiExpress", color: "#000000", category: "Backend" },
  { name: "MongoDB", icon: "SiMongodb", color: "#47a248", category: "Database" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#38b2ac", category: "Frontend" },
  { name: "Firebase", icon: "SiFirebase", color: "#ffca28", category: "Tools & Cloud" },
  { name: "Git", icon: "SiGit", color: "#f05032", category: "Tools" },
  { name: "HTML5", icon: "SiHtml5", color: "#e34f26", category: "Frontend" },
  { name: "CSS3", icon: "SiCss3", color: "#264de4", category: "Frontend" },
  { name: "Framer Motion", icon: "SiFramer", color: "#0055ff", category: "Animation" },
];

const Skills = () => {
  const [skills, setSkills] = useState(defaultSkills);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setSkills(data);
        }
      })
      .catch(() => setSkills(defaultSkills));
  }, []);

  const categories = ["All", "Frontend", "Backend", "Tools & Database"];

  const filteredSkills = skills.filter((item) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Frontend")
      return ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"].includes(item.name);
    if (activeCategory === "Backend") return ["Node.js", "Express"].includes(item.name);
    if (activeCategory === "Tools & Database")
      return ["MongoDB", "Firebase", "Git"].includes(item.name);
    return true;
  });

  // Double array for infinite marquee scroll loop
  const skillsLoop = [...skills, ...skills];

  return (
    <section id="skills" className="w-11/12 mx-auto py-16 bg-base-100 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
          ⚡ Technologies & Skills
        </h2>
        <p className="text-base-content/80 text-lg max-w-xl mx-auto">
          Modern languages, frameworks, databases, and tools I use to build scalable web applications.
        </p>
      </motion.div>

      {/* Infinite Animated Marquee with Side Fade Mask */}
      <div className="relative w-full overflow-hidden mb-16 py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.ul
          className="flex gap-6 whitespace-nowrap select-none w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: SCROLL_DURATION,
              ease: "linear",
            },
          }}
        >
          {skillsLoop.map(({ name, icon, color }, i) => {
            const IconComponent = Icons[icon] || Icons.SiCode;
            return (
              <li
                key={i}
                className="flex items-center gap-3 bg-base-200/90 backdrop-blur-md rounded-2xl px-6 py-3.5 shadow-md border border-base-300 hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-default"
                title={name}
              >
                <IconComponent size={26} color={color} />
                <span className="font-bold text-base text-base-content">{name}</span>
              </li>
            );
          })}
        </motion.ul>
      </div>

      {/* Filter Tabs & Grid View */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-content shadow-md shadow-primary/20"
                  : "bg-base-200 text-base-content/70 hover:bg-base-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredSkills.map(({ name, icon, color }, i) => {
            const IconComponent = Icons[icon] || Icons.SiCode;
            return (
              <motion.div
                key={name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 bg-base-200/60 p-4 rounded-xl border border-base-300 shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
              >
                <div className="p-2 rounded-lg bg-base-100 shadow-inner">
                  <IconComponent size={24} color={color} />
                </div>
                <span className="font-semibold text-sm text-base-content">{name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
