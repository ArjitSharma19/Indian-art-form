import React, { useState, useEffect, useRef } from 'react';
import { 
  X, ZoomIn, ZoomOut, RotateCcw, Volume2, VolumeX, Heart, Share2, 
  MapPin, Calendar, Compass, ShieldCheck, Sparkles, BookOpen, Layers,
  ExternalLink, Maximize2
} from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { artifacts } from '../data/artifacts';
import { createHeritagePlaceholder } from '../utils/imageFallbacks';

export const ArtifactModal = ({ artifact, onClose, onSelectRelated }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalRef = useRef(null);

  const favorited = artifact ? isFavorite(artifact.id) : false;

  const stopSpeech = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  const toggleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('Text-to-speech audio narration is not supported in this browser.');
      return;
    }

    if (isSpeaking) {
      stopSpeech();
    } else {
      window.speechSynthesis.cancel();
      const narration = artifact?.audioGuideText || `${artifact?.name}. Created during ${artifact?.periodName}, around ${artifact?.approxDate}. ${artifact?.description} ${artifact?.significance}`;
      const utterance = new SpeechSynthesisUtterance(narration);
      utterance.rate = 0.95; // Gentle museum audio pacing
      utterance.pitch = 1.0;

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  useEffect(() => {
    // Reset zoom and stop speech when artifact changes
    setZoomLevel(1);
    stopSpeech();
    setImgError(false);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        stopSpeech();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      stopSpeech();
    };
  }, [artifact]);

  if (!artifact) return null;

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.3, 2.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.3, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  const handleCopyLink = () => {
    const url = `${window.location.origin}/#artifact-${artifact.id}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Find related artifacts from same period or same art form
  const relatedArtifacts = artifacts
    .filter(a => a.id !== artifact.id && (a.periodId === artifact.periodId || a.artForm === artifact.artForm))
    .slice(0, 3);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={() => {
        stopSpeech();
        onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Details of ${artifact.name}`}
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-5xl bg-[#FAF6ED] rounded-3xl shadow-2xl border border-[#C59B4B]/50 overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2D6C0] bg-[#FAF6ED]/95 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#781A2C] text-[#FAF6ED]">
              {artifact.artForm}
            </span>
            <span className="hidden sm:inline-block text-xs font-serif font-medium text-[#781A2C]">
              {artifact.periodName}
            </span>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            {/* Audio Guide Button */}
            <button
              onClick={toggleSpeech}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-sm ${
                isSpeaking
                  ? 'bg-[#781A2C] text-[#FAF6ED] animate-pulse'
                  : 'bg-[#FAF6ED] text-[#781A2C] border border-[#781A2C]/30 hover:bg-[#F1CAD3]/40'
              }`}
              title={isSpeaking ? 'Mute Audio Guide' : 'Listen to Museum Audio Guide'}
              aria-label="Museum Audio Guide"
            >
              {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{isSpeaking ? 'Playing Audio...' : 'Audio Guide'}</span>
            </button>

            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(artifact.id, artifact.name)}
              className={`p-2 rounded-full border transition-all ${
                favorited
                  ? 'bg-[#781A2C] text-white border-[#781A2C]'
                  : 'bg-[#FAF6ED] text-[#781A2C] border-[#E2D6C0] hover:bg-[#F3EBDD]'
              }`}
              aria-label={favorited ? 'Remove favorite' : 'Add favorite'}
              title={favorited ? 'Remove favorite' : 'Save to my collection'}
            >
              <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
            </button>

            {/* Share Button */}
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full border border-[#E2D6C0] text-[#781A2C] bg-[#FAF6ED] hover:bg-[#F3EBDD] transition-colors"
              title="Copy link to artifact"
              aria-label="Share artifact"
            >
              <Share2 className="w-4 h-4" />
            </button>
            {copiedLink && (
              <span className="text-xs text-[#781A2C] font-semibold">Copied!</span>
            )}

            {/* Close Button */}
            <button
              onClick={() => {
                stopSpeech();
                onClose();
              }}
              className="p-2 rounded-full text-[#1C1714] hover:text-[#781A2C] hover:bg-[#EFE8D8] transition-colors ml-2"
              aria-label="Close details"
              title="Close modal (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Main Hero Grid: High-Res Interactive Viewer + Key Metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: High-Res Artifact Image Viewer */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative rounded-2xl overflow-hidden border border-[#C59B4B]/40 bg-[#1C1714] shadow-museum group">
                {/* Image container with scale */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden flex items-center justify-center">
                  <img
                    src={imgError ? (artifact.fallbackImage || createHeritagePlaceholder(artifact.name, artifact.artForm, artifact.periodName)) : artifact.imageUrl}
                    alt={artifact.name}
                    onError={() => setImgError(true)}
                    style={{ transform: `scale(${zoomLevel})` }}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 select-none cursor-grab active:cursor-grabbing"
                  />
                </div>

                {/* Viewer Controls Toolbar */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-black/70 backdrop-blur-md text-white border border-white/10">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={handleZoomIn}
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleZoomOut}
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleResetZoom}
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-colors text-xs flex items-center gap-1"
                      title="Reset Zoom"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{Math.round(zoomLevel * 100)}%</span>
                    </button>
                  </div>

                  <span className="text-[11px] text-white/70 italic flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C59B4B]" />
                    Original Museum Piece
                  </span>
                </div>
              </div>

              {/* Attribution and License Footer */}
              <div className="mt-2 text-[11px] text-[#6E6157] flex flex-wrap items-center justify-between gap-2 px-1">
                <span><strong>Source:</strong> {artifact.imageAttribution}</span>
                <span className="text-[#781A2C] font-medium">{artifact.license}</span>
              </div>
            </div>

            {/* Right: Key Museum Facts & Provenance */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#C75313] uppercase tracking-wider mb-1 font-serif">
                  {artifact.subCategory || artifact.artForm}
                </div>
                <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#1C1714] leading-tight">
                  {artifact.name}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#C59B4B] to-[#781A2C] my-3 rounded-full" />

                <p className="text-sm sm:text-base text-[#4A3E38] leading-relaxed">
                  {artifact.description}
                </p>
              </div>

              {/* Provenance & Specifications Grid */}
              <div className="bg-[#FAF6ED] border border-[#E2D6C0] rounded-2xl p-5 space-y-3.5 shadow-sm">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#781A2C] flex items-center gap-2 font-serif">
                  <Compass className="w-4 h-4 text-[#C59B4B]" />
                  Museum Provenance & Specifications
                </h4>

                <div className="grid grid-cols-2 gap-3.5 text-xs sm:text-sm pt-1">
                  <div>
                    <span className="text-[#8C7E74] block font-medium">Historical Period</span>
                    <span className="font-semibold text-[#1C1714]">{artifact.periodName}</span>
                  </div>

                  <div>
                    <span className="text-[#8C7E74] block font-medium">Approximate Date</span>
                    <span className="font-semibold text-[#1C1714]">{artifact.approxDate}</span>
                  </div>

                  <div>
                    <span className="text-[#8C7E74] block font-medium">Origin / Discovery Site</span>
                    <span className="font-semibold text-[#1C1714]">{artifact.originRegion}</span>
                  </div>

                  <div>
                    <span className="text-[#8C7E74] block font-medium">Present Location</span>
                    <span className="font-semibold text-[#1C1714]">{artifact.currentLocation}</span>
                  </div>

                  <div className="col-span-2">
                    <span className="text-[#8C7E74] block font-medium">Materials & Techniques</span>
                    <span className="font-semibold text-[#1C1714]">{artifact.materials}</span>
                  </div>

                  {artifact.dimensions && (
                    <div className="col-span-2">
                      <span className="text-[#8C7E74] block font-medium">Dimensions</span>
                      <span className="font-semibold text-[#1C1714]">{artifact.dimensions}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Significance Section */}
          <div className="bg-[#FAF6ED] border-l-4 border-[#781A2C] p-5 sm:p-6 rounded-r-2xl shadow-sm">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#781A2C] flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-[#C59B4B]" />
              Historical & Cultural Significance
            </h3>
            <p className="text-sm sm:text-base text-[#3E3129] leading-relaxed">
              {artifact.significance}
            </p>
          </div>

          {/* Two-Column Deep Dive: Distinctive Features & Fascinating Trivia */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Distinctive Features */}
            {artifact.distinctiveFeatures && (
              <div className="bg-[#F3EBDD]/60 rounded-2xl p-5 sm:p-6 border border-[#E2D6C0]">
                <h4 className="text-base sm:text-lg font-serif font-bold text-[#1C1714] flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-[#C75313]" />
                  Distinctive Artistic Features
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A3E38]">
                  {artifact.distinctiveFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#C59B4B] font-bold mt-0.5">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Interesting Facts */}
            {artifact.interestingFacts && (
              <div className="bg-[#F3EBDD]/60 rounded-2xl p-5 border border-[#E2D6C0]">
                <h4 className="text-sm font-serif font-bold text-[#1C1714] flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-[#781A2C]" />
                  Archaeological & Curatorial Trivia
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#4A3E38]">
                  {artifact.interestingFacts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#781A2C] font-bold mt-0.5">❖</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Related Artifacts */}
          {relatedArtifacts.length > 0 && (
            <div className="pt-4 border-t border-[#E2D6C0]">
              <h4 className="text-sm font-serif font-bold text-[#1C1714] uppercase tracking-wider mb-4">
                Related Artifacts in KalaYatra
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArtifacts.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => onSelectRelated(rel)}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF6ED] hover:bg-[#F3EBDD] border border-[#E2D6C0] text-left transition-colors group"
                  >
                    <img
                      src={rel.imageUrl}
                      alt={rel.name}
                      onError={(e) => { e.target.src = rel.fallbackImage; }}
                      className="w-14 h-14 rounded-lg object-cover border border-[#C59B4B]/30 shrink-0"
                    />
                    <div className="min-w-0">
                      <h5 className="text-xs font-semibold text-[#1C1714] group-hover:text-[#781A2C] transition-colors truncate">
                        {rel.name}
                      </h5>
                      <span className="text-[11px] text-[#8C7E74] block truncate">
                        {rel.periodName}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3.5 border-t border-[#E2D6C0] bg-[#FAF6ED] flex items-center justify-between text-xs text-[#6E6157]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            Curated from Public Domain Archives & National Museums
          </span>
          <button
            onClick={() => {
              stopSpeech();
              onClose();
            }}
            className="px-4 py-1.5 rounded-lg font-semibold bg-[#781A2C] text-[#FAF6ED] hover:bg-[#5C1221] transition-colors"
          >
            Back to Gallery
          </button>
        </div>
      </div>
    </div>
  );
};
