import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "react-icons/si";

const SCROLL_DURATION = 20; // seconds

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then(setSkills)
      .catch(() => setSkills([]));
  }, []);

  // Double array for continuous loop
  const skillsLoop = [...skills, ...skills];

  return (
    <section id="skills" className="w-11/12 mx-auto py-16 bg-base-100  overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        🚀 Technologies & Skills
      </h2>

      <motion.ul
        className="flex gap-8 whitespace-nowrap select-none"
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
              className="flex items-center gap-3 bg-base-300 rounded-xl px-6 py-3 shadow-lg cursor-default"
              title={name}
            >
              <IconComponent size={28} color={color} />
              <span className=" font-semibold text-lg">{name}</span>
            </li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default Skills;
