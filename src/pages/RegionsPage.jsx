import React, { useState } from 'react';
import { 
  MapPin, Sparkles, Palette, Layers, BookOpen, Compass, 
  Award, ShieldCheck, ChevronRight 
} from 'lucide-react';
import { regionalTraditions } from '../data/regions';
import { createHeritagePlaceholder } from '../utils/imageFallbacks';

export const RegionsPage = () => {
  const [selectedZone, setSelectedZone] = useState('all');
  const [activeTraditionId, setActiveTraditionId] = useState(regionalTraditions[0].id);

  const zones = [
    { id: 'all', label: 'All Traditions' },
    { id: 'Eastern India', label: 'Eastern India (Bihar, Odisha)' },
    { id: 'Western India', label: 'Western India (Maharashtra, Rajasthan)' },
    { id: 'Southern India', label: 'Southern India (Tamil Nadu, Andhra)' },
    { id: 'Northern Himalayan', label: 'Himalayan Foothills (Kangra, Basohli)' },
  ];

  const filteredTraditions = regionalTraditions.filter(t => {
    if (selectedZone === 'all') return true;
    if (selectedZone === 'Eastern India') return t.region.includes('Eastern');
    if (selectedZone === 'Western India') return t.region.includes('Western');
    if (selectedZone === 'Southern India') return t.region.includes('Southern');
    if (selectedZone === 'Northern Himalayan') return t.region.includes('Northern');
    return true;
  });

  const activeTradition = regionalTraditions.find(t => t.id === activeTraditionId) || regionalTraditions[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6ED] border border-[#C59B4B] text-xs sm:text-sm font-semibold text-[#781A2C]">
          <MapPin className="w-4 h-4 text-[#C75313]" />
          <span>Living Heritage Across the Subcontinent</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif font-black text-[#1C1714]">
          Art Across India
        </h1>

        <p className="text-sm sm:text-base text-[#4A3E38] leading-relaxed">
          Beyond courtly palaces, India's artistic genius flourishes in village courtyards, tribal sanctuaries, and pilgrimage workshops. Explore regional folk, scroll, and sacred traditions with their native pigments and sacred lore.
        </p>
      </div>

      {/* Zone Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {zones.map((zone) => (
          <button
            key={zone.id}
            onClick={() => setSelectedZone(zone.id)}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedZone === zone.id
                ? 'bg-[#781A2C] text-[#FAF6ED] shadow-sm'
                : 'bg-[#FAF6ED] text-[#4A3E38] border border-[#E2D6C0] hover:bg-[#F3EBDD]'
            }`}
          >
            {zone.label}
          </button>
        ))}
      </div>

      {/* Two-Column Explorer: Left List Selector + Right Deep-Dive Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: List of Traditions */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-sm font-bold uppercase tracking-wider text-[#781A2C] px-1 mb-1 font-serif">
            Regional Traditions ({filteredTraditions.length})
          </div>

          <div className="space-y-3 max-h-[75vh] overflow-y-auto pr-1">
            {filteredTraditions.map((trad) => {
              const isActive = trad.id === activeTradition.id;
              return (
                <button
                  key={trad.id}
                  onClick={() => setActiveTraditionId(trad.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#FAF6ED] border-2 border-[#781A2C] shadow-museum'
                      : 'bg-[#FAF6ED]/70 border-[#E2D6C0] hover:bg-[#FAF6ED] hover:border-[#C59B4B]'
                  }`}
                >
                  <div className="space-y-1.5 pr-3 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EFE8D8] text-[#781A2C]">
                        {trad.state}
                      </span>
                      <span className="text-xs text-[#8C7E74] font-medium">
                        {trad.region.split('(')[0]}
                      </span>
                    </div>

                    <h3 className={`text-lg sm:text-xl font-serif font-bold truncate ${
                      isActive ? 'text-[#781A2C]' : 'text-[#1C1714] group-hover:text-[#781A2C]'
                    }`}>
                      {trad.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6E6157] line-clamp-2 leading-relaxed">
                      {trad.shortDescription}
                    </p>
                  </div>

                  <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${
                    isActive ? 'text-[#781A2C] translate-x-1' : 'text-[#C59B4B] opacity-0 group-hover:opacity-100'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Tradition Deep-Dive Card */}
        <div className="lg:col-span-7 bg-[#FAF6ED] rounded-3xl p-6 sm:p-8 border border-[#C59B4B]/50 shadow-museum-lg space-y-6">
          {/* Top Banner with Sample Image & Badge */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#1C1714] border border-[#C59B4B]/30 shadow-sm group">
            <img
              src={activeTradition.sampleImage}
              alt={activeTradition.name}
              onError={(e) => {
                e.target.src = activeTradition.fallbackImage || createHeritagePlaceholder(activeTradition.name, 'Folk Art', activeTradition.state);
              }}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-[#FAF6ED] flex items-end justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E2C78A] block">
                  {activeTradition.heritageStatus}
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold mt-1 text-[#FAF6ED]">
                  {activeTradition.name}
                </h2>
              </div>
              <span className="text-xs sm:text-sm text-white/90 bg-black/45 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
                {activeTradition.originCentury}
              </span>
            </div>
          </div>

          {/* Color Palette Swatches */}
          {activeTradition.colorPalette && (
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F3EBDD]/60 border border-[#E2D6C0]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#781A2C] flex items-center gap-1.5 font-serif">
                <Palette className="w-3.5 h-3.5 text-[#C59B4B]" />
                Traditional Earth & Mineral Pigment Palette
              </span>
              <div className="flex items-center gap-2">
                {activeTradition.colorPalette.map((color, idx) => (
                  <div
                    key={idx}
                    style={{ backgroundColor: color }}
                    className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                    title={`Traditional Mineral Shade: ${color}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Cultural Lore & Origin */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C75313] flex items-center gap-1.5 font-serif">
              <BookOpen className="w-3.5 h-3.5" />
              Origin Myth & Cultural Lore
            </h4>
            <p className="text-sm text-[#4A3E38] leading-relaxed italic bg-[#F3EBDD]/40 p-4 rounded-xl border-l-4 border-[#C75313]">
              "{activeTradition.culturalLore}"
            </p>
          </div>

          {/* Materials & Techniques Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Natural Materials */}
            <div className="p-4 rounded-2xl bg-[#FAF6ED] border border-[#E2D6C0] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#781A2C] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B4B]" />
                Natural Materials & Colors
              </h4>
              <ul className="space-y-1.5 text-xs text-[#4A3E38]">
                {activeTradition.materialsAndColors.map((mat, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#C59B4B] font-bold mt-0.5">•</span>
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Techniques */}
            <div className="p-4 rounded-2xl bg-[#FAF6ED] border border-[#E2D6C0] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#781A2C] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#C59B4B]" />
                Distinctive Techniques
              </h4>
              <ul className="space-y-1.5 text-xs text-[#4A3E38]">
                {activeTradition.techniques.map((tech, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#781A2C] font-bold mt-0.5">❖</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Iconic Motifs */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#781A2C] font-serif">
              Iconic Motifs & Symbols
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeTradition.iconicMotifs.map((motif, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#EFE8D8] text-[#3E3129] border border-[#C59B4B]/30"
                >
                  {motif}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
