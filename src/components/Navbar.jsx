"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.div
        className={`relative overflow-hidden flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "w-[95%] md:w-[90%] h-20 rounded-[2rem] shadow-2xl" : "w-full h-24 rounded-none"
        }`}
      >
        {/* FONDO: Estampa de Llort repetida */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: 'url("/images/estampa-llort.png")',
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }}
        />

        <div className="relative z-10 flex items-center justify-between w-full px-8">
          {/* Logo y Nombre */}
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-gray-200">
            <img src="/images/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
            <span className="font-serif text-[#2D3436] font-extrabold text-sm md:text-base tracking-tight">
              El Salvador Jewish Tours
            </span>
          </div>

          {/* Menú de Navegación Central */}
          <div className="hidden md:flex items-center gap-6 bg-white/90 backdrop-blur-md px-8 py-2 rounded-full shadow-sm border border-gray-200">
            {["Services", "Destinations"].map((item, idx) => {
              const label = idx === 0 ? t.nav.services : t.nav.destinations;
              const link = idx === 0 ? "#servicios" : "#destinos";
              return (
                <a 
                  key={item} 
                  href={link} 
                  className="text-[10px] font-black uppercase tracking-widest text-[#2D3436] hover:text-orange-600 transition-colors"
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* Botón de Cambio de Idioma (Sustituye al de Reserva) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="bg-[#2D3436] text-white px-6 py-3 rounded-full font-bold text-[11px] tracking-widest uppercase shadow-xl flex items-center gap-2 border border-white/20 hover:bg-orange-600 transition-all duration-300"
          >
            <span className={language === 'es' ? 'opacity-100' : 'opacity-40'}>ES</span>
            <span className="opacity-20">|</span>
            <span className={language === 'en' ? 'opacity-100' : 'opacity-40'}>EN</span>
          </motion.button>
        </div>
      </motion.div>
    </nav>
  );
}