import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-300  pt-10 pb-6 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Tahreem</h1>
          <p className="text-sm ">
            Empowering the community through tech & innovation.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 ">
            <li><a href="/" className=":">Home</a></li>
            <li><a href="/#" className=":">Services</a></li>
            <li><a href="/#" className=":">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className=" text-sm">Email: tahreemhossain0@gmail.com</p>
          <p className=" text-sm">Phone: +880 01319550316</p>
          <p className=" text-sm">Location: Dhaka, Bangladesh</p>
        </div>

        {/* Social Media */}
       <div>
          <h2 className="text-xl font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/TahReEm7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-2 rounded-full :bg-gray-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/tahreem-hossain"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 p-2 rounded-full :bg-blue-900 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:tahreemhossain0@gmail.com"
              className="bg-red-600 p-2 rounded-full :bg-red-700 transition"
            >
              <FaInstagram className="transform rotate-45" />
            </a>
          </div>
        </div>
      </div>


      <p className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} Tahreem Hossain. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
