import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaLaptopCode, FaCheckCircle } from "react-icons/fa";

const experienceData = [
  {
    role: "Junior Frontend Developer",
    company: "Empty Advertising",
    location: "Montreal, Quebec, Canada (Remote)",
    duration: "Feb 2026 – Present",
    type: "Full-time",
    description:
      "Working as a Junior Web Developer building modern, highly scalable client-facing web applications and marketing platforms.",
    highlights: [
      "Developing production frontend interfaces using Next.js, React, and modern web architectures.",
      "Collaborating in a remote international team environment using Git version control and code reviews.",
      "Building responsive, pixel-perfect user interfaces optimized for speed and SEO.",
    ],
    tech: ["Next.js", "Vite", "JavaScript", "Tailwind CSS", "Git"],
  },
  {
    role: "Junior Frontend Developer",
    company: "Devs On Steroids LLC",
    location: "Jamaica, New York, United States (Remote)",
    duration: "Feb 2026 – Present",
    type: "Part-time",
    description:
      "Delivered a production-ready frontend project during my internship and successfully transitioned into a Junior Web Developer role.",
    highlights: [
      "Engineering responsive and accessible web applications using React, JavaScript, and Tailwind CSS.",
      "Consistently delivering production-ready code for client-facing software applications.",
      "Collaborating closely with senior engineers and UI/UX designers across international teams.",
    ],
    tech: ["Next.js", "Vite", "JavaScript", "Tailwind CSS", "REST API", "Git"],
  },
  {
    role: "Frontend Web Developer Intern",
    company: "Devs On Steroids LLC",
    location: "Jamaica, New York, United States (Remote)",
    duration: "Nov 2025 – Feb 2026",
    type: "Internship",
    description:
      "Contributed to building modern, responsive web applications and gained hands-on experience with real-world projects using the latest web technologies.",
    highlights: [
      "Built reusable component libraries and optimized frontend user interfaces.",
      "Learned industry-standard frontend workflows, code organization, and Git collaboration.",
      "Assisted senior developers in fixing UI bugs and ensuring cross-browser compatibility.",
    ],
    tech: ["Next.js", "JavaScript", "HTML5", "CSS3", "Git"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-11/12 mx-auto py-16 bg-base-100 relative overflow-hidden">
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
          💼 Professional Experience
        </h2>
        <p className="text-base-content/80 text-lg max-w-2xl mx-auto">
          My real-world software engineering experience, roles in international remote teams, and technical achievements.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Connecting Line */}
        <div className="hidden md:block absolute left-8 top-4 bottom-4 w-1 bg-gradient-to-b from-primary via-secondary to-transparent rounded-full" />

        <div className="space-y-10">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row gap-6 md:pl-20 items-start group"
            >
              {/* Timeline Icon Badge */}
              <div className="hidden md:flex absolute left-4 top-2 -translate-x-1/2 w-9 h-9 rounded-full bg-base-100 border-2 border-primary text-primary items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
                <FaBriefcase className="text-sm" />
              </div>

              {/* Card Container */}
              <div className="w-full bg-base-200/70 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-base-300 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-base-300 pb-4">
                  <div>
                    <span className="badge badge-primary badge-outline text-xs font-semibold uppercase tracking-wider mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl font-bold text-base-content group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/70 mt-1">
                      <span className="font-semibold text-secondary flex items-center gap-1.5">
                        <FaLaptopCode /> {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 px-3.5 py-1.5 rounded-full w-fit shrink-0">
                    <FaCalendarAlt />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <p className="text-base-content/90 text-base leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div className="mb-6 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/70 mb-2">
                    Key Highlights & Achievements:
                  </h4>
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-base-content/85">
                      <FaCheckCircle className="text-primary mt-1 shrink-0 text-xs" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-base-300">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-base-100 text-primary hover:bg-primary hover:text-primary-content font-semibold text-xs px-3 py-1 rounded-full border border-base-300 shadow-sm transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
