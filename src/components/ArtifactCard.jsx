import React, { useState } from 'react';
import { Heart, Compass, MapPin, Calendar, Sparkles } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { createHeritagePlaceholder } from '../utils/imageFallbacks';

export const ArtifactCard = ({ artifact, onSelect }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [imgError, setImgError] = useState(false);
  const favorited = isFavorite(artifact?.id);

  // If there is no image URL or if the image fails to load, remove the card completely
  if (!artifact?.imageUrl || imgError) {
    return null;
  }

  return (
    <div 
      onClick={() => onSelect(artifact)}
      className="group relative bg-[#FAF6ED] rounded-2xl overflow-hidden border border-[#E2D6C0] hover:border-[#C59B4B] shadow-museum hover:shadow-museum-lg transition-all duration-300 flex flex-col h-full cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#241B18]">
        <img
          src={artifact.imageUrl}
          alt={artifact.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Art Form Tag */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase bg-[#FAF6ED]/95 text-[#781A2C] backdrop-blur-sm shadow-sm border border-[#C59B4B]/40">
            {artifact.artForm}
          </span>
          {artifact.isFeatured && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#781A2C] text-[#FAF6ED] shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E2C78A]" />
              <span className="hidden sm:inline">Highlight</span>
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(artifact.id, artifact.name);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-200 ${
            favorited
              ? 'bg-[#781A2C] text-[#FAF6ED] shadow-md scale-110'
              : 'bg-black/35 hover:bg-[#FAF6ED] text-white hover:text-[#781A2C]'
          }`}
          aria-label={favorited ? 'Remove from collection' : 'Save to collection'}
          title={favorited ? 'Remove from collection' : 'Save to collection'}
        >
          <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${favorited ? 'fill-current' : ''}`} />
        </button>

        {/* Approximate Date badge at bottom of image */}
        <div className="absolute bottom-3 left-3.5 text-xs sm:text-sm font-medium text-[#FAF6ED]/95 flex items-center gap-1.5 text-shadow-sm">
          <Calendar className="w-4 h-4 text-[#E2C78A]" />
          <span>{artifact.approxDate}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Historical Period & Origin */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-[#6E6157] mb-2">
            <span className="font-bold text-[#781A2C] tracking-wide uppercase truncate max-w-[65%]">
              {artifact.periodName}
            </span>
            <span className="flex items-center gap-1 text-[#C75313] truncate max-w-[35%] font-medium">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{artifact.originRegion.split(',')[0]}</span>
            </span>
          </div>

          {/* Artifact Title */}
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1714] group-hover:text-[#781A2C] transition-colors leading-snug line-clamp-2 mb-2.5">
            {artifact.name}
          </h3>

          {/* Short description */}
          <p className="text-sm text-[#4A3E38] line-clamp-3 leading-relaxed mb-4">
            {artifact.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-3.5 border-t border-[#E2D6C0] flex items-center justify-between">
          <span className="text-xs text-[#8C7E74] italic truncate max-w-[50%]">
            {artifact.materials.split(',')[0]}
          </span>
          <button
            onClick={() => onSelect(artifact)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#781A2C] bg-[#FAF6ED] hover:bg-[#781A2C] hover:text-[#FAF6ED] border border-[#781A2C]/30 hover:border-[#781A2C] transition-all shadow-sm group-hover:shadow"
          >
            <Compass className="w-4 h-4" />
            <span>Discover Artifact</span>
          </button>
        </div>
      </div>
    </div>
  );
};
