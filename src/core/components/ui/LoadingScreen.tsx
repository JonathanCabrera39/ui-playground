// src/components/LoadingScreen.tsx
import { useEffect, useState } from "react";
import logobeat from "../../../image/icon-beat.png";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simula carga (2.5s). En producción, podés usar `useEffect` con dependencias reales.
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  //   useEffect(() => {
  //   const audio = new Audio('/loading.mp3');
  //   audio.volume = 0.3;
  //   audio.play().catch(e => console.log("Audio autoplay blocked"));

  //   return () => audio.pause();
  // }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="inline-block animate-spin-slow mb-4">
          <img src={logobeat} alt="Subjona" className="w-52 h-26" />
        </div>
        <p className="text-gray-400 text-sm">Cargando beats épicos...</p>
      </div>
    </div>
  );
}
