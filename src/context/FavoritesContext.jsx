import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('kalayatra_favorites');
      return saved ? JSON.parse(saved) : ['dancing-girl', 'chola-nataraja-bronze', 'gupta-sarnath-buddha'];
    } catch (e) {
      console.error('Failed to load favorites from localStorage', e);
      return ['dancing-girl', 'chola-nataraja-bronze', 'gupta-sarnath-buddha'];
    }
  });

  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('kalayatra_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favorites]);

  const toggleFavorite = (artifactId, artifactName = '') => {
    setFavorites(prev => {
      const exists = prev.includes(artifactId);
      let updated;
      if (exists) {
        updated = prev.filter(id => id !== artifactId);
        showToast(`Removed "${artifactName || 'Artifact'}" from favorites.`);
      } else {
        updated = [...prev, artifactId];
        showToast(`Added "${artifactName || 'Artifact'}" to your curated gallery!`);
      }
      return updated;
    });
  };

  const isFavorite = (artifactId) => favorites.includes(artifactId);

  const clearAllFavorites = () => {
    setFavorites([]);
    showToast('Cleared all saved artifacts from your collection.');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, clearAllFavorites, toastMessage }}>
      {children}
      {toastMessage && (
        <div 
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-[#781A2C] text-[#FAF6ED] px-5 py-3 rounded-xl shadow-museum-lg border border-[#C59B4B] flex items-center gap-3 animate-bounce"
        >
          <span className="text-[#C59B4B] text-lg">❖</span>
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
