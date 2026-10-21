import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, Trash2, ArrowRight, Compass, Sparkles, 
  Share2, ShieldCheck 
} from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { artifacts } from '../data/artifacts';
import { ArtifactCard } from '../components/ArtifactCard';

export const FavoritesPage = ({ onSelectArtifact }) => {
  const { favorites, clearAllFavorites } = useFavorites();

  const favoritedArtifacts = artifacts.filter(a => favorites.includes(a.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E2D6C0]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6ED] border border-[#C59B4B] text-xs font-semibold text-[#781A2C] mb-2">
            <Heart className="w-3.5 h-3.5 fill-[#781A2C] text-[#781A2C]" />
            <span>Personal Curated Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#1C1714]">
            My Saved Artifacts
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6157] mt-1">
            Your private exhibition of Indian artistic heritage, saved locally to your device.
          </p>
        </div>

        {favoritedArtifacts.length > 0 && (
          <div className="flex items-center gap-3">
            <button
              onClick={clearAllFavorites}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#781A2C] bg-[#FAF6ED] hover:bg-[#F1CAD3]/50 border border-[#781A2C]/30 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Collection</span>
            </button>
          </div>
        )}
      </div>

      {/* Grid of Saved Artifacts */}
      {favoritedArtifacts.length > 0 ? (
        <div className="space-y-6">
          <div className="text-xs font-semibold text-[#6E6157]">
            Showing {favoritedArtifacts.length} curated {favoritedArtifacts.length === 1 ? 'masterpiece' : 'masterpieces'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoritedArtifacts.map((art) => (
              <ArtifactCard
                key={art.id}
                artifact={art}
                onSelect={onSelectArtifact}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-[#FAF6ED] rounded-3xl border border-[#E2D6C0] shadow-museum max-w-lg mx-auto p-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#F3EBDD] text-[#781A2C] mx-auto flex items-center justify-center">
            <Heart className="w-8 h-8 text-[#781A2C]/60" />
          </div>

          <h3 className="text-xl font-serif font-bold text-[#1C1714]">
            Your curated collection is empty
          </h3>

          <p className="text-xs text-[#6E6157] leading-relaxed">
            As you journey through the timeline and gallery, tap the heart icon on any artifact to curate your personal digital exhibition.
          </p>

          <div className="pt-2">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold bg-[#781A2C] text-[#FAF6ED] hover:bg-[#5C1221] shadow-sm transition-all"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Artifact Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
