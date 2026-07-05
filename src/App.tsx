import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageCircle, 
  Instagram, 
  ChevronRight, 
  Check, 
  ShieldCheck, 
  Heart, 
  Clock, 
  Sparkles, 
  Star, 
  ArrowRight,
  Info,
  Calendar,
  Compass,
  MapPin,
  ChevronDown
} from "lucide-react";

import { EXPERT_INFO, REASONS_TO_TRUST, HOW_IT_WORKS_STEPS } from "./data";
import QuizOverlay from "./components/QuizOverlay";
import Logradouro from "./components/Logradouro";
import Lightbox from "./components/Lightbox";
import ProcedureVideo from "./components/ProcedureVideo";
import ContactMap from "./components/ContactMap";
import AutoSlider from "./components/AutoSlider";

export default function App() {
  const [showQuiz, setShowQuiz] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleWhatsAppPrimary = () => {
    const text = encodeURIComponent("Olá Dra. Thatiana! Gostaria de agendar a minha primeira consulta de avaliação para Harmonização Facial em Belo Horizonte.");
    const url = `${EXPERT_INFO.whatsappUrl}&text=${text}`;
    window.open(url, "_blank");
  };

  const handleWhatsAppDoubt = (procedureName: string) => {
    const text = encodeURIComponent(`Olá Dra. Thatiana! Vi seu site e gostaria de tirar uma dúvida sobre ${procedureName} sem compromisso.`);
    const url = `${EXPERT_INFO.whatsappUrl}&text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0d0c0a] text-stone-100 font-sans selection:bg-gold-400 selection:text-stone-950 antialiased overflow-x-hidden">
      
      {/* 1. INITIAL INTERACTIVE QUIZ OVERLAY */}
      <AnimatePresence>
        {showQuiz && (
          <QuizOverlay onEnterSite={() => setShowQuiz(false)} />
        )}
      </AnimatePresence>

      {/* 2. LOGRADOURO (STICKY AUTO-SCROLL TICKER MENU) */}
      <Logradouro />

      {/* HEADER BAR */}
      <header className="w-full bg-[#0d0c0a]/80 backdrop-blur-md border-b border-stone-900 sticky top-0 z-30 px-4 py-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand/Expert Name */}
          <div className="flex flex-col text-left">
            <h1 className="font-serif text-sm sm:text-base font-bold tracking-wider text-white uppercase leading-none">
              Dra. Thatiana Cristine
            </h1>
            <span className="text-[9px] uppercase tracking-widest text-gold-400 font-mono mt-1">
              Harmonização Facial • Belo Horizonte
            </span>
          </div>

          {/* Quick Contact Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={EXPERT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-stone-900 border border-stone-850 text-stone-400 hover:text-pink-500 hover:border-pink-500/20 active:scale-95 transition-all"
              title="Acessar Instagram da Dra."
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Quick assessment re-trigger button */}
            <button
              id="header-trigger-quiz"
              onClick={() => setShowQuiz(true)}
              className="hidden xs:flex items-center gap-1 text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-300 hover:bg-gold-400/20 transition-all active:scale-95"
            >
              <Sparkles className="w-3 h-3 fill-gold-300/20" />
              Refazer Quiz
            </button>

            <button
              id="header-cta-wp"
              onClick={handleWhatsAppPrimary}
              className="flex items-center gap-1.5 bg-gradient-to-r from-gold-400 to-amber-500 text-stone-950 text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-md shadow-gold-400/10"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-stone-950" />
              <span className="hidden sm:inline">Agendar</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT WRAPPER */}
      <main className="pb-24">

        {/* 3. HERO SECTION (PRIMEIRA DOBRA) */}
        <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 border-b border-stone-900">
          {/* Subtle gold radial background */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Column 1: Expert Portrait with Premium Border & Badges */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative group">
                {/* Dual gold outline decorative border */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-gold-500 to-amber-300 rounded-2xl opacity-40 blur-[1px] group-hover:opacity-70 transition-opacity"></div>
                
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden bg-stone-900 border border-gold-300/30 shadow-2xl">
                  <img
                    src={EXPERT_INFO.heroImage}
                    alt="Dra. Thatiana Cristine"
                    className="w-full h-full object-cover object-top scale-[1.02] hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle black overlay at the very bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
                  
                  {/* Signature on portrait bottom */}
                  <div className="absolute bottom-3 left-4 text-left">
                    <span className="text-[10px] tracking-widest text-gold-300 uppercase font-mono leading-none block mb-1">
                      Foto Oficial
                    </span>
                    <span className="font-signature text-2xl text-white block">
                      Thatiana Cristine
                    </span>
                  </div>
                </div>

                {/* Floating experience tag */}
                <div className="absolute -top-3 -right-3 bg-stone-950 border border-gold-400/40 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 text-[10px] font-bold text-white uppercase tracking-widest">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>Método Seguro</span>
                </div>

                {/* Floating localization tag */}
                <div className="absolute bottom-10 -left-4 bg-stone-950/95 backdrop-blur-md border border-stone-850 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1 text-[10px] text-stone-300">
                  <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
                  <span>Savassi, BH</span>
                </div>
              </div>
            </div>

            {/* Column 2: Personal Headline & Transformational Copy */}
            <div className="md:col-span-7 text-left space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400 fill-gold-400/20 animate-pulse" />
                  Beleza Real, Sem Excessos
                </span>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight font-medium tracking-tight">
                  Eu sou a <br />
                  <span className="text-gold-300 font-bold">Dra. Thatiana Cristine.</span>
                </h2>
                
                <p className="text-base sm:text-lg text-stone-200 font-serif leading-relaxed italic">
                  "Minha missão é devolver a jovialidade e harmonia do seu rosto realçando sua própria identidade, preservando cada traço único."
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-sans">
                Esqueça os padrões artificiais ou procedimentos exagerados. Através de um diagnóstico facial minucioso e individualizado em Belo Horizonte, meu método exclusivo entrega a naturalidade, rejuvenescimento e elegância que você merece, com total segurança técnica.
              </p>

              {/* Outstanding CTA Container */}
              <div className="space-y-3 pt-2">
                <button
                  id="hero-primary-wp-cta"
                  onClick={handleWhatsAppPrimary}
                  className="w-full sm:w-auto bg-gradient-to-r from-gold-400 via-amber-400 to-amber-500 hover:brightness-110 active:scale-[0.98] text-stone-950 font-bold py-4 px-8 rounded-xl text-xs sm:text-sm tracking-wide shadow-lg shadow-gold-500/10 flex items-center justify-center gap-3 transition-all animate-pulse-wp"
                >
                  <MessageCircle className="w-5 h-5 fill-stone-950" />
                  AGENDAR CONSULTA DE AVALIAÇÃO NO WHATSAPP
                </button>
                <div className="flex items-center gap-1.5 justify-center sm:justify-start text-[11px] text-stone-500 font-mono">
                  <Check className="w-3.5 h-3.5 text-gold-400" />
                  <span>Sem compromisso • Atendimento individualizado em Savassi</span>
                </div>
              </div>
            </div>

          </div>

          {/* Procedure presentation video (Deixe bem no começo se destacando) */}
          <div className="max-w-4xl mx-auto mt-16">
            <ProcedureVideo />
          </div>

        </section>

        {/* 4. BLOCO "QUEM SOU EU" (AUTORIDADE PESSOAL) */}
        <section id="sobre-mim" className="py-16 px-4 sm:px-6 bg-[#090807]/50 border-b border-stone-900 scroll-mt-20">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Column 1: Copy with human, non-clinical touch */}
            <div className="md:col-span-7 text-left space-y-6 md:order-1">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block font-bold">
                  Sua beleza em boas mãos
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium leading-tight">
                  Muito prazer, sou a Thatiana
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                <p>
                  Desde o início da minha jornada na Harmonização Facial, percebi que a maior dor das pacientes é o medo de perderem a própria identidade. Sites clínicos, fotos genéricas e jargões frios nunca representaram meu trabalho.
                </p>
                <p>
                  Eu vejo cada rosto como uma obra de arte única. O envelhecimento é um processo natural, mas podemos passar por ele com extrema elegância e suavidade. No meu consultório, você nunca será tratada como um protocolo padrão.
                </p>
                <p>
                  Meu compromisso é oferecer um atendimento de excelência técnica onde a honestidade vem em primeiro lugar. Se você não precisa de um procedimento, eu não indicarei.
                </p>
              </div>

              {/* Differentiator bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Avaliação facial integrada e honesta",
                  "Foco absoluto em rejuvenescimento natural",
                  "Procedimentos executados 100% por mim",
                  "Ambiente acolhedor e altamente privativo",
                  "Acompanhamento pós-procedimento próximo",
                  "As melhores marcas e insumos do mercado"
                ].map((diff, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-stone-200">
                    <div className="w-4 h-4 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-gold-400" />
                    </div>
                    <span>{diff}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 text-left">
                <button
                  id="sobre-cta-wp"
                  onClick={() => handleWhatsAppDoubt("meu método de Harmonização")}
                  className="inline-flex items-center gap-2 text-xs font-bold text-gold-300 hover:text-gold-400 underline underline-offset-4 transition-colors"
                >
                  Conhecer melhor meu método pelo WhatsApp
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Column 2: Expert Portrait representing authority/backstage */}
            <div className="md:col-span-5 flex justify-center md:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-stone-800 to-gold-400/20 rounded-2xl opacity-60"></div>
                <div className="relative w-60 h-80 rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 shadow-xl">
                  <img
                    src={EXPERT_INFO.secondaryImage}
                    alt="Atendimento Dra. Thatiana Cristine"
                    className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle visual banner */}
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-gold-300/10 text-[9px] uppercase tracking-wider text-gold-300 font-mono">
                    Atendimento Exclusivo
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 5. BLOCO "RESULTADOS REAIS" (PROVA VISUAL FORTE - GALERIA EM GRID COM LIGHTBOX) */}
        <section id="prova-visual" className="py-16 px-4 sm:px-6 border-b border-stone-900 scroll-mt-20">
          <div className="max-w-4xl mx-auto space-y-10">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold block">
                Galeria de Resultados Reais
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium leading-tight">
                A Arte de Realçar com Sutileza
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 max-w-lg mx-auto">
                Confira algumas transformações sob o olhar da Dra. Thatiana. Toque nas imagens para ampliá-las e ver os detalhes em alta definição.
              </p>
            </div>

            {/* Auto-sliding gallery of images - slides automatically to the side */}
            <AutoSlider interval={3000}>
              {EXPERT_INFO.galleryImages.map((image, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedImage(image)}
                  className="relative aspect-[3/4] w-[260px] sm:w-[310px] shrink-0 snap-start rounded-xl overflow-hidden border border-gold-300/10 hover:border-gold-400/40 bg-stone-950 cursor-pointer group shadow-md transition-all active:scale-[0.98]"
                >
                  <img
                    src={image}
                    alt={`Antes e Depois - Exemplo ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Glass overlay with label */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-3 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[9px] uppercase tracking-widest text-gold-300 font-semibold font-mono">
                      Ver detalhes
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-gold-300 animate-pulse" />
                  </div>

                  {/* Absolute tags */}
                  <div className="absolute top-2 left-2 bg-stone-950/80 backdrop-blur-md border border-white/5 px-2 py-0.5 rounded text-[8px] uppercase tracking-wider text-stone-300 font-mono">
                    Resultado #{idx + 1}
                  </div>
                </div>
              ))}

              {/* Ready to customize placeholder visual block */}
              <div className="border-2 border-dashed border-stone-800 rounded-xl flex flex-col items-center justify-center p-4 text-center aspect-[3/4] w-[260px] sm:w-[310px] shrink-0 snap-start group hover:border-gold-300/20 transition-all">
                <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-500 mb-2 group-hover:text-gold-300 group-hover:border-gold-300/20 transition-colors">
                  +
                </div>
                <span className="text-[10px] text-stone-500 group-hover:text-stone-400 transition-colors px-2">
                  Adicione novos resultados no arquivo <code className="font-mono bg-stone-950 px-1 py-0.5 rounded text-[9px] text-stone-400">src/data.ts</code> facilmente
                </span>
              </div>
            </AutoSlider>


            {/* Regulatory disclaimer */}
            <div className="text-center">
              <span className="inline-block text-[11px] text-stone-500 font-mono italic">
                *Aviso de Responsabilidade: Resultados individuais podem variar. Os casos exibidos são representativos de protocolos de tratamento personalizados para cada paciente.
              </span>
            </div>

          </div>
        </section>

        {/* 6. BLOCO "POR QUE CONFIAR EM MIM" */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-stone-900/20 to-stone-950/40 border-b border-stone-900">
          <div className="max-w-4xl mx-auto space-y-10">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold block">
                Diferenciais Pessoais
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium leading-tight">
                Pilares da Minha Conduta Profissional
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 max-w-lg mx-auto">
                Estes são os valores inegociáveis que norteiam cada atendimento que realizo no meu consultório.
              </p>
            </div>

            {/* Differential cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REASONS_TO_TRUST.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-stone-900/40 hover:bg-stone-900/60 border border-stone-850/60 hover:border-gold-300/20 p-6 rounded-2xl text-left transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 mb-4 group-hover:bg-gold-400 group-hover:text-stone-950 transition-all">
                    <span className="text-xs font-bold font-mono">0{idx + 1}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white tracking-wide uppercase mb-2 font-serif group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 7. CTA INTERMEDIÁRIO (REPETIR CTA COM FOCO EM OBJEÇÃO) */}
        <section className="py-16 px-4 sm:px-6 bg-stone-950 border-b border-stone-900 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h3 className="text-xl sm:text-2xl font-serif text-white leading-tight font-medium">
              Tem receio de ficar artificial ou perder seus traços?
            </h3>
            
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-md mx-auto">
              No meu método, faremos um mapeamento facial completo para harmonizar apenas o que realmente fará diferença de forma sutil. Sem excessos de produto. Sem transformações genéricas.
            </p>

            <div className="pt-2">
              <button
                id="cta-interm-wp"
                onClick={handleWhatsAppPrimary}
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold py-3.5 px-8 rounded-xl text-xs sm:text-sm tracking-wide shadow-md flex items-center justify-center gap-2.5 mx-auto active:scale-95 transition-all animate-pulse-wp"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                CONVERSAR COM A DRA. THATIANA
              </button>
              <span className="block text-[10px] text-stone-500 font-mono mt-2 uppercase tracking-wider">
                Sem qualquer tipo de compromisso
              </span>
            </div>
          </div>
        </section>

        {/* 8. BLOCO "COMO FUNCIONA A PRIMEIRA CONSULTA" */}
        <section className="py-16 px-4 sm:px-6 border-b border-stone-900">
          <div className="max-w-4xl mx-auto space-y-10">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold block">
                Sua Jornada Conosco
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium leading-tight">
                Como Funciona a Primeira Consulta?
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 max-w-lg mx-auto">
                Transparência e segurança do primeiro contato até o pós-tratamento. Veja como funciona:
              </p>
            </div>

            {/* Steps list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {HOW_IT_WORKS_STEPS.map((step, idx) => (
                <div 
                  key={idx}
                  className="bg-stone-900/20 border border-stone-850/60 rounded-2xl p-6 text-left space-y-4 relative"
                >
                  <div className="absolute -top-4 -left-2 w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-amber-500 text-stone-950 font-bold flex items-center justify-center text-sm shadow-md shadow-gold-500/10 font-mono">
                    {step.number}
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="text-sm font-bold text-white tracking-wide uppercase font-serif mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-xs text-stone-400 leading-relaxed font-sans">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 9. BLOCO "MAIS PROVAS" (HARMONIZAÇÃO DE S2 E COMENTÁRIOS DE PACIENTES) */}
        <section id="harmonizacao-de-coracao" className="py-16 px-4 sm:px-6 bg-[#090807]/30 border-b border-stone-900 scroll-mt-20">
          <div className="max-w-4xl mx-auto space-y-10">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 text-emerald-400 font-mono text-[10px] uppercase tracking-widest font-bold">
                <Heart className="w-3.5 h-3.5 fill-emerald-500/20 animate-pulse" />
                Harmonização de Coração
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium leading-tight">
                O Depoimento de Quem Vivenciou a Transformação
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 max-w-lg mx-auto">
                Nada nos traz mais orgulho do que o sorriso e a gratidão das nossas pacientes. Toque nos prints abaixo para ler o carinho e o relato das nossas consultas.
              </p>
            </div>

            {/* Category: Prints WhatsApp feedbacks (de 💚) */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gold-300 font-bold text-left border-l-2 border-gold-400 pl-2">
                Recados Recebidos com Carinho
              </h4>
              
              <AutoSlider interval={3500}>
                {EXPERT_INFO.heartFeedbacks.map((image, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setSelectedImage(image)}
                    className="relative aspect-[3/4] w-[210px] sm:w-[250px] shrink-0 snap-start rounded-xl overflow-hidden border border-emerald-500/10 hover:border-emerald-500/40 cursor-pointer bg-stone-950 group shadow-md transition-all active:scale-[0.98]"
                  >
                    <img
                      src={image}
                      alt={`Depoimento Dra. Thatiana ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                      <span className="text-[8px] text-emerald-400 uppercase tracking-widest font-bold font-mono">Ampliar Print</span>
                      <Heart className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                    </div>
                  </div>
                ))}
              </AutoSlider>
            </div>

            {/* Category: Comments screenshot area */}
            <div className="space-y-4 pt-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gold-300 font-bold text-left border-l-2 border-gold-400 pl-2">
                Avaliações na Comunidade
              </h4>
              
              <AutoSlider interval={4000}>
                {EXPERT_INFO.patientComments.map((image, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setSelectedImage(image)}
                    className="relative w-[280px] sm:w-[350px] shrink-0 snap-start rounded-xl overflow-hidden border border-gold-400/20 hover:border-gold-400/50 cursor-pointer bg-stone-950 group shadow-lg transition-all active:scale-[0.98] p-2"
                  >
                    <div className="aspect-[3/2] rounded-lg overflow-hidden bg-stone-900/60 border border-gold-400/10 flex items-center justify-center p-1">
                      <img
                        src={image}
                        alt={`Avaliação de paciente ${idx + 1}`}
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="pt-2 px-1 flex items-center justify-between text-[10px] text-stone-500 font-mono">
                      <span>Avaliação Verificada</span>
                      <span className="text-gold-300 group-hover:underline">Toque para ampliar</span>
                    </div>
                  </div>
                ))}
              </AutoSlider>
            </div>

            {/* Category: Custom written Patient Quote card for additional text-based rhythm */}
            <div className="bg-stone-900/20 border border-gold-300/10 rounded-2xl p-6 sm:p-8 text-left relative overflow-hidden">
              <div className="absolute -top-6 -right-6 text-9xl text-gold-400/5 font-serif pointer-events-none select-none">
                “
              </div>
              <div className="flex gap-1 text-gold-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif italic mb-4">
                "Procurei a Dra. Thatiana com medo de ficar com bochecha de 'buldogue' ou com cara de boneca de cera. Ela sentou comigo, olhou meu rosto com calma, me explicou detalhe por detalhe, indicou pouquíssimo produto e o resultado ficou inacreditável. Me sinto 10 anos mais jovem e ninguém sabe o que eu fiz, só me elogiam!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-[10px] font-bold text-gold-300">
                  MC
                </div>
                <div>
                  <h5 className="text-xs font-bold text-stone-200">Mariana C.</h5>
                  <span className="text-[9px] text-stone-500">Paciente Belo Horizonte • Lourdes</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 10. ONDE NOS ENCONTRAR (SAVASSI, BELO HORIZONTE ADDRESS WITH INTEGRATED ACTIONS) */}
        <section id="onde-nos-encontrar" className="py-16 px-4 sm:px-6 border-b border-stone-900 scroll-mt-20">
          <ContactMap />
        </section>

        {/* 11. CTA FINAL (DECISÃO) */}
        <section id="contato" className="py-20 px-4 sm:px-6 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-400">
                Sua vez de se cuidar
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif text-white font-bold leading-tight tracking-tight">
                Agende a sua primeira consulta de avaliação
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 max-w-md mx-auto">
                Dê o primeiro passo para resgatar sua autoestima com a segurança e naturalidade que você tanto procura. Clique no botão abaixo para conversar diretamente conosco via WhatsApp.
              </p>
            </div>

            {/* Big emphasis button */}
            <div className="space-y-4">
              <button
                id="cta-final-wp"
                onClick={handleWhatsAppPrimary}
                className="w-full sm:w-auto bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 hover:brightness-110 active:scale-[0.98] text-stone-950 font-bold py-4.5 px-10 rounded-xl text-xs sm:text-sm tracking-widest shadow-xl shadow-gold-500/25 flex items-center justify-center gap-3 mx-auto transition-all animate-pulse-wp uppercase"
              >
                <MessageCircle className="w-5 h-5 fill-stone-950 animate-bounce" />
                Agendar Minha Avaliação pelo WhatsApp
              </button>
              
              <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-stone-500 font-mono">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gold-400" /> Resposta em poucos minutos
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" /> Atendimento Privativo e Seguro
                </span>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* 12. RODAPÉ SIMPLES */}
      <footer className="w-full bg-stone-950 border-t border-stone-900 py-12 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="space-y-2">
            <span className="font-signature text-3xl text-gold-300 block">
              Dra. Thatiana Cristine
            </span>
            <span className="text-[10px] text-stone-400 uppercase tracking-widest font-mono block">
              Harmonização Facial • Savassi, Belo Horizonte
            </span>
          </div>

          <p className="text-[10px] text-stone-600 leading-relaxed max-w-md mx-auto">
            © {new Date().getFullYear()} Dra. Thatiana Cristine. Todos os direitos reservados.<br />
            Consultório Savassi: Rua Paraíba, 1352, Belo Horizonte - MG.<br />
            Responsável Técnica: Dra. Thatiana Cristine.
          </p>

          <div className="flex items-center justify-center gap-4 pt-2">
            <a 
              href={EXPERT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-pink-400 transition-colors flex items-center gap-1 text-[11px] uppercase tracking-wider font-mono font-bold"
            >
              <Instagram className="w-3.5 h-3.5" />
              Siga no Instagram
            </a>
          </div>

        </div>
      </footer>

      {/* 13. IMAGE LIGHTBOX COMPONENT */}
      <Lightbox 
        imageUrl={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />

    </div>
  );
}
