import { Instagram, Mail, MessageCircle, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FDFCF9] py-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        
        {/* LOGO GRANDE Y BORDEADO - NUEVA MEJORA */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-[2.5rem] shadow-xl border-4 border-white">
            <img 
              src="/images/logo.png" 
              alt="El Salvador Jewish Tours" 
              className="w-full h-full object-contain bg-white" 
            />
          </div>
        </div>

        <div className="flex gap-8 items-center">
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/elsalvador_jewishexperience?igsh=MWQyNzY0YnhnaTlseA==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#2D3436] hover:text-[#E67E22] transition-colors"
          >
            <Instagram size={24} />
          </a>

          {/* Facebook */}
          <a 
            href="https://www.facebook.com/tu_pagina_aqui" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#2D3436] hover:text-[#E67E22] transition-colors"
          >
            <Facebook size={24} />
          </a>
          
          {/* WhatsApp Directo */}
          <a 
            href="https://wa.me/50377326794" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#2D3436] hover:text-[#E67E22] transition-colors"
          >
            <MessageCircle size={24} />
          </a>

          {/* Email */}
          <a 
            href="mailto:tuemail@ejemplo.com" 
            className="text-[#2D3436] hover:text-[#E67E22] transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="text-center">
          <p className="text-[#2D3436] font-bold text-sm tracking-widest mb-2 uppercase">
            El Salvador Jewish Tours
          </p>
          <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em]">
            © 2026 Crafted by <span className="text-[#2D3436] font-black">CheleStack</span>
          </p>
        </div>
      </div>
    </footer>
  );
}