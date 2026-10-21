import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, X, RotateCcw, Compass, Calendar, 
  MapPin, Sparkles, Layers, SlidersHorizontal 
} from 'lucide-react';
import { artifacts } from '../data/artifacts';
import { periods } from '../data/periods';
import { ArtifactCard } from '../components/ArtifactCard';

export const GalleryPage = ({ onSelectArtifact }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedArtForm, setSelectedArtForm] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Available unique art forms
  const artForms = useMemo(() => {
    const set = new Set(artifacts.map(a => a.artForm));
    return ['all', ...Array.from(set)];
  }, []);

  // Available unique regions simplified
  const regions = useMemo(() => {
    return [
      { id: 'all', label: 'All Regions' },
      { id: 'indus', label: 'Indus Valley' },
      { id: 'north', label: 'North India (Delhi, UP, Bihar, Himalayas)' },
      { id: 'south', label: 'South India (Tamil Nadu, Kerala, AP)' },
      { id: 'west', label: 'Western India (Rajasthan, Maharashtra)' },
      { id: 'east', label: 'Eastern India (Bengal, Odisha)' },
    ];
  }, []);

  // Filter and sort logic
  const filteredArtifacts = useMemo(() => {
    return artifacts.filter(art => {
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = art.name.toLowerCase().includes(query);
        const matchesPeriod = art.periodName.toLowerCase().includes(query);
        const matchesForm = art.artForm.toLowerCase().includes(query);
        const matchesDesc = art.description.toLowerCase().includes(query);
        const matchesMaterials = art.materials.toLowerCase().includes(query);
        const matchesRegion = art.originRegion.toLowerCase().includes(query);

        if (!matchesName && !matchesPeriod && !matchesForm && !matchesDesc && !matchesMaterials && !matchesRegion) {
          return false;
        }
      }

      // Period filter
      if (selectedPeriod !== 'all' && art.periodId !== selectedPeriod) {
        return false;
      }

      // Art form filter
      if (selectedArtForm !== 'all' && art.artForm !== selectedArtForm) {
        return false;
      }

      // Region filter
      if (selectedRegion !== 'all') {
        const origin = art.originRegion.toLowerCase();
        if (selectedRegion === 'indus' && !origin.includes('mohenjo') && !origin.includes('indus')) return false;
        if (selectedRegion === 'north' && !origin.includes('sarnath') && !origin.includes('bihar') && !origin.includes('patna') && !origin.includes('delhi') && !origin.includes('uttar pradesh') && !origin.includes('agra') && !origin.includes('shimla') && !origin.includes('lahore')) return false;
        if (selectedRegion === 'south' && !origin.includes('tamil') && !origin.includes('thanjavur') && !origin.includes('kerala') && !origin.includes('south india') && !origin.includes('andhra')) return false;
        if (selectedRegion === 'west' && !origin.includes('rajasthan') && !origin.includes('kishangarh') && !origin.includes('ellora') && !origin.includes('ajanta') && !origin.includes('maharashtra')) return false;
        if (selectedRegion === 'east' && !origin.includes('bengal') && !origin.includes('kolkata') && !origin.includes('odisha') && !origin.includes('konark') && !origin.includes('mithila')) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [searchQuery, selectedPeriod, selectedArtForm, selectedRegion, sortBy]);

  const hasActiveFilters = searchQuery !== '' || selectedPeriod !== 'all' || selectedArtForm !== 'all' || selectedRegion !== 'all';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedPeriod('all');
    setSelectedArtForm('all');
    setSelectedRegion('all');
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6ED] border border-[#C59B4B] text-xs sm:text-sm font-semibold text-[#781A2C]">
          <Layers className="w-4 h-4 text-[#C59B4B]" />
          <span>Curated Digital Archive</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif font-black text-[#1C1714]">
          Artifact Gallery
        </h1>

        <p className="text-sm sm:text-base text-[#4A3E38] leading-relaxed">
          Examine twenty-one world-renowned masterpieces from national and international museum collections. Filter by historical period, artistic medium, and geographical origin.
        </p>
      </div>

      {/* Search Bar & Filter Controls Box */}
      <div className="bg-[#FAF6ED] rounded-3xl p-5 sm:p-7 border border-[#E2D6C0] shadow-museum space-y-6">
        {/* Top Search Input & Mobile Filter Toggle */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-[#C59B4B] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by artifact name, period, material (e.g. Bronze, Sandstone, Oil)..."
              className="w-full bg-[#FAF6ED] border border-[#E2D6C0] focus:border-[#C59B4B] focus:ring-1 focus:ring-[#C59B4B] rounded-xl pl-12 pr-10 py-3.5 text-base text-[#1C1714] placeholder-[#8C7E74] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C7E74] hover:text-[#781A2C]"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FAF6ED] border border-[#E2D6C0] rounded-xl px-4 py-3.5 text-sm font-semibold text-[#3E3129] focus:outline-none focus:border-[#C59B4B]"
            >
              <option value="featured">Sort: Curated Highlights</option>
              <option value="name">Sort: Alphabetical (A-Z)</option>
            </select>

            {/* Mobile Filter Toggle Button */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="sm:hidden flex items-center gap-2 px-4 py-3.5 rounded-xl bg-[#FAF6ED] border border-[#E2D6C0] text-sm font-semibold text-[#781A2C]"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Filter Dropdowns Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 ${mobileFilterOpen ? 'block' : 'hidden sm:grid'}`}>
          {/* Period Filter */}
          <div>
            <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#781A2C] mb-2 font-serif">
              Historical Period
            </label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full bg-[#FAF6ED] border border-[#E2D6C0] rounded-xl px-3.5 py-3 text-sm text-[#1C1714] focus:outline-none focus:border-[#C59B4B]"
            >
              <option value="all">All Periods (5,000 BCE – Present)</option>
              {periods.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.dateRange.split('–')[0].trim()})
                </option>
              ))}
            </select>
          </div>

          {/* Art Form Filter */}
          <div>
            <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#781A2C] mb-2 font-serif">
              Art Form / Medium
            </label>
            <select
              value={selectedArtForm}
              onChange={(e) => setSelectedArtForm(e.target.value)}
              className="w-full bg-[#FAF6ED] border border-[#E2D6C0] rounded-xl px-3.5 py-3 text-sm text-[#1C1714] focus:outline-none focus:border-[#C59B4B]"
            >
              <option value="all">All Art Forms</option>
              {artForms.filter(f => f !== 'all').map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          {/* Region Filter */}
          <div>
            <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#781A2C] mb-2 font-serif">
              Geographical Origin
            </label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full bg-[#FAF6ED] border border-[#E2D6C0] rounded-xl px-3.5 py-3 text-sm text-[#1C1714] focus:outline-none focus:border-[#C59B4B]"
            >
              {regions.map(r => (
                <option key={r.id} value={r.id}>{r.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-[#E2D6C0] text-sm">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-[#1C1714]">
              Showing {filteredArtifacts.length} {filteredArtifacts.length === 1 ? 'artifact' : 'artifacts'}
            </span>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold text-[#781A2C] bg-[#F1CAD3]/50 hover:bg-[#781A2C] hover:text-[#FAF6ED] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>

          <div className="text-[#6E6157] text-xs sm:text-sm">
            Click any artifact to open high-res inspection & audio guide
          </div>
        </div>
      </div>

      {/* Artifacts Grid */}
      {filteredArtifacts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtifacts.map((art) => (
            <ArtifactCard
              key={art.id}
              artifact={art}
              onSelect={onSelectArtifact}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 bg-[#FAF6ED] rounded-3xl border border-[#E2D6C0] shadow-museum max-w-lg mx-auto p-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#F3EBDD] text-[#C59B4B] mx-auto flex items-center justify-center">
            <Compass className="w-8 h-8 opacity-70" />
          </div>

          <h3 className="text-xl font-serif font-bold text-[#1C1714]">
            No artifacts matched your criteria
          </h3>

          <p className="text-xs text-[#6E6157] leading-relaxed">
            We couldn't find any artifacts matching your active filters. Try broadening your keywords or resetting filters to see the full collection.
          </p>

          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#781A2C] text-[#FAF6ED] hover:bg-[#5C1221] transition-colors shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};
