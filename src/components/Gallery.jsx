"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
import { X } from "lucide-react"; // Importamos el icono de cerrar

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedDest, setSelectedDest] = useState(null);

  const galleryItems = [
    { ...t.destinations.items[0], img: "/images/suchitoto.webp", size: "md:col-span-2" },
    { ...t.destinations.items[1], img: "/images/tunco.webp", size: "md:col-span-1" },
    { ...t.destinations.items[2], img: "/images/ataco.webp", size: "md:col-span-1" },
    { ...t.destinations.items[3], img: "/images/volcan.webp", size: "md:col-span-2" },
    { ...t.destinations.items[4], img: "/images/conchagua.webp", size: "md:col-span-1" },
    { ...t.destinations.items[5], img: "/images/surfcity.webp", size: "md:col-span-1" },
    { ...t.destinations.items[6], img: "/images/puertadeldiablo.webp", size: "md:col-span-1" },
  ];

  return (
    <section id="destinos" className="py-20 px-6 max-w-7xl mx-auto">
      
      {/* ENCABEZADO ESTANDARIZADO */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h2 className="text-xl text-[#E67E22] font-bold tracking-[0.2em] uppercase mb-2">
          {t.destinations.title}
        </h2>
        <h3 className="text-4xl md:text-6xl font-serif text-[#2D3436] mb-6">
          {t.destinations.subtitle}
        </h3>
        <div className="h-1 w-24 bg-[#E67E22] mx-auto rounded-full"></div>
      </motion.div>

      {/* GRID DE GALERÍA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryItems.map((dest, i) => (
          <motion.div
            key={i}
            layoutId={`card-${i}`} // Para animación de expansión suave
            onClick={() => setSelectedDest({ ...dest, id: i })}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className={`relative overflow-hidden rounded-[2.5rem] shadow-lg group h-[350px] cursor-pointer ${dest.size}`}
          >
            <img 
              src={dest.img} 
              alt={dest.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute bottom-8 left-8 text-white z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30">
                {dest.tag}
              </span>
              <h3 className="text-3xl font-serif mt-3 drop-shadow-md">
                {dest.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL DE HISTORIA/RESEÑA */}
      <AnimatePresence>
        {selectedDest && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Fondo oscuro con desenfoque */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDest(null)}
              className="absolute inset-0 bg-[#2D3436]/80 backdrop-blur-sm"
            />

            {/* Contenido del Modal */}
            <motion.div 
              layoutId={`card-${selectedDest.id}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white w-full max-w-4xl overflow-hidden rounded-[3rem] shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Lado de la Imagen */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={selectedDest.img} 
                  alt={selectedDest.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Lado del Texto */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
                <button 
                  onClick={() => setSelectedDest(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-[#2D3436] hover:bg-orange-100 hover:text-[#E67E22] transition-colors"
                >
                  <X size={24} />
                </button>

                <span className="text-[#E67E22] font-bold tracking-[0.2em] uppercase text-xs mb-2">
                  {selectedDest.tag}
                </span>
                <h2 className="text-4xl font-serif text-[#2D3436] mb-6 italic">
                  {selectedDest.name}
                </h2>
                
                {/* Reseña/Historia */}
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  {selectedDest.description || "Descubre la rica historia y la vibrante cultura de este destino emblemático de El Salvador. Una experiencia única que conecta el pasado con el presente."}
                </p>

                <div className="mt-auto pt-8">
                  <div className="h-1 w-20 bg-[#E67E22] rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}