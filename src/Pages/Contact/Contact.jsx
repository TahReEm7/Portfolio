import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="w-11/12 mx-auto py-16 bg-base-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
          Contact Me 📬
        </h2>
        <p className="text-base-content text-lg">Let’s connect and build something awesome together!</p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-primary text-xl" />
            <p className="text-base-content">tahreemhossain0@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-primary text-xl" />
            <p className="text-base-content">Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center gap-4">
            <FaGithub className="text-primary text-xl" />
            <a href="https://github.com/TahReEm7" target="_blank" rel="noreferrer" className="hover:underline text-base-content">
              GitHub
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-primary text-xl" />
            <a href="https://linkedin.com/in/tahreemhossain-cr07" target="_blank" rel="noreferrer" className="hover:underline text-base-content">
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Message sent! (connect to backend or Formspree)');
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full h-32"
            required
          ></textarea>
          <button className="btn btn-primary w-full">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
