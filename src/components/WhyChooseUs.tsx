import React from 'react';
import {
  ShieldCheck,
  Award,
  Users2,
  Clock4,
  FileCheck2,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { RTX_INFO } from '../data/rtxData';

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      icon: <Award className="w-5 h-5 text-[#1E56A0]" />,
      code: "DIFF-01",
      title: "Mais de 15 Anos de Mercado",
      description: "Solidez comprovada e know-how técnico acumulado em centenas de intervenções, reformas e construções civis.",
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-[#1E56A0]" />,
      code: "DIFF-02",
      title: "Engenharia Técnica & ART",
      description: "Todas as obras são respaldadas por responsabilidade técnica, projetos executivos e cumprimento estrito das normas ABNT.",
    },
    {
      icon: <Users2 className="w-5 h-5 text-[#1E56A0]" />,
      code: "DIFF-03",
      title: "Equipe Própria & Vistoriada",
      description: "Profissionais registrados, uniformizados e treinados com foco em excelência, ética, segurança do trabalho e zelo patrimonial.",
    },
    {
      icon: <Clock4 className="w-5 h-5 text-[#1E56A0]" />,
      code: "DIFF-04",
      title: "Pontualidade & Transparência",
      description: "Cronogramas cumpridos à risca e relatórios claros de evolução física e orçamentária para sua total tranquilidade.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#1E56A0]" />,
      code: "DIFF-05",
      title: "Cuidado e Preservação Patrimonial",
      description: "“Quando o assunto é cuidar do seu patrimônio, qualidade faz toda a diferença.” Proteção estrutural e valorização imobiliária.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#1E56A0]" />,
      code: "DIFF-06",
      title: "Ambientes Agradáveis",
      description: "“Transformamos seu ambiente em um local gostoso de trabalhar e morar”, seja em condomínios, residências ou sedes corporativas.",
    },
  ];

  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Editorial Presentation (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A1628]/5 border border-[#0A1628]/10 text-xs font-semibold text-[#1E56A0] tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E56A0]"></span>
              Diferenciais Competitivos
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#0A1628] font-heading tracking-tight mb-6 leading-tight">
              Por que escolher a <span className="text-[#1E56A0]">RTX Construtora</span>?
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Na RTX, unimos o rigor da engenharia civil moderna à confiabilidade de uma equipe treinada para zelar por cada detalhe do seu empreendimento, residencial ou comercial.
            </p>

            {/* Industrial Quote Box */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm mb-8 w-full border-l-4 border-l-[#F59E0B]">
              <p className="text-sm font-semibold text-[#0A1628] italic mb-2 leading-relaxed">
                “Segurança, conservação e cuidado para o seu patrimônio.”
              </p>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-[#1E56A0]" />
                <span className="text-xs font-medium text-slate-500">
                  Compromisso oficial RTX Construtora & Prestação de Serviços
                </span>
              </div>
            </div>

            <a
              href={`https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(
                'Olá! Gostaria de entender melhor como a RTX Construtora pode atender meu projeto.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#0A1628] hover:bg-[#112544] text-white font-medium text-sm transition-all duration-200 group shadow-sm"
            >
              <span>Fale com nossos engenheiros</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#F59E0B]" />
            </a>
          </div>

          {/* Right Side: 6 Differentiators Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((diff, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#1E56A0] transition-all duration-300 group relative flex flex-col justify-between hover-card-glow"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center group-hover:bg-[#1E56A0] group-hover:border-[#1E56A0] transition-all">
                      <div className="group-hover:text-white transition-colors">
                        {diff.icon}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                      {diff.code}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#0A1628] font-heading mb-2.5 group-hover:text-[#1E56A0] transition-colors leading-snug">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1E56A0]">
                  <span>Padrão de Qualidade RTX</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
