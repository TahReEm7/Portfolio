import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity, FaAward } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Sc. in Software Engineering",
    institution: "Daffodil International University",
    duration: "2024 – Present",
    location: "Dhaka, Bangladesh",
    description: "Specializing in full-stack web engineering, object-oriented software design, algorithm design, system architecture, and team project development.",
    achievements: "Active participant in software engineering clubs & coding challenges.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Milestone College",
    duration: "2021 – 2022",
    location: "Dhaka, Bangladesh",
    description: "Studied Science stream focusing on Advanced Mathematics, Physics, Chemistry, and Information & Communication Technology (ICT).",
    achievements: "Graduated with top academic standing and IT club participation.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Annada Government High School",
    duration: "2019 – 2020",
    location: "Brahmanbaria, Bangladesh",
    description: "Completed foundational secondary education with strong analytical grounding in science and computer programming basics.",
    achievements: "Achieved GPA 5.00 in Science stream.",
  },
];

const Education = () => {
  return (
    <section id="education" className="w-11/12 mx-auto py-16 bg-base-100 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
          🎓 Academic Qualification
        </h2>
        <p className="text-base-content/80 text-lg max-w-xl mx-auto">
          My formal educational background and continuous technical learning trajectory.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-base-200/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-base-300 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group"
          >
            {/* Icon Container */}
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-content transition-all duration-300 shadow-md">
              <FaGraduationCap className="text-2xl" />
            </div>

            {/* Content Body */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-2xl font-bold text-base-content group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                  <FaCalendarAlt />
                  {edu.duration}
                </span>
              </div>

              <p className="text-base font-semibold text-secondary flex items-center gap-2 mb-3">
                <FaUniversity className="text-sm" />
                {edu.institution} <span className="text-xs text-base-content/60 font-normal">({edu.location})</span>
              </p>

              <p className="text-base-content/80 text-sm md:text-base leading-relaxed mb-3">
                {edu.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-lg w-fit">
                <FaAward className="text-sm" />
                <span>{edu.achievements}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
