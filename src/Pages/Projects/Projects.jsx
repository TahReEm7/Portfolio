import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaSearch, FaTimes, FaCode } from "react-icons/fa";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Debounce search input
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 250);
    return () => clearTimeout(handler);
  }, [searchInput]);

  const stripTechName = (techStr) => {
    return techStr
      .replace(/[^a-zA-Z0-9\s.]/g, "")
      .toLowerCase()
      .trim();
  };

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

  const filteredProjects = useMemo(() => {
    if (!debouncedSearch.trim()) {
      return projects;
    }

    const filters = debouncedSearch
      .toLowerCase()
      .split(/[\s,]+/)
      .filter(Boolean);

    return projects.filter((project) => {
      const matchTitle = filters.some((f) => project.title.toLowerCase().includes(f));
      const matchBrief = filters.some((f) => (project.brief || "").toLowerCase().includes(f));
      const matchTech = project.tech && project.tech.some((tech) => {
        const cleanTech = stripTechName(tech);
        return filters.some((filter) => cleanTech.includes(filter));
      });
      return matchTitle || matchBrief || matchTech;
    });
  }, [debouncedSearch, projects]);

  return (
    <section id="projects" className="w-11/12 mx-auto py-12 md:py-16 min-h-screen">
      <Helmet>
        <title>Projects Showcase || Tahreem</title>
      </Helmet>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
          🚀 My Projects Showcase
        </h1>
        <p className="text-base-content/80 text-base md:text-lg">
          Explore my complete collection of full-stack MERN applications, web tools, and software engineering projects.
        </p>
      </motion.div>

      {/* Search Bar Container */}
      <div className="mb-12 max-w-lg mx-auto relative">
        <div className="relative flex items-center">
          <FaSearch className="absolute left-4 text-base-content/50 text-lg pointer-events-none" />
          <input
            type="text"
            placeholder="Search projects by tech (e.g. React, MongoDB, Firebase)..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="input input-bordered w-full pl-12 pr-10 py-3 rounded-full bg-base-200/70 border-base-300 focus:border-primary focus:outline-none shadow-md transition-all text-sm md:text-base"
            aria-label="Search projects by technology"
          />
          {searchInput && (
            <button
              onClick={() => setSearchInput("")}
              className="absolute right-4 text-base-content/50 hover:text-primary transition-colors"
              title="Clear search"
            >
              <FaTimes />
            </button>
          )}
        </div>
        <p className="mt-2 text-xs text-center text-base-content/60">
          Tip: You can search by technology names like <span className="font-semibold text-primary">React</span>, <span className="font-semibold text-secondary">Node.js</span>, or project titles.
        </p>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <span className="loading loading-spinner loading-lg text-primary mb-4" />
          <p className="text-base-content/70">Loading projects collection...</p>
        </div>
      ) : error ? (
        <div className="text-center py-16 bg-base-200/50 rounded-2xl border border-red-500/20 max-w-md mx-auto">
          <p className="text-red-500 font-semibold mb-2">Failed to load projects</p>
          <p className="text-sm text-base-content/70">{error}</p>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-base-200/50 rounded-2xl border border-base-300 max-w-md mx-auto">
          <FaCode className="text-4xl text-base-content/40 mx-auto mb-3" />
          <p className="text-lg font-bold text-base-content mb-1">No Projects Found</p>
          <p className="text-sm text-base-content/70 mb-4">
            No projects matched your search criteria "{searchInput}".
          </p>
          <button
            onClick={() => setSearchInput("")}
            className="btn btn-sm btn-primary rounded-full px-6"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id || index} project={project} index={index} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
