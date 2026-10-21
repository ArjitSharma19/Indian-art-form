// High-quality SVG artwork fallbacks for Indian Art forms
// Guarantees that even if external CDNs or network connections drop, every artifact displays a gorgeous, authentic visual representation!

export const createHeritagePlaceholder = (title, category, era = '') => {
  const cleanTitle = (title || 'Indian Art Masterpiece').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const cleanCategory = (category || 'Classical Heritage').toUpperCase();
  const cleanEra = (era || 'KalaYatra Digital Archives').replace(/&/g, '&amp;');

  // Motifs based on category
  let motifIcon = '❖';
  let accentColor = '#781A2C';
  let bgGradient1 = '#261F1A';
  let bgGradient2 = '#15110E';

  if (category?.toLowerCase().includes('sculpture') || category?.toLowerCase().includes('bronze')) {
    motifIcon = '⚜';
    accentColor = '#C59B4B';
    bgGradient1 = '#2D2018';
    bgGradient2 = '#1A120E';
  } else if (category?.toLowerCase().includes('painting') || category?.toLowerCase().includes('folk')) {
    motifIcon = '❀';
    accentColor = '#C75313';
    bgGradient1 = '#2A1810';
    bgGradient2 = '#180E09';
  } else if (category?.toLowerCase().includes('architecture')) {
    motifIcon = '🏛';
    accentColor = '#942338';
    bgGradient1 = '#241B18';
    bgGradient2 = '#120E0D';
  }

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGradient1}"/>
      <stop offset="100%" stop-color="${bgGradient2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="40%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="motifPattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="1" fill="#C59B4B" opacity="0.2"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="800" height="600" fill="url(#bg)"/>
  <rect width="800" height="600" fill="url(#motifPattern)"/>
  <circle cx="400" cy="270" r="220" fill="url(#glow)"/>

  <!-- Ornate Decorative Border -->
  <rect x="25" y="25" width="750" height="550" rx="16" fill="none" stroke="#C59B4B" stroke-width="2" stroke-opacity="0.4"/>
  <rect x="35" y="35" width="730" height="530" rx="12" fill="none" stroke="#C59B4B" stroke-width="1" stroke-dasharray="6,4" stroke-opacity="0.3"/>

  <!-- Corner Lotus Flourishes -->
  <path d="M 35 60 A 25 25 0 0 1 60 35 L 60 50 A 10 10 0 0 0 50 60 Z" fill="#C59B4B" opacity="0.6"/>
  <path d="M 765 60 A 25 25 0 0 0 740 35 L 740 50 A 10 10 0 0 1 750 60 Z" fill="#C59B4B" opacity="0.6"/>
  <path d="M 35 540 A 25 25 0 0 0 60 565 L 60 550 A 10 10 0 0 1 50 540 Z" fill="#C59B4B" opacity="0.6"/>
  <path d="M 765 540 A 25 25 0 0 1 740 565 L 740 550 A 10 10 0 0 0 750 540 Z" fill="#C59B4B" opacity="0.6"/>

  <!-- Center Sacred Mandala / Sun Disk -->
  <circle cx="400" cy="240" r="90" fill="none" stroke="#C59B4B" stroke-width="2" stroke-opacity="0.6"/>
  <circle cx="400" cy="240" r="75" fill="none" stroke="#C59B4B" stroke-width="1" stroke-dasharray="5,3" stroke-opacity="0.5"/>
  <circle cx="400" cy="240" r="60" fill="${accentColor}" fill-opacity="0.25" stroke="#E2C78A" stroke-width="1.5"/>

  <!-- Center Symbol -->
  <text x="400" y="260" font-size="52" fill="#E2C78A" text-anchor="middle" font-family="Georgia, serif">${motifIcon}</text>

  <!-- Typography Labels -->
  <text x="400" y="390" font-size="14" fill="#C59B4B" letter-spacing="4" font-weight="bold" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif">${cleanCategory}</text>
  <text x="400" y="430" font-size="26" fill="#FAF6ED" font-weight="bold" font-family="'Cinzel', Georgia, serif" text-anchor="middle">${cleanTitle}</text>
  <text x="400" y="465" font-size="14" fill="#DFD5C0" opacity="0.8" font-family="Georgia, serif" font-style="italic" text-anchor="middle">${cleanEra}</text>

  <!-- Bottom Accent Tag -->
  <rect x="300" y="500" width="200" height="28" rx="14" fill="#FAF6ED" fill-opacity="0.1" stroke="#C59B4B" stroke-width="1" stroke-opacity="0.4"/>
  <text x="400" y="519" font-size="11" fill="#E2C78A" letter-spacing="1.5" font-weight="600" font-family="sans-serif" text-anchor="middle">KALAYATRA DIGITAL ARCHIVE</text>
</svg>
`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};
