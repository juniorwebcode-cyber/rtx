import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Award, CheckCircle2, MapPin, Building, ShieldCheck, Calculator, Sparkles } from 'lucide-react';
import { RTX_INFO } from '../data/rtxData';
import { GoogleReviewsBadge } from './GoogleReviewsBadge';

export const Hero: React.FC = () => {
  const [quotesToday, setQuotesToday] = useState(14);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuotesToday((prev) => prev + 1);
    }, 18000);
    return () => clearTimeout(timer);
  }, []);

  const whatsAppUrl = `https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(
    'Olá! Vi o site da RTX e gostaria de solicitar um orçamento.'
  )}`;

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white bg-industrial-grid">
      {/* Structural ambient light for depth without AI-slop color clashing */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-gradient-to-b from-blue-50/60 via-slate-50/20 to-transparent -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-[400px] bg-gradient-to-t from-slate-100/50 to-transparent -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Badges Row: Live Social Proof + Official Google 4.9 Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-800 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span>
                  <strong className="font-semibold text-slate-900 tabular-nums">{quotesToday} orçamentos</strong> solicitados hoje
                </span>
              </div>

              <GoogleReviewsBadge />
            </div>

            {/* Main Headline - Bold Industrial Engineering Presence */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.35rem] font-extrabold text-[#0A1628] tracking-tight leading-[1.12] mb-6 font-display"
              style={{ textWrap: 'balance' }}
            >
              Construímos com{' '}
              <span className="text-[#1E56A0] relative inline-block">
                qualidade, segurança
              </span>{' '}
              e confiança.
            </h1>

            {/* Subtitle with official positioning */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-9 max-w-2xl">
              Há <strong>mais de 15 anos no mercado</strong>, a <strong>RTX Construtora & Prestação de Serviços</strong> entrega engenharia civil de alto padrão, reformas comerciais e residenciais, manutenção predial, controle de acesso e conservação patrimonial integral.
            </p>

            {/* CTAs - High Contrast & Confident */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-200 border border-amber-300 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#simulador"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-[#0A1628] bg-slate-100 hover:bg-slate-200 border border-slate-300 active:scale-[0.98] rounded-xl transition-all duration-200 whitespace-nowrap"
              >
                <Calculator className="w-4 h-4 text-[#1E56A0]" />
                <span>Simulador de Custos</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-slate-700 hover:text-[#1E56A0] hover:bg-slate-50 border border-transparent hover:border-slate-200 rounded-xl transition-all duration-200 whitespace-nowrap"
              >
                <span>Ver Serviços</span>
              </a>
            </div>

            {/* Quick Trust Pillars Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-xs text-slate-600 font-medium pt-7 border-t border-slate-200 w-full">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#1E56A0] shrink-0" />
                <span>Engenharia com ART / CREA</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mão de Obra Própria & CLT</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Building className="w-4 h-4 text-[#1E56A0] shrink-0" />
                <span>Piracicaba, SP & Rio de Janeiro</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-End Corporate Showcase Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer structural card with steel hairline borders */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 border border-slate-200 shadow-xl group flex flex-col items-center justify-center min-h-[440px] sm:min-h-[480px] p-8">
                {/* Discrete blueprint micro-grid */}
                <div className="absolute inset-0 bg-industrial-grid opacity-60 pointer-events-none" />

                {/* Pedestal Ambient Light for 3D Logo */}
                <div className="absolute w-56 h-56 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

                {/* Selected Element: Official Logo 3D */}
                <div className="relative z-10 flex flex-col items-center my-auto py-6">
                  <img
                    src={RTX_INFO.officialLogo}
                    alt="RTX Construtora - Logo Oficial 3D"
                    className="w-56 h-56 sm:w-64 sm:h-64 object-contain drop-shadow-[0_20px_35px_rgba(10,22,40,0.20)] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Floating Top Left Badge - Experience */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xs border border-slate-200/90 flex items-center gap-2.5 z-20">
                  <div className="p-1.5 bg-blue-50 text-[#1E56A0] rounded-lg">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-none">15+ Anos</div>
                    <div className="text-[10px] text-slate-500 font-medium">Tradição & Solidez</div>
                  </div>
                </div>

                {/* Floating Top Right Badge - Marca Oficial */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xs border border-slate-200/90 flex items-center gap-1.5 z-20">
                  <span className="w-2 h-2 rounded-full bg-[#1E56A0]" />
                  <span className="text-[11px] font-bold text-slate-800">Marca Registrada</span>
                </div>

                {/* Floating Bottom Card - Corporate Coordinates */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0A1628] p-4 rounded-xl border border-slate-700/80 text-white z-20 shadow-lg">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      Sede Administrativa
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-300 font-medium">
                      <MapPin className="w-3 h-3 text-cyan-400" /> Piracicaba – SP
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    “Quando o assunto é cuidar do seu patrimônio, qualidade faz toda a diferença.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Metric Full-Width Strip below Hero - Clean Industrial Layout */}
        <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex flex-col p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#1E56A0]/40 transition-colors">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#0A1628] tabular-nums tracking-tight font-display">
              +15 <span className="text-[#1E56A0] text-2xl font-bold">Anos</span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1.5">
              Solidez no Mercado
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">
              Desde 2009 atuando com excelência
            </span>
          </div>

          <div className="flex flex-col p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#1E56A0]/40 transition-colors">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#0A1628] tabular-nums tracking-tight font-display">
              +380 <span className="text-[#1E56A0] text-2xl font-bold">Obras</span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1.5">
              Projetos Concluídos
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">
              Residenciais, comerciais e facilities
            </span>
          </div>

          <div className="flex flex-col p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#1E56A0]/40 transition-colors">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#0A1628] tabular-nums tracking-tight font-display">
              100% <span className="text-[#1E56A0] text-2xl font-bold">Segurança</span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1.5">
              Normas ABNT & NR
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">
              Equipe própria uniformizada e CLT
            </span>
          </div>

          <div className="flex flex-col p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#1E56A0]/40 transition-colors">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#0A1628] tabular-nums tracking-tight flex items-center gap-1.5 font-display">
              4.9 <span className="text-amber-500 text-2xl">★</span> <span className="text-[#1E56A0] text-2xl font-bold">Google</span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1.5">
              Avaliação de Clientes
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">
              Satisfação e pontualidade comprovadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
