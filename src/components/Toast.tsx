import React from 'react';
import { Check, ShoppingBag } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onOpenCart?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onOpenCart }) => {
  if (!message) return null;

  return (
    <aside
      aria-label="Notificaciones"
      className="fixed bottom-6 right-6 z-50 animate-bounce-short"
    >
      <div className="bg-[#1A1A1A] text-[#F8F7F4] border border-[#333333] shadow-xl px-4 py-3 rounded-xl flex items-center gap-3 max-w-sm">
        <div className="w-6 h-6 rounded-full bg-[#265324] flex items-center justify-center flex-shrink-0">
          <Check className="w-3.5 h-3.5 text-[#F8F7F4]" />
        </div>
        <p className="text-xs font-medium tracking-wide flex-grow line-clamp-1">
          {message}
        </p>
        {onOpenCart && (
          <button
            type="button"
            onClick={onOpenCart}
            className="text-[11px] underline font-semibold text-[#F8F7F4] hover:text-[#D6C8B5] flex-shrink-0 cursor-pointer flex items-center gap-1 ml-1"
          >
            <ShoppingBag className="w-3 h-3" />
            <span>Ver</span>
          </button>
        )}
      </div>
    </aside>
  );
};
