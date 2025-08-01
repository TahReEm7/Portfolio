import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Debounce search input to improve performance
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchInput]);

  // Helper to strip emojis/special chars from tech string
  const stripTechName = (techStr) => {
    return techStr
      .replace(/[^a-zA-Z0-9\s.]/g, "") // remove emojis and symbols except dot
      .toLowerCase()
      .trim();
  };

  // Fetch projects on mount
  useEffect(() => {
    fetch("/projectsData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then((data) => {
        const updated = data.map((project) => {
          if (!project.frontend && project.code) {
            project.frontend = project.code;
          }
          return project;
        });
        setProjects(updated);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter projects based on debounced search input
  const filteredProjects = useMemo(() => {
    if (!debouncedSearch.trim()) {
      return projects;
    }

    const filters = debouncedSearch
      .toLowerCase()
      .split(/[\s,]+/)
      .filter(Boolean);

    return projects.filter((project) =>
      project.tech.some((tech) => {
        const cleanTech = stripTechName(tech);
        return filters.some((filter) => cleanTech.includes(filter));
      })
    );
  }, [debouncedSearch, projects]);

  return (
    <section id="projects" className="w-11/12 mx-auto py-10">
      <Helmet>
        <title>Projects || Tahreem</title>
      </Helmet>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🚀 My Projects
      </motion.h2>

      {/* Search input */}
      <div className="mb-10 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search by tech (e.g. React, Firebase)"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="input input-bordered w-full"
          aria-label="Search projects by technology"
        />
        <p className="mt-2 text-sm text-center text-base-content/70">
          Search by one or multiple tech keywords separated by space or comma.
        </p>
      </div>

      {loading ? (
        <p className="text-center">Loading projects...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : filteredProjects.length === 0 ? (
        <p className="col-span-full text-center text-lg text-base-content/60">
          No projects found for the given tech keywords.
        </p>
      ) : (
        <div className="grid gap-12 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group bg-base-100 rounded-2xl shadow-lg overflow-hidden border border-base-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/70 to-transparent"></div>
              </div>

              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-base-content text-sm md:text-base mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary rounded-full gap-2"
                      aria-label={`Visit live site of ${project.title}`}
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}

                  {project.frontend && (
                    <a
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline rounded-full gap-2"
                      aria-label={`View frontend code of ${project.title}`}
                    >
                      <FaGithub /> Frontend
                    </a>
                  )}

                  {project.backend && (
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline rounded-full gap-2"
                      aria-label={`View backend code of ${project.title}`}
                    >
                      <FaGithub /> Backend
                    </a>
                  )}

                  <Link
                    to={`/project/${project.id}`}
                    className="btn btn-sm btn-accent rounded-full gap-2"
                    aria-label={`View details of ${project.title}`}
                  >
                    <FaEye /> View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
