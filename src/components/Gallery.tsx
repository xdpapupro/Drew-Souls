import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/products';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const total = GALLERY_ITEMS.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  const currentItem = GALLERY_ITEMS[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 260, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
      },
    }),
  };

  return (
    <section
      id="inicio"
      aria-label="Galería visual animada"
      className="w-full pt-4 pb-8 sm:pt-6 sm:pb-12"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Main Animated Gallery Container - Approx 460px on desktop, margins on sides, max-w 1200px */}
        <div
          id="animated-gallery"
          className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]/10 select-none shadow-sm group"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Animated Large Image Showcase */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentItem.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              {/* Image with subtle zoom on hover */}
              <img
                src={currentItem.image}
                alt={currentItem.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Minimal Dark Vignette overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

              {/* Bottom Caption Info (Minimal, elegant) */}
              <div className="absolute bottom-6 left-6 right-20 sm:left-8 sm:bottom-8 max-w-xl text-[#F8F7F4] pointer-events-none">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] uppercase tracking-widest font-semibold bg-[#FDE01A] text-[#1A1A1A] rounded-md">
                    <Sparkles className="w-3 h-3" />
                    {currentItem.category}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#F8F7F4]/80 font-medium">
                    {currentItem.subtitle}
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white drop-shadow-sm">
                  {currentItem.title}
                </h2>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls: Previous / Next Buttons */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Imagen anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1A1A1A]/70 hover:bg-[#1A1A1A] text-white backdrop-blur-xs flex items-center justify-center transition-all cursor-pointer opacity-80 hover:opacity-100 hover:scale-105"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Siguiente imagen"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1A1A1A]/70 hover:bg-[#1A1A1A] text-white backdrop-blur-xs flex items-center justify-center transition-all cursor-pointer opacity-80 hover:opacity-100 hover:scale-105"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Top-Right: Slide Count & Pause/Play */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-[#1A1A1A]/75 text-white backdrop-blur-xs px-3 py-1.5 rounded-full text-xs font-medium">
            <span className="font-mono font-bold tracking-widest">
              0{currentIndex + 1} / 0{total}
            </span>
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pausar animación' : 'Reanudar animación'}
              className="p-1 hover:text-[#FDE01A] transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Bottom Interactive Indicators */}
          <div className="absolute bottom-4 right-6 sm:bottom-6 sm:right-8 z-20 flex items-center gap-2">
            {GALLERY_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                aria-label={`Ir al look ${idx + 1}`}
                className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-[#FDE01A]'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
