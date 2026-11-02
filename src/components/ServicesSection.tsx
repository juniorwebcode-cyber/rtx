import React, { useState, useMemo } from 'react';
import {
  Building2,
  HardHat,
  ShieldCheck,
  Sparkles,
  Wrench,
  Briefcase,
  Home,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  X,
  ExternalLink,
  SlidersHorizontal,
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem, RTX_INFO } from '../data/rtxData';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5 text-white" />,
  HardHat: <HardHat className="w-5 h-5 text-white" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-white" />,
  Sparkles: <Sparkles className="w-5 h-5 text-white" />,
  Wrench: <Wrench className="w-5 h-5 text-white" />,
  Briefcase: <Briefcase className="w-5 h-5 text-white" />,
  HomeCheck: <Home className="w-5 h-5 text-white" />,
};

type CategoryFilter = 'Todos' | 'Obras & Construção' | 'Segurança & Acesso' | 'Manutenção & Limpeza';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('Todos');

  const getServiceWhatsAppUrl = (serviceTitle: string) => {
    const text = `Olá! Vi o site da RTX Construtora e gostaria de solicitar um orçamento para o serviço de: ${serviceTitle}.`;
    return `https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(text)}`;
  };

  const filteredServices = useMemo(() => {
    if (activeFilter === 'Todos') return SERVICES_DATA;
    if (activeFilter === 'Obras & Construção') {
      return SERVICES_DATA.filter(
        (s) => s.id === 'construcao-civil' || s.id === 'equipe-profissionais'
      );
    }
    if (activeFilter === 'Segurança & Acesso') {
      return SERVICES_DATA.filter(
        (s) => s.id === 'seguranca-acesso' || s.id === 'condominios-empresas'
      );
    }
    if (activeFilter === 'Manutenção & Limpeza') {
      return SERVICES_DATA.filter(
        (s) => s.id === 'limpeza-obras' || s.id === 'manutencao-predial' || s.id === 'conservacao-patrimonio'
      );
    }
    return SERVICES_DATA;
  }, [activeFilter]);

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A1628]/5 border border-[#0A1628]/10 text-xs font-semibold text-[#1E56A0] tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E56A0]"></span>
            Especialidades de Engenharia & Gestão
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1628] tracking-tight mb-5 font-display">
            Serviços completos para o seu projeto e patrimônio
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            “Transformamos seu ambiente em um local gostoso de trabalhar e morar.” Soluções integradas com rigor técnico, equipe qualificada e supervisão constante.
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap mb-12">
          {(['Todos', 'Obras & Construção', 'Segurança & Acesso', 'Manutenção & Limpeza'] as CategoryFilter[]).map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0A1628] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {filteredServices.map((service, idx) => {
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#1E56A0] transition-all duration-300 flex flex-col justify-between overflow-hidden hover-card-glow"
              >
                {/* Image Preview Header */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Uniforme Oficial RTX Pill */}
                  <div className="absolute top-3 right-3 bg-[#0A1628]/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-amber-400 border border-slate-700/80">
                    Equipe com Uniforme RTX
                  </div>

                  {/* Icon badge floating over image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0A1628] border border-slate-700/80 flex items-center justify-center shadow-md shrink-0">
                      {iconMap[service.iconName] || <Building2 className="w-5 h-5 text-white" />}
                    </div>
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider drop-shadow-md truncate">
                      0{idx + 1} · {service.highlightText}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#0A1628] mb-2.5 group-hover:text-[#1E56A0] transition-colors font-display">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    {/* Key Benefits List */}
                    <ul className="space-y-2 mb-6">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-bold text-slate-700 hover:text-[#1E56A0] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Ver detalhes</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={getServiceWhatsAppUrl(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-xs border border-amber-300"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Orçar</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Services - Industrial Corporate Style */}
        <div className="mt-16 rounded-3xl bg-[#0A1628] border border-slate-800 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl bg-industrial-grid-dark">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              Contratos Corporativos & Facilities
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 font-display">
              Precisa de um pacote sob medida para o seu condomínio ou empresa?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Oferecemos gestão completa de portaria, controle de acesso, conservação contínua, limpeza pós-obra e manutenção predial técnica com redução de passivos e custo previsível.
            </p>
          </div>
          <a
            href={`https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(
              'Olá! Gostaria de uma proposta de serviços e manutenção para condomínio/empresa com a RTX.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-7 py-4 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 rounded-xl shadow-lg transition-all flex items-center gap-2.5 border border-amber-300"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com Especialista</span>
          </a>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1628]/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer z-10"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Service Modal Photo */}
            <div className="relative h-52 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-5 overflow-hidden rounded-t-3xl bg-slate-900">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-6 flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-[#0A1628] border border-slate-700 flex items-center justify-center text-white">
                  {iconMap[selectedService.iconName] || <Building2 className="w-5 h-5 text-white" />}
                </div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Equipe Oficial RTX
                </span>
              </div>
            </div>

            <div className="text-xs font-bold text-[#1E56A0] uppercase tracking-wider mb-1.5">
              {selectedService.highlightText}
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A1628] mb-4 font-display">
              {selectedService.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedService.fullDescription}
            </p>

            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Diferenciais deste serviço:
            </h4>
            <ul className="space-y-2.5 mb-8">
              {selectedService.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-slate-100">
              <a
                href={getServiceWhatsAppUrl(selectedService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3.5 px-4 text-xs font-bold text-center text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs border border-amber-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="py-3.5 px-5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
