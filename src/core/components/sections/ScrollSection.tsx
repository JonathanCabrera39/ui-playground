// src/components/ScrollSection.tsx
import { motion } from 'framer-motion';
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export default function ScrollSection({ children, delay = 0 }: Props) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}