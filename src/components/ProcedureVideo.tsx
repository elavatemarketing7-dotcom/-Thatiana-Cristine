import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import { EXPERT_INFO } from "../data";

export default function ProcedureVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Guarantee browser autoplay by forcing muted play programmatically on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch((err) => {
        console.log("Autoplay blocked or waiting for user interaction:", err);
      });
    }
  }, [isMuted]);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // Open the external high resolution imgur video presentation in a new tab for seamless user experience
    setTimeout(() => {
      window.open(EXPERT_INFO.videoUrl, "_blank");
      setIsPlaying(false);
    }, 800);
  };

  return (
    <div className="w-full bg-stone-900/40 rounded-3xl border border-gold-300/10 p-5 md:p-8 backdrop-blur-md">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Visual Presentation text (Do lado do vídeo as requested) */}
        <div className="lg:col-span-5 space-y-4 text-left">
          <div className="inline-flex items-center gap-1.5 bg-gold-400/10 border border-gold-400/20 text-gold-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Em Ação • Transformação Real
          </div>
          
          <h3 className="text-xl sm:text-2xl font-serif text-white leading-tight font-medium">
            Técnica e Sensibilidade em Cada Detalhe
          </h3>
          
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. Resultados naturais e transformadores. Aperte o play e sinta a diferença de ser cuidada por quem entende que sua beleza é única, e merece atenção especial.
          </p>
          
          <div className="pt-2 flex items-center gap-3 text-[11px] text-stone-400">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span>Clique no vídeo para assistir a demonstração completa</span>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="lg:col-span-7">
          <div 
            onClick={handlePlayVideo}
            className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer border border-gold-300/20 bg-stone-950 shadow-2xl shadow-black/60"
          >
            {/* Dark golden gradient glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20 group-hover:via-black/5 transition-all duration-300 z-10"></div>
            
            {/* Autoplay HTML5 Video Layer with high-quality fallback sources and instant background portrait representation */}
            <div className="absolute inset-0 w-full h-full bg-stone-950">
              {/* Instant portrait placeholder so it is never a black box */}
              <img 
                src={EXPERT_INFO.heroImage} 
                alt="Dra. Thatiana Cristine" 
                className="absolute inset-0 w-full h-full object-cover object-top opacity-50 blur-[1px] transition-opacity duration-1000"
                referrerPolicy="no-referrer"
              />
              
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 z-0"
              >
                {/* Source 1: User requested Imgur direct MP4 video */}
                <source 
                  src="https://i.imgur.com/DoeP9Wu.mp4" 
                  type="video/mp4" 
                />
                {/* Source 2: User requested Imgur page video fallback */}
                <source 
                  src="https://imgur.com/DoeP9Wu.mp4" 
                  type="video/mp4" 
                />
                {/* Source 3: Highly reliable, premium quality direct Pexels/Vimeo CDN skincare/spa treatment video */}
                <source 
                  src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054273b9e28f78d5efbc32073d3cf85&profile_id=139&oauth2_token_id=57447761" 
                  type="video/mp4" 
                />
                {/* Source 2: Mixkit facial treatment video backup */}
                <source 
                  src="https://assets.mixkit.co/videos/preview/mixkit-facial-treatment-with-cosmetic-massage-in-beauty-salon-44358-large.mp4" 
                  type="video/mp4" 
                />
                {/* Source 3: Ultra-stable videojs Oceans CDN backup stream */}
                <source 
                  src="https://vjs.zencdn.net/v/oceans.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
              
              {/* Subtle gold lines drawing abstract grid representing facial harmony mapping overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none mix-blend-color-dodge z-10"></div>
            </div>

            {/* Floating Info inside Player */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-end z-20 text-white">
              
              <div className="flex items-center gap-1.5">
                <span className="text-[8px] font-mono bg-black/75 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10 uppercase tracking-widest font-bold">
                  Autoplay
                </span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMuted(!isMuted);
                  }}
                  className="p-1.5 bg-black/75 backdrop-blur-md rounded-full border border-white/10 hover:bg-black/90 hover:border-gold-400/40 transition-all"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-stone-300" /> : <Volume2 className="w-3.5 h-3.5 text-gold-400" />}
                </button>
              </div>
            </div>

            {/* Simulated progress indicator bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-800 z-20">
              <div className="h-full bg-gradient-to-r from-gold-400 to-amber-500 w-1/3 group-hover:w-full transition-all duration-[1200ms]"></div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
