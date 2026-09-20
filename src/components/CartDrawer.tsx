import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const freeShippingThreshold = 100;
  const progressToFreeShipping = Math.min(
    100,
    (subtotal / freeShippingThreshold) * 100
  );
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutComplete(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F8F7F4] border-l border-[#E5E2DC] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#E7E5DF] flex items-center justify-between bg-[#FFFFFF]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#1A1A1A]" />
              <h2 className="font-display text-lg font-semibold text-[#1A1A1A]">
                Tu Carrito
              </h2>
              <span className="text-xs text-[#777777]">
                ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#777777] hover:text-[#1A1A1A] hover:bg-[#F4F2EB] rounded-full transition-colors cursor-pointer"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-6 py-3 bg-[#F4F2EC] border-b border-[#E7E5DF]">
            <div className="flex justify-between text-xs text-[#555555] mb-1.5 font-medium">
              {subtotal >= freeShippingThreshold ? (
                <span className="text-[#2B6127] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> ¡Envío gratuito aplicado!
                </span>
              ) : (
                <span>
                  Añade <strong className="text-[#1A1A1A]">{amountToFreeShipping.toFixed(2)} €</strong> para envío gratuito
                </span>
              )}
              <span>{Math.round(progressToFreeShipping)}%</span>
            </div>
            <div className="w-full bg-[#E5E2DC] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#1A1A1A] h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {checkoutComplete ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-14 h-14 rounded-full bg-[#265324]/10 text-[#265324] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#1A1A1A] mb-2">
                  ¡Pedido Recibido!
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] max-w-xs">
                  Gracias por tu compra en ATELIER. Hemos enviado el resumen y seguimiento a tu correo.
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#EFECE5] text-[#999999] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="font-display text-lg font-medium text-[#1A1A1A] mb-1">
                  Tu carrito está vacío
                </h3>
                <p className="text-xs text-[#777777] max-w-xs mb-6">
                  Descubre nuestras prendas de corte sastrería y fibras puras para empezar.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs font-medium uppercase tracking-wider bg-[#1A1A1A] text-[#F8F7F4] rounded-lg hover:bg-[#333333] transition-colors cursor-pointer"
                >
                  Explorar catálogo
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-[#FFFFFF] border border-[#E7E5DF] rounded-xl relative"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 rounded-lg overflow-hidden bg-[#F2EFE9] flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex justify-between items-start pr-6">
                        <h4 className="text-sm font-semibold text-[#1A1A1A] line-clamp-1">
                          {item.product.name}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-[#777777]">
                        <span>Talla: <strong>{item.selectedSize}</strong></span>
                        <span>&bull;</span>
                        <span>Color: <strong>{item.selectedColor}</strong></span>
                      </div>
                      <p className="text-xs font-semibold text-[#1A1A1A] mt-1">
                        {item.product.formattedPrice}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F2EFE9]">
                      <div className="flex items-center border border-[#E0DDD5] rounded-md bg-[#F8F7F4]">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 hover:bg-[#ECE8DF] text-[#1A1A1A] rounded-l cursor-pointer"
                          aria-label="Reducir cantidad"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-medium text-[#1A1A1A]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 hover:bg-[#ECE8DF] text-[#1A1A1A] rounded-r cursor-pointer"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#1A1A1A]">
                        {(item.product.price * item.quantity).toFixed(2)} €
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    className="absolute top-3 right-3 text-[#999999] hover:text-[#C53030] p-1 transition-colors cursor-pointer"
                    aria-label="Eliminar producto"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer with Subtotal & Checkout */}
          {items.length > 0 && !checkoutComplete && (
            <div className="p-6 bg-[#FFFFFF] border-t border-[#E7E5DF] space-y-3">
              <div className="space-y-1.5 text-xs text-[#666666]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1A1A1A]">
                    {subtotal.toFixed(2)} €
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Envío estimado</span>
                  <span>
                    {subtotal >= freeShippingThreshold ? (
                      <span className="text-[#265324] font-medium">Gratuito</span>
                    ) : (
                      '4,90 €'
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#F0ECE4] flex justify-between text-sm font-semibold text-[#1A1A1A]">
                  <span>Total</span>
                  <span>
                    {(
                      subtotal + (subtotal >= freeShippingThreshold ? 0 : 4.9)
                    ).toFixed(2)}{' '}
                    €
                  </span>
                </div>
              </div>

              <button
                type="button"
                id="checkout-button"
                onClick={handleCheckout}
                className="w-full py-3.5 px-4 bg-[#1A1A1A] text-[#F8F7F4] hover:bg-[#333333] rounded-lg text-xs sm:text-sm font-medium uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Finalizar Pedido</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-[#888888] tracking-wide">
                Pago seguro garantizado con encriptación SSL de 256 bits
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
