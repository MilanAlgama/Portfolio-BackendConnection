import { motion } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";

const particles = [
  { top: "8%", left: "20%" },
  { top: "18%", left: "75%" },
  { top: "25%", left: "50%" },
  { top: "35%", left: "10%" },
  { top: "42%", left: "90%" },
  { top: "55%", left: "15%" },
  { top: "65%", left: "80%" },
  { top: "72%", left: "45%" },
  { top: "85%", left: "30%" },
  { top: "90%", left: "70%" },
];

function FloatingParticles() {
  const isMobile = useIsMobile();
  const visibleParticles = isMobile ? particles.slice(0, 4) : particles;

  return (
    <>
      {visibleParticles.map((particle, index) => (
        <motion.div
          key={index}
          animate={
            isMobile
              ? { opacity: 0.45 }
              : {
                  y: [0, -15, 0],
                  opacity: [0.3, 1, 0.3],
                }
          }
          transition={
            isMobile
              ? { duration: 0 }
              : {
                  duration: 3 + index,
                  repeat: Infinity,
                }
          }
          className="absolute h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400"
          style={particle}
        />
      ))}
    </>
  );
}

export default FloatingParticles;
