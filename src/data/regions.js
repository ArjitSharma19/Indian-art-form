// Regional Folk and Traditional Art Forms Across India
import { createHeritagePlaceholder } from '../utils/imageFallbacks';

export const regionalTraditions = [
  {
    id: 'madhubani',
    name: 'Madhubani Painting (Mithila Art)',
    state: 'Bihar',
    region: 'Eastern India',
    heritageStatus: 'Geographical Indication (GI) Tagged',
    originCentury: 'Antiquity (Documented systematically since 1934)',
    shortDescription: 'Characterized by vibrant natural colors, double-line outlines, zero negative space, and celebratory depictions of Hindu deities and cosmic fertility.',
    materialsAndColors: [
      'Lampblack (soot) mixed with cow dung for resilient black outlines',
      'Turmeric (Haldi) for golden yellow, Indigo (Neel) for deep azure',
      'Bilva leaf extract for olive greens, crushed bougainvillea & palash flowers for vermilion and pinks',
      'Handmade paper treated with cow dung wash to resist insect pests'
    ],
    techniques: [
      'Kachni: Fine linear monochrome cross-hatching using sharpened bamboo twigs',
      'Bharni: Rich filling of solid, saturated mineral colors within bold black outlines',
      'Godna: Tattoo-inspired geometric concentric circles and tribal totems'
    ],
    culturalLore: 'Tradition holds that King Janaka commissioned artists across Mithila to paint the palace and town for the divine wedding of his daughter Sita to Lord Rama.',
    iconicMotifs: ['Sun and Moon (witnesses of truth)', 'Fish and turtles (fertility & auspiciousness)', 'Sacred Bamboo and Kadamba trees', 'Kohbar wedding mandala'],
    sampleImage: '/artifacts/madhubani.jpg',
    fallbackImage: createHeritagePlaceholder('Madhubani Folk Painting', 'Folk Art', 'Mithila Tradition, Bihar'),
    colorPalette: ['#C75313', '#E0A838', '#2D4F3B', '#1D2731', '#942338']
  },
  {
    id: 'warli',
    name: 'Warli Tribal Painting',
    state: 'Maharashtra',
    region: 'Western India (Western Ghats)',
    heritageStatus: 'Geographical Indication (GI) Tagged',
    originCentury: 'c. 10th century CE (Rooted in Neolithic cave painting traditions)',
    shortDescription: 'Rudimentary geometric forms—triangles, circles, and lines—painted with white rice paste on earthen ochre walls celebrating rural community life and Mother Nature.',
    materialsAndColors: [
      'Rice flour paste mixed with water and tree gum binder for the stark white pigment',
      'Wall surfaces prepared with red clay (Geru), cow dung, and dry earth',
      'Chewed bamboo slivers (bahiruka) utilized as delicate paintbrushes'
    ],
    techniques: [
      'Composition built strictly from basic geometric shapes: Circle (sun & moon), Triangle (mountains & pointed trees), Square (sacred sacred enclosure)',
      'Human bodies constructed from two inverted triangles meeting at the tip, balancing kinetic rhythm and community solidarity',
      'Tarpa Dance: Dynamic spiral circular formation radiating around the village musician'
    ],
    culturalLore: 'Warli art does not portray mythological gods; its central deity is Palaghat, the goddess of fertility and abundance, worshipped during harvest and marriage ceremonies.',
    iconicMotifs: ['Tarpa dance spiral', 'Palghat marriage chaukat', 'Hunting and harvest scenes', 'Flora and fauna of the Sahyadri mountains'],
    sampleImage: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80',
    fallbackImage: createHeritagePlaceholder('Warli Tribal Painting', 'Folk Art', 'Sahyadri Tribe, Maharashtra'),
    colorPalette: ['#783E2D', '#FAF6ED', '#C59B4B', '#3E3129']
  },
  {
    id: 'pattachitra',
    name: 'Pattachitra Scroll Painting',
    state: 'Odisha & West Bengal',
    region: 'Eastern India',
    heritageStatus: 'Geographical Indication (GI) Tagged (Raghurajpur Crafts Village)',
    originCentury: 'c. 12th century CE (Associated with the Jagannath Temple at Puri)',
    shortDescription: 'Intricate cloth scroll paintings renowned for razor-sharp calligraphic line work, decorative floral borders, and devotion to Lord Jagannath and Krishna epics.',
    materialsAndColors: [
      'Patta canvas prepared from cotton cloth bonded with tamarind seed paste and chalk powder, then burnished with sea shells',
      'White from powdered conch shells (Shankha), yellow from Harital stone',
      'Red from Hingula (cinnabar) and Geru, blue from Khandaneela (indigo)',
      'Sealed with natural lacquer glaze (Kaintha gum) for waterproof longevity'
    ],
    techniques: [
      'Chitra-rekha: Freehand fine outline execution with fine animal-hair brushes without prior pencil underdrawing',
      'Rang-lagana: Sequential layering of flat, vibrant mineral pigments',
      'Pata-marana: Shell burnishing that creates a glossy, porcelain-like surface'
    ],
    culturalLore: 'During the Anavasara fortnight when the deities of Puri Jagannath Temple fall ill after the grand bath and retreat from public view, Pattachitra paintings take their place upon the sacred altar.',
    iconicMotifs: ['Lord Jagannath, Balabhadra, and Subhadra triad', 'Kaliya Damana (Krishna overcoming serpent)', 'Dashavatara (ten avatars of Vishnu)', 'Tree of Life with floral borders'],
    sampleImage: '/artifacts/jamini-roy.jpg',
    fallbackImage: createHeritagePlaceholder('Pattachitra Scroll Painting', 'Folk Art', 'Puri Heritage, Odisha'),
    colorPalette: ['#942338', '#C59B4B', '#1E4034', '#C75313', '#FAF6ED']
  },
  {
    id: 'tanjore',
    name: 'Tanjore Gold Foil Painting',
    state: 'Tamil Nadu',
    region: 'Southern India',
    heritageStatus: 'Geographical Indication (GI) Tagged',
    originCentury: 'Late 16th to early 17th century CE (Nayakas of Tanjore & Maratha Court)',
    shortDescription: 'Opulent devotional icons characterized by relief gesso work, glittering 22-carat gold foil, and embedded semi-precious Jaipur stones and glass beads.',
    materialsAndColors: [
      'Teakwood planks mounted with unbleached cotton fabric',
      'Gesso paste prepared from limestone powder (Makkuk) and pure gum arabic for three-dimensional relief',
      'Pure 22-karat genuine gold foil sheets pressed over the gesso work',
      'Cut glass stones, Jaipur gems, and vivid natural mineral pigments'
    ],
    techniques: [
      'Embossing (Gesso work) to create raised jewelry, crowns, and ornate temple arches',
      'Gold leaf gilding that catches lamp-light in dark sanctums',
      'Shading around the eyes and cheeks giving plump, cherubic divine countenances'
    ],
    culturalLore: 'Created originally to serve as glowing mobile altars inside dimly lit temple pavilions and aristocratic puja rooms, where the gold foil reflected flickering ghee oil lamps.',
    iconicMotifs: ['Balakrishna (crawling baby Krishna with butter pot)', 'Goddess Lakshmi surrounded by elephants', 'Rama Pattabhishekam (coronation of Lord Rama)', 'Ornate Dravidian pillared arches (Prabhavali)'],
    sampleImage: '/artifacts/nataraja.jpg',
    fallbackImage: createHeritagePlaceholder('Tanjore Gold Painting', 'Painting', 'Nayaka Court, Tamil Nadu'),
    colorPalette: ['#C59B4B', '#781A2C', '#134E39', '#F3EBDD', '#1C1714']
  },
  {
    id: 'kalamkari',
    name: 'Kalamkari Hand-Painted Textile',
    state: 'Andhra Pradesh & Telangana',
    region: 'Southern India (Srikalahasti & Machilipatnam)',
    heritageStatus: 'Geographical Indication (GI) Tagged',
    originCentury: 'c. 13th century CE (Pioneered under Vijayanagara & Golconda Sultanates)',
    shortDescription: 'The ancient art of drawing on handwoven cotton fabric using a bamboo reed pen (Kalam) dipped in fermented iron-jaggery ink and vegetable dyes.',
    materialsAndColors: [
      'Hand-carved sharp bamboo or date-palm reed pen with felt reservoir',
      'Myrobalan (Karakkai) nut fruit paste and buffalo milk used to treat the cloth',
      'Black ink fermented from rusted iron, palm jaggery, and water for 21 days',
      'Red extracted from madder root (Alizarin), blue from natural indigo vats'
    ],
    techniques: [
      'Srikalahasti style: 100% freehand drawn with the bamboo kalam, illustrating Ramayana and Mahabharata narrative scrolls',
      'Machilipatnam style: Hand-carved wooden block printing combined with kalam detailing for floral paisley patterns',
      'Multi-stage river washing in flowing currents (Swarnamukhi river) to fix the natural mordants'
    ],
    culturalLore: 'Wandering bards (chitrakars) and musicians carried huge Kalamkari scrolls from village to village, unrolling panels one by one to recount epic tales to rural audiences.',
    iconicMotifs: ['Tree of Life with birds and deer', 'Scenes from the Mahabharata & Ramayana', 'Sacred cow Kamadhenu', 'Flowing Paisley (Kalka) motifs'],
    sampleImage: 'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?auto=format&fit=crop&w=1000&q=80',
    fallbackImage: createHeritagePlaceholder('Kalamkari Textile Art', 'Folk Art', 'Srikalahasti Temple Art'),
    colorPalette: ['#800020', '#C59B4B', '#2A4D3E', '#FAF6ED', '#2B2B2B']
  },
  {
    id: 'phad',
    name: 'Phad Scroll Painting',
    state: 'Rajasthan',
    region: 'Western India (Bhilwara & Shahpura)',
    heritageStatus: 'Geographical Indication (GI) Tagged (Joshi Family Tradition)',
    originCentury: 'c. 14th century CE',
    shortDescription: 'Massive, vibrant canvas scrolls (up to 30 feet long) that serve as mobile visual temples for the folk hero-deities Pabuji and Devnarayan.',
    materialsAndColors: [
      'Hand-spun coarse cotton khadi cloth starched with rice and wheat flour',
      'Mineral colors ground from local stones mixed with gum and water: yellow, orange, green, brown, blue, red',
      'Pencil underdrawing done with light yellow cow-dung juice that disappears under paint layers'
    ],
    techniques: [
      'Color hierarchy: Orange for limbs, Yellow for ornaments, Green for trees, Brown for buildings, Red for royal costumes, Black for final outlines',
      'Opening of the Eyes: The final ritual stroke painting the pupil (Aankh Kholna), awakening the deity into living presence'
    ],
    culturalLore: 'At night, itinerant Bhopa and Bhopi priest-singers erect the Phad scroll in desert villages, playing the two-stringed Ravanahatha violin and illuminating panels with oil lamps as they sing epic ballads.',
    iconicMotifs: ['Pabuji Rathore on his black mare Kesar Kalmi', 'Courtly processions and camel caravans', 'Combat scenes between warrior heroes and demons', 'Vibrant battle formations and desert pavilions'],
    sampleImage: '/artifacts/bani-thani.jpg',
    fallbackImage: createHeritagePlaceholder('Phad Scroll Painting', 'Painting', 'Bhilwara Tradition, Rajasthan'),
    colorPalette: ['#C75313', '#942338', '#E2C78A', '#2D4F3B', '#1C1714']
  },
  {
    id: 'pahari-miniature',
    name: 'Pahari Miniature Painting',
    state: 'Himachal Pradesh & Jammu',
    region: 'Northern Himalayan Foothills (Kangra, Basohli, Guler)',
    heritageStatus: 'National Cultural Heritage Tradition',
    originCentury: '17th to 19th century CE',
    shortDescription: 'Lyrical paintings celebrating Radha-Krishna divine love amidst lush green Himalayan rolling meadows, flowering creepers, and flowing mountain streams.',
    materialsAndColors: [
      'Specially prepared Sialkoti handmade wasli paper',
      'Pigments extracted from Himalayan minerals: lapis lazuli, cinnabar, malachite, and orpiment',
      'Fine brushes fashioned from single hairs from the throat of squirrels or kittens',
      'Beetle wings embedded into Basohli miniatures to simulate glittering emerald jewelry'
    ],
    techniques: [
      'Kangra style: Soft lyrical lines, pastel greens, delicate facial profiles, and nocturnal moonlight settings',
      'Basohli style: Fierce, expressive palette, large fiery eyes, and monochrome deep yellow backgrounds'
    ],
    culturalLore: 'Patronized by Raja Sansar Chand of Kangra, who was so enraptured with the Gita Govinda poetry that he commissioned hundreds of miniatures capturing the seasons and emotional states (Nayika Bhedas).',
    iconicMotifs: ['Radha and Krishna sheltering under an umbrella in a monsoon squall', 'Gita Govinda pastoral landscapes', 'Courtly musical gatherings (Ragamalas)', 'Flowering weeping willows and lotus ponds'],
    sampleImage: '/artifacts/hamsa-damayanti.jpg',
    fallbackImage: createHeritagePlaceholder('Pahari Miniature', 'Painting', 'Kangra School, Himalayas'),
    colorPalette: ['#3A5335', '#E2C78A', '#781A2C', '#C75313', '#4A6984']
  },
  {
    id: 'pichwai',
    name: 'Pichwai Temple Hangings',
    state: 'Rajasthan',
    region: 'Western India (Nathdwara)',
    heritageStatus: 'Geographical Indication (GI) Tagged',
    originCentury: 'c. 17th century CE (Shrinathji Temple)',
    shortDescription: 'Devotional cloth tapestries hung behind the stone idol of Shrinathji, depicting seasonal festivals, sacred lotus ponds, and joyful dancing cows.',
    materialsAndColors: [
      'Pure starched cotton cloth',
      'Real gold and silver dust (Zari and Vark) mixed with natural binders',
      'Mineral pigments including zinc white, cinnabar, and indigo'
    ],
    techniques: [
      'Charba: Stenciling technique used to ensure exact iconography of Shrinathji\'s stance',
      'Detailed floral borders framing celestial lotus ponds and playful cows',
      'Special editions for each festival: Sharad Purnima (moonlit silver), Annakoot (harvest abundance)'
    ],
    culturalLore: 'The word "Pichwai" literally translates to "at the back" (pichh meaning back, and wai meaning hanging). Created by devotees in the temple town of Nathdwara to bring the child-god Shrinathji joy.',
    iconicMotifs: ['Shrinathji with raised left hand lifting Mount Govardhan', 'Sacred cows with hand-print marks and peacock plumes', 'Dense groves of banana trees and Kadamba flowers', 'Silver full moon reflected in the Yamuna river'],
    sampleImage: '/artifacts/brihadeeswarar.jpg',
    fallbackImage: createHeritagePlaceholder('Pichwai Temple Hanging', 'Painting', 'Nathdwara, Rajasthan'),
    colorPalette: ['#1C1714', '#C59B4B', '#2D4F3B', '#FAF6ED', '#C75313']
  }
];
