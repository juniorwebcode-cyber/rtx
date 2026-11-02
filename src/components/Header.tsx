import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { RTX_INFO } from '../data/rtxData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryPhone = RTX_INFO.phones[0];
  const whatsAppUrl = `https://wa.me/${primaryPhone.number}?text=${encodeURIComponent(RTX_INFO.defaultWhatsAppMessage)}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(10,22,40,0.08)] border-b border-slate-200/90 py-3.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark with Official Logo */}
            <a
              href="#inicio"
              className="flex items-center gap-3.5 group whitespace-nowrap shrink-0"
              aria-label="RTX Construtora - Início"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-50 border border-slate-200/80 p-1 flex items-center justify-center transition-all duration-300 group-hover:border-[#1E56A0] group-hover:shadow-sm">
                <img
                  src={RTX_INFO.officialLogo}
                  alt="RTX Construtora"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#0A1628] group-hover:text-[#1E56A0] transition-colors font-display">
                  RTX Construtora
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500">
                  Engenharia & Construção
                </span>
              </div>
            </a>

            {/* Zone 2: Clean Single-Line Nav Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a
                href="#inicio"
                className="hover:text-[#1E56A0] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#1E56A0] after:transition-all"
              >
                Início
              </a>
              <a
                href="#servicos"
                className="hover:text-[#1E56A0] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#1E56A0] after:transition-all"
              >
                Serviços
              </a>
              <a
                href="#simulador"
                className="hover:text-[#1E56A0] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#1E56A0] after:transition-all flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Simulador</span>
              </a>
              <a
                href="#video-institucional"
                className="hover:text-[#1E56A0] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 py-1"
              >
                <span>Vídeo Oficial</span>
              </a>
              <a
                href="#sobre"
                className="hover:text-[#1E56A0] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#1E56A0] after:transition-all"
              >
                Sobre
              </a>
              <a
                href="#portfolio"
                className="hover:text-[#1E56A0] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#1E56A0] after:transition-all"
              >
                Portfólio
              </a>
              <a
                href="#contato"
                className="hover:text-[#1E56A0] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#1E56A0] after:transition-all"
              >
                Contato
              </a>
            </nav>

            {/* Zone 3: Primary Action & Quick Phone */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${primaryPhone.number}`}
                className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#1E56A0] hover:bg-slate-100/80 transition-colors"
                title="Ligar para a RTX"
              >
                <Phone className="w-3.5 h-3.5 text-[#1E56A0]" />
                <span className="tabular-nums font-mono">{primaryPhone.display}</span>
              </a>

              {/* Accent Orange/Amber CTA for Maximum Conversion & Professional Contrast */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-bold tracking-wide text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all duration-200 rounded-xl shadow-xs hover:shadow-md hover:shadow-amber-500/20 whitespace-nowrap shrink-0 border border-amber-300"
              >
                <span>Solicitar Orçamento</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs"
              >
                Orçamento
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#1E56A0] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Abrir Menu de Navegação"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#0A1628]/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-20 right-4 left-4 bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <img
                  src={RTX_INFO.officialLogo}
                  alt="RTX"
                  className="w-8 h-8 object-contain"
                />
                <span className="font-bold text-slate-900 text-sm">RTX Construtora</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1.5 text-sm font-semibold text-slate-700">
              <a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-[#1E56A0] transition-colors"
              >
                Início
              </a>
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-[#1E56A0] transition-colors"
              >
                Serviços
              </a>
              <a
                href="#simulador"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-[#1E56A0] transition-colors flex items-center justify-between"
              >
                <span>Simulador de Custos</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#1E56A0]">Interativo</span>
              </a>
              <a
                href="#video-institucional"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-[#1E56A0] transition-colors flex items-center justify-between"
              >
                <span>Vídeo Oficial</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">Assista</span>
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-[#1E56A0] transition-colors"
              >
                Diferenciais
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-[#1E56A0] transition-colors"
              >
                Sobre a Empresa
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-[#1E56A0] transition-colors"
              >
                Portfólio de Obras
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 hover:text-[#1E56A0] transition-colors"
              >
                Contato
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md border border-amber-300"
              >
                <span>Falar no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="text-center text-xs text-slate-500 font-mono">
                {primaryPhone.display}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
