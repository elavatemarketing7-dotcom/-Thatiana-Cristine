import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, Shield, Award, Sparkles, MessageCircle, Globe } from "lucide-react";
import { QUIZ_QUESTIONS, EXPERT_INFO } from "../data";

interface QuizOverlayProps {
  onEnterSite: () => void;
}

export default function QuizOverlay({ onEnterSite }: QuizOverlayProps) {
  const [currentStep, setCurrentStep] = useState<"intro" | "questions" | "analyzing" | "result">("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  // Analyze progress bar tick
  useEffect(() => {
    let timer: any;
    if (currentStep === "analyzing") {
      setAnalysisProgress(0);
      timer = setInterval(() => {
        setAnalysisProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => {
              setCurrentStep("result");
            }, 300);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [currentStep]);

  const handleSelectOption = (optionText: string) => {
    const nextAnswers = [...answers, optionText];
    setAnswers(nextAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCurrentStep("analyzing");
    }
  };

  const getWhatsAppMessage = () => {
    const introText = `Olá Dra. Thatiana! Realizei a pré-avaliação personalizada no seu site e meu perfil deu COMPATÍVEL. Gostaria de enviar minhas respostas:\n\n`;
    const formattedAnswers = QUIZ_QUESTIONS.map((q, idx) => {
      return `*${idx + 1}. ${q.question}*\nRespost: ${answers[idx] || "Não respondido"}`;
    }).join("\n\n");
    const outroText = `\n\nQuero agendar minha consulta em Belo Horizonte para realçar minha beleza com naturalidade! ✨`;
    return encodeURIComponent(introText + formattedAnswers + outroText);
  };

  const handleSendEvaluation = () => {
    const text = getWhatsAppMessage();
    const url = `${EXPERT_INFO.whatsappUrl}&text=${text}`;
    window.open(url, "_blank");
  };

  const handleWhatsAppNoCommitment = () => {
    const text = encodeURIComponent("Olá Dra. Thatiana, gostaria de tirar algumas dúvidas sobre os procedimentos de Harmonização Facial sem compromisso!");
    const url = `${EXPERT_INFO.whatsappUrl}&text=${text}`;
    window.open(url, "_blank");
  };

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const progressPercent = ((currentQuestionIndex) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div id="quiz-root" className="fixed inset-0 z-50 overflow-y-auto bg-[#0d0c0a]/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-stone-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Container: Ultra-Compact, elegant and structured */}
      <div className="relative w-full max-w-sm bg-stone-900/95 border border-gold-400/25 rounded-2xl overflow-hidden shadow-2xl shadow-black/90 flex flex-col my-auto max-h-[96vh]">
        
        {/* TOP PERSISTENT EXPERT BRANDING BAR (As requested: nome do heroi aparente no quizz inteiro e foto flutuante do heroi) */}
        <div className="bg-stone-950 px-4 py-2.5 border-b border-gold-300/10 flex items-center gap-2.5 shrink-0">
          <div className="relative">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gold-400 shadow-md">
              <img 
                src={EXPERT_INFO.secondaryImage} 
                alt={EXPERT_INFO.name} 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 bg-green-500 w-2 h-2 rounded-full border border-stone-950 animate-ping"></div>
            <div className="absolute -bottom-0.5 -right-0.5 bg-green-500 w-2 h-2 rounded-full border border-stone-950"></div>
          </div>
          <div>
            <h4 className="text-[12px] font-bold tracking-wide text-gold-400 font-serif leading-none">
              {EXPERT_INFO.name}
            </h4>
            <span className="text-[9px] text-stone-400 uppercase tracking-widest font-mono block mt-0.5">
              {EXPERT_INFO.role} • BH
            </span>
          </div>
        </div>

        {/* PROGRESS BAR FOR QUESTIONS */}
        {currentStep === "questions" && (
          <div className="w-full bg-stone-800 h-0.5 shrink-0">
            <div 
              className="bg-gradient-to-r from-gold-400 to-amber-500 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        )}

        {/* INTERACTIVE SCREENS CONTAINER */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            
            {/* 1. INTRO SCREEN */}
            {currentStep === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col text-center"
              >
                <div className="mx-auto mb-3 relative inline-block">
                  {/* Floating Frame Photo of Hero in the intro - Compacted size */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-gold-400/40 p-0.5 bg-stone-800 shadow-md rotate-3 hover:rotate-0 transition-transform duration-350">
                    <img 
                      src={EXPERT_INFO.heroImage} 
                      alt={EXPERT_INFO.name} 
                      className="w-full h-full object-cover object-top rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 bg-gold-400 text-stone-950 text-[8px] font-bold px-1.5 py-0.5 rounded-full shadow-sm uppercase tracking-wide">
                    Exclusivo
                  </span>
                </div>

                <h2 className="text-base font-serif text-white leading-tight mb-1.5 tracking-tight">
                  Sua beleza é única. <br />
                  <span className="text-gold-300 font-semibold text-sm">Descubra seu protocolo ideal</span>
                </h2>
                
                <p className="text-[11px] text-stone-400 leading-relaxed mb-4 px-1">
                  Olá! Sou a <strong className="text-stone-300 font-semibold">Dra. Thatiana Cristine</strong>. Preparei esta pré-avaliação interativa rápida para entender suas expectativas de naturalidade facial.
                </p>

                {/* Primary Button: Start Quiz */}
                <button
                  id="btn-start-quiz"
                  onClick={() => setCurrentStep("questions")}
                  className="w-full bg-gradient-to-r from-gold-400 via-amber-500 to-gold-500 text-stone-950 font-bold py-2.5 px-4 rounded-xl shadow-md hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 mb-2 text-xs tracking-wide"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-stone-950" />
                  Iniciar Avaliação Personalizada
                </button>

                {/* Secondary Button: Go direct to site */}
                <button
                  id="btn-bypass-to-site"
                  onClick={onEnterSite}
                  className="w-full bg-stone-850 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 py-2 px-4 rounded-xl text-[11px] font-medium transition-all flex items-center justify-center gap-1 mb-1.5"
                >
                  <Globe className="w-3 h-3" />
                  Ir direto para o site da Dra. Thatiana
                </button>

                {/* Optional WhatsApp Button */}
                <button
                  id="btn-direct-whatsapp-intro"
                  onClick={handleWhatsAppNoCommitment}
                  className="w-full bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-500/20 py-2 px-4 rounded-xl text-[11px] font-medium transition-all flex items-center justify-center gap-1"
                >
                  <MessageCircle className="w-3 h-3 fill-emerald-400/20" />
                  WhatsApp sem compromisso
                </button>

                <div className="mt-4 flex items-center justify-center gap-3 text-[9px] text-stone-500 border-t border-stone-800/60 pt-3">
                  <span className="flex items-center gap-0.5">
                    <Shield className="w-2.5 h-2.5 text-gold-400" /> Seguro
                  </span>
                  <span className="flex items-center gap-0.5">
                    <Award className="w-2.5 h-2.5 text-gold-400" /> Exclusivo
                  </span>
                </div>
              </motion.div>
            )}

            {/* 2. QUESTIONS SCREEN */}
            {currentStep === "questions" && (
              <motion.div
                key="questions"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="flex flex-col"
              >
                {/* Floating miniature photo inside the question box for emotional link */}
                <div className="flex items-center gap-2 mb-2 bg-stone-950/40 p-1.5 rounded-lg border border-stone-800/40">
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-gold-300/30">
                    <img 
                      src={EXPERT_INFO.secondaryImage} 
                      alt="" 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[9px] text-stone-400 italic font-mono">
                    Sua resposta é individual e sigilosa...
                  </span>
                </div>

                <span className="text-[9px] text-gold-400 font-bold uppercase tracking-wider font-mono mb-0.5">
                  Pergunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}
                </span>
                
                <h3 className="text-xs sm:text-sm font-serif text-white font-medium leading-snug mb-3.5">
                  {currentQuestion.question}
                </h3>

                <div className="space-y-2 mb-3">
                  {currentQuestion.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(option)}
                      className="w-full text-left bg-stone-950 hover:bg-stone-850 hover:border-gold-300/30 border border-stone-800/40 p-3 rounded-lg text-[11px] sm:text-xs text-stone-200 transition-all duration-150 flex items-center justify-between group active:scale-[0.99]"
                    >
                      <span className="pr-2">{option}</span>
                      <div className="w-3.5 h-3.5 rounded-full border border-stone-700 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-400/10 transition-colors shrink-0">
                        <ArrowRight className="w-2 h-2 text-transparent group-hover:text-gold-400 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>

                {/* Link to bypass quiz */}
                <button
                  onClick={onEnterSite}
                  className="mt-1 text-[10px] text-stone-500 hover:text-gold-300 text-center transition-colors underline underline-offset-4"
                >
                  Pular e ir para o site
                </button>
              </motion.div>
            )}

            {/* 3. ANALYZING LOADING SCREEN (Prompts Extra 1: barrinha carregando escrito "Analisando") */}
            {currentStep === "analyzing" && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-4 text-center"
              >
                <div className="relative mb-4">
                  <div className="w-12 h-12 rounded-full border-2 border-stone-800 border-t-gold-400 animate-spin"></div>
                  <Sparkles className="w-4 h-4 text-gold-400 absolute inset-0 m-auto animate-pulse" />
                </div>

                <h3 className="text-sm font-serif text-white font-medium mb-0.5">
                  Analisando Perfil
                </h3>
                <p className="text-[10px] text-stone-400 max-w-xs mx-auto mb-4">
                  Avaliando suas respostas de harmonização natural...
                </p>

                {/* Progress bar with label */}
                <div className="w-full bg-stone-950 p-1 rounded-full border border-stone-800/80 max-w-xs mx-auto">
                  <div className="w-full bg-stone-900 h-2 rounded-full overflow-hidden relative">
                    <div 
                      className="h-full bg-gradient-to-r from-gold-400 via-amber-400 to-amber-500 transition-all duration-100 rounded-full"
                      style={{ width: `${analysisProgress}%` }}
                    ></div>
                    <span className="absolute inset-0 text-[8px] font-mono font-bold text-center flex items-center justify-center text-white mix-blend-difference uppercase tracking-wider">
                      Analisando... {analysisProgress}%
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. PERSUASIVE RESULT SCREEN (As requested: Foto dela do peito pra cima, Perfil Compatível, Você é a Paciente ideal, Método da expert consegue entregar exatamente a naturalidade, compact, fits all mobile screen) */}
            {currentStep === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col"
              >
                {/* Result header */}
                <div className="text-center mb-2.5">
                  <span className="inline-flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" /> Perfil Compatível
                  </span>
                  
                  <h2 className="text-sm sm:text-base font-serif text-white font-bold leading-none tracking-tight">
                    Você é a Paciente Ideal
                  </h2>
                </div>

                {/* Profile presentation - Chest up photo of Dra with sophisticated dark gradient back */}
                <div className="relative rounded-xl overflow-hidden mb-3 bg-gradient-to-b from-stone-800 to-stone-950 border border-gold-300/30 p-2 flex gap-3 items-center shadow-md">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-gold-400 shrink-0 bg-stone-900">
                    <img 
                      src={EXPERT_INFO.heroImage} 
                      alt={EXPERT_INFO.name} 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-[10px] text-white leading-normal font-medium">
                      "Com base nas suas respostas, o Método da <span className="text-gold-300 font-semibold">{EXPERT_INFO.name}</span> consegue entregar exatamente a naturalidade e segurança que você procura."
                    </p>
                  </div>
                </div>

                {/* Visual Group of 3 Action Buttons - compacted size */}
                <div className="space-y-1.5">
                  
                  {/* Button 1: Enviar minha avaliação (whatsapp custom msg) */}
                  <button
                    id="btn-send-evaluation-wp"
                    onClick={handleSendEvaluation}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold py-2 px-3 rounded-lg shadow-sm text-[11px] tracking-wide flex items-center justify-center gap-1.5 transform active:scale-95 transition-all animate-pulse-wp"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                    1 - Enviar minha avaliação à DRA
                  </button>

                  {/* Button 2: Chamar no WhatsApp sem compromisso */}
                  <button
                    id="btn-whatsapp-no-commit"
                    onClick={handleWhatsAppNoCommitment}
                    className="w-full bg-stone-800 hover:bg-stone-750 text-emerald-400 border border-emerald-500/20 font-semibold py-1.5 px-3 rounded-lg text-[11px] tracking-wide flex items-center justify-center gap-1.5 transform active:scale-95 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    2 - CHAMAR NO WHATSAPP SEM COMPROMISSO
                  </button>

                  {/* Button 3: Nao enviar e continuar no site (exactly matching formatting of others) */}
                  <button
                    id="btn-skip-and-enter-site"
                    onClick={onEnterSite}
                    className="w-full bg-stone-900 hover:bg-stone-850 text-stone-400 hover:text-white border border-stone-850 py-1.5 px-3 rounded-lg text-[11px] tracking-wide flex items-center justify-center gap-1.5 transform active:scale-95 transition-all"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    3 - NÃO ENVIAR E CONTINUAR NO SITE
                  </button>
                  
                </div>

                <p className="text-[8px] text-stone-500 text-center mt-2.5 font-mono">
                  Seus dados estão protegidos. BH Savassi.
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
        
      </div>
      
    </div>
  );
}
