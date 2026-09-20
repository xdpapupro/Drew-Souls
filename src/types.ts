export interface Product {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  category: string;
  description: string;
  details: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  image: string;
  secondaryImage?: string;
  tag?: string;
}

export interface CartItem {
  id: string; // unique cart entry (product.id + size + color)
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  alt: string;
}
