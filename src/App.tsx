import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Gallery } from './components/Gallery';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { Toast } from './components/Toast';
import { FEATURED_PRODUCTS } from './data/products';
import { Product, CartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('atelier_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('atelier_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  // Quick Add from product card (default size and color)
  const handleQuickAdd = (product: Product) => {
    const defaultSize = product.sizes[0] || 'M';
    const defaultColor = product.colors[0]?.name || 'Estándar';
    handleAddToCart(product, defaultSize, defaultColor, 1);
  };

  // Add to cart with specific size, color and quantity
  const handleAddToCart = (
    product: Product,
    selectedSize: string,
    selectedColor: string,
    quantity: number = 1
  ) => {
    const itemId = `${product.id}-${selectedSize}-${selectedColor}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prev,
          {
            id: itemId,
            product,
            quantity,
            selectedSize,
            selectedColor,
          },
        ];
      }
    });

    showToast(`Añadido: ${product.name} (${selectedSize})`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FDE01A] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#1A1A1A] selection:text-[#FDE01A]">
      {/* 1. MENÚ DE NAVEGACIÓN (Fondo plano amarillo, sin línea divisoria) */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
      />

      <main className="flex-grow">
        {/* 2. PRIMERA SECCIÓN: GALERÍA ANIMADA CON IMAGEN GRANDE (Sin título de sección) */}
        <Gallery />

        {/* 3. SEGUNDA SECCIÓN: PRODUCTOS DESTACADOS (Sin título de sección, 4 productos en una sola fila en ordenador) */}
        <FeaturedProducts
          products={FEATURED_PRODUCTS}
          onAddToCart={handleQuickAdd}
          onViewProduct={(product) => setSelectedProduct(product)}
        />
      </main>

      {/* 4. PIE DE PÁGINA */}
      <Footer />

      {/* Slide-over Carrito de compras */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Modal de detalle de producto ("Ver producto") */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Notificación flotante / Toast */}
      <Toast
        message={toastMessage}
        onOpenCart={() => setCartOpen(true)}
      />
    </div>
  );
}
