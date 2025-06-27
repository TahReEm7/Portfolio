import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: "B.Sc. in Software Engineering",
    institution: "Daffodil International University",
    duration: "2024 – Present",
    description: "Focused on full-stack development, algorithms, system design, and real-world software projects.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Milestone College",
    duration: "2021 – 2022",
    description: "Studied Physics, Chemistry, Mathematics, and ICT. Involved in tech club activities.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Annada Goverment High School",
    duration: "2019 – 2020",
    description: "Completed foundational education with focus on science and computing basics.",
  },
];

const Education = () => {
  return (
    <section id="education" className="w-11/12 mx-auto py-12 bg-base-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
          Education 🎓
        </h2>
        <p className="text-base-content text-lg">My academic journey so far</p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-base-200 p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-4 items-start"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-primary mt-1">
              <FaGraduationCap className="text-3xl" />
            </div>

            <div>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-base-content font-medium">{edu.institution}</p>
              <p className="text-sm text-accent">{edu.duration}</p>
              <p className="text-base-content mt-2">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
