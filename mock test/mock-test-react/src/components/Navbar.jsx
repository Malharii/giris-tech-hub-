import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) =>
    `relative px-3 py-1 text-lg transition duration-100 ${
      isActive ? "text-stone-900 font-semibold" : "text-black"
    } hover:text-blue-400`;

  return (
    <nav className="bg-gradient-to-r from-green-blue to-orange-400 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-2">
        <h1 className="text-zinc-600 text-1xl font-extrabold">✨ Malhar's Website</h1>
        <div className="flex gap-2">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
          <NavLink to="/details" className={linkStyle}>
            Details
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
