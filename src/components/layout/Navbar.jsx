import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = (path) =>
    `relative transition duration-300 ${
      location.pathname === path
        ? "text-blue-400 font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 bg-black shadow-md sticky top-0 z-50">
      
      {/* Logo */}
      <h1 className="text-xl md:text-2xl font-bold text-white">
        Amit Kumar Mishra<span className="text-blue-400">.</span>
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-base font-medium">
        
        <Link to="/" className={linkStyle("/")}>
          Home
          {location.pathname === "/" && (
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400"></span>
          )}
        </Link>

        <Link to="/about" className={linkStyle("/about")}>
          About
          {location.pathname === "/about" && (
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400"></span>
          )}
        </Link>

        {/* ✅ Skills Added */}
        <Link to="/skills" className={linkStyle("/skills")}>
          Skills
          {location.pathname === "/skills" && (
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400"></span>
          )}
        </Link>

        <Link to="/projects" className={linkStyle("/projects")}>
          Projects
          {location.pathname === "/projects" && (
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400"></span>
          )}
        </Link>

        <Link to="/contact" className={linkStyle("/contact")}>
          Contact
          {location.pathname === "/contact" && (
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400"></span>
          )}
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`w-6 h-[2px] bg-white transition ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
        <span className={`w-6 h-[2px] bg-white transition ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`w-6 h-[2px] bg-white transition ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-2 py-3 md:hidden text-sm font-medium shadow-lg">
          
          <Link to="/" onClick={() => setMenuOpen(false)} className={`${linkStyle("/")} py-1`}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)} className={`${linkStyle("/about")} py-1`}>
            About
          </Link>

          {/* ✅ Skills Mobile */}
          <Link to="/skills" onClick={() => setMenuOpen(false)} className={`${linkStyle("/skills")} py-1`}>
            Skills
          </Link>

          <Link to="/projects" onClick={() => setMenuOpen(false)} className={`${linkStyle("/projects")} py-1`}>
            Projects
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)} className={`${linkStyle("/contact")} py-1`}>
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;