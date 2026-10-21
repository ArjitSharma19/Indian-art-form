import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Clock, Sparkles, Compass } from 'lucide-react';
import { periods } from '../data/periods';
import { TimelineInteractive } from '../components/TimelineInteractive';

export const TimelinePage = ({ onSelectArtifact }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const periodParam = searchParams.get('period');

  const [selectedPeriodId, setSelectedPeriodId] = useState(
    periodParam && periods.some(p => p.id === periodParam)
      ? periodParam
      : periods[0].id
  );

  useEffect(() => {
    if (periodParam && periods.some(p => p.id === periodParam)) {
      setSelectedPeriodId(periodParam);
    }
  }, [periodParam]);

  const handlePeriodChange = (id) => {
    setSelectedPeriodId(id);
    setSearchParams({ period: id }, { replace: true });
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF6ED] border border-[#C59B4B] text-xs font-semibold text-[#781A2C]">
          <Clock className="w-3.5 h-3.5 text-[#C59B4B]" />
          <span>Interactive Chronological Journey</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-black text-[#1C1714]">
          The Great Timeline of Indian Art
        </h1>

        <p className="text-xs sm:text-sm text-[#4A3E38] leading-relaxed">
          Navigate 5,000 years of unbroken creative evolution. Select any epoch along the chronological axis to unveil artistic innovations, historical contexts, and surviving museum masterworks.
        </p>
      </div>

      {/* Main Interactive Timeline Component */}
      <TimelineInteractive
        selectedPeriodId={selectedPeriodId}
        onSelectPeriod={handlePeriodChange}
        onSelectArtifact={onSelectArtifact}
      />
    </div>
  );
};
