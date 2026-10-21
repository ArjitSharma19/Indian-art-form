import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, Image as ImageIcon, Sparkles, MapPin, HelpCircle, 
  ArrowRight, ShieldCheck, BookOpen, Compass, ChevronRight
} from 'lucide-react';
import { periods } from '../data/periods';
import { artifacts } from '../data/artifacts';
import { regionalTraditions } from '../data/regions';
import { ArtifactCard } from '../components/ArtifactCard';
import { createHeritagePlaceholder } from '../utils/imageFallbacks';

export const Home = ({ onSelectArtifact }) => {
  const featuredArtifacts = artifacts.filter(a => a.isFeatured).slice(0, 6);
  const [activeHeroId, setActiveHeroId] = React.useState('chola-nataraja-bronze');

  const heroShowcaseList = [
    { 
      id: 'chola-nataraja-bronze', 
      title: 'Shiva as Nataraja', 
      era: 'Imperial Chola Bronze • 11th C. CE',
      image: '/artifacts/nataraja.jpg'
    },
    { 
      id: 'lion-capital-sarnath', 
      title: 'Ashokan Lion Capital', 
      era: 'Mauryan Empire • c. 250 BCE',
      image: '/artifacts/lion-capital.jpg'
    },
    { 
      id: 'dancing-girl', 
      title: 'Mohenjo-daro Dancing Girl', 
      era: 'Indus Valley • c. 2500 BCE',
      image: '/artifacts/dancing-girl.jpg'
    }
  ];

  const currentHeroArtifact = artifacts.find(a => a.id === activeHeroId) || artifacts[0];

  return (
    <div className="space-y-20 pb-20 overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-parchment-texture border-b border-[#E2D6C0]">
        {/* Subtle heritage ambient glows */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#781A2C]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#C59B4B]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6ED] border border-[#C59B4B] shadow-sm text-xs sm:text-sm font-semibold text-[#781A2C] tracking-wide">
              <Sparkles className="w-4 h-4 text-[#C59B4B]" />
              <span>5,000 Years of Subcontinental Artistic Heritage</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-[#1C1714] leading-[1.08] tracking-tight">
              Discover the <span className="text-[#781A2C] italic">Stories</span> Behind India's Timeless Art.
            </h1>

            <p className="text-base sm:text-lg text-[#4A3E38] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <strong className="text-[#781A2C] font-semibold">KalaYatra</strong>—an immersive digital museum experience. Journey from the lost-wax bronzes of the Indus Valley through the soaring stone monoliths of Ellora to the vibrant modern canvasses of the Bengal Renaissance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/timeline"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm bg-[#781A2C] hover:bg-[#5C1221] text-[#FAF6ED] shadow-museum hover:shadow-museum-lg transition-all transform hover:-translate-y-0.5"
              >
                <Clock className="w-4 h-4 text-[#E2C78A]" />
                <span>Explore the Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/gallery"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm bg-[#FAF6ED] hover:bg-[#F3EBDD] text-[#1C1714] border border-[#C59B4B] shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <ImageIcon className="w-4 h-4 text-[#C59B4B]" />
                <span>Discover Artifacts</span>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E2D6C0]/80 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#781A2C] block">5,000+</span>
                <span className="text-xs sm:text-sm text-[#6E6157] font-semibold uppercase tracking-wider">Years of History</span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#C75313] block">10</span>
                <span className="text-xs sm:text-sm text-[#6E6157] font-semibold uppercase tracking-wider">Historical Eras</span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#C59B4B] block">20+</span>
                <span className="text-xs sm:text-sm text-[#6E6157] font-semibold uppercase tracking-wider">Museum Artifacts</span>
              </div>
            </div>
          </div>

          {/* Right Hero Composition - Museum Masterpiece Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-gradient-to-b from-[#FAF6ED] via-[#F3EBDD] to-[#FAF6ED] p-3.5 sm:p-4 rounded-3xl border-2 border-[#C59B4B] shadow-2xl relative">
              {/* Main Prominent Masterpiece Card */}
              <div 
                onClick={() => onSelectArtifact(currentHeroArtifact)}
                className="group relative rounded-2xl overflow-hidden shadow-lg border border-[#C59B4B]/40 bg-[#1A1310] cursor-pointer transition-all duration-300 hover:border-[#E2C78A]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#201714]">
                  <img
                    key={currentHeroArtifact.id}
                    src={currentHeroArtifact.imageUrl}
                    alt={currentHeroArtifact.name}
                    className="w-full h-full object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-700 animate-in fade-in zoom-in-95 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-[#FAF6ED]">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#E2C78A] block font-serif">
                    {currentHeroArtifact.approxDate} • {currentHeroArtifact.periodName.split('(')[0]}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold mt-1 text-[#FAF6ED] group-hover:text-[#E2C78A] transition-colors">
                    {currentHeroArtifact.name}
                  </h3>
                  <p className="text-sm text-[#FAF6ED]/90 mt-1 line-clamp-2">
                    {currentHeroArtifact.description}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm text-[#E2C78A] font-semibold">
                    <Compass className="w-4 h-4" />
                    <span>Tap to view 360° zoom & audio guide →</span>
                  </div>
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-3.5 right-3.5 bg-[#781A2C]/90 backdrop-blur-md text-[#FAF6ED] text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-[#C59B4B]/40">
                  Featured Masterpiece
                </div>
              </div>

              {/* Interactive Museum Selector Pill Row */}
              <div className="mt-3.5 pt-3 border-t border-[#E2D6C0] flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#781A2C] font-serif shrink-0">
                  Featured Icons:
                </span>
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                  {heroShowcaseList.map((item) => {
                    const isSelected = item.id === activeHeroId;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveHeroId(item.id)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                          isSelected
                            ? 'bg-[#781A2C] text-[#FAF6ED] shadow-sm'
                            : 'bg-[#FAF6ED] text-[#4A3E38] hover:bg-[#EFE8D8] border border-[#E2D6C0]'
                        }`}
                      >
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-4 h-4 rounded-full object-cover shrink-0" 
                        />
                        <span className="truncate max-w-[90px]">{item.title.split(' ')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction to India's Artistic Heritage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF6ED] rounded-3xl p-8 sm:p-14 border border-[#E2D6C0] shadow-museum text-center max-w-4xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-full bg-[#781A2C] text-[#E2C78A] mx-auto flex items-center justify-center font-serif text-3xl shadow-sm">
            ❖
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#1C1714]">
            A Civilization Carved in Stone, Bronze, and Color
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C59B4B] via-[#781A2C] to-[#C59B4B] mx-auto rounded-full" />

          <p className="text-base sm:text-lg text-[#4A3E38] leading-relaxed">
            From the urban bronze sculptors of Mohenjo-daro in 2500 BCE to the spiritual serenity of Gupta Sarnath and the vibrant miniature workshops of Rajasthan and the Mughals, Indian art is an uninterrupted five-millennium dialogue between metaphysics, nature, and sublime craftsmanship. KalaYatra unrolls this sacred scroll through scholarly curation and intuitive digital engagement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
            <div className="p-6 rounded-2xl bg-[#F3EBDD]/60 border border-[#E2D6C0] space-y-2.5">
              <Compass className="w-7 h-7 text-[#781A2C]" />
              <h4 className="text-base font-serif font-bold text-[#1C1714]">Chronological Integrity</h4>
              <p className="text-sm text-[#6E6157] leading-relaxed">
                Explore 10 distinct historical epochs spanning BCE and CE with historically authenticated dates and developments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F3EBDD]/60 border border-[#E2D6C0] space-y-2.5">
              <ShieldCheck className="w-7 h-7 text-[#C75313]" />
              <h4 className="text-base font-serif font-bold text-[#1C1714]">Museum Provenance</h4>
              <p className="text-sm text-[#6E6157] leading-relaxed">
                Real physical locations, discovery sites, dimensions, materials, and public domain museum citations for every artifact.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F3EBDD]/60 border border-[#E2D6C0] space-y-2.5">
              <BookOpen className="w-7 h-7 text-[#C59B4B]" />
              <h4 className="text-base font-serif font-bold text-[#1C1714]">Interactive Learning</h4>
              <p className="text-sm text-[#6E6157] leading-relaxed">
                High-resolution zoom viewer, audio guide narration, regional art explorer, and educational art history quiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Chronological Timeline Showcase Banner (Replaces empty text cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#781A2C] text-[#FAF6ED] rounded-3xl p-8 sm:p-12 shadow-museum-lg border-2 border-[#C59B4B] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6ED]/20 text-[#E2C78A] text-xs sm:text-sm font-semibold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>5,000 Years of Subcontinental Artistic Evolution</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#FAF6ED]">
              Journey Through 10 Historical Epochs
            </h2>
            <p className="text-base sm:text-lg text-[#FAF6ED]/90 leading-relaxed font-serif">
              Explore the complete chronological timeline from Indus Valley lost-wax bronzes (2600 BCE) to the Sarnath Lion Capital, Ajanta murals, and modern masterworks.
            </p>
          </div>
          <Link
            to="/timeline"
            className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#FAF6ED] hover:bg-[#F3EBDD] text-[#781A2C] font-serif font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 relative z-10"
          >
            <span>Launch Interactive Timeline</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="absolute right-6 bottom-[-20px] opacity-10 pointer-events-none text-9xl font-serif">
            ❖
          </div>
        </div>
      </section>

      {/* 4. Curated Masterpieces (Featured Artifacts) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#781A2C] font-serif block">
              Museum Highlights
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#1C1714] mt-1">
              Curated Artifacts of KalaYatra
            </h2>
            <p className="text-sm sm:text-base text-[#6E6157] mt-1">
              Masterpieces of sculpture, painting, architecture, and metallurgy
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#781A2C] hover:text-[#5C1221] group self-start sm:self-auto"
          >
            <span>Explore All 20+ Artifacts</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Artifact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredArtifacts.map((art) => (
            <ArtifactCard
              key={art.id}
              artifact={art}
              onSelect={onSelectArtifact}
            />
          ))}
        </div>
      </section>

      {/* 5. Regional Art Traditions Showcase Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#FAF6ED] via-[#F3EBDD] to-[#FAF6ED] rounded-3xl p-8 sm:p-12 border border-[#C59B4B]/40 shadow-museum-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#C75313]">
                <MapPin className="w-4 h-4" />
                <span>Geographical Heritage</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#1C1714]">
                Art Across India: Living Regional Traditions
              </h2>

              <p className="text-sm sm:text-base text-[#4A3E38] leading-relaxed">
                Beyond imperial courts, India's soul thrives in its folk and sacred vernacular art forms. Discover the natural mineral dyes of Bihar's <strong>Madhubani</strong>, the geometric white rice flour spirals of Maharashtra's <strong>Warli</strong>, the conch-shell burnished scrolls of Odisha's <strong>Pattachitra</strong>, and the 22k gold foil gesso of Tamil Nadu's <strong>Tanjore</strong>.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {regionalTraditions.slice(0, 6).map((trad) => (
                  <span
                    key={trad.id}
                    className="text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-[#FAF6ED] border border-[#E2D6C0] text-[#781A2C] font-semibold"
                  >
                    {trad.name.split('(')[0]}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/regions"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#781A2C] hover:bg-[#5C1221] text-[#FAF6ED] font-semibold text-sm shadow transition-all"
                >
                  <span>Explore Regional Traditions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#C59B4B] shadow-md aspect-square bg-[#241B18]">
                <img
                  src="/artifacts/madhubani.jpg"
                  alt="Madhubani Painting"
                  onError={(e) => {
                    e.target.src = createHeritagePlaceholder('Madhubani Folk Painting', 'Folk Art', 'Mithila Tradition');
                  }}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#C59B4B] shadow-md aspect-square mt-6 bg-[#241B18]">
                <img
                  src="/artifacts/bani-thani.jpg"
                  alt="Pattachitra & Miniature Traditions"
                  onError={(e) => {
                    e.target.src = createHeritagePlaceholder('Radha of Kishangarh', 'Painting', 'Miniature Traditions');
                  }}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Educational Quiz Teaser Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#781A2C] text-[#FAF6ED] rounded-3xl p-8 sm:p-12 shadow-museum-lg border-2 border-[#C59B4B] relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6ED]/20 text-[#E2C78A] text-xs sm:text-sm font-semibold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Interactive Knowledge Challenge</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#FAF6ED]">
              Test Your Indian Art History Knowledge
            </h2>

            <p className="text-base sm:text-lg text-[#FAF6ED]/90 leading-relaxed font-serif">
              Think you know your Harappan metallurgy from your Gandhara Buddha sculptures? Test your historical mastery with our 12-question interactive quiz. Receive instant explanations and earn your official KalaYatra Scholar Badge!
            </p>

            <div className="pt-2">
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#FAF6ED] hover:bg-[#F3EBDD] text-[#781A2C] font-semibold text-sm sm:text-base shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Take the Art History Quiz</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none text-9xl font-serif">
            ❖
          </div>
        </div>
      </section>
    </div>
  );
};
