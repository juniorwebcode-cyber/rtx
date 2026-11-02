import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/rtxData';
import { GoogleReviewsBadge } from './GoogleReviewsBadge';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS_DATA.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TESTIMONIALS_DATA.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <GoogleReviewsBadge className="mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#0A1628] font-heading tracking-tight mb-4">
            O que dizem os clientes e síndicos
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A satisfação de quem confia seu patrimônio aos mais de 15 anos de excelência técnica da RTX Construtora com nota máxima 4.9 no Google.
          </p>
        </div>

        {/* Carousel / Interactive Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl border-l-4 border-l-[#1E56A0] hover-card-glow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-1.5">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
                <span className="text-xs font-mono font-bold text-slate-800 ml-2">5.0 / 5.0</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Avaliação Verificada</span>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-slate-800 font-normal leading-relaxed italic mb-8">
              "{current.text}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <div>
                <h4 className="text-base font-bold text-[#0A1628] font-heading">{current.name}</h4>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  <span className="text-[#1E56A0] font-semibold">{current.role}</span> • <span>{current.companyOrLocation}</span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-800 transition-colors cursor-pointer shadow-2xs"
                  aria-label="Depoimento Anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono tabular-nums text-slate-500 px-3">
                  0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                </span>
                <button
                  type="button"
                  onClick={next}
                  className="p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-800 transition-colors cursor-pointer shadow-2xs"
                  aria-label="Próximo Depoimento"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
