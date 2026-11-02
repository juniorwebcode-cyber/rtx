import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { RTX_INFO } from '../data/rtxData';

export const ExitIntentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Exit intent detection via mouseleave toward top of viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasTriggered) {
        // Check session storage so we don't annoy repeatedly
        const alreadyShown = sessionStorage.getItem('rtx_exit_intent_shown');
        if (!alreadyShown) {
          setIsOpen(true);
          setHasTriggered(true);
          sessionStorage.setItem('rtx_exit_intent_shown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const whatsAppUrl = `https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(
    'Olá! Antes de sair do site da RTX, gostaria de solicitar uma avaliação técnica e orçamento sem compromisso.'
  )}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1628]/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden text-center">
        {/* Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F59E0B]" />

        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Fechar pop-up"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo and Icon */}
        <div className="mx-auto w-16 h-16 rounded-xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center mb-4">
          <img
            src={RTX_INFO.officialLogo}
            alt="RTX Construtora"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A1628]/5 border border-[#0A1628]/10 text-xs font-semibold text-[#1E56A0] tracking-wider uppercase mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E56A0]"></span>
          Oportunidade de Orçamento Exclusivo
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#0A1628] font-heading tracking-tight mb-3">
          Vai iniciar uma obra ou precisa cuidar do seu patrimônio?
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          Não feche com nenhum fornecedor antes de falar com a equipe de engenharia da <strong className="text-slate-900">RTX Construtora</strong>. Mais de 15 anos de excelência com garantia, pontualidade e os melhores preços de Piracicaba e região.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-left flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#1E56A0] shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-slate-900">Avaliação técnica sem custo:</strong> Converse diretamente com nossos especialistas no WhatsApp agora mesmo.
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="w-full py-4 px-6 rounded-xl text-sm font-bold text-[#0A1628] bg-[#F59E0B] hover:bg-[#D97706] active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2 font-heading uppercase tracking-wider"
          >
            <MessageCircle className="w-4 h-4 text-[#0A1628]" />
            <span>Falar com Engenheiro no WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#0A1628]" />
          </a>

          <button
            type="button"
            onClick={handleClose}
            className="text-xs text-slate-400 hover:text-slate-600 py-1 transition-colors cursor-pointer"
          >
            Continuar navegando no site
          </button>
        </div>
      </div>
    </div>
  );
};
