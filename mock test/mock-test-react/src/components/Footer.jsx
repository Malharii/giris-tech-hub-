import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold">Malhari Pawar</h2>
          <p className="text-sm mt-1">Full Stack Developer | MERN Stack</p>
          <p className="text-sm mt-1">📧 malharipawar001@gmail.com</p>
          <p className="text-sm">📞 +91 9209511755</p>
        </div>

        {/* Right Section – Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/malharii"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/malhari-pawar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/MalhariPawar__"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm mt-4 opacity-80">
        &copy; {new Date().getFullYear()} Malhari Pawar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
