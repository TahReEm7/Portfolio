import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import GlobalLoader from "../../Components/Loader/Loader";
import NoProjects from "../../Components/Error/NoProjects";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projectsData.json")
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-50 via-white to-sky-50">
        <GlobalLoader />
      </div>
    );
  }

  if (!project) return <NoProjects />;

  return (
    <motion.section
      className="px-4 md:px-10 py-8 md:py-12 bg-base-100"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Helmet>
        <title>{project.title} || Tahreem</title>
      </Helmet>

      <button
        onClick={() => navigate(-1)}
        className="btn btn-ghost text-primary flex items-center gap-2 mb-6"
      >
        <FaArrowLeft /> Back to Projects
      </button>

      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-primary mb-2"
        custom={1}
        variants={fadeIn}
      >
        {project.title}
      </motion.h1>

      <motion.p
        className="text-lg italic text-base-content/70 mb-8"
        custom={2}
        variants={fadeIn}
      >
        {project.brief}
      </motion.p>

      <div className="grid md:grid-cols-2 gap-10 p-6">
        {/* LEFT */}
        <div className="space-y-8">
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-md"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeIn}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>

          <motion.section custom={4} variants={fadeIn}>
            <h2 className="text-2xl font-semibold text-primary mb-2">Description</h2>
            <p className="text-base md:text-lg text-base-content leading-relaxed">
              {project.description}
            </p>
          </motion.section>

          {/* TECH STACK BELOW DESCRIPTION */}
          <motion.section custom={5} variants={fadeIn}>
            <h2 className="text-2xl font-semibold mb-3 text-primary">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>

          <motion.div className="flex flex-wrap gap-4" custom={6} variants={fadeIn}>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-md gap-2"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {project.frontend && (
              <a
                href={project.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-md gap-2"
              >
                <FaGithub /> Frontend Code
              </a>
            )}
            {project.backend && (
              <a
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-md gap-2"
              >
                <FaGithub /> Backend Code
              </a>
            )}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="space-y-8">
          <motion.section custom={7} variants={fadeIn}>
            <h2 className="text-2xl font-semibold mb-3 text-primary">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-base-content">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </motion.section>

          {project.challenges?.length > 0 && (
            <motion.section custom={8} variants={fadeIn}>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Challenges Faced</h2>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-base-content">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </motion.section>
          )}

          <motion.section className="grid grid-cols-2 gap-4" custom={9} variants={fadeIn}>
            <div>
              <h3 className="font-semibold text-primary mb-1">Role</h3>
              <p className="text-base-content">{project.role}</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-1">Duration</h3>
              <p className="text-base-content">{project.duration}</p>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetails;
