import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRocket, FaArrowRight } from "react-icons/fa";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projectsData.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.slice(0, 4)); // Top 4 featured projects for home
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load featured projects", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="w-11/12 mx-auto py-16 bg-base-100 relative overflow-hidden">
      {/* Background Accent Blur */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-primary/20"
        >
          <FaRocket /> Portfolio Highlights
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
          🚀 Featured Projects
        </h2>
        <p className="text-base-content/80 text-lg max-w-xl mx-auto">
          A selection of full-stack web applications, interactive tools, and user-centered digital experiences I've built.
        </p>
      </motion.div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-spinner loading-lg text-primary" />
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id || index} project={project} index={index} />
          ))}
        </div>
      )}

      {/* View All Projects CTA */}
      <div className="text-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
          <Link
            to="/projects"
            className="btn btn-primary btn-lg px-8 rounded-full shadow-lg hover:shadow-primary/30 gap-2"
          >
            Explore All Projects <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
