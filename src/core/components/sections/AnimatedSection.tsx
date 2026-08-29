// src/components/AnimatedSection.tsx
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export default function AnimatedSection({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      {children}
    </motion.div>
  );
}