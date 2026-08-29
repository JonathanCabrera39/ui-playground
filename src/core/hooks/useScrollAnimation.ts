// src/hooks/useScrollAnimation.ts
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const isInView = useInView(ref, {
    once: true, // solo anima una vez al entrar
    margin: "-100px", // empieza a animar antes de que sea visible
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setIsVisible(true);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return { ref, isVisible };
};