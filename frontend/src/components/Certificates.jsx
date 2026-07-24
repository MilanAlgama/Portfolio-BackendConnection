import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import CertificateCard from "./CertificateCard";
import useIsMobile from "../hooks/useIsMobile";

function Certificates() {
  const isMobile = useIsMobile();

  return (
    <section
      id="certificates"
      className="min-h-screen bg-slate-50 px-4 py-20 transition-colors duration-300 dark:bg-[#050816] sm:px-6 sm:py-24"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 40 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[4px] text-blue-400 sm:text-base sm:tracking-[6px]">
            Continuous Learning
          </p>

          <h2 className="text-3xl font-bold mt-3 sm:text-4xl lg:text-5xl">
            Certificates
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-600 dark:text-gray-400">
            Certifications and courses that support my journey toward becoming a Cloud & DevOps Engineer.
          </p>

        </motion.div>

        <div className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-3 lg:mt-20">

          {portfolioData.certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              {...certificate}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;
