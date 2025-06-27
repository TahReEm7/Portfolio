import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((proj) => proj.id === id);
        setProject(found || null);
        setLoading(false);
      })
      .catch(() => {
        setProject(null);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg">Loading project details...</p>
      </div>
    );

  if (!project)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-primary gap-2"
        >
          <FaArrowLeft /> Go Back
        </button>
      </div>
    );

  return (
    <motion.section
      className="w-11/12 max-w-4xl mx-auto py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => navigate(-1)}
        className="btn btn-outline mb-8 flex items-center gap-2"
      >
        <FaArrowLeft /> Back
      </button>

      <div className="rounded-xl shadow-lg overflow-hidden bg-base-100 border border-base-300">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-base-content mb-6">{project.description}</p>

          <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-6">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary gap-2"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline gap-2"
            >
              <FaGithub /> Source Code
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetails;
