import React from 'react';
import { COLLECTIONS } from '../data/products';
import { ArrowRight } from 'lucide-react';

export const CollectionsSection: React.FC = () => {
  return (
    <section
      id="colecciones"
      aria-label="Colecciones de temporada"
      className="w-full py-12 sm:py-16"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 pb-3 border-b border-[#E7E5DF]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#767676] font-medium block">
              Explorar
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#1A1A1A] mt-1">
              Colecciones
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#666666] tracking-wide mt-2 sm:mt-0">
            Series cápsula diseñadas para complementarse en perfecta armonía
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLLECTIONS.map((col, idx) => (
            <div
              key={col.id}
              id={`collection-card-${idx}`}
              className="group bg-[#FFFFFF] border border-[#E5E2DC] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-black/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE9E2]">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <span className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-medium bg-[#1A1A1A]/80 text-[#F8F7F4] rounded-md backdrop-blur-xs">
                  {col.itemCount}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#1A1A1A] tracking-tight group-hover:text-[#4A4A4A] transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed mt-2">
                    {col.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0ECE4] flex items-center justify-between text-xs font-medium text-[#1A1A1A]">
                  <span className="tracking-wider uppercase text-[11px]">Ver colección</span>
                  <div className="w-6 h-6 rounded-full bg-[#F7F6F3] group-hover:bg-[#1A1A1A] group-hover:text-[#F8F7F4] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
