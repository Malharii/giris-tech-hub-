import React from "react";

function About() {
  return (
    <div className="flex justify-center mt-12">
      <div className="bg-gradient-to-br from-cyan-100 to-teal-50 shadow-xl rounded-xl p-10 max-w-lg text-center">
        <h2 className="text-4xl font-bold text-teal-700 mb-4">🌟 About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Hi, I’m a full-stack (MERN ) developer passionate about building colorful and
          interactive experiences with React, Node, Express, MongoDB Tailwind, and modern
          tech.
        </p>
      </div>
    </div>
  );
}

export default About;
