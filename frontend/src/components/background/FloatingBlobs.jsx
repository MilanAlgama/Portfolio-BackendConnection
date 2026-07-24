import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

function FloatingBlobs() {
  const isMobile = useIsMobile();

  return (
    <>
      <motion.div
        animate={isMobile ? undefined : { y: [0, -30, 0], x: [0, 20, 0] }}
        transition={isMobile ? undefined : { duration: 8, repeat: Infinity }}
        className="fixed top-20 left-20 w-64 h-64 rounded-full bg-blue-300/30 blur-[120px] -z-40 dark:bg-blue-500/20"
      />

      <motion.div
        animate={isMobile ? undefined : { y: [0, 25, 0], x: [0, -25, 0] }}
        transition={isMobile ? undefined : { duration: 10, repeat: Infinity }}
        className="fixed bottom-20 right-20 w-72 h-72 rounded-full bg-cyan-300/30 blur-[130px] -z-40 dark:bg-cyan-400/20"
      />
    </>
  );
}

export default FloatingBlobs;
