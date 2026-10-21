import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Compass, Clock, Image as ImageIcon, MapPin, HelpCircle, Heart, 
  Search, Menu, X, Sparkles 
} from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';

export const Navbar = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { favorites } = useFavorites();

  const navLinks = [
    { to: '/', label: 'Home', icon: Compass },
    { to: '/timeline', label: 'Timeline', icon: Clock },
    { to: '/gallery', label: 'Artifacts', icon: ImageIcon },
    { to: '/regions', label: 'Regional Art', icon: MapPin },
    { to: '/quiz', label: 'Quiz', icon: HelpCircle },
    { 
      to: '/favorites', 
      label: 'Curated', 
      icon: Heart, 
      badge: favorites.length > 0 ? favorites.length : null 
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6ED]/95 backdrop-blur-md border-b border-[#E2D6C0] shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C59B4B] rounded-xl p-1 shrink-0"
        >
          {/* Emblem */}
          <div className="w-10 h-10 rounded-full bg-[#781A2C] border-2 border-[#C59B4B] flex items-center justify-center text-[#E2C78A] shadow-sm group-hover:rotate-45 transition-transform duration-500 shrink-0">
            <span className="text-xl font-serif">❖</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif font-black tracking-wider text-2xl text-[#781A2C] leading-none whitespace-nowrap">
                KalaYatra
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#C59B4B]/20 text-[#781A2C] border border-[#C59B4B]/30 hidden md:inline-block whitespace-nowrap">
                Digital Museum
              </span>
            </div>
            <span className="text-[11px] text-[#6E6157] tracking-tight font-serif italic mt-0.5 whitespace-nowrap">
              Indian Art History
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold tracking-wide whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#781A2C] text-[#FAF6ED] shadow-sm'
                      : 'text-[#4A3E38] hover:text-[#781A2C] hover:bg-[#F3EBDD]'
                  }`
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-1 px-1.5 py-0.2 rounded-full text-xs font-bold bg-[#C59B4B] text-[#1C1714] leading-tight shrink-0">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Action Icons: Search + Mobile Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-[#4A3E38] hover:text-[#781A2C] bg-[#F3EBDD]/60 hover:bg-[#F3EBDD] border border-[#E2D6C0] transition-colors whitespace-nowrap shrink-0"
            title="Search Artifacts & History (Ctrl + K or /)"
            aria-label="Open Search"
          >
            <Search className="w-4 h-4 text-[#C59B4B] shrink-0" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline-block text-[11px] bg-[#E2D6C0] text-[#6E6157] px-1.5 py-0.5 rounded font-mono font-semibold">
              /
            </kbd>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#1C1714] hover:bg-[#F3EBDD] transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2D6C0] bg-[#FAF6ED] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-3 duration-200 shadow-xl">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#781A2C] text-[#FAF6ED]'
                      : 'text-[#3E3129] hover:bg-[#F3EBDD]'
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-[#C59B4B]" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#C59B4B] text-[#1C1714]">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </div>
      )}
    </header>
  );
};
