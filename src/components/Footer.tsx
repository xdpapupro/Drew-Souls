import React from 'react';

export const Footer: React.FC = () => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#FDE01A] text-[#1A1A1A] mt-12 sm:mt-16 border-t border-[#1A1A1A]/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#1A1A1A]/10">
          {/* Brand info */}
          <div className="md:col-span-5">
            <span className="font-display text-xl font-extrabold tracking-[0.2em] text-[#1A1A1A] uppercase block mb-3">
              ATELIER
            </span>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed max-w-sm">
              Indumentaria contemporánea de líneas esenciales, materias primas nobles y estética atemporal.
            </p>
            <div className="mt-4 text-[11px] text-[#1A1A1A]/70 tracking-widest uppercase font-semibold">
              Edición Minimalista &bull; 2026
            </div>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#1A1A1A] font-bold mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#1A1A1A]/85 font-medium">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleNav(e, '#inicio')}
                  className="hover:underline transition-all"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#productos"
                  onClick={(e) => handleNav(e, '#productos')}
                  className="hover:underline transition-all"
                >
                  Productos
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-[#1A1A1A] font-bold mb-4">
              Servicio & Garantía
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#1A1A1A]/85">
              <li className="hover:opacity-75 cursor-pointer">Envíos neutrales en carbono</li>
              <li className="hover:opacity-75 cursor-pointer">Devoluciones sin coste durante 30 días</li>
              <li className="hover:opacity-75 cursor-pointer">Fibras 100% orgánicas certificadas</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1A1A1A]/75 font-medium">
          <p>© {new Date().getFullYear()} ATELIER. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:underline cursor-pointer">Aviso Legal</span>
            <span className="hover:underline cursor-pointer">Privacidad</span>
            <span className="hover:underline cursor-pointer">Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
