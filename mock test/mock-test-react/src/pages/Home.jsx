import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      {/* Animated Hero Section */}
      <h1 className="text-5xl md:text-4xl font-extrabold mb-4 text-center animate-pulse drop-shadow-lg">
        👋 Hi, I'm Malhari Pawar
      </h1>
      <p className="text-lg md:text-lg text-center mb-8 max-w-xl animate-fadeIn">
        I build <span className="font-bold text-yellow-300">modern</span>,
        <span className="font-bold text-green-300"> interactive</span>, and
        <span className="font-bold text-pink-300"> scalable</span> web applications.
      </p>

      <div className="flex flex-col md:flex-row gap-3 mb-8">
        <Link
          to="/about"
          className="px-5 py-3 rounded-full bg-white text-purple-700 shadow-lg hover:scale-105 hover:bg-yellow-300 transition transform"
        >
          About Me
        </Link>
        <Link
          to="/contact"
          className="px-5 py-3 rounded-full bg-transparent border-2 border-white  hover:bg-white hover:text-purple-700 transition"
        >
          Contact
        </Link>
      </div>

      <div className="flex gap-12 text-5xl">
        <div className="flex flex-col items-center hover:scale-110 transition transform">
          <FaReact className="text-cyan-400" />
          <span className="text-sm mt-2">React</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition transform">
          <FaNodeJs className="text-green-600" />
          <span className="text-sm mt-2">Node.js</span>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition transform">
          <FaDatabase className="text-yellow-500" />
          <span className="text-sm mt-2">MongoDB</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
