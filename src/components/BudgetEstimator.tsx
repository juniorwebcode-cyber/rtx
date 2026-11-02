import React, { useState, useMemo } from 'react';
import {
  Calculator,
  Sliders,
  CheckCircle2,
  Clock,
  HardHat,
  ArrowRight,
  MessageCircle,
  Building,
  ShieldCheck,
  Sparkles,
  Layers,
} from 'lucide-react';
import { RTX_INFO } from '../data/rtxData';

interface ProjectTypeOption {
  id: string;
  name: string;
  iconName: string;
  minArea: number;
  maxArea: number;
  defaultArea: number;
  baseCostPerM2: {
    essencial: number;
    premium: number;
    altoPadrao: number;
  };
  timeMultiplierWeeks: number; // weeks per 100m2
  suggestedTeam: string[];
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'construcao-residencial',
    name: 'Construção Civil Residencial',
    iconName: 'Building',
    minArea: 80,
    maxArea: 1200,
    defaultArea: 250,
    baseCostPerM2: {
      essencial: 2100,
      premium: 2850,
      altoPadrao: 3900,
    },
    timeMultiplierWeeks: 3.5,
    suggestedTeam: [
      'Engenheiro Civil Responsável (ART)',
      'Mestre de Obras Residente',
      'Pedreiros, Carpinteiros e Armadores',
      'Técnico de Segurança do Trabalho',
    ],
  },
  {
    id: 'construcao-comercial',
    name: 'Construção Comercial ou Galpão',
    iconName: 'Building',
    minArea: 150,
    maxArea: 3000,
    defaultArea: 600,
    baseCostPerM2: {
      essencial: 1800,
      premium: 2400,
      altoPadrao: 3400,
    },
    timeMultiplierWeeks: 2.2,
    suggestedTeam: [
      'Engenheiro Estrutural e Gerente de Obra',
      'Equipe de Pavimentação e Concreto Polido',
      'Eletricistas Industriais e Hidráulicos',
      'Supervisão NR-18 e NR-35',
    ],
  },
  {
    id: 'reforma-completa',
    name: 'Reforma Geral & Acabamento Fino',
    iconName: 'Layers',
    minArea: 40,
    maxArea: 800,
    defaultArea: 180,
    baseCostPerM2: {
      essencial: 950,
      premium: 1450,
      altoPadrao: 2200,
    },
    timeMultiplierWeeks: 2.0,
    suggestedTeam: [
      'Engenheiro Fiscalizador',
      'Azulejistas e Gesseiros Especialistas',
      'Pintores e Eletricistas Certificados',
      'Zelo e Proteção de Áreas Existentes',
    ],
  },
  {
    id: 'manutencao-predial',
    name: 'Manutenção Predial & Fachadas',
    iconName: 'HardHat',
    minArea: 200,
    maxArea: 5000,
    defaultArea: 1200,
    baseCostPerM2: {
      essencial: 45,
      premium: 85,
      altoPadrao: 140,
    },
    timeMultiplierWeeks: 0.8,
    suggestedTeam: [
      'Engenheiro Perito em Patologia Predial',
      'Técnicos de Alpinismo Industrial (NR-35)',
      'Equipe de Elétrica e Hidráulica Preventiva',
      'Emissão de Laudo Técnico e ART',
    ],
  },
  {
    id: 'portaria-facilities',
    name: 'Controle de Acesso & Facilities',
    iconName: 'ShieldCheck',
    minArea: 100,
    maxArea: 5000,
    defaultArea: 800,
    baseCostPerM2: {
      essencial: 35,
      premium: 55,
      altoPadrao: 85,
    },
    timeMultiplierWeeks: 0.5,
    suggestedTeam: [
      'Controladores de Acesso 24h / 12x36',
      'Supervisores Operacionais Móveis',
      'Equipe de Apoio para Férias e Atestados',
      'Protocolos Rigorosos de Triagem',
    ],
  },
  {
    id: 'limpeza-pos-obra',
    name: 'Limpeza Pós-Obra Fina & Técnica',
    iconName: 'Sparkles',
    minArea: 60,
    maxArea: 3500,
    defaultArea: 350,
    baseCostPerM2: {
      essencial: 25,
      premium: 45,
      altoPadrao: 70,
    },
    timeMultiplierWeeks: 0.3,
    suggestedTeam: [
      'Especialistas em Limpeza Fina e Remoção',
      'Operadores de Maquinário Industrial',
      'Produtos Químicos Neutros Certificados',
      'Supervisão com Checklist de Entrega',
    ],
  },
];

