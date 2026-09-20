import React from 'react';
import { Feather, ShieldCheck, RefreshCw } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Feather,
      title: 'Fibras Puras & Nobles',
      description: 'Seleccionamos lino europeo, lana virgen certificada y algodón orgánico de tacto excepcional, respetando el ciclo natural.'
    },
    {
      icon: ShieldCheck,
      title: 'Sastrería & Precisión',
      description: 'Patronaje depurado y costuras reforzadas concebidas para un calce impecable que conserva su estructura con el paso del tiempo.'
    },
    {
      icon: RefreshCw,
      title: 'Longevidad Consciente',
      description: 'Rechazamos la sobreproducción estacional. Diseñamos piezas atemporales que trascienden calendarios y modas efímeras.'
    }
  ];

  return (
    <section
      id="nosotros"
      aria-label="Sobre nosotros y filosofía"
      className="w-full py-12 sm:py-16"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 pb-3 border-b border-[#E7E5DF]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#767676] font-medium block">
              Filosofía
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#1A1A1A] mt-1">
              Nosotros
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#666666] tracking-wide mt-2 sm:mt-0">
            Una visión estética basada en la discreción, el detalle y la calma
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Brand Manifesto Box */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E5E2DC] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#888888] font-medium block mb-3">
                Manifiesto Atelier
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-[#1A1A1A] leading-snug">
                «Creemos en la belleza de lo esencial: menos elementos, mayor atención a cada fibra.»
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed mt-4">
                Nacemos con el propósito de ofrecer una alternativa serena al ritmo frenético de la industria textil. Cada prenda nace de un estudio minucioso de la silueta, la caída del tejido y el confort cotidiano.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F0ECE4] flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider">Taller & Estudio</p>
                <p className="text-xs text-[#777777]">Diseñado en España &bull; Producción Europea</p>
              </div>
              <span className="font-display text-lg font-bold tracking-widest text-[#1A1A1A]">
                MMXXVI
              </span>
            </div>
          </div>

          {/* 3 Value Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] border border-[#E5E2DC] rounded-xl p-5 flex flex-col justify-between transition-all duration-200 hover:border-[#D0CCC2]"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#F7F6F3] text-[#1A1A1A] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <h4 className="font-display text-sm font-semibold text-[#1A1A1A] tracking-tight mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F0ECE4]">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-[#999999]">
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
