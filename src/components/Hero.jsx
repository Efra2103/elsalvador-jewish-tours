"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, X, Mail } from "lucide-react"; 

export default function Hero() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#FDFCF9] pt-32 px-6">
      {/* Fondo con Overlay para legibilidad */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.webp" 
          alt="Explora El Salvador"
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/45" /> 
      </div>

      {/* Tarjeta Central "Wow" */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl p-10 md:p-16 rounded-[3.5rem] bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl text-center"
      >
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
          {t.hero.title} <br />
          <span className="text-white italic font-light opacity-90">
            {t.hero.accent}
          </span>
        </h1>

        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          {t.hero.sub}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="bg-white text-[#2D3436] px-12 py-4 rounded-full font-bold tracking-widest uppercase text-sm shadow-xl hover:bg-[#2D3436] hover:text-white transition-all duration-300"
        >
          {t.hero.btn}
        </motion.button>
      </motion.div>

      {/* MODAL DE BIENVENIDA Y CONTACTO */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Overlay oscuro */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#2D3436]/80 backdrop-blur-md"
            />

            {/* Contenido del Modal */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#FDFCF9] w-full max-w-lg p-10 rounded-[3rem] shadow-2xl text-center border border-white"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-[#E67E22] transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-6">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                  <img src="/images/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
                </div>
                <h2 className="text-3xl font-serif text-[#2D3436]">
                  {t.hero.modal?.title || "¡Shalom!"}
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 font-light italic">
                "{t.hero.modal?.who || t.hero.sub}"
              </p>

              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E67E22]">
                  {t.hero.modal?.contactTitle || "Contáctanos"}
                </p>
                
                {/* Botón WhatsApp */}
                <a 
                  href="https://wa.me/50377326794" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all"
                >
                  <MessageCircle size={20} fill="currentColor" />
                  {t.hero.modal?.whatsapp || "WhatsApp"}
                </a>

                {/* Botón Email */}
                <a 
                  href="mailto:info@elsalvadorjewishtours.com" 
                  className="flex items-center justify-center gap-3 w-full bg-[#2D3436] text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all"
                >
                  <Mail size={20} />
                  {t.hero.modal?.email || "Email"}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* BOTÓN FLOTANTE DE WHATSAPP INTEGRADO */}
      <motion.a
        href="https://wa.me/50377326794"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] bg-white text-[#2D3436] p-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-gray-100 flex items-center justify-center cursor-pointer"
      >
        <MessageCircle size={28} fill="currentColor" className="text-[#2D3436]" />
      </motion.a>
    </section>
  );
}