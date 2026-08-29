// src/components/LoadingScreenGym.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import icon from "../../image/icon-coach.png";

export default function LoadingScreenGym() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="text-center">
      <img className="w-20" src={icon} alt="coach" />
        {/* Barra de pesas animada */}
        <div className="relative w-48 h-8 mx-auto mb-6">
          {/* Eje central */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1 bg-gray-700 rounded-full"></div>
          </div>

          {/* Discos que se iluminan */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-600"
              style={{ left: `${i * 20}%`, x: "-50%" }}
              initial={{ scale: 0.5, opacity: 0.3 }}
              animate={{
                scale: [0.5, 1.2, 1],
                opacity: [0.3, 1, 1],
                backgroundColor: ["#fbbf24", "#f59e0b", "#ea580c"],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.15,
                repeat: 0,
                ease: "easeOut",
              }}

            />
          ))}
        </div>

        <p className="text-gray-400 text-sm">
          Construyendo tu transformación...
        </p>
      </div>
    </div>
  );
}
