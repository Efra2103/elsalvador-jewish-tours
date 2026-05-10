"use client";
import React from "react"; 
import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';
import { Truck, Utensils, Hotel, Users } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();
  
  const icons = [
    <Truck size={32} strokeWidth={1.5} />, 
    <Utensils size={32} strokeWidth={1.5} />, 
    <Hotel size={32} strokeWidth={1.5} />, 
    <Users size={32} strokeWidth={1.5} />
  ];

  return (
    <section id="servicios" className="w-full py-20 bg-[#FDFCF9] block">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ENCABEZADO ESTANDARIZADO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-xl text-[#E67E22] font-bold tracking-[0.2em] uppercase mb-2">
            {t.nav.services}
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-[#2D3436] mb-6">
            {t.services.title}
          </h3>
          <div className="w-24 h-1 bg-[#E67E22] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full items-stretch">
          {t.services.list.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center h-full"
            >
              <div className="w-16 h-16 bg-[#FDFCF9] text-[#E67E22] rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-[#2D3436] mb-4 font-serif leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}