// src/routes/index.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AppVet from "../templates/vererinaria/Appvet";
import ScrollToTop from "../core/components/ui/ScrollToTop";
import GymLanding from "../templates/gym/GymLanding";
import DoctorLanding from "../templates/doctor/DoctorLanding";
import LawyerLanding from "../templates/lawyer/LawyerLanding";
import GameDevLanding from "../templates/game/GameDevLanding";
import BeatmakerLanding from "../templates/beatmaker/BeatmakerLanding";
import SingerLanding from "../templates/cantante/SingerLanding";
import GuitaristLanding from "../templates/guitar/GuitaristLanding";
import UrbanRitualDocument from "../templates/game/UrbanRitualDocument";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vet" element={<AppVet />} />
        <Route path="/gym" element={<GymLanding />} />
        <Route path="/doctor" element={<DoctorLanding />} />
        <Route path="/lawyer" element={<LawyerLanding />} />
        <Route path="/gamedev" element={<GameDevLanding />} />
        <Route path="/baet" element={<BeatmakerLanding />} />
        <Route path="/singer" element={<SingerLanding />} />
        <Route path="/guitar" element={<GuitaristLanding />} />
        <Route path="/urban-ritual" element={<UrbanRitualDocument />} />
        {/* Aquí añadirás más rutas si vendes landing + página de gracias, etc. */}
      </Routes>
    </BrowserRouter>
  );
}
