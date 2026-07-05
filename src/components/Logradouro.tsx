import { Heart, User, Sparkles, MapPin, Phone } from "lucide-react";
import React, { MouseEvent } from "react";

export default function Logradouro() {
  const sections = [
    { label: "Sobre Mim", target: "#sobre-mim", icon: <User className="w-3 h-3 text-gold-400 inline mr-1" /> },
    { label: "Prova Visual", target: "#prova-visual", icon: <Sparkles className="w-3 h-3 text-gold-400 inline mr-1" /> },
    { label: "Harmonização de 💚", target: "#harmonizacao-de-coracao", icon: <Heart className="w-3 h-3 text-emerald-400 inline mr-1 fill-emerald-400/30" /> },
    { label: "Onde nos Encontrar", target: "#onde-nos-encontrar", icon: <MapPin className="w-3 h-3 text-gold-400 inline mr-1" /> },
    { label: "Contato", target: "#contato", icon: <Phone className="w-3 h-3 text-gold-400 inline mr-1" /> },
  ];

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Duplicate items for seamless endless loop scrolling
  const marqueeItems = [...sections, ...sections, ...sections, ...sections];

  return (
    <div className="sticky top-0 z-40 w-full bg-[#12110f]/95 border-b border-gold-300/10 py-3 overflow-hidden backdrop-blur-md">
      <div className="relative flex items-center">
        
        {/* Endless tape style list of items passing slowly */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-xs">
          {marqueeItems.map((sec, idx) => (
            <a
              key={idx}
              href={sec.target}
              onClick={(e) => handleScroll(e, sec.target)}
              className="inline-flex items-center text-stone-300 hover:text-gold-300 font-medium transition-colors uppercase tracking-widest text-[10px] sm:text-[11px] font-sans active:scale-95 px-3 py-1 bg-stone-900/40 border border-stone-800/40 rounded-full"
            >
              {sec.icon}
              {sec.label}
            </a>
          ))}
        </div>
        
      </div>
    </div>
  );
}
