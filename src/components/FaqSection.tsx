import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQ_DATA, RTX_INFO } from '../data/rtxData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A1628]/5 border border-[#0A1628]/10 text-xs font-semibold text-[#1E56A0] tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E56A0]"></span>
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#0A1628] font-heading tracking-tight mb-3">
            Tire suas dúvidas sobre a RTX Construtora
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Transparência e clareza técnica em todas as etapas contratuais e executivas.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#1E56A0] bg-slate-50 shadow-xs' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A1628] font-heading">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center shrink-0 text-slate-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0A1628] text-white border-[#0A1628]' : 'bg-slate-50'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/70 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 sm:p-7 rounded-xl bg-[#0A1628] text-white border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-5 shadow-md">
          <div className="text-left">
            <h4 className="text-sm sm:text-base font-bold text-white font-heading">Ainda tem alguma pergunta técnica ou comercial?</h4>
            <p className="text-xs text-slate-300 mt-1">Nossa equipe de engenharia está à disposição no canal corporativo do WhatsApp.</p>
          </div>
          <a
            href={`https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent('Olá! Gostaria de tirar uma dúvida sobre os serviços da RTX.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-xs font-semibold text-[#0A1628] bg-[#F59E0B] hover:bg-[#D97706] rounded-xl transition-all flex items-center gap-2 shrink-0 shadow-sm font-heading"
          >
            <MessageCircle className="w-4 h-4 text-[#0A1628]" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
