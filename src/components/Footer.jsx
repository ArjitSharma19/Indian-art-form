import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#1C1714] text-[#FAF6ED] pt-16 pb-12 border-t-4 border-[#C59B4B] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#781A2C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C59B4B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#781A2C] border-2 border-[#C59B4B] flex items-center justify-center text-[#E2C78A] text-xl font-serif">
                ❖
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-[#FAF6ED] tracking-wider block">
                  KalaYatra
                </span>
                <span className="text-xs text-[#C59B4B] tracking-widest uppercase font-serif">
                  A Digital Journey Through Indian Art History
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#DFD5C0] leading-relaxed max-w-md">
              A comprehensive educational digital museum cataloging five millennia of Indian artistic genius—from the bronze metallurgy of Mohenjo-daro to classical Gupta sculpture and contemporary avant-garde abstraction.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C59B4B] font-serif">
              Exhibitions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#DFD5C0]">
              <li>
                <Link to="/timeline" className="hover:text-[#C59B4B] transition-colors">
                  Interactive Timeline (10 Eras)
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#C59B4B] transition-colors">
                  Artifact Gallery (20+ Pieces)
                </Link>
              </li>
              <li>
                <Link to="/regions" className="hover:text-[#C59B4B] transition-colors">
                  Art Across India (8 Traditions)
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:text-[#C59B4B] transition-colors">
                  Art History Quiz & Badge
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="hover:text-[#C59B4B] transition-colors">
                  My Curated Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Historical Periods */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C59B4B] font-serif">
              Key Epochs
            </h4>
            <ul className="space-y-2 text-xs text-[#DFD5C0]">
              <li><Link to="/timeline" className="hover:text-[#C59B4B] transition-colors">Indus Valley (2600 BCE)</Link></li>
              <li><Link to="/timeline" className="hover:text-[#C59B4B] transition-colors">Mauryan Empire (322 BCE)</Link></li>
              <li><Link to="/timeline" className="hover:text-[#C59B4B] transition-colors">Gupta Golden Age (320 CE)</Link></li>
              <li><Link to="/timeline" className="hover:text-[#C59B4B] transition-colors">Imperial Chola Bronzes (10th C)</Link></li>
              <li><Link to="/timeline" className="hover:text-[#C59B4B] transition-colors">Mughal Miniature Ateliers (16th C)</Link></li>
              <li><Link to="/timeline" className="hover:text-[#C59B4B] transition-colors">Bengal School & Modernity (1905)</Link></li>
            </ul>
          </div>

          {/* Provenance & Citation Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C59B4B] font-serif">
              Scholarly Sources
            </h4>
            <p className="text-xs text-[#DFD5C0]/80 leading-relaxed">
              Curated from public domain and open-access collections:
            </p>
            <ul className="text-[11px] text-[#DFD5C0]/70 space-y-1">
              <li>• National Museum, New Delhi</li>
              <li>• Archaeological Survey of India (ASI)</li>
              <li>• The Metropolitan Museum of Art</li>
              <li>• The British Museum</li>
              <li>• UNESCO World Heritage Archives</li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DFD5C0]/60 gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 KalaYatra Project. Educational Non-Commercial Initiative.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Crafted with scholarly reverence for Indian heritage</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
