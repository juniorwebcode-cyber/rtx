import React from 'react';
import { MapPin, Phone, Instagram, ShieldCheck, CheckCircle2, Building2, Compass } from 'lucide-react';
import { RTX_INFO } from '../data/rtxData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Industrial Logo Card & Technical Spec (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#0A1628] border border-slate-800 shadow-xl p-8 flex flex-col items-center justify-center min-h-[440px] sm:min-h-[500px] group text-white">
              {/* Subtle architectural blueprint grid */}
              <div className="absolute inset-0 bg-industrial-grid-dark opacity-30 pointer-events-none" />

              {/* Top technical badge */}
              <div className="relative z-10 w-full flex items-center justify-between pb-4 border-b border-white/10 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Compass className="w-3.5 h-3.5 text-[#F59E0B]" />
                  RTX CORPORATE HQ
                </span>
                <span>PIRACICABA • SP</span>
              </div>

              {/* Official 3D Logo */}
              <div className="relative my-8 z-10 flex items-center justify-center">
                <div className="absolute w-44 h-44 rounded-full bg-[#1E56A0]/20 blur-2xl pointer-events-none"></div>
                <img
                  src={RTX_INFO.officialLogo}
                  alt="RTX Construtora - Logo Oficial 3D"
                  className="w-48 h-48 sm:w-56 sm:h-56 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105 z-10"
                />
              </div>

              {/* Inset Brand Overlay with Official Description */}
              <div className="relative w-full bg-[#0F2238] border border-white/10 p-5 rounded-xl z-20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-wide uppercase">
                      {RTX_INFO.fullName}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400 block">
                      Razão Social: {RTX_INFO.razaoSocial}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2.5">
                  “Construímos com qualidade, segurança e confiança.” Mais de 15 anos no mercado oferecendo engenharia civil residencial e comercial, reformas, manutenção predial, facilities e controle de acesso com excelência comprovada.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Official Company Profile (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A1628]/5 border border-[#0A1628]/10 text-xs font-semibold text-[#1E56A0] tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E56A0]"></span>
              Sobre a RTX Construtora
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#0A1628] font-heading tracking-tight mb-6 leading-tight">
              Mais de 15 anos transformando projetos em <span className="text-[#1E56A0]">realidade sólida</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-4">
              A <strong className="text-slate-900 font-semibold">RTX Construtora – Engenharia e Construção</strong> (também reconhecida amplamente como <strong className="text-slate-900 font-semibold">RTX Prestação de Serviços</strong>) consolidou sua trajetória com base em três pilares fundamentais: <strong className="text-[#1E56A0] font-semibold">qualidade, segurança e confiança</strong>.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Com sede corporativa estrategicamente localizada em <strong className="text-slate-900">Piracicaba – SP</strong> e operações ágeis em toda a região metropolitana de São Paulo e Rio de Janeiro, atendemos desde residências contemporâneas de alto padrão até condomínios horizontais/verticais e grandes empreendimentos comerciais.
            </p>

            {/* Official Key Quote with Amber Border */}
            <div className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200 border-l-4 border-l-[#F59E0B] mb-8 w-full">
              <p className="text-sm sm:text-base font-semibold text-[#0A1628] italic leading-relaxed">
                “Quando o assunto é cuidar do seu patrimônio, qualidade faz toda a diferença.”
              </p>
            </div>

            {/* Official Data Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-6 border-t border-slate-200">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#1E56A0]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">Endereço Oficial</span>
                  <a
                    href={RTX_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-slate-800 hover:text-[#1E56A0] transition-colors leading-snug mt-0.5 block"
                  >
                    {RTX_INFO.address}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-pink-600">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">Instagram Oficial</span>
                  <a
                    href={RTX_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1E56A0] font-semibold hover:underline leading-snug mt-0.5 block"
                  >
                    {RTX_INFO.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-emerald-600">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">WhatsApp Principal</span>
                  <a
                    href={`https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(RTX_INFO.defaultWhatsAppMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-800 hover:text-[#1E56A0] font-bold leading-snug mt-0.5 block"
                  >
                    {RTX_INFO.phones[0].display}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#1E56A0]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">Atendimento RJ & SP</span>
                  <a
                    href={`tel:${RTX_INFO.phones[1].number}`}
                    className="text-xs text-slate-800 hover:text-[#1E56A0] font-medium leading-snug mt-0.5 block"
                  >
                    {RTX_INFO.phones[1].display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
