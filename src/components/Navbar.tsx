import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  logoVisible?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, logoVisible = true }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Productos', href: '#productos' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDE01A] transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-24 sm:h-28 flex items-center justify-between">
        {/* Left: Logo / Brand */}
        <div id="navbar-logo-container" className="flex items-center">
          <a
            id="brand-logo"
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className={`group flex items-center gap-2.5 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              id="navbar-logo-img"
              src="/logo.png"
              alt="Logo"
              className="h-[65px] sm:h-[84px] w-auto max-w-[250px] sm:max-w-[340px] object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className={`hidden md:flex items-center space-x-10 transition-opacity duration-300 ease-out ${logoVisible ? 'opacity-100' : 'opacity-0'}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-${link.name.toLowerCase()}`}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-semibold tracking-wider text-[#1A1A1A] hover:opacity-75 transition-opacity uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1A1A1A] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Cart and Mobile Toggle */}
        <div className={`flex items-center gap-4 transition-opacity duration-300 ease-out ${logoVisible ? 'opacity-100' : 'opacity-0'}`}>
          <button
            id="cart-button"
            type="button"
            onClick={onOpenCart}
            aria-label="Abrir carrito de compras"
            className="relative p-2.5 text-[#1A1A1A] hover:bg-[#1A1A1A]/10 rounded-full transition-colors flex items-center justify-center cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 stroke-[2]" />
            {cartCount > 0 && (
              <span
                id="cart-badge-count"
                className="absolute -top-0.5 -right-0.5 bg-[#1A1A1A] text-[#FDE01A] text-[11px] font-bold min-w-[20px] h-[20px] rounded-full flex items-center justify-center px-1"
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            className="md:hidden p-2 text-[#1A1A1A] hover:bg-[#1A1A1A]/10 rounded-md transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2]" /> : <Menu className="w-6 h-6 stroke-[2]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer without border line */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDE01A] px-6 py-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-bold tracking-wider text-[#1A1A1A] hover:opacity-75 py-1 transition-opacity uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
