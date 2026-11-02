import React, { useState } from 'react';
import {
  MessageSquare,
  X,
  Send,
  ArrowUpRight,
  ExternalLink,
  Phone,
  Building,
  Shield,
  Clock,
  MapPin,
} from 'lucide-react';
import { RTX_INFO, SERVICES_DATA } from '../data/rtxData';

interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
  quickActions?: { label: string; action: () => void; isPrimary?: boolean }[];
}

export const FloatingWidgets: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      text: 'Olá! Sou o Assistente da RTX Construtora. Posso te ajudar com informações técnicas sobre construção civil, facilities, controle de acesso, limpeza e reformas.',
      timestamp: 'Agora',
      quickActions: [
        {
          label: 'Quero orçamento',
          action: () => handleUserAction('Quero orçamento'),
          isPrimary: true,
        },
        {
          label: 'Simulador de custos',
          action: () => handleUserAction('Simulador de custos'),
        },
        {
          label: 'Falar no WhatsApp',
          action: () => handleWhatsAppRedirect(),
        },
        {
          label: 'Nossos serviços',
          action: () => handleUserAction('Nossos serviços'),
        },
        {
          label: 'Ver Vídeo Oficial',
          action: () => handleUserAction('Ver Vídeo Oficial'),
        },
      ],
    },
  ]);

  const defaultWhatsUrl = `https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(
    'Olá! Vi o site da RTX e gostaria de solicitar um orçamento.'
  )}`;

  const handleWhatsAppRedirect = (customText?: string) => {
    const text = customText || 'Olá! Estava no chat do site da RTX e gostaria de falar com um atendente.';
    const url = `https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleInstagramRedirect = () => {
    window.open(RTX_INFO.instagramUrl, '_blank', 'noopener,noreferrer');
  };

  const handleUserAction = (actionText: string) => {
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: actionText,
      timestamp: 'Agora',
    };

    let replyText = '';
    let quickActions: ChatMessage['quickActions'] = [];

    if (actionText === 'Quero orçamento') {
      replyText = 'Perfeito! Nosso atendimento para orçamentos é prioritário e sem compromisso. Clique abaixo para abrir o canal corporativo no WhatsApp com nossos engenheiros:';
      quickActions = [
        {
          label: 'Abrir WhatsApp da RTX',
          action: () => handleWhatsAppRedirect('Olá! Gostaria de um orçamento detalhado com a RTX Construtora.'),
          isPrimary: true,
        },
        {
          label: 'Ligar para (19) 99653-6331',
          action: () => window.open(`tel:${RTX_INFO.phones[0].number}`),
        },
      ];
    } else if (actionText === 'Nossos serviços') {
      replyText = 'Atendemos: Construção Civil (Residencial e Comercial), Equipe de Profissionais e Pedreiros, Controle de Acesso e Segurança Patrimonial, Limpeza de Obras (Fina e Pós-Obra), Manutenção e Conservação Predial, e Serviços Completos para Condomínios e Empresas.';
      quickActions = [
        {
          label: 'Pedir orçamento de um serviço',
          action: () => handleWhatsAppRedirect('Olá! Gostaria de um orçamento para serviços de construção/manutenção.'),
          isPrimary: true,
        },
        {
          label: 'Ver no site',
          action: () => {
            setIsChatOpen(false);
            const el = document.getElementById('servicos');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
        },
      ];
    } else if (actionText.toLowerCase().includes('simula') || actionText.toLowerCase().includes('custo') || actionText.toLowerCase().includes('metro')) {
      replyText = 'Desenvolvemos uma ferramenta interativa exclusiva onde você escolhe o tipo de obra ou serviço, a metragem em m² e o padrão desejado para calcular prazo, investimento médio e equipe técnica sugerida!';
      quickActions = [
        {
          label: 'Abrir Simulador de Obras',
          action: () => {
            setIsChatOpen(false);
            const el = document.getElementById('simulador');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
          isPrimary: true,
        },
        {
          label: 'Falar direto no WhatsApp',
          action: () => handleWhatsAppRedirect('Olá! Gostaria de uma simulação de custos para meu projeto.'),
        },
      ];
    } else if (actionText.toLowerCase().includes('vídeo') || actionText.toLowerCase().includes('video') || actionText.toLowerCase().includes('carlos') || actionText.toLowerCase().includes('dulcinéia')) {
      replyText = 'Em nosso vídeo institucional oficial, Carlos Santos e Dulcinéia Santos apresentam os diferenciais da RTX em controle de acesso, conservação, limpeza e manutenção técnica para empresas e condomínios.';
      quickActions = [
        {
          label: 'Ir para o Vídeo',
          action: () => {
            setIsChatOpen(false);
            const el = document.getElementById('video-institucional');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
          isPrimary: true,
        },
        {
          label: 'Falar no WhatsApp',
          action: () => handleWhatsAppRedirect('Olá! Assisti ao vídeo da RTX e gostaria de um orçamento.'),
        },
      ];
    } else if (actionText.toLowerCase().includes('endereço') || actionText.toLowerCase().includes('onde')) {
      replyText = `Nossa sede está localizada em Piracicaba – SP: ${RTX_INFO.address}. Atendemos toda a região metropolitana, Campinas, São Paulo e projetos no Rio de Janeiro.`;
      quickActions = [
        {
          label: 'Abrir no Google Maps',
          action: () => window.open(RTX_INFO.googleMapsUrl, '_blank'),
          isPrimary: true,
        },
      ];
    } else {
      replyText = `Entendido! Para responder com exatidão sobre "${actionText}", nossa equipe de engenharia está à disposição no WhatsApp.`;
      quickActions = [
        {
          label: 'Conversar agora no WhatsApp',
          action: () => handleWhatsAppRedirect(`Olá! Gostaria de tirar uma dúvida sobre: ${actionText}`),
          isPrimary: true,
        },
        {
          label: 'Conhecer nosso Instagram',
          action: () => handleInstagramRedirect(),
        },
      ];
    }

    const assistantMsg: ChatMessage = {
      id: `a-${Date.now() + 1}`,
      sender: 'assistant',
      text: replyText,
      timestamp: 'Agora',
      quickActions,
    };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const text = chatInput.trim();
    setChatInput('');
    handleUserAction(text);
  };

  return (
    <>
      {/* ============================================================ */}
      {/* RIGHT SIDE FLOATING BUTTONS (WhatsApp & Instagram)           */}
      {/* ============================================================ */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3.5 select-none">
        {/* Instagram Floating Button */}
        <div className="relative group">
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#0A1628] px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 shadow-md hidden sm:block border border-slate-700">
            Siga @construtorartxser
          </span>
          <a
            href={RTX_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-instagram cursor-pointer"
            aria-label="Instagram Oficial RTX Construtora"
          >
            {/* Instagram camera icon */}
            <svg
              className="w-6 h-6 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* WhatsApp Floating Button */}
        <div className="relative group">
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#0A1628] px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 shadow-md hidden sm:block border border-slate-700">
            Fale conosco no WhatsApp
          </span>
          <a
            href={defaultWhatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-xl bg-[#25D366] hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-glow cursor-pointer"
            aria-label="WhatsApp Oficial RTX Construtora"
          >
            {/* WhatsApp official icon */}
            <svg
              className="w-6 h-6 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>
        </div>
      </div>

      {/* ============================================================ */}
      {/* LEFT SIDE FLOATING WIDGET (Assistente RTX)                   */}
      {/* ============================================================ */}
      <div className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-40 select-none">
        {!isChatOpen ? (
          <div className="relative group">
            <button
              type="button"
              onClick={() => setIsChatOpen(true)}
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white text-slate-800 shadow-xl border border-slate-200 hover:border-[#1E56A0] hover:shadow-2xl transition-all duration-300 cursor-pointer"
              aria-label="Abrir Assistente RTX"
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-50 border border-slate-200 shrink-0 p-0.5">
                <img
                  src={RTX_INFO.officialLogo}
                  alt="Avatar Assistente RTX"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left hidden sm:block">
                <div className="text-xs font-bold text-[#0A1628] font-heading leading-none">
                  Assistente RTX
                </div>
                <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Online agora
                </div>
              </div>
            </button>
          </div>
        ) : (
          <div className="fixed inset-x-4 bottom-4 sm:static w-auto sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[540px] animate-in fade-in slide-in-from-bottom-6 duration-200">
            {/* Chat Header */}
            <div className="bg-[#0A1628] text-white p-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 p-1 border border-white/15 shrink-0">
                  <img
                    src={RTX_INFO.officialLogo}
                    alt="Assistente RTX"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading leading-none">
                    Assistente RTX
                  </h4>
                  <span className="text-[10px] text-[#F59E0B] font-mono block mt-1">
                    Atendimento Oficial Construtora
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Minimizar Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl p-3.5 leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#0A1628] text-white rounded-tr-xs'
                        : 'bg-white text-slate-800 border border-slate-200 shadow-xs rounded-tl-xs'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Quick Action Buttons */}
                  {msg.quickActions && msg.quickActions.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {msg.quickActions.map((qa, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={qa.action}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            qa.isPrimary
                              ? 'bg-[#F59E0B] text-[#0A1628] hover:bg-[#D97706] font-heading shadow-xs'
                              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {qa.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Digite sua dúvida ou serviço..."
                className="flex-1 px-3 py-2 text-xs rounded-lg border border-slate-200 focus:border-[#1E56A0] focus:outline-none"
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-[#0A1628] hover:bg-[#112544] text-[#F59E0B] transition-colors cursor-pointer"
                aria-label="Enviar Mensagem"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
