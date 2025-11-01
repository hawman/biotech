export type Product = {
  id: string;
  name: string;
  image: string; // path from public/
  shortDesc: string;
  longDesc: string;
  specs?: Record<string, string>;
};

export const products: Product[] = [
  {
    id: 'pcr-kit-01',
    name: 'PCR Detection Kit',
    image: '/images/product1.jpg',
    shortDesc: 'Reliable PCR kit for qualitative detection.',
    longDesc:
      'A versatile PCR detection kit optimized for sensitivity and robustness. Includes all necessary reagents and a clear protocol to get reproducible results.',
    specs: {
      Format: 'Lyophilized reagents',
      'Reaction volume': '25 µL',
      'Shelf life': '12 months (4°C)',
    },
  },
  {
    id: 'qpcr-mix-01',
    name: 'qPCR Master Mix',
    image: '/images/product2.jpg',
    shortDesc: 'Master mix formulated for quantitative PCR.',
    longDesc:
      'High-efficiency qPCR master mix compatible with common real-time PCR machines. Low background and high dynamic range.',
    specs: {
      Format: '2x Master Mix',
      Storage: '-20°C',
    },
  },
  {
    id: 'extract-01',
    name: 'Nucleic Acid Extraction Kit',
    image: '/images/product3.jpg',
    shortDesc: 'Fast extraction for DNA/RNA from various samples.',
    longDesc:
      'Magnetic bead-based extraction kit offering high yield and purity for downstream PCR and sequencing applications.',
    specs: {
      'Prep time': '30 minutes',
      Throughput: '1-96 samples',
    },
  },
];
