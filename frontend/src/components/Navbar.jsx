import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { title: "About", id: "about" },
  { title: "Education", id: "education" },
  { title: "Skills", id: "skills" },
  { title: "Experience", id: "experience" },
  { title: "Projects", id: "projects" },
  { title: "Contact", id: "contact" },
];

function Navbar({ darkMode, setDarkMode }) {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="
  fixed
  top-0
  left-0
  w-full
  z-50
  backdrop-blur-lg
  bg-white/80
  dark:bg-black/30
  border-b
  border-gray-300
  dark:border-white/10
  transition-colors
  duration-300
"
    >
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={() => setToggle(false)}
          >
            <h1 className="text-2xl font-bold text-blue-500">
              Milan Harsha
              <span className="text-slate-950 dark:text-white">.</span>
            </h1>
          </Link>
          <span className="max-w-[180px] text-xs text-slate-500 dark:text-gray-400 sm:max-w-none">
            Cloud • DevOps • Full Stack
          </span>
        </div>

        {/* Desktop Menu + Theme Toggle */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-7 xl:gap-8">
            {navLinks.map((item) => (
              <li
                key={item.id}
                className="
text-gray-700
dark:text-gray-300
hover:text-blue-500
dark:hover:text-blue-400
transition
duration-300
"
              >
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
              <a href="#/admin" className="cursor-pointer">
                Admin
              </a>
            </li>
          </ul>

          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Mobile Button */}
        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          <button
            onClick={() => setToggle(!toggle)}
            className="text-2xl text-black dark:text-white"
          >
            {toggle ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
      </div>
      {/* Mobile Menu */}
      {toggle && (
        <div className="border-t border-slate-200 bg-white/95 lg:hidden dark:border-white/10 dark:bg-[#111827]">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setToggle(false)}
                  className="cursor-pointer text-slate-700 transition hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#/admin"
                onClick={() => setToggle(false)}
                className="cursor-pointer text-slate-700 transition hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Admin
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
