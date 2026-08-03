import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft, FaCheckCircle, FaExclamationTriangle, FaCode, FaCalendarAlt, FaUserTag } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import GlobalLoader from "../../Components/Loader/Loader";
import NoProjects from "../../Components/Error/NoProjects";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

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
      <div className="flex justify-center items-center min-h-[70vh] bg-base-100">
        <GlobalLoader />
      </div>
    );
  }

  if (!project) return <NoProjects />;

  return (
    <motion.section
      className="w-11/12 mx-auto px-4 md:px-8 py-8 md:py-16 bg-base-100 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Helmet>
        <title>{project.title} Details || Tahreem</title>
      </Helmet>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-sm btn-ghost text-primary flex items-center gap-2 mb-8 hover:bg-base-200 rounded-full px-4"
      >
        <FaArrowLeft /> Back to Projects
      </button>

      {/* Header Info */}
      <div className="mb-10">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-3"
          custom={1}
          variants={fadeIn}
        >
          {project.title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-base-content/80 max-w-3xl"
          custom={2}
          variants={fadeIn}
        >
          {project.brief}
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* LEFT COLUMN: Media & Links */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden border border-base-300 shadow-2xl bg-base-200"
            custom={3}
            variants={fadeIn}
          >
            {!imageError ? (
              <img
                src={project.image}
                alt={project.title}
                onError={() => setImageError(true)}
                className="w-full h-auto max-h-[420px] object-cover object-top"
              />
            ) : (
              <div className="w-full h-80 flex flex-col items-center justify-center bg-base-300 text-base-content/60">
                <FaCode className="text-5xl text-primary mb-3" />
                <span className="text-base font-semibold">{project.title}</span>
              </div>
            )}
          </motion.div>

          {/* Description Section */}
          <motion.div custom={4} variants={fadeIn} className="bg-base-200/70 p-6 md:p-8 rounded-2xl border border-base-300 shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-3">About The Project</h2>
            <p className="text-base md:text-lg text-base-content/90 leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div custom={5} variants={fadeIn} className="bg-base-200/70 p-6 md:p-8 rounded-2xl border border-base-300 shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Technologies & Tools</h2>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-full bg-base-100 text-primary font-semibold text-sm border border-base-300 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* External Action Links */}
          <motion.div className="flex flex-wrap gap-4 pt-2" custom={6} variants={fadeIn}>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg rounded-full gap-2 px-8 shadow-lg hover:shadow-primary/30"
              >
                <FaExternalLinkAlt /> Live Preview
              </a>
            )}
            {project.frontend && (
              <a
                href={project.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg rounded-full gap-2 px-6"
              >
                <FaGithub /> Frontend Code
              </a>
            )}
            {project.backend && (
              <a
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg rounded-full gap-2 px-6"
              >
                <FaGithub /> Backend Code
              </a>
            )}
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Key Features, Challenges, Role */}
        <div className="lg:col-span-5 space-y-8">
          {/* Metadata Card */}
          <motion.div
            className="bg-base-200/80 p-6 rounded-2xl border border-base-300 shadow-md grid grid-cols-2 gap-4"
            custom={7}
            variants={fadeIn}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <FaUserTag />
              </div>
              <div>
                <p className="text-xs text-base-content/60 font-semibold">Role</p>
                <p className="text-sm font-bold text-base-content">{project.role || "Developer"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                <FaCalendarAlt />
              </div>
              <div>
                <p className="text-xs text-base-content/60 font-semibold">Duration</p>
                <p className="text-sm font-bold text-base-content">{project.duration || "N/A"}</p>
              </div>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div custom={8} variants={fadeIn} className="bg-base-200/70 p-6 md:p-8 rounded-2xl border border-base-300 shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-4">Key Features</h2>
            <ul className="space-y-3">
              {project.features &&
                project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base-content/90 text-sm md:text-base">
                    <FaCheckCircle className="text-primary mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
            </ul>
          </motion.div>

          {/* Challenges Section */}
          {project.challenges?.length > 0 && (
            <motion.div custom={9} variants={fadeIn} className="bg-base-200/70 p-6 md:p-8 rounded-2xl border border-base-300 shadow-md">
              <h2 className="text-2xl font-bold text-secondary mb-4">Challenges & Solutions</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base-content/90 text-sm md:text-base">
                    <FaExclamationTriangle className="text-amber-500 mt-1 shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetails;
