import React, { useRef, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Calendar, Sparkles, Compass, 
  Layers, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { periods } from '../data/periods';
import { artifacts } from '../data/artifacts';
import { ArtifactCard } from './ArtifactCard';

export const TimelineInteractive = ({ 
  selectedPeriodId, 
  onSelectPeriod, 
  onSelectArtifact 
}) => {
  const scrollContainerRef = useRef(null);

  // Current active period object
  const activePeriod = periods.find(p => p.id === selectedPeriodId) || periods[0];
  const currentIndex = periods.findIndex(p => p.id === activePeriod.id);

  // Filter artifacts that belong to this period
  const periodArtifacts = artifacts.filter(a => a.periodId === activePeriod.id);

  // Scroll horizontal track when active period changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeEl = scrollContainerRef.current.querySelector(`[data-period-id="${activePeriod.id}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activePeriod.id]);

  const handlePrevPeriod = () => {
    if (currentIndex > 0) {
      onSelectPeriod(periods[currentIndex - 1].id);
    }
  };

  const handleNextPeriod = () => {
    if (currentIndex < periods.length - 1) {
      onSelectPeriod(periods[currentIndex + 1].id);
    }
  };

  const scrollTrack = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8">
      {/* Horizontal Interactive Timeline Bar */}
      <div className="bg-[#FAF6ED] rounded-3xl p-4 sm:p-6 border border-[#E2D6C0] shadow-museum relative">
        {/* Header with BCE / CE Legend & Scroll Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E2D6C0]">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#781A2C] block font-serif">
              Chronological Scale (2600 BCE – Present)
            </span>
            <span className="text-sm text-[#6E6157]">
              Click any era or use arrows to journey through 5,000 years
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="text-xs sm:text-sm font-semibold text-[#781A2C] bg-[#EFE8D8] px-3 py-1 rounded-full border border-[#C59B4B]/30">
              Period {currentIndex + 1} of {periods.length}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollTrack('left')}
                className="p-2 rounded-xl bg-[#FAF6ED] hover:bg-[#F3EBDD] border border-[#E2D6C0] text-[#781A2C] transition-colors shadow-sm"
                title="Scroll timeline left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTrack('right')}
                className="p-2 rounded-xl bg-[#FAF6ED] hover:bg-[#F3EBDD] border border-[#E2D6C0] text-[#781A2C] transition-colors shadow-sm"
                title="Scroll timeline right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Timeline Track */}
        <div className="relative py-4">
          {/* Continuous chronological horizontal axis line */}
          <div className="absolute top-1/2 left-4 right-4 h-1.5 bg-gradient-to-r from-[#B04C13] via-[#C59B4B] to-[#781A2C] -translate-y-1/2 rounded-full opacity-40 z-0" />

          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar relative z-10 px-2 py-2"
          >
            {periods.map((period, index) => {
              const isSelected = period.id === activePeriod.id;
              const isBCE = period.dateRange.includes('BCE');

              return (
                <button
                  key={period.id}
                  data-period-id={period.id}
                  onClick={() => onSelectPeriod(period.id)}
                  className={`flex-shrink-0 group flex flex-col items-center text-center transition-all duration-300 focus:outline-none ${
                    isSelected ? 'scale-105' : 'hover:scale-102 opacity-75 hover:opacity-100'
                  }`}
                  style={{ width: '170px' }}
                >
                  {/* Era pill (BCE / CE) */}
                  <span className={`text-xs font-bold uppercase tracking-wider mb-2 px-2.5 py-0.5 rounded-full border transition-colors ${
                    isSelected
                      ? 'bg-[#781A2C] text-[#FAF6ED] border-[#781A2C]'
                      : 'bg-[#FAF6ED] text-[#6E6157] border-[#E2D6C0]'
                  }`}>
                    {isBCE ? 'BCE Epoch' : 'CE Epoch'}
                  </span>

                  {/* Marker Node / Dot on the Axis */}
                  <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isSelected 
                      ? 'bg-[#781A2C] border-[#C59B4B] text-[#FAF6ED] shadow-gold-glow ring-4 ring-[#C59B4B]/30' 
                      : 'bg-[#FAF6ED] border-[#781A2C] text-[#781A2C] group-hover:border-[#C59B4B]'
                  }`}>
                    <span className="text-sm font-serif font-bold">
                      {index + 1}
                    </span>
                  </div>

                  {/* Period Name & Date Range */}
                  <div className="mt-2.5">
                    <h4 className={`text-sm font-serif font-bold transition-colors line-clamp-1 ${
                      isSelected ? 'text-[#781A2C]' : 'text-[#1C1714] group-hover:text-[#781A2C]'
                    }`}>
                      {period.name}
                    </h4>
                    <span className="text-xs text-[#8C7E74] block mt-0.5 whitespace-nowrap font-medium">
                      {period.dateRange.split('–')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Period Deep-Dive Showcase */}
      <div className="bg-[#FAF6ED] rounded-3xl p-6 sm:p-10 border border-[#E2D6C0] shadow-museum-lg relative overflow-hidden">
        {/* Subtle decorative gold motif */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C59B4B]/5 rounded-full blur-2xl pointer-events-none" />

        {/* Period Navigation Controls Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E2D6C0]">
          <button
            onClick={handlePrevPeriod}
            disabled={currentIndex === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
              currentIndex === 0
                ? 'opacity-40 cursor-not-allowed border-[#E2D6C0] text-[#8C7E74]'
                : 'border-[#781A2C]/30 text-[#781A2C] hover:bg-[#781A2C] hover:text-[#FAF6ED]'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous Era</span>
          </button>

          <div className="text-center">
            <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#C75313] block">
              Epoch {currentIndex + 1} of {periods.length}
            </span>
            <span className="text-sm font-serif text-[#6E6157]">
              {activePeriod.era}
            </span>
          </div>

          <button
            onClick={handleNextPeriod}
            disabled={currentIndex === periods.length - 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
              currentIndex === periods.length - 1
                ? 'opacity-40 cursor-not-allowed border-[#E2D6C0] text-[#8C7E74]'
                : 'border-[#781A2C]/30 text-[#781A2C] hover:bg-[#781A2C] hover:text-[#FAF6ED]'
            }`}
          >
            <span className="hidden sm:inline">Next Era</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Period Overview Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6ED] border border-[#C59B4B] text-[#781A2C] text-xs sm:text-sm font-semibold">
              <Calendar className="w-4 h-4 text-[#C59B4B]" />
              <span>{activePeriod.dateRange}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#1C1714]">
              {activePeriod.name}
            </h2>

            <p className="text-base sm:text-lg font-serif italic text-[#781A2C] font-medium">
              "{activePeriod.tagline}"
            </p>

            <p className="text-base sm:text-lg text-[#4A3E38] leading-relaxed">
              {activePeriod.overview}
            </p>
          </div>

          {/* Artistic Developments Callout */}
          <div className="lg:col-span-4 bg-[#F3EBDD]/70 rounded-2xl p-6 sm:p-7 border border-[#E2D6C0] space-y-3.5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#781A2C] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C59B4B]" />
              Artistic Innovations & Developments
            </h3>

            <ul className="space-y-3 text-sm text-[#3E3129]">
              {activePeriod.artisticDevelopments.map((dev, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#C59B4B] font-bold text-base leading-none mt-0.5">❖</span>
                  <span className="leading-snug">{dev}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Representative Artworks for this Period */}
        <div className="pt-6 border-t border-[#E2D6C0]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1714]">
                Representative Masterpieces of this Era
              </h3>
              <p className="text-sm sm:text-base text-[#6E6157] mt-1">
                Artifacts preserved from {activePeriod.name} ({periodArtifacts.length} curated objects)
              </p>
            </div>
          </div>

          {periodArtifacts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {periodArtifacts.map((art) => (
                <ArtifactCard 
                  key={art.id} 
                  artifact={art} 
                  onSelect={onSelectArtifact} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-[#F3EBDD]/40 rounded-2xl border border-dashed border-[#C59B4B]/50">
              <Compass className="w-8 h-8 text-[#C59B4B] mx-auto mb-2 opacity-70" />
              <p className="text-xs text-[#6E6157]">
                Additional archival artifacts for this era are being cataloged by our curatorial team.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
