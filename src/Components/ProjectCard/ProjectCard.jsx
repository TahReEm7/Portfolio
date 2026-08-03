import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, index }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-base-200/70 backdrop-blur-md rounded-2xl border border-base-300 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 overflow-hidden flex flex-col justify-between"
    >
      {/* Top Image Container */}
      <div>
        <div className="relative h-60 w-full overflow-hidden bg-base-300">
          {!imageError ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-base-300 to-secondary/20 text-base-content/60">
              <FaCode className="text-4xl text-primary mb-2" />
              <span className="text-sm font-semibold">{project.title}</span>
            </div>
          )}

          {/* Bottom Gradient Fade for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-base-200 via-transparent to-transparent opacity-80" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            {project.role && (
              <span className="badge badge-primary font-semibold text-xs shadow-md px-3 py-2">
                {project.role}
              </span>
            )}
            {project.duration && (
              <span className="badge bg-base-100/90 text-base-content/90 backdrop-blur-md font-semibold text-xs shadow-md px-3 py-2 gap-1">
                <FaCalendarAlt className="text-primary text-[10px]" /> {project.duration}
              </span>
            )}
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-base-content group-hover:text-primary transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-base-content/80 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.brief || project.description}
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech &&
              project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-base-100 text-primary font-semibold text-xs px-3 py-1 rounded-full border border-base-300 shadow-2xl"
                >
                  {t}
                </span>
              ))}
          </div>
        </div>
      </div>

      {/* Action Footer Buttons */}
      <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-base-300/50 mt-auto">
        <div className="flex items-center gap-2 flex-wrap">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary rounded-full gap-1.5 shadow-sm hover:shadow-primary/30"
              aria-label={`Live Demo of ${project.title}`}
            >
              <FaExternalLinkAlt className="text-xs" /> Live Demo
            </a>
          )}

          {project.frontend && (
            <a
              href={project.frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline rounded-full gap-1.5"
              aria-label={`Frontend Code of ${project.title}`}
            >
              <FaGithub className="text-sm" /> Frontend
            </a>
          )}

          {project.backend && (
            <a
              href={project.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline rounded-full gap-1.5"
              aria-label={`Backend Code of ${project.title}`}
            >
              <FaGithub className="text-sm" /> Backend
            </a>
          )}
        </div>

        <Link
          to={`/project/${project.id}`}
          className="btn btn-sm btn-accent rounded-full gap-1.5 ml-auto shadow-sm"
          aria-label={`View Details of ${project.title}`}
        >
          <FaEye className="text-xs" /> Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
