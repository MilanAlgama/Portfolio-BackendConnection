import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import useIsMobile from "../hooks/useIsMobile";

function CertificateCard({ title, issuer, year, status, image, credential }) {
  const isMobile = useIsMobile();

  return (
    <motion.div
      whileHover={isMobile ? undefined : { y: -10, scale: 1.03 }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white/85 shadow-lg shadow-slate-200/60 backdrop-blur-lg transition-all duration-300 hover:border-cyan-400 hover:shadow-cyan-200/70 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-48 w-full object-cover sm:h-56"
        />

        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
            status === "Completed"
              ? "bg-green-500 text-white"
              : "bg-yellow-500 text-black"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-4">
          <FaAward className="text-yellow-400 text-2xl" />
          <h3 className="break-words text-lg font-bold sm:text-xl">{title}</h3>
        </div>

        <p className="text-cyan-400">{issuer}</p>

        <p className="mt-2 text-slate-600 dark:text-gray-400">{year}</p>

        <a
          href={credential}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-cyan-300 transition"
        >
          View Credential
          <FaExternalLinkAlt />
        </a>
      </div>
    </motion.div>
  );
}

export default CertificateCard;
