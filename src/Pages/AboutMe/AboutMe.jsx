import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaCode, FaGraduationCap, FaCheckDouble, FaRocket } from "react-icons/fa";

const stats = [
  {
    icon: <FaRocket className="text-primary text-2xl" />,
    value: "10+",
    label: "Projects Built",
    description: "Full-stack & responsive web applications",
  },
  {
    icon: <FaCode className="text-secondary text-2xl" />,
    value: "MERN Stack",
    label: "Core Specialization",
    description: "MongoDB, Express, React, Node.js",
  },
  {
    icon: <FaGraduationCap className="text-accent text-2xl" />,
    value: "B.Sc. SE",
    label: "Education Focus",
    description: "Software Engineering at DIU",
  },
  {
    icon: <FaCheckDouble className="text-emerald-500 text-2xl" />,
    value: "100%",
    label: "Dedication",
    description: "Clean code & modern design standards",
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="w-11/12 mx-auto py-16 bg-base-100">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
          👨‍💻 About Me
        </h2>
        <p className="text-lg md:text-xl text-base-content/90 leading-relaxed max-w-3xl mx-auto">
          I'm <span className="text-secondary font-semibold">Tahreem Hossain</span>, a{" "}
          <span className="text-accent font-semibold">Software Engineering student</span> at Daffodil International University and a passionate{" "}
          <span className="text-primary font-semibold">MERN Stack Developer</span> driven to build reliable, efficient, and aesthetic software.
        </p>
      </motion.div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-base-200/80 backdrop-blur-md p-6 rounded-2xl border border-base-300 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-base-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
              {stat.icon}
            </div>
            <h3 className="text-2xl font-extrabold text-base-content mb-1">{stat.value}</h3>
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{stat.label}</p>
            <p className="text-xs text-base-content/70">{stat.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Info Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        {/* Left: Detailed Summary */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-base-200/70 p-8 rounded-2xl border border-base-300 shadow-md flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span>🚀 Who I Am</span>
            </h3>
            <p className="text-base-content/80 leading-relaxed mb-4">
              I design and develop modern full-stack web applications with a focus on intuitive user interface, component modularity, and optimized database design.
            </p>
            <p className="text-base-content/80 leading-relaxed">
              I thrive in fast-paced collaborative environments, continuously learning modern frameworks and industry practices to deliver high-quality software solutions.
            </p>
          </div>
        </motion.div>

        {/* Right: Soft & Professional Skills */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-base-200/70 p-8 rounded-2xl border border-base-300 shadow-md"
        >
          <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
            <span>✨ Professional Strengths</span>
          </h3>
          <ul className="text-base-content/90 space-y-3">
            {[
              "Strong communication & active technical listening",
              "Agile team collaboration & quick adaptability",
              "Time management & project accountability",
              "Critical thinking & structured analytical problem-solving",
              "Commitment to code quality & continuous learning",
            ].map((skill, index) => (
              <li key={index} className="flex items-center gap-3 text-sm md:text-base">
                <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Resume CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resume.pdf"
          download="Tahreem_Hossain_Resume"
          className="btn btn-primary btn-lg px-8 rounded-full shadow-lg hover:shadow-primary/30 inline-flex items-center gap-3"
        >
          <FaDownload /> Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AboutMe;
