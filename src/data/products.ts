import { Product, GalleryItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Siluetas Atemporales',
    subtitle: 'Edición Limitada 2026',
    category: 'Editorial',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    alt: 'Lookbook de moda minimalista con abrigo beige estructurado y tonos neutros'
  },
  {
    id: 'gal-2',
    title: 'Lino y Fibras Puras',
    subtitle: 'Texturas Naturales',
    category: 'Colección Verano',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop',
    alt: 'Modelo vistiendo conjunto fluido en tonos arena minimalistas'
  },
  {
    id: 'gal-3',
    title: 'Sastrería Relajada',
    subtitle: 'Líneas Precisas',
    category: 'Sastrería',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=900&auto=format&fit=crop',
    alt: 'Chaqueta oversize contemporánea de corte sartorial'
  },
  {
    id: 'gal-4',
    title: 'Monocromo Esencial',
    subtitle: 'Elegancia Cotidiana',
    category: 'Esenciales',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop',
    alt: 'Indumentaria minimalista de diseño contemporáneo y paleta neutra'
  }
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Abrigo Sastrería de Lana',
    price: 189,
    formattedPrice: '189,00 €',
    category: 'Abrigos',
    description: 'Confeccionado en mezcla de lana virgen con corte recto holgado y solapas limpias.',
    details: [
      '80% lana virgen, 20% poliamida reciclada',
      'Forro interior de viscosa transpirable',
      'Cierre frontal oculto con botones de cuerno',
      'Bolsillos laterales con ribete fino'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Camel Claro', hex: '#C6A987' },
      { name: 'Negro Carbón', hex: '#1C1C1C' },
      { name: 'Gris Cemento', hex: '#9E9E9C' }
    ],
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce667883?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
    tag: 'Esencial'
  },
  {
    id: 'prod-2',
    name: 'Camisa Oversize de Lino',
    price: 79,
    formattedPrice: '79,00 €',
    category: 'Camisas',
    description: '100% lino orgánico lavado a la piedra para un tacto suave y caída fluida natural.',
    details: [
      '100% lino orgánico certificado GOTS',
      'Cuello clásico con botones de nácar natural',
      'Puños ajustables con doble botón',
      'Bajo redondeado para vestir por fuera o dentro'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blanco Crudo', hex: '#F4F2EB' },
      { name: 'Arena Tostada', hex: '#D6C8B5' },
      { name: 'Verde Oliva', hex: '#636757' }
    ],
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop',
    tag: 'Orgánico'
  },
  {
    id: 'prod-3',
    name: 'Pantalón Plisado de Pernera Ancha',
    price: 95,
    formattedPrice: '95,00 €',
    category: 'Pantalones',
    description: 'Tiro alto con pinzas frontales profundas y silueta recta contemporánea de movimiento fluido.',
    details: [
      'Mezcla de tencel y algodón orgánico',
      'Cintura con trabillas interiores reforzadas',
      'Pinzas delanteras dobles simétricas',
      'Cierre con cremallera y corchete metálico'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Gris Grafito', hex: '#3E4042' },
      { name: 'Beige Cálido', hex: '#DDD2C3' },
      { name: 'Negro Profundo', hex: '#161616' }
    ],
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=800&auto=format&fit=crop',
    tag: 'Bestseller'
  },
  {
    id: 'prod-4',
    name: 'Jersey de Punto en Cuello Redondo',
    price: 110,
    formattedPrice: '110,00 €',
    category: 'Punto',
    description: 'Tejido fino en hilado de algodón peinado y seda con acabados acanalados en puños y bajo.',
    details: [
      '70% algodón peinado, 30% seda morera',
      'Galga fina ideal para vestir por capas',
      'Cuello redondo ceñido con punto elástico',
      'Tacto ultraligero y agradable en contacto directo'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Marfil Pálido', hex: '#EDEBE4' },
      { name: 'Marrón Café', hex: '#4A3B32' },
      { name: 'Azul Noche', hex: '#1F2937' }
    ],
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
    tag: 'Nuevo'
  }
];

export const COLLECTIONS = [
  {
    id: 'col-1',
    title: 'Cápsula Atemporal',
    description: 'Prendas neutras concebidas para combinarse infinitamente temporada tras temporada.',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop',
    itemCount: '14 piezas'
  },
  {
    id: 'col-2',
    title: 'Línea de Sastrería',
    description: 'Patronaje de precisión con caídas fluidas y hombros suaves para uso formal o cotidiano.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
    itemCount: '9 piezas'
  },
  {
    id: 'col-3',
    title: 'Fibras Naturales',
    description: 'Lino europeo, algodón orgánico y lana sin tintes agresivos respetando el origen.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop',
    itemCount: '12 piezas'
  }
];
