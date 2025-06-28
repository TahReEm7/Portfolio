import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section id="about" className="w-11/12 mx-auto py-16 bg-base-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
         👨‍💻 About Me
        </h2>
        <p className="text-lg md:text-xl text-base-content max-w-3xl mx-auto leading-relaxed mb-10">
          I'm <span className="text-secondary font-semibold">Tahreem Hossain</span>, a 
          <span className="text-accent font-semibold"> Software Engineering student</span> at Daffodil International University and a
          <span className="text-accent font-semibold"> MERN Stack Developer</span> focused on building reliable, efficient, and user-friendly web applications.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
      >
        {/* Left: Summary */}
        <div className="bg-base-200 p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-primary mb-3">Who I Am</h3>
          <p className="text-base-content leading-relaxed">
            I design and develop modern full-stack applications with a strong focus on clean code, usability, and performance. I thrive in fast-paced environments and love collaborating to solve real-world problems through technology.
          </p>
        </div>

        {/* Right: Soft Skills */}
        <div className="bg-base-200 p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-primary mb-3">Soft Skills</h3>
          <ul className="text-base-content space-y-2 list-disc list-inside">
            <li>Strong communication & active listening</li>
            <li>Team collaboration & adaptability</li>
            <li>Time management & accountability</li>
            <li>Critical thinking & structured problem-solving</li>
            <li>Open to feedback & continuous improvement</li>
          </ul>
        </div>
      </motion.div>

      {/* Resume CTA */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-center mt-10"
      >
        <a
          href="/resume.pdf"
          download="Tahreem_Hossain_Resume"
          className="btn btn-primary btn-lg px-8 rounded-full gap-2"
        >
          <FaDownload />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default AboutMe;
