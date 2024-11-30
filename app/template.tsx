'use client';

import { motion } from 'framer-motion';

// Staggered children animation
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{
        duration: 0.45, // Faster duration
        ease: [0.2, 0.65, 0.3, 0.9], // Adjusted for a snappier middle with smooth ends
      }}
    >
      {children}
    </motion.div>
  );
}
