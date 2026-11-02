import React, { useState } from 'react';
import { Send, Phone, MapPin, Instagram, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { RTX_INFO, SERVICES_DATA } from '../data/rtxData';

export const ContactQuoteSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Construção civil (residencial e comercial)');
  const [city, setCity] = useState('Piracicaba – SP');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*SOLICITAÇÃO DE ORÇAMENTO - VIA SITE RTX*
---------------------------------------
👤 *Nome:* ${name || 'Não informado'}
📱 *Telefone:* ${phone || 'Não informado'}
📍 *Cidade / Região:* ${city}
🏗️ *Serviço de Interesse:* ${service}
📝 *Detalhes:* ${message || 'Gostaria de agendar uma conversa técnica e receber proposta orçamentária.'}
---------------------------------------
Enviado a partir do site institucional da RTX Construtora.`;

    const targetNumber = RTX_INFO.phones[0].number;
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(formattedMessage)}`;

    setIsSent(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSent(false);
    }, 600);
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Company Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A1628]/5 border border-[#0A1628]/10 text-xs font-semibold text-[#1E56A0] tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E56A0]"></span>
                Atendimento Imediato
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#0A1628] font-heading tracking-tight mb-4">
                Solicite seu orçamento <span className="text-[#1E56A0]">sem compromisso</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Nossa equipe de engenharia e atendimento responde com agilidade. Preencha o formulário ou entre em contato diretamente pelo WhatsApp corporativo.
              </p>

              {/* Direct Channels Cards */}
              <div className="space-y-4 mb-8">
                {/* Phones */}
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Telefones & WhatsApp Oficiais
                    </h4>
                    <div className="flex flex-col gap-1.5 text-sm font-semibold">
                      <a
                        href={`https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(RTX_INFO.defaultWhatsAppMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A1628] hover:text-[#1E56A0] transition-colors font-bold"
                      >
                        {RTX_INFO.phones[0].display} <span className="text-xs font-normal text-slate-500">(WhatsApp Principal / Piracicaba & SP)</span>
                      </a>
                      <a
                        href={`https://wa.me/${RTX_INFO.phones[1].number}?text=${encodeURIComponent(RTX_INFO.defaultWhatsAppMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A1628] hover:text-[#1E56A0] transition-colors"
                      >
                        {RTX_INFO.phones[1].display} <span className="text-xs font-normal text-slate-500">(Atendimento RJ & SP)</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[#1E56A0] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Endereço da Sede
                    </h4>
                    <a
                      href={RTX_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-slate-700 hover:text-[#1E56A0] transition-colors leading-relaxed block"
                    >
                      {RTX_INFO.address}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Instagram Oficial
                    </h4>
                    <a
                      href={RTX_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#1E56A0] hover:underline"
                    >
                      {RTX_INFO.instagramHandle}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Acompanhe obras em andamento, bastidores e novidades
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="p-4 rounded-xl bg-[#0A1628] text-white flex items-center gap-3.5 border border-slate-800">
              <ShieldCheck className="w-6 h-6 text-[#F59E0B] shrink-0" />
              <div className="text-xs">
                <span className="font-bold font-heading block">Orçamento sem compromisso</span>
                <span className="text-slate-300">
                  Visita técnica presencial e plano executivo detalhado.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quote Request Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
              <div className="mb-8 pb-5 border-b border-slate-100">
                <h3 className="text-xl font-bold text-[#0A1628] font-heading mb-1">
                  Formulário Rápido de Orçamento
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Ao clicar em enviar, uma mensagem organizada será direcionada diretamente ao WhatsApp oficial da RTX.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-mono uppercase tracking-wider">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos Silva"
                      className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 focus:border-[#1E56A0] focus:ring-1 focus:ring-[#1E56A0] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-mono uppercase tracking-wider">
                      WhatsApp ou Celular *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(19) 99999-9999"
                      className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 focus:border-[#1E56A0] focus:ring-1 focus:ring-[#1E56A0] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-mono uppercase tracking-wider">
                      Serviço Desejado *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 focus:border-[#1E56A0] focus:ring-1 focus:ring-[#1E56A0] outline-none transition-all bg-white"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-mono uppercase tracking-wider">
                      Cidade / Região do Imóvel
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex: Piracicaba, SP"
                      className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 focus:border-[#1E56A0] focus:ring-1 focus:ring-[#1E56A0] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-mono uppercase tracking-wider">
                    Detalhes do projeto, metragem ou necessidade (opcional)
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte mais sobre o tipo de imóvel (residencial, comercial ou condomínio), tamanho aproximado e prazo previsto..."
                    className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 focus:border-[#1E56A0] focus:ring-1 focus:ring-[#1E56A0] outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSent}
                    className="w-full py-4 px-6 rounded-xl text-sm font-bold text-[#0A1628] bg-[#F59E0B] hover:bg-[#D97706] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer font-heading uppercase tracking-wider"
                  >
                    {isSent ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-[#0A1628]" />
                        <span>Abrindo WhatsApp Oficial...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#0A1628]" />
                        <span>Enviar Orçamento para o WhatsApp da RTX</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-3">
                    Garantia de privacidade. Seus dados serão utilizados unicamente para contato técnico comercial da RTX Construtora.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
