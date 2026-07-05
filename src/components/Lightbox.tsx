import { X, ZoomIn, ZoomOut, AlertCircle } from "lucide-react";
import React, { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LightboxProps {
  imageUrl: string | null;
  onClose: () => void;
}

export default function Lightbox({ imageUrl, onClose }: LightboxProps) {
  const [scale, setScale] = useState(1);

  if (!imageUrl) return null;

  const handleZoomIn = (e: MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e: MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.max(prev - 0.25, 0.75));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-[#090807]/95 backdrop-blur-md flex flex-col justify-between p-4 cursor-zoom-out"
      >
        {/* Top bar controls */}
        <div className="flex items-center justify-between w-full max-w-4xl mx-auto pt-2 z-10">
          <span className="text-[10px] sm:text-xs text-stone-400 font-mono tracking-widest uppercase bg-stone-900 px-3 py-1.5 rounded-full border border-stone-850">
            Visualização em Alta Definição
          </span>
          
          <div className="flex gap-2">
            <button
              onClick={handleZoomIn}
              className="p-2 bg-stone-900 border border-stone-850 rounded-full text-stone-300 hover:text-white active:scale-90 transition-transform"
              title="Aumentar Zoom"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-2 bg-stone-900 border border-stone-850 rounded-full text-stone-300 hover:text-white active:scale-90 transition-transform"
              title="Diminuir Zoom"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-gold-400 text-stone-950 rounded-full hover:brightness-110 active:scale-90 transition-transform font-bold"
              title="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Zoomed Image Container */}
        <div className="flex-1 flex items-center justify-center p-2">
          <motion.div
            initial={{ scale: 0.9, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9 }}
            style={{ transform: `scale(${scale})` }}
            className="relative max-w-full max-h-[75vh] rounded-2xl overflow-hidden border border-gold-300/10 shadow-2xl transition-transform duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageUrl}
              alt="Resultado Harmonização Facial"
              className="max-w-full max-h-[75vh] object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Fine-print / Disclaimer */}
        <div className="w-full max-w-xl mx-auto pb-4 text-center">
          <div className="inline-flex items-center gap-1.5 bg-stone-900/60 border border-stone-850 px-4 py-2.5 rounded-xl text-[10px] sm:text-xs text-stone-400 leading-snug">
            <AlertCircle className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>Resultados individuais podem variar. Cada paciente possui características anatômicas únicas.</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