export const BudgetEstimator: React.FC = () => {
  const [selectedTypeId, setSelectedTypeId] = useState<string>('construcao-residencial');
  const [area, setArea] = useState<number>(250);
  const [tier, setTier] = useState<'essencial' | 'premium' | 'altoPadrao'>('premium');

  const currentProject = useMemo(() => {
    return PROJECT_TYPES.find((p) => p.id === selectedTypeId) || PROJECT_TYPES[0];
  }, [selectedTypeId]);

  // Adjust area if out of current project bounds
  const handleTypeChange = (typeId: string) => {
    setSelectedTypeId(typeId);
    const proj = PROJECT_TYPES.find((p) => p.id === typeId);
    if (proj) {
      setArea(proj.defaultArea);
    }
  };

  const calculatedCost = useMemo(() => {
    const costPerM2 = currentProject.baseCostPerM2[tier];
    const totalMin = Math.round(area * costPerM2 * 0.95);
    const totalMax = Math.round(area * costPerM2 * 1.15);
    return {
      costPerM2,
      totalMin,
      totalMax,
    };
  }, [currentProject, area, tier]);

  const estimatedTimeline = useMemo(() => {
    const totalWeeks = Math.max(2, Math.round((area / 100) * currentProject.timeMultiplierWeeks));
    if (totalWeeks < 4) {
      return `${totalWeeks} semanas`;
    }
    const months = (totalWeeks / 4.3).toFixed(1);
    return `${months} meses (~${totalWeeks} semanas)`;
  }, [area, currentProject]);

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  };

  const tierNames = {
    essencial: 'Padrão Econômico / Otimizado',
    premium: 'Padrão RTX Executivo (Recomendado)',
    altoPadrao: 'Alto Padrão / Corporativo Nobre',
  };

  const handleSendToWhatsApp = () => {
    const message = `*SIMULAÇÃO DE ORÇAMENTO - VIA SITE RTX*
----------------------------------------
🏗️ *Tipo de Projeto:* ${currentProject.name}
📐 *Metragem Estimada:* ${area} m²
⭐ *Padrão de Execução:* ${tierNames[tier]}
💰 *Faixa Estimada:* ${formatCurrency(calculatedCost.totalMin)} a ${formatCurrency(calculatedCost.totalMax)}
⏱️ *Prazo Médio:* ${estimatedTimeline}
----------------------------------------
Gostaria de agendar uma visita técnica ou receber uma proposta executiva detalhada para este projeto.`;

    const url = `https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="simulador" className="py-24 lg:py-32 bg-[#0A1628] text-white relative overflow-hidden bg-industrial-grid-dark border-y border-slate-800">
      {/* Decorative Blueprint ambient glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#1E56A0]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
            <Calculator className="w-3.5 h-3.5" />
            <span>Ferramenta Interativa de Engenharia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 font-display">
            Simulador de Obra & Estimativa de Custos
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Selecione o tipo de empreendimento, a metragem estimada e o padrão de acabamento para obter uma estimativa de prazo, investimento orientativo e composição técnica da equipe RTX.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#0F1E36] rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            {/* Step 1: Project Type Selection */}
            <div className="mb-8">
              <label className="flex items-center justify-between text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[11px] font-extrabold">1</span>
                  Selecione o Tipo de Serviço
                </span>
                <span className="text-amber-400 font-mono text-[11px]">{PROJECT_TYPES.length} opções disponíveis</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedTypeId === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleTypeChange(type.id)}
                      className={`p-3.5 rounded-xl text-left transition-all duration-200 border cursor-pointer flex items-center gap-3 ${
                        isSelected
                          ? 'bg-[#1E56A0] border-cyan-400 text-white shadow-md'
                          : 'bg-[#0A1628]/80 border-slate-700/80 text-slate-300 hover:bg-[#0A1628] hover:border-slate-600'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-slate-800 text-amber-400'
                      }`}>
                        <Building className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold leading-snug">{type.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Area Range Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[11px] font-extrabold">2</span>
                  Metragem Aproximada
                </label>
                <div className="text-lg sm:text-xl font-extrabold text-amber-400 font-mono">
                  {area} <span className="text-xs text-slate-400 font-normal">m²</span>
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min={currentProject.minArea}
                max={currentProject.maxArea}
                step={10}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none"
              />

              <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mt-2">
                <span>Min: {currentProject.minArea} m²</span>
                <span>Max: {currentProject.maxArea} m²</span>
              </div>

              {/* Quick Area Preset Buttons */}
              <div className="flex flex-wrap gap-2 mt-3">
                {[100, 250, 500, 1000].map((preset) => {
                  if (preset < currentProject.minArea || preset > currentProject.maxArea) return null;
                  return (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setArea(preset)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
                        area === preset
                          ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold'
                          : 'bg-[#0A1628] border-slate-700 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      {preset} m²
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Finish & Specification Standard */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[11px] font-extrabold">3</span>
                Padrão de Acabamento & Especificação
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'essencial', label: 'Econômico', desc: 'Funcional e otimizado' },
                  { id: 'premium', label: 'Padrão RTX', desc: 'Equilíbrio e durabilidade' },
                  { id: 'altoPadrao', label: 'Alto Padrão', desc: 'Materiais nobres e design' },
                ].map((item) => {
                  const isSelected = tier === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTier(item.id as any)}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#1E56A0] border-cyan-400 text-white shadow-md'
                          : 'bg-[#0A1628] border-slate-700/80 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold">{item.label}</span>
                        {item.id === 'premium' && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 uppercase">
                            Popular
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-300 block leading-tight">{item.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Column (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0F1E36] to-[#0A1628] rounded-3xl border border-slate-700/90 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Cálculo em Tempo Real
              </span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Resumo da Estimativa
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-6">
                {currentProject.name}
              </h3>

              {/* Price Band Display */}
              <div className="p-5 rounded-2xl bg-[#070D18] border border-slate-700/80 mb-6">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Faixa de Investimento Estimada:</span>
                  <span className="font-mono text-slate-300 font-semibold">{tierNames[tier].split(' ')[0]}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tracking-tight">
                  {formatCurrency(calculatedCost.totalMin)} <span className="text-sm font-normal text-slate-400">a</span> {formatCurrency(calculatedCost.totalMax)}
                </div>
                <div className="text-[11px] text-slate-400 mt-2 flex items-center justify-between border-t border-slate-800 pt-2 font-mono">
                  <span>Média por m²:</span>
                  <span className="text-slate-200 font-bold">{formatCurrency(calculatedCost.costPerM2)} / m²</span>
                </div>
              </div>

              {/* Timeline Indicator */}
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 mb-6 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#1E56A0]/20 border border-[#1E56A0]/40 flex items-center justify-center text-cyan-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono block">
                    Cronograma Estimado de Execução
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">
                    {estimatedTimeline}
                  </span>
                </div>
              </div>

              {/* Suggested Technical Team */}
              <div className="mb-6">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2.5">
                  Composição Técnica Indicada pela RTX:
                </span>
                <ul className="space-y-2">
                  {currentProject.suggestedTeam.map((member, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{member}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full py-4 px-6 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 shadow-lg border border-amber-300 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>Enviar Simulação no WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-2.5 leading-snug">
                Valores meramente orientativos. O orçamento final é formalizado após vistoria técnica in loco e projeto executivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
