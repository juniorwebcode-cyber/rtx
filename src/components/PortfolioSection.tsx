import React, { useState } from 'react';
import {
  MapPin,
  ArrowRight,
  MessageCircle,
  X,
  Maximize2,
  Images,
  ChevronLeft,
  ChevronRight,
  School,
  CheckCircle2,
} from 'lucide-react';
import { PORTFOLIO_DATA, PortfolioItem, RTX_INFO } from '../data/rtxData';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const categories = [
    'Todos',
    'Educacional & Institucional',
    'Residencial',
    'Comercial',
    'Manutenção & Condomínios',
    'Limpeza & Segurança',
  ];

  const filteredItems =
    activeFilter === 'Todos'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((item) => item.category === activeFilter);

  const handleOpenModal = (item: PortfolioItem) => {
    setActiveModalItem(item);
    setActiveImageIndex(0);
  };

  const handleNextImage = (total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % total);
  };

  const handlePrevImage = (total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A1628]/5 border border-[#0A1628]/10 text-xs font-semibold text-[#1E56A0] tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E56A0]"></span>
              Projetos & Obras Executadas
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#0A1628] font-heading tracking-tight">
              Portfólio de Obras e Gestão
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            Conheça algumas das obras educacionais, residenciais, corporativas e condomínios que comprovam o padrão RTX de rigor técnico, acabamento e pontualidade.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-slate-200/80">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeFilter === category
                  ? 'bg-[#0A1628] text-white shadow-sm ring-1 ring-[#0A1628]'
                  : 'bg-white text-slate-600 hover:text-[#0A1628] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => {
            const photosCount = item.galleryImages?.length || 1;
            const hasMultiplePhotos = photosCount > 1;

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-2xl hover:border-[#1E56A0] transition-all duration-300 flex flex-col cursor-pointer hover-card-glow"
                onClick={() => handleOpenModal(item)}
              >
                {/* Image with zoom effect */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#0A1628]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/85 via-transparent to-transparent" />

                  {/* Top Left Badge */}
                  <div className="absolute top-4 left-4 bg-[#0A1628]/85 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold text-white border border-white/15 flex items-center gap-1.5">
                    {item.category === 'Educacional & Institucional' && (
                      <School className="w-3.5 h-3.5 text-[#F59E0B]" />
                    )}
                    <span>{item.category}</span>
                  </div>

                  {/* Top Right Actions */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {hasMultiplePhotos && (
                      <div className="bg-[#0A1628]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-[#F59E0B] border border-[#F59E0B]/30 flex items-center gap-1.5 shadow-sm">
                        <Images className="w-3 h-3 text-[#F59E0B]" />
                        <span>{photosCount} fotos da obra</span>
                      </div>
                    )}
                    <div className="w-8 h-8 rounded bg-[#0A1628]/70 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                      <Maximize2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                    </div>
                  </div>

                  {/* Bottom Inset Location */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200 font-medium">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{item.location}</span>
                    </div>
                    {item.id === 'obra-escola-modernizacao' && (
                      <span className="bg-[#F59E0B] text-[#0A1628] font-bold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
                        Obra Recente
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0A1628] font-heading group-hover:text-[#1E56A0] transition-colors mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold text-[#1E56A0]">
                    <span className="flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
                      {hasMultiplePhotos ? 'Ver galeria de fotos & laudo' : 'Ver especificações técnicas'}{' '}
                      <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">PADRÃO RTX</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Details Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0A1628]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative max-h-[94vh] flex flex-col">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-20 p-2 text-white hover:text-white bg-[#0A1628]/80 hover:bg-[#0A1628] rounded-full backdrop-blur-md shadow-lg transition-colors border border-white/20 cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Gallery Image Display */}
            {(() => {
              const gallery = activeModalItem.galleryImages && activeModalItem.galleryImages.length > 0
                ? activeModalItem.galleryImages
                : [activeModalItem.image];
              const currentImg = gallery[activeImageIndex] || activeModalItem.image;
              const hasGallery = gallery.length > 1;

              return (
                <div className="relative bg-[#0A1628] shrink-0">
                  {/* Main Active Image */}
                  <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden flex items-center justify-center">
                    <img
                      src={currentImg}
                      alt={`${activeModalItem.title} - Foto ${activeImageIndex + 1}`}
                      className="w-full h-full object-contain sm:object-cover transition-opacity duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-transparent to-black/20 pointer-events-none" />

                    {/* Navigation Arrows */}
                    {hasGallery && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => handlePrevImage(gallery.length, e)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0A1628]/80 hover:bg-[#0A1628] text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-transform active:scale-95 cursor-pointer shadow-lg z-10"
                          aria-label="Foto anterior"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => handleNextImage(gallery.length, e)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0A1628]/80 hover:bg-[#0A1628] text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-transform active:scale-95 cursor-pointer shadow-lg z-10"
                          aria-label="Próxima foto"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    {/* Image Counter & Badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="bg-[#0A1628]/85 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold text-white border border-white/20">
                        {activeModalItem.category}
                      </span>
                      {hasGallery && (
                        <span className="bg-[#F59E0B] text-[#0A1628] font-mono text-xs font-bold px-2.5 py-1 rounded shadow-sm">
                          Foto {activeImageIndex + 1} de {gallery.length}
                        </span>
                      )}
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-3 left-4 right-4 sm:left-6 sm:right-6 text-white pointer-events-none">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#F59E0B] font-semibold mb-1 block">
                        {activeModalItem.location}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-heading line-clamp-1">
                        {activeModalItem.title}
                      </h3>
                    </div>
                  </div>

                  {/* Thumbnail Strip (if multiple photos) */}
                  {hasGallery && (
                    <div className="bg-[#0A1628] px-3 py-2 border-t border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-thin">
                      {gallery.map((imgUrl, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative shrink-0 w-14 h-11 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                            activeImageIndex === idx
                              ? 'border-[#F59E0B] scale-105 shadow-md ring-1 ring-[#F59E0B]'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={imgUrl}
                            alt={`Miniatura ${idx + 1}`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Modal Body & Technical Specs */}
            <div className="p-5 sm:p-7 overflow-y-auto flex-1 flex flex-col justify-between">
              <div className="mb-5 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-[#0A1628] uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E56A0]"></span>
                    Visão Geral do Projeto
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {activeModalItem.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#0A1628] uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1E56A0]" />
                    Especificações Técnicas & Execução RTX
                  </h4>
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                    {activeModalItem.details}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${RTX_INFO.phones[0].number}?text=${encodeURIComponent(
                    `Olá! Vi no portfólio da RTX a obra "${activeModalItem.title}" e gostaria de solicitar um orçamento para um projeto com esse padrão técnico.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-5 text-xs font-semibold text-center text-[#0A1628] bg-[#F59E0B] hover:bg-[#D97706] rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm font-heading cursor-pointer active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 text-[#0A1628]" />
                  <span>Solicitar Orçamento Deste Padrão via WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="py-3 px-5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
