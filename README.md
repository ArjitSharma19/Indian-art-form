# KalaYatra — A Digital Journey Through Indian Art History

> **College Capstone Project**  
> **Undergraduate Department of Computer Science & Archaeological Heritage**  
> *Developed by Team KalaYatra (5 Members)*

---

## 🏛️ Project Overview

**KalaYatra** ("The Journey of Art") is an educational, interactive digital museum platform dedicated to exploring five millennia of Indian artistic, architectural, and spiritual heritage.

From the prehistoric bronze lost-wax casting of the Indus Valley Civilization (c. 2600 BCE) to classical Gupta stone sculptures, imperial Chola bronzes, Mughal miniature kitabkhanas, and modern post-independence avant-garde masters, KalaYatra transforms historical storytelling into a museum-grade digital experience.

---

## 🎨 Visual Aesthetics & Design System

The digital museum follows a warm heritage editorial design inspired by Indian temple architecture, palm-leaf manuscripts, and world-class digital museum collections:
- **Parchment / Warm Ivory Canvas**: `#FAF6ED` and `#F3EBDD`
- **Imperial Deep Maroon**: `#781A2C`
- **Muted Saffron & Ochre**: `#C75313` and `#E0691E`
- **Antique Gold Accents**: `#C59B4B` and `#E2C78A`
- **Heritage Charcoal / Dark Brown**: `#1C1714` and `#3E3129`
- **Typography**: Google Fonts *Cinzel* (monumental inscriptions & headings), *Cormorant Garamond* (poetic classical serif), and *Plus Jakarta Sans* (clean readable body text)
- **Motifs**: ❖ Indian lotus and wheel icons, subtle grain parchment textures, and refined gold borders.

---

## 🚀 Key Features

### 1. ⏳ Interactive Historical Timeline
- Horizontal chronological track spanning 10 historical epochs:
  1. **Indus Valley Civilization** (c. 2600 – 1900 BCE)
  2. **Vedic & Early Historic Periods** (c. 1500 – 400 BCE)
  3. **Mauryan Empire** (c. 322 – 185 BCE)
  4. **Post-Mauryan & Kushan Periods** (c. 185 BCE – 300 CE)
  5. **Gupta Empire (Classical Golden Age)** (c. 320 – 550 CE)
  6. **Early Medieval India** (c. 600 – 1000 CE)
  7. **Medieval & Regional Kingdoms** (c. 1000 – 1526 CE)
  8. **Mughal Period** (1526 – 1857 CE)
  9. **Colonial & Modern Indian Art** (c. 1857 – 1947 CE)
  10. **Contemporary Indian Art** (1947 – Present)
- Real-time updates without page reloads, previous/next epoch controls, BCE/CE scale indicators, artistic innovations lists, and representative museum objects.

### 2. 🏺 Curated Artifact Gallery (21+ Masterpieces)
- Authentic historical pieces with genuine museum provenance:
  - *Dancing Girl of Mohenjo-daro* (National Museum, New Delhi)
  - *Pashupati Proto-Shiva Seal* (National Museum, New Delhi)
  - *The Great Bath of Mohenjo-daro* (UNESCO World Heritage Site)
  - *Lion Capital of Ashoka at Sarnath* (Sarnath Museum / National Emblem of India)
  - *Great Stupa at Sanchi* (UNESCO World Heritage Site)
  - *Standing Buddha of Gandhara* (Greco-Buddhist Schist)
  - *Seated Buddha Preaching the First Sermon* (Gupta Period, Sarnath)
  - *Bodhisattva Padmapani* (Ajanta Cave 1 Mural)
  - *Kailasa Temple at Ellora* (Rashtrakuta Monolithic Rock-Cut Marvel)
  - *Shiva as Nataraja* (Imperial Chola Lost-Wax Bronze)
  - *Brihadeeswarar Temple Vimana* (Thanjavur Granite Monolith)
  - *Akbar Taming the Mad Elephant Hawai* (Akbarnama, V&A Museum)
  - *Radha of Kishangarh / Bani Thani* ("Mona Lisa of India")
  - *Madhubani Kohbar & Tree of Life* (Mithila Folk Tradition)
  - *Hamsa Damayanti* (Raja Ravi Varma, 1899)
  - *Bharat Mata* (Abanindranath Tagore, 1905 Swadeshi Icon)
  - *Gopini with Two Figures* (Jamini Roy Folk Modernism)
  - *South Indian Villagers Going to Market* (Amrita Sher-Gil)
  - *Bindu: The Primordial Source* (S.H. Raza, Neo-Tantric Abstraction)
  - *Sun Temple Chariot Wheel* (Konark, Odisha)
  - *Didarganj Yakshi Chauri Bearer* (Mauryan Sandstone Polish)
