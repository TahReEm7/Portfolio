import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import NoProjects from "../../Components/Error/NoProjects";

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
    <NoProjects></NoProjects>
    );

  return (
    <motion.section
      className="max-w-4xl mx-auto p-6 md:p-12 bg-base-100 rounded-xl shadow-lg my-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-ghost text-primary flex items-center gap-2 mb-8"
      >
        <FaArrowLeft /> Back to Projects
      </button>

      {/* Project Title & Brief */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-primary mb-2">{project.title}</h1>
        <p className="text-lg italic text-base-content/80">{project.brief}</p>
      </header>

      {/* Project Image */}
      <div className="relative rounded-lg overflow-hidden shadow-md mb-10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 md:h-96 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Project Description */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-primary">Description</h2>
        <p className="text-base md:text-lg text-base-content leading-relaxed">{project.description}</p>
      </section>

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-primary">Challenges Faced</h2>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-base-content">
            {project.challenges.map((challenge, idx) => (
              <li key={idx}>{challenge}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Role & Duration */}
      <section className="mb-10 flex flex-col md:flex-row gap-6 text-base-content text-base md:text-lg">
        <div>
          <h3 className="font-semibold text-primary mb-1">Role</h3>
          <p>{project.role}</p>
        </div>
        <div>
          <h3 className="font-semibold text-primary mb-1">Duration</h3>
          <p>{project.duration}</p>
        </div>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-primary">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-base-content">
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Technology Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-1 rounded-full bg-primary/20 text-primary font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-6">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg gap-3 flex items-center"
        >
          <FaExternalLinkAlt size={20} />
          Live Demo
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-lg gap-3 flex items-center"
        >
          <FaGithub size={20} />
          Source Code
        </a>
      </div>
    </motion.section>
  );
};

export default ProjectDetails;
