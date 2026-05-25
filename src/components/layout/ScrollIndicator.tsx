import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      aria-hidden
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary"
      animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </motion.div>
  );
}
