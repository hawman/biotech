export type Product = {
  id: string;
  name: string;
  image: string; // path from public/
  shortDesc: string;
  longDesc: string;
  category: string;
  specs?: Record<string, string>;
};

  // Order categories as specified
  export const categoryOrder = [
    'General PCR',
    'Hi-Fidelity & Long PCR',
    'RT/RT-PCR',
    'cDNA Synthesis',
  ];

export const products: Product[] = [
  // General PCR Category
  {
    id: 'pcr-kit-01',
    name: 'Standard PCR Master Mix',
    category: 'General PCR',
    image: '/images/product1.jpg',
    shortDesc: 'Ready-to-use master mix for routine PCR applications.',
    longDesc: 'A complete 2X master mix containing Taq DNA polymerase, dNTPs, MgCl2, and optimized reaction buffer. Ideal for everyday PCR applications with amplicons up to 3 kb.',
    specs: {
      Format: '2x Master Mix, 1mL',
      'Reaction volume': '25-50 µL',
      'Extension rate': '1 kb/min',
      'Shelf life': '12 months (4°C)',
    },
  },
  {
    id: 'pcr-kit-02',
    name: 'Hot Start PCR Mix',
    category: 'General PCR',
    image: '/images/product2.jpg',
    shortDesc: 'Enhanced specificity with hot-start technology.',
    longDesc: 'Hot-start PCR master mix designed to prevent non-specific amplification. Perfect for complex templates and multiplexing.',
    specs: {
      Format: '2x Master Mix, 1mL',
      'Activation time': '2 min at 95°C',
      'Fidelity': '1x Taq',
      Storage: '-20°C',
    },
  },

  // Hi-Fidelity & Long PCR Category
  {
    id: 'hifi-pcr-01',
    name: 'Ultra-Fidelity PCR System',
    category: 'Hi-Fidelity & Long PCR',
    image: '/images/product3.jpg',
    shortDesc: 'High-fidelity amplification for demanding applications.',
    longDesc: 'Advanced PCR system with proprietary high-fidelity DNA polymerase blend. Features 100x higher fidelity than standard Taq and capable of amplifying up to 15 kb targets.',
    specs: {
      'Error rate': '4.4 x 10^-7',
      'Maximum amplicon': '15 kb',
      'Proofreading': '3´→ 5´ exonuclease activity',
    },
  },
  {
    id: 'long-pcr-01',
    name: 'Long-Range PCR Kit',
    category: 'Hi-Fidelity & Long PCR',
    image: '/images/product1.jpg',
    shortDesc: 'Specialized kit for long amplicon PCR.',
    longDesc: 'Optimized for reliable amplification of long DNA templates up to 30 kb. Includes enhancers and specialized buffer system for challenging templates.',
    specs: {
      'Maximum length': '30 kb',
      'Extension time': '1 min/kb',
      'Success rate': '>90% for targets up to 15 kb',
    },
  },

  // RT/RT-PCR Category
  {
    id: 'rt-pcr-01',
    name: 'One-Step RT-PCR Kit',
    category: 'RT/RT-PCR',
    image: '/images/product2.jpg',
    shortDesc: 'Convenient single-tube RT-PCR solution.',
    longDesc: 'Complete system for first-strand cDNA synthesis and PCR amplification in a single tube. Optimized buffer system ensures high yield and sensitivity.',
    specs: {
      Format: 'All-in-one mix, 1mL',
      'RT step': '45°C for 10 min',
      'Sensitivity': '<10 copies',
    },
  },
  {
    id: 'rt-pcr-02',
    name: 'High-Sensitivity RT-PCR System',
    category: 'RT/RT-PCR',
    image: '/images/product3.jpg',
    shortDesc: 'Advanced system for low-copy RNA detection.',
    longDesc: 'Enhanced RT-PCR system featuring RNase inhibitor and optimized buffer components for superior sensitivity in RNA detection and quantification.',
    specs: {
      'RNA input range': '1 pg - 1 µg',
      'RT temperature': '42-50°C',
      'cDNA yield': '>90%',
    },
  },

  // cDNA Synthesis Category
  {
    id: 'cdna-01',
    name: 'First-Strand cDNA Synthesis Kit',
    category: 'cDNA Synthesis',
    image: '/images/product1.jpg',
    shortDesc: 'Efficient first-strand cDNA synthesis solution.',
    longDesc: 'Complete kit for reliable first-strand cDNA synthesis, featuring thermostable reverse transcriptase and optimized buffer system for high yield and full-length transcripts.',
    specs: {
      'Reaction time': '30 min',
      'RNA input': '10 pg - 5 µg',
      'Priming options': 'Oligo dT, random hexamers, or gene-specific',
    },
  },
  {
    id: 'cdna-02',
    name: 'RT Max cDNA Kit',
    category: 'cDNA Synthesis',
    image: '/images/product2.jpg',
    shortDesc: 'Maximum yield cDNA synthesis system.',
    longDesc: 'Advanced cDNA synthesis kit with engineered reverse transcriptase for superior processivity and yield. Ideal for challenging templates and full-length cDNA synthesis.',
    specs: {
      'Template length': 'Up to 12 kb',
      'Thermostability': 'Up to 65°C',
      'RNase H activity': 'Optional step included',
    },
  },
];
