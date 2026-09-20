import React, { useState } from 'react';
import { Product } from '../types';
import { X, ShoppingBag, Check, Shield, Truck, RotateCcw } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string, qty: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0]?.name || 'Natural'
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-[#FFFFFF] border border-[#E5E2DC] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl z-10 my-8">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar ventana de producto"
          className="absolute top-4 right-4 z-20 p-2 text-[#777777] hover:text-[#1A1A1A] bg-[#F7F6F3]/80 hover:bg-[#EFECE5] rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Image */}
          <div className="relative aspect-[3/4] md:aspect-auto md:h-full bg-[#F2EFE9] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {product.tag && (
              <span className="absolute top-4 left-4 px-2.5 py-1 text-[11px] uppercase tracking-wider font-semibold bg-[#1A1A1A] text-[#F8F7F4] rounded-md">
                {product.tag}
              </span>
            )}
          </div>

          {/* Right: Product Details & Purchase Form */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs uppercase tracking-widest text-[#787878] font-medium">
                  {product.category}
                </span>
                <span className="text-lg font-bold text-[#1A1A1A]">
                  {product.formattedPrice}
                </span>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight mb-2">
                {product.name}
              </h2>

              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Color Selector */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[#1A1A1A] uppercase tracking-wider">
                    Color:
                  </span>
                  <span className="text-xs text-[#666666]">{selectedColor}</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map((color) => {
                    const isSelected = selectedColor === color.name;
                    return (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color.name)}
                        title={color.name}
                        className={`w-7 h-7 rounded-full transition-all cursor-pointer flex items-center justify-center ${
                          isSelected
                            ? 'ring-2 ring-offset-2 ring-[#1A1A1A]'
                            : 'opacity-80 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: color.hex }}
                      >
                        {isSelected && (
                          <span
                            className={`block w-1.5 h-1.5 rounded-full ${
                              color.hex === '#F4F2EB' || color.hex === '#EDEBE4'
                                ? 'bg-black'
                                : 'bg-white'
                            }`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[#1A1A1A] uppercase tracking-wider">
                    Talla:
                  </span>
                  <span className="text-[11px] text-[#777777] underline cursor-pointer">
                    Guía de medidas
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#1A1A1A] bg-[#1A1A1A] text-[#F8F7F4]'
                            : 'border-[#E2DFD8] text-[#333333] hover:border-[#1A1A1A]'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Key Features Bullet points */}
              {product.details && product.details.length > 0 && (
                <div className="pt-4 border-t border-[#F0ECE4] mb-6">
                  <p className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">
                    Composición y acabado
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#666666]">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#1A1A1A]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div>
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#E0DDD5] rounded-lg bg-[#F8F7F4] px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 py-1 text-xs font-semibold text-[#1A1A1A] hover:bg-[#ECE8DF] rounded cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-2 text-xs font-medium text-[#1A1A1A] min-w-[20px] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 py-1 text-xs font-semibold text-[#1A1A1A] hover:bg-[#ECE8DF] rounded cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Submit button */}
                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={added}
                  className={`flex-1 py-3 px-4 rounded-lg text-xs sm:text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    added
                      ? 'bg-[#265324] text-[#F8F7F4]'
                      : 'bg-[#1A1A1A] text-[#F8F7F4] hover:bg-[#333333]'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>¡Añadido al Carrito!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Añadir al Carrito</span>
                    </>
                  )}
                </button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-[#F2EFEA] text-[10px] text-[#777777] text-center">
                <div className="flex flex-col items-center gap-0.5">
                  <Truck className="w-3.5 h-3.5 text-[#1A1A1A]" />
                  <span>Envío 24/48h</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <RotateCcw className="w-3.5 h-3.5 text-[#1A1A1A]" />
                  <span>Devolución 30 días</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <Shield className="w-3.5 h-3.5 text-[#1A1A1A]" />
                  <span>Pago Seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
