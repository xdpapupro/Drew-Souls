import React from 'react';
import { Product } from '../types';
import { Eye } from 'lucide-react';

interface FeaturedProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewProduct: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  onAddToCart,
  onViewProduct,
}) => {
  return (
    <section
      id="productos"
      aria-label="Productos"
      className="w-full py-8 sm:py-12"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* 4 Products Grid: Exactly 1 row on desktop (4 cols), 2 on tablet, 1 on mobile */}
        <div
          id="featured-products-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <article
              key={product.id}
              id={`product-card-${product.id}`}
              className="group relative aspect-[3/4] w-full rounded-none overflow-hidden bg-[#1A1A1A]/10 border border-[#1A1A1A]/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 cursor-pointer select-none"
              onClick={() => onViewProduct(product)}
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Floating button on hover */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <button
                  type="button"
                  id={`view-btn-${product.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewProduct(product);
                  }}
                  className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-6 py-3 bg-[#1A1A1A] hover:bg-black text-[#FDE01A] font-semibold text-xs uppercase tracking-widest rounded-none shadow-lg flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
                >
                  <Eye className="w-4 h-4 stroke-[2.2]" />
                  <span>Ver producto</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
