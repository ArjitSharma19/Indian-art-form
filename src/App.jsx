import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { ArtifactModal } from './components/ArtifactModal';

// Pages
import { Home } from './pages/Home';
import { TimelinePage } from './pages/TimelinePage';
import { GalleryPage } from './pages/GalleryPage';
import { RegionsPage } from './pages/RegionsPage';
import { QuizPage } from './pages/QuizPage';
import { FavoritesPage } from './pages/FavoritesPage';

function AppContent() {
  const [selectedArtifact, setSelectedArtifact] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  // Keyboard shortcut listener: '/' or 'Ctrl+K' opens global search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') ||
          (e.key === 'k' && (e.metaKey || e.ctrlKey))) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectArtifact = (artifact) => {
    setSelectedArtifact(artifact);
  };

  const handleCloseModal = () => {
    setSelectedArtifact(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  };

  const handleSelectPeriodFromSearch = (periodId) => {
    navigate(`/timeline?period=${periodId}`);
  };

  const handleSelectRegionFromSearch = () => {
    navigate('/regions');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6ED] text-[#1C1714]">
      {/* Navigation Header */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onSelectArtifact={handleSelectArtifact}
              />
            }
          />
          <Route
            path="/timeline"
            element={<TimelinePage onSelectArtifact={handleSelectArtifact} />}
          />
          <Route
            path="/gallery"
            element={<GalleryPage onSelectArtifact={handleSelectArtifact} />}
          />
          <Route
            path="/regions"
            element={<RegionsPage />}
          />
          <Route
            path="/quiz"
            element={<QuizPage />}
          />
          <Route
            path="/favorites"
            element={<FavoritesPage onSelectArtifact={handleSelectArtifact} />}
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArtifact={handleSelectArtifact}
        onSelectPeriod={handleSelectPeriodFromSearch}
        onSelectRegion={handleSelectRegionFromSearch}
      />

      {/* Only mount ArtifactModal when an artifact is actively selected! */}
      {selectedArtifact && (
        <ArtifactModal
          artifact={selectedArtifact}
          onClose={handleCloseModal}
          onSelectRelated={(related) => setSelectedArtifact(related)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <Router>
        <AppContent />
      </Router>
    </FavoritesProvider>
  );
}
