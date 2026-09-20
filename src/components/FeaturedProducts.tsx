import React from 'react';
import { Product } from '../types';
import { ShoppingBag, Eye } from 'lucide-react';

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
              className="group bg-[#FFFFFF] border border-[#E5E2DC] rounded-xl overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-black/5"
            >
              {/* Top part: Image container */}
              <div className="p-3">
                <div
                  className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-[#F2EFE9] cursor-pointer"
                  onClick={() => onViewProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] uppercase tracking-wider font-medium bg-[#1A1A1A] text-[#F8F7F4] rounded-md">
                      {product.tag}
                    </span>
                  )}

                  {/* Quick view floating action button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewProduct(product);
                    }}
                    aria-label={`Ver detalles de ${product.name}`}
                    className="absolute bottom-3 right-3 p-2 bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#1A1A1A] rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bottom part: Information & Actions */}
              <div className="p-4 pt-1 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] uppercase tracking-widest text-[#787878] font-medium">
                      {product.category}
                    </span>
                    <span className="text-sm font-semibold text-[#1A1A1A]">
                      {product.formattedPrice}
                    </span>
                  </div>

                  <h3
                    onClick={() => onViewProduct(product)}
                    className="font-display text-base font-semibold text-[#1A1A1A] tracking-tight group-hover:text-[#4A4A4A] transition-colors cursor-pointer line-clamp-1"
                  >
                    {product.name}
                  </h3>

                  {product.description && (
                    <p className="text-xs text-[#6B6B6B] leading-relaxed line-clamp-2 mt-1 mb-4">
                      {product.description}
                    </p>
                  )}
                </div>

                {/* Buttons: Ver producto & Añadir al carrito */}
                <div className="flex items-center gap-2 pt-2 border-t border-[#F0ECE4]">
                  <button
                    type="button"
                    id={`view-btn-${product.id}`}
                    onClick={() => onViewProduct(product)}
                    className="flex-1 py-2.5 px-3 text-xs font-medium text-[#1A1A1A] bg-[#F7F6F3] hover:bg-[#ECE8E0] rounded-lg transition-colors text-center cursor-pointer"
                  >
                    Ver producto
                  </button>
                  <button
                    type="button"
                    id={`add-btn-${product.id}`}
                    onClick={() => onAddToCart(product)}
                    aria-label={`Añadir ${product.name} al carrito`}
                    className="py-2.5 px-3 text-xs font-medium text-[#F8F7F4] bg-[#1A1A1A] hover:bg-[#333333] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Añadir</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
