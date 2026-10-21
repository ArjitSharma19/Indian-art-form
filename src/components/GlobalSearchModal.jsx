import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Calendar, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { artifacts } from '../data/artifacts';
import { periods } from '../data/periods';
import { regionalTraditions } from '../data/regions';

export const GlobalSearchModal = ({ isOpen, onClose, onSelectArtifact, onSelectPeriod, onSelectRegion }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingArtifacts = trimmed
    ? artifacts.filter(
        (a) =>
          a.name.toLowerCase().includes(trimmed) ||
          a.periodName.toLowerCase().includes(trimmed) ||
          a.artForm.toLowerCase().includes(trimmed) ||
          a.originRegion.toLowerCase().includes(trimmed) ||
          a.description.toLowerCase().includes(trimmed)
      ).slice(0, 5)
    : artifacts.filter((a) => a.isFeatured).slice(0, 4);

  const matchingPeriods = trimmed
    ? periods.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.era.toLowerCase().includes(trimmed) ||
          p.shortDescription.toLowerCase().includes(trimmed)
      ).slice(0, 3)
    : [];

  const matchingTraditions = trimmed
    ? regionalTraditions.filter(
        (r) =>
          r.name.toLowerCase().includes(trimmed) ||
          r.state.toLowerCase().includes(trimmed) ||
          r.shortDescription.toLowerCase().includes(trimmed)
      ).slice(0, 3)
    : [];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-[#FAF6ED] rounded-2xl shadow-museum-lg border border-[#C59B4B]/40 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#E2D6C0] bg-[#FAF6ED]">
          <Search className="w-5 h-5 text-[#C59B4B] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search artifacts, periods, regional traditions, materials..."
            className="w-full bg-transparent text-[#1C1714] placeholder-[#8C7E74] text-base focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8C7E74] hover:text-[#781A2C] transition-colors rounded-full"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2.5 py-1 rounded bg-[#EFE8D8] text-[#5C4F47] hover:bg-[#E2D6C0] transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 space-y-6">
          {/* Artifacts */}
          {matchingArtifacts.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#781A2C] mb-2 px-2">
                <span>{trimmed ? 'Matching Artifacts' : 'Featured Masterpieces'}</span>
                <span>{matchingArtifacts.length} found</span>
              </div>
              <div className="space-y-1.5">
                {matchingArtifacts.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => {
                      onSelectArtifact(art);
                      onClose();
                    }}
                    className="w-full flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-[#F3EBDD] text-left transition-colors group"
                  >
                    <img
                      src={art.imageUrl}
                      alt={art.name}
                      onError={(e) => {
                        e.target.src = art.fallbackImage;
                      }}
                      className="w-12 h-12 rounded-lg object-cover border border-[#C59B4B]/30 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold text-[#1C1714] group-hover:text-[#781A2C] transition-colors truncate">
                        {art.name}
                      </h4>
                      <p className="text-xs text-[#6E6157] flex items-center gap-2 mt-0.5">
                        <span className="font-medium text-[#C75313]">{art.artForm}</span>
                        <span>•</span>
                        <span>{art.periodName}</span>
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#C59B4B] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Periods */}
          {matchingPeriods.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#781A2C] mb-2 px-2">
                Historical Eras
              </div>
              <div className="space-y-1.5">
                {matchingPeriods.map((period) => (
                  <button
                    key={period.id}
                    onClick={() => {
                      onSelectPeriod(period.id);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#F3EBDD] text-left transition-colors group"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-[#1C1714] group-hover:text-[#781A2C]">
                        {period.name}
                      </h4>
                      <p className="text-xs text-[#6E6157] flex items-center gap-2 mt-0.5">
                        <Calendar className="w-3 h-3 text-[#C59B4B]" />
                        <span>{period.dateRange}</span>
                      </p>
                    </div>
                    <span className="text-xs font-medium text-[#781A2C] bg-[#F1CAD3]/50 px-2.5 py-1 rounded-full group-hover:bg-[#781A2C] group-hover:text-white transition-colors">
                      View Timeline
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Regional Traditions */}
          {matchingTraditions.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#781A2C] mb-2 px-2">
                Regional Traditions
              </div>
              <div className="space-y-1.5">
                {matchingTraditions.map((trad) => (
                  <button
                    key={trad.id}
                    onClick={() => {
                      onSelectRegion(trad.id);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#F3EBDD] text-left transition-colors group"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-[#1C1714] group-hover:text-[#781A2C]">
                        {trad.name}
                      </h4>
                      <p className="text-xs text-[#6E6157] flex items-center gap-2 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#C75313]" />
                        <span>{trad.state} ({trad.region})</span>
                      </p>
                    </div>
                    <span className="text-xs font-medium text-[#C75313] bg-[#FEF4EC] px-2.5 py-1 rounded-full border border-[#F5AB6F]/40">
                      Explore Art
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Empty Results */}
          {trimmed &&
            matchingArtifacts.length === 0 &&
            matchingPeriods.length === 0 &&
            matchingTraditions.length === 0 && (
              <div className="py-12 text-center">
                <Sparkles className="w-10 h-10 text-[#C59B4B] mx-auto mb-3 opacity-60" />
                <h4 className="text-base font-serif font-bold text-[#1C1714]">No historical records matched</h4>
                <p className="text-xs text-[#6E6157] max-w-sm mx-auto mt-1">
                  Try searching for keywords like "Chola", "Mohenjo-daro", "Ajanta", "Miniature", "Bronze", or "Buddha".
                </p>
              </div>
            )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 border-t border-[#E2D6C0] bg-[#FAF6ED]/80 flex items-center justify-between text-xs text-[#6E6157]">
          <span>Tip: Press <strong>ESC</strong> to dismiss search</span>
          <span className="text-[#781A2C] font-serif font-semibold">KalaYatra Digital Archives</span>
        </div>
      </div>
    </div>
  );
};
