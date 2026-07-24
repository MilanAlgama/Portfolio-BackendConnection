import { motion } from "framer-motion";
import { FaAws, FaDocker, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import useIsMobile from "../hooks/useIsMobile";

const loaderTech = [
  {
    label: "AWS",
    Icon: FaAws,
    className: "left-1/2 top-2 -translate-x-1/2 text-orange-400",
    delay: 0,
  },
  {
    label: "Docker",
    Icon: FaDocker,
    className: "right-2 top-1/2 -translate-y-1/2 text-sky-400",
    delay: 0.45,
  },
  {
    label: "React",
    Icon: FaReact,
    className: "bottom-2 left-1/2 -translate-x-1/2 text-cyan-400",
    delay: 0.9,
  },
  {
    label: "Tailwind",
    Icon: SiTailwindcss,
    className: "left-2 top-1/2 -translate-y-1/2 text-teal-300",
    delay: 1.35,
  },
];

function Preloader() {
  const isMobile = useIsMobile();

  return (
    <motion.div
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-50 text-slate-950 dark:bg-[#050816] dark:text-white"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: isMobile ? 1 : 1.03,
        filter: isMobile ? "blur(0px)" : "blur(10px)",
      }}
      transition={{ duration: isMobile ? 0.3 : 0.65, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.24),transparent_34%),radial-gradient(circle_at_75%_70%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.12),transparent_36%)]" />

      <motion.div
        className="absolute h-[28rem] w-[28rem] rounded-full border border-cyan-400/10"
        animate={isMobile ? undefined : { rotate: 360 }}
        transition={
          isMobile
            ? undefined
            : { duration: 18, repeat: Infinity, ease: "linear" }
        }
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <motion.div
          className="relative grid h-60 w-60 place-items-center sm:h-72 sm:w-72"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border border-blue-400/25 shadow-[0_0_80px_rgba(59,130,246,0.25)]"
            animate={isMobile ? undefined : { rotate: 360 }}
            transition={
              isMobile
                ? undefined
                : { duration: 10, repeat: Infinity, ease: "linear" }
            }
          />

          <motion.div
            className="absolute inset-8 rounded-full border border-dashed border-cyan-300/35"
            animate={isMobile ? undefined : { rotate: -360 }}
            transition={
              isMobile
                ? undefined
                : { duration: 14, repeat: Infinity, ease: "linear" }
            }
          />

          {loaderTech.map(({ label, Icon, className, delay }) => (
            <motion.div
              key={label}
              className={`absolute ${className}`}
              animate={
                isMobile
                  ? { opacity: 0.85 }
                  : { y: [0, -8, 0], opacity: [0.65, 1, 0.65] }
              }
              transition={
                isMobile
                  ? { duration: 0 }
                  : {
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay,
                    }
              }
            >
              <div className="rounded-2xl border border-white/15 bg-white/80 p-3 shadow-lg shadow-blue-200/60 backdrop-blur-xl dark:bg-white/10 dark:shadow-none">
                <Icon className="text-2xl" aria-hidden="true" />
                <span className="sr-only">{label}</span>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="grid h-28 w-28 place-items-center rounded-full border border-cyan-300/40 bg-white/85 shadow-[0_0_70px_rgba(34,211,238,0.35)] backdrop-blur-xl dark:bg-[#050816]/85"
            animate={
              isMobile
                ? undefined
                : {
                    boxShadow: [
                      "0 0 42px rgba(34,211,238,0.22)",
                      "0 0 78px rgba(59,130,246,0.46)",
                      "0 0 42px rgba(34,211,238,0.22)",
                    ],
                  }
            }
            transition={
              isMobile
                ? undefined
                : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <span className="text-4xl font-bold text-blue-500">
              Hel<span className="text-slate-950 dark:text-white">lo!</span>
            </span>
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-8 text-sm font-semibold uppercase tracking-[0.45em] text-blue-500 sm:text-base"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.55 }}
        >
          Loading....
        </motion.p>

        <motion.div
          className="mt-5 h-1.5 w-56 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.75, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Preloader;
