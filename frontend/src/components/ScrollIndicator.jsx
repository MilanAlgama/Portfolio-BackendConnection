import { motion } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";

function ScrollIndicator() {
  const isMobile = useIsMobile();

  return (
    <motion.div
      animate={isMobile ? undefined : { y: [0, 10, 0] }}
      transition={isMobile ? undefined : { repeat: Infinity, duration: 1.5 }}
      className="flex justify-center mt-16"
    >
      <div className="flex h-12 w-7 justify-center rounded-full border-2 border-blue-500 dark:border-blue-400">
        <div className="mt-2 h-3 w-1 rounded-full bg-blue-500 dark:bg-blue-400"></div>
      </div>
    </motion.div>
  );
}

export default ScrollIndicator;
