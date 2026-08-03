import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaCopy, FaCheck, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    toast.success(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="w-11/12 mx-auto py-16 bg-base-100 relative overflow-hidden">
      {/* Accent Light Blobs */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
          📬 Get In Touch
        </h2>
        <p className="text-base-content/80 text-lg max-w-xl mx-auto">
          Have a question, project proposal, or just want to connect? Send me a message or find me on social platforms!
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 flex flex-col justify-between"
        >
          <div className="bg-base-200/80 backdrop-blur-md p-6 rounded-2xl border border-base-300 shadow-md">
            <h3 className="text-xl font-bold text-base-content mb-6">Contact Information</h3>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-base-100/80 border border-base-300 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-base-content/60 font-semibold">Email Address</p>
                    <p className="text-sm font-semibold text-base-content">tahreem17.dev@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("tahreem17.dev@gmail.com", "Email")}
                  className="btn btn-xs btn-ghost btn-circle text-base-content/70 hover:text-primary"
                  title="Copy email"
                >
                  {copiedField === "Email" ? <FaCheck className="text-emerald-500" /> : <FaCopy />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-base-100/80 border border-base-300 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <FaPhoneAlt className="text-base" />
                  </div>
                  <div>
                    <p className="text-xs text-base-content/60 font-semibold">Phone</p>
                    <p className="text-sm font-semibold text-base-content">+880 01319550316</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("+880 01319550316", "Phone")}
                  className="btn btn-xs btn-ghost btn-circle text-base-content/70 hover:text-primary"
                  title="Copy phone"
                >
                  {copiedField === "Phone" ? <FaCheck className="text-emerald-500" /> : <FaCopy />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-base-100/80 border border-base-300">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-base-content/60 font-semibold">Location</p>
                  <p className="text-sm font-semibold text-base-content">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="bg-base-200/80 backdrop-blur-md p-6 rounded-2xl border border-base-300 shadow-md">
            <h4 className="text-sm font-bold text-base-content/80 uppercase tracking-wider mb-4">
              Social Profiles
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/TahReEm7"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-base-100 border border-base-300 font-semibold text-sm hover:border-primary hover:text-primary transition-all shadow-sm"
              >
                <FaGithub className="text-lg" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/tahreemhossain-cr07"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-base-100 border border-base-300 font-semibold text-sm hover:border-primary hover:text-primary transition-all shadow-sm"
              >
                <FaLinkedin className="text-lg" /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-base-200/80 backdrop-blur-md p-8 rounded-2xl border border-base-300 shadow-xl flex flex-col justify-between space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Thank you for reaching out! Your message has been simulated successfully.");
            e.target.reset();
          }}
        >
          <h3 className="text-2xl font-bold text-base-content mb-2">Send a Message</h3>
          <div>
            <label className="text-xs font-semibold text-base-content/70 uppercase tracking-wider mb-1 block">
              Your Name
            </label>
            <input
              type="text"
              placeholder="e.g. Alex Johnson"
              className="input input-bordered w-full rounded-xl focus:border-primary focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-base-content/70 uppercase tracking-wider mb-1 block">
              Your Email
            </label>
            <input
              type="email"
              placeholder="e.g. alex@example.com"
              className="input input-bordered w-full rounded-xl focus:border-primary focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-base-content/70 uppercase tracking-wider mb-1 block">
              Your Message
            </label>
            <textarea
              placeholder="How can I help you?"
              className="textarea textarea-bordered w-full h-32 rounded-xl focus:border-primary focus:outline-none"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary w-full rounded-xl gap-2 text-base shadow-lg hover:shadow-primary/30"
          >
            <FaPaperPlane /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
