import { MapPin, Navigation, Compass, Calendar, Sparkles } from "lucide-react";
import { EXPERT_INFO } from "../data";

export default function ContactMap() {
  const mapQuery = encodeURIComponent(EXPERT_INFO.address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const wazeUrl = `https://waze.com/ul?q=${mapQuery}&navigate=yes`;

  // Premium dark map iframe (using openstreetmap embed or elegant styled standard map)
  const embedMapUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full bg-gradient-to-b from-stone-900 to-stone-950 p-6 sm:p-10 rounded-3xl border border-gold-300/10 backdrop-blur-md">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-gold-400/10 border border-gold-400/20 text-gold-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest font-mono">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            Localização Privilegiada
          </div>
          
          <h3 className="text-xl sm:text-2xl font-serif text-white leading-tight font-medium">
            Onde nos Encontrar
          </h3>
          
          <p className="text-xs sm:text-sm text-stone-400 max-w-lg mx-auto">
            Atendimento exclusivo com total discrição e conforto em uma das regiões mais nobres e seguras de Belo Horizonte.
          </p>
        </div>

        {/* Map and details layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Details column */}
          <div className="md:col-span-5 bg-stone-950/60 rounded-2xl border border-stone-850 p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-gold-300 uppercase tracking-widest font-mono">
                Consultório Savassi
              </h4>
              
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block">Endereço</span>
                    <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans">
                      {EXPERT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start border-t border-stone-900 pt-3">
                  <Compass className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block">Ponto de Referência</span>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Próximo à Praça da Savassi. Estacionamento rotativo seguro disponível no local.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start border-t border-stone-900 pt-3">
                  <Calendar className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block">Atendimento</span>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Segunda a Sexta: 09h às 19h<br />
                      Sábado: Atendimento sob agendamento prévio
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="space-y-2 pt-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-stone-900 hover:bg-stone-850 text-stone-200 border border-gold-300/10 font-medium py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 hover:border-gold-400/40"
              >
                <Navigation className="w-3.5 h-3.5 text-gold-400" />
                Abrir no Google Maps
              </a>
              
              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-stone-900 hover:bg-stone-850 text-stone-300 border border-stone-800 font-medium py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Traçar Rota pelo Waze
              </a>
            </div>

          </div>

          {/* Interactive Map Frame */}
          <div className="md:col-span-7 relative min-h-[250px] sm:min-h-[300px] rounded-2xl overflow-hidden border border-gold-300/10 shadow-lg bg-stone-950">
            <iframe
              src={embedMapUrl}
              className="absolute inset-0 w-full h-full border-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              title="Endereço Dra. Thatiana Cristine"
            ></iframe>
            {/* Elegant glass overlay when iframe is not hovered */}
            <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md border border-gold-300/20 px-3 py-1 rounded-full text-[9px] text-gold-400 font-mono tracking-wider uppercase pointer-events-none">
              Savassi, BH
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