- Live search bar, multi-category filtering (Period, Art Form, Region), and sorting.

### 3. 🔍 Detailed Artifact Modal & Virtual Viewer
- **High-Resolution Inspection Viewer**: Zoom In, Zoom Out, and Reset buttons.
- **Museum Audio Guide**: Built-in voice narration using the Web Speech API (`speechSynthesis`).
- **Curatorial Information**: Provenance, current museum location, materials, dimensions, cultural significance, distinctive artistic features, archaeological trivia, and related artifact recommendations.

### 4. 🗺️ Art Across India (Regional Traditions)
- Deep dive into 8 regional art styles:
  - **Madhubani** (Bihar)
  - **Warli** (Maharashtra)
  - **Pattachitra** (Odisha & West Bengal)
  - **Tanjore Painting** (Tamil Nadu)
  - **Kalamkari** (Andhra Pradesh & Telangana)
  - **Phad Scroll Painting** (Rajasthan)
  - **Pahari Miniature Painting** (Himachal & Jammu)
  - **Pichwai Temple Hangings** (Nathdwara, Rajasthan)
- Explores natural pigments (indigo, turmeric, rice paste, 22k gold foil), traditional techniques (Kachni, Bharni, gesso embossing), cultural lore, and interactive color swatches.

### 5. 🎓 Test Your Knowledge: Interactive Quiz
- 12 multiple-choice questions testing art history across eras.
- Instant feedback with rich educational explanations.
- Score tracking, progress indicator, celebratory confetti (`canvas-confetti`), and an **Official Digital Scholar Certificate / Badge** based on performance!

### 6. ❤️ Curated Gallery (Favorites)
- Bookmark favorite artifacts across the website.
- Persisted locally with `localStorage` so they remain saved across page reloads.

### 7. 🔎 Global Search
- Instant keyboard shortcut (`/` or `Ctrl+K`).
- Live searching across artifacts, historical periods, and regional traditions.

---

## 👥 The Curatorial Team (5 Members)

| Member | Role | Focus Area |
|---|---|---|
| **Aarav Sharma** | Lead Full-Stack Developer | Timeline Engine, State Management & Routing |
| **Ananya Iyer** | UI/UX & Museum Designer | Museum Aesthetics, Typography & Accessibility |
| **Rohan Deshmukh** | Historical Research Lead | Museum Provenance, Archaeological Citations |
| **Meera Patel** | Educational Content Strategist | Quiz Pedagogy, Regional Art Lore & Audio Guide |
| **Kabir Verma** | Interactive Media Specialist | Image Inspection Zoom, LocalStorage & Mobile Polish |

---

## 🛠️ Technology Stack

- **React 19**
- **Vite**
- **Tailwind CSS** (Custom museum color tokens & typography)
- **React Router** (`HashRouter` for zero-configuration static deployment)
- **Lucide React** (Heritage icons)
- **Canvas-Confetti** (Quiz celebration)
- **Web Speech Synthesis API** (Browser-native museum audio guide)
- **HTML5 LocalStorage** (Persistent favorites)

---

## 💻 Running Locally

```bash
# Clone the repository
git clone <repo-url>
cd indian-art-form

# Install dependencies
npm install

# Start development server
npm run dev
# The website will be live at http://127.0.0.1:5173/

# Build for production
npm run build
```

---

## 📜 Citations & Public Domain Attribution

All images are curated under Creative Commons and Public Domain licenses from reputable cultural heritage repositories:
- National Museum, New Delhi
- Archaeological Survey of India (ASI)
- The Metropolitan Museum of Art (The Met Open Access)
- The British Museum
- Victoria and Albert Museum (V&A)
- Los Angeles County Museum of Art (LACMA)
- UNESCO World Heritage Centre
- Wikimedia Commons Public Domain Archives
