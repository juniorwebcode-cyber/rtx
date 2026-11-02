import React from 'react';
import { ArrowRight, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { RTX_INFO } from '../data/rtxData';

export const CtaSection: React.FC = () => {
  const whatsAppUrl = `https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(
    'Olá! Vi o site da RTX e gostaria de solicitar um orçamento.'
  )}`;

  return (
    <section className="py-24 lg:py-32 bg-[#0A1628] text-white relative overflow-hidden border-t border-slate-800">
      {/* Industrial Blueprint Grid */}
      <div className="absolute inset-0 bg-industrial-grid-dark opacity-30 pointer-events-none" />

      {/* Subtle radial depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1E56A0]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono font-semibold text-[#F59E0B] uppercase tracking-wider mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
          Mais de 15 Anos de Experiência
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight font-heading">
          Quando o assunto é cuidar do seu patrimônio, <span className="text-[#F59E0B]">qualidade faz toda a diferença.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Entre em contato agora e solicite seu orçamento. Transformamos seu ambiente em um local gostoso de trabalhar e morar com segurança, conservação e engenharia de ponta.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-[#0A1628] bg-[#F59E0B] hover:bg-[#D97706] active:scale-95 rounded-xl shadow-lg transition-all duration-200 font-heading uppercase tracking-wider"
          >
            <MessageCircle className="w-5 h-5 text-[#0A1628]" />
            <span>Falar no WhatsApp Agora</span>
            <ArrowRight className="w-4 h-4 text-[#0A1628]" />
          </a>

          <a
            href={`tel:${RTX_INFO.phones[0].number}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/15 active:scale-95 rounded-xl backdrop-blur-md transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-[#F59E0B]" />
            <span>Ligar: {RTX_INFO.phones[0].display}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
