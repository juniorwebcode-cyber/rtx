import React, { useRef, useState } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
} from 'lucide-react';
import { VIDEO_DATA, RTX_PRESENTERS, RTX_INFO } from '../data/rtxData';

export const InstitutionalVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="video-institucional" className="py-24 lg:py-32 bg-[#0A1628] text-white relative overflow-hidden bg-industrial-grid-dark border-y border-slate-800">
      {/* Ambient subtle light without rainbow glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#1E56A0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
            <Award className="w-3.5 h-3.5" />
            <span>Apresentação Institucional Oficial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 font-display">
            Conheça a RTX Construtora em Vídeo
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Acompanhe a apresentação oficial com <strong>Carlos Santos</strong> e <strong>Dulcinéia Santos</strong> da equipe RTX, demonstrando nossos serviços de controle de acesso, conservação e manutenção técnica.
          </p>
        </div>

        {/* Video Player + Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Responsive Video Player Container (7 cols) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] rounded-3xl overflow-hidden bg-[#070D18] border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
              {/* HTML5 Video Element */}
              <video
                ref={videoRef}
                src={VIDEO_DATA.videoUrl}
                poster={VIDEO_DATA.posterUrl}
                playsInline
                preload="metadata"
                className="w-full h-auto aspect-[9/16] max-h-[640px] object-cover mx-auto"
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
              />

              {/* Center Play Button Overlay (when paused) */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-[#0A1628]/50 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-opacity"
                >
                  <div className="w-20 h-20 rounded-2xl bg-white/10 hover:bg-amber-400 text-white hover:text-slate-950 flex items-center justify-center shadow-2xl border border-white/20 transition-all duration-300 transform group-hover:scale-105 active:scale-95">
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  </div>
                  <span className="mt-4 px-4 py-1.5 rounded-xl bg-[#0A1628]/90 border border-slate-700 text-xs font-semibold text-slate-200 tracking-wide">
                    Assistir Apresentação (0:35)
                  </span>
                </div>
              )}

              {/* Bottom Custom Control Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex items-center justify-between gap-3 text-white">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="p-2 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md transition-colors cursor-pointer"
                  aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <div className="flex-1 text-center text-xs font-semibold text-slate-300 truncate">
                  Carlos Santos & Dulcinéia Santos · RTX
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-2 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <button
                    type="button"
                    onClick={handleFullScreen}
                    className="p-2 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md transition-colors cursor-pointer"
                    aria-label="Tela Cheia"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Presenters & Video Insights (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Presenters Cards - Industrial Corporate Cards */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Porta-Vozes Oficiais no Vídeo
              </span>
              <div className="space-y-3">
                {RTX_PRESENTERS.map((pres, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#0F1E36] border border-slate-800 shadow-sm transition-all hover:border-slate-700"
                  >
                    <img
                      src={pres.photo}
                      alt={pres.name}
                      className="w-14 h-14 rounded-xl object-cover border border-slate-700 shrink-0"
                    />
                    <div>
                      <h4 className="text-base font-bold text-white font-display leading-tight">{pres.name}</h4>
                      <span className="text-xs text-amber-400 font-semibold block mt-0.5">
                        {pres.team} · {pres.role}
                      </span>
                      <p className="text-[11px] text-slate-400 italic mt-1 line-clamp-1">
                        "{pres.quote}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Highlights Box */}
            <div className="p-6 rounded-2xl bg-[#0F1E36] border border-slate-800 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Mensagem Central do Vídeo
              </h4>
              <p className="text-sm text-slate-200 font-medium italic mb-5 leading-relaxed">
                “Quando o assunto é cuidar do seu patrimônio, qualidade faz toda a diferença. Na RTX oferecemos serviço de controle de acesso, garantindo mais segurança e tranquilidade para sua empresa, condomínio ou empreendimento.”
              </p>
              <div className="grid grid-cols-1 gap-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Controlador de acesso presencial e tecnológico</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Conservação e higienização especializada</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Manutenção predial preventiva e técnica</span>
                </div>
              </div>
            </div>

            {/* Contact Box with WhatsApp Button */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0F1E36] to-[#0A1628] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Atendimento Oficial Indicado
                </span>
                <div className="text-sm font-bold text-white font-mono">
                  {RTX_INFO.phones[0].display}
                </div>
              </div>

              <a
                href={`https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(
                  'Olá! Assisti ao vídeo institucional da RTX e gostaria de solicitar um orçamento.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm whitespace-nowrap border border-amber-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar Orçamento</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
