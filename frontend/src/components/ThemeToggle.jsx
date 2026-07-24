import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
      w-11
      h-11
      rounded-full
      border
      border-slate-200
      bg-white/80
      shadow-sm
      shadow-slate-200/70
      dark:border-white/10
      dark:bg-white/10
      dark:shadow-none
      backdrop-blur-md
      flex
      items-center
      justify-center
      transition-all
      duration-300
      hover:scale-110
      hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
      "
    >
      {darkMode ? (
        <FaSun className="text-yellow-400 text-lg" />
      ) : (
        <FaMoon className="text-slate-700 text-lg" />
      )}
    </button>
  );
}

export default ThemeToggle;
