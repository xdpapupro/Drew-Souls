import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [targetRect, setTargetRect] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  const [phase, setPhase] = useState<'spin-center' | 'fly-to-target' | 'popout' | 'done'>('spin-center');
  const targetCheckAttempts = useRef(0);

  useEffect(() => {
    // Lock body scrolling during intro animation
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // 1. Initial spin and scale at the center of the viewport
    const timerSpin = setTimeout(() => {
      // Find the exact coordinates of the navbar logo image
      const measureTarget = () => {
        const logoImg = document.getElementById('navbar-logo-img') || document.getElementById('navbar-logo-container');
        if (logoImg) {
          const rect = logoImg.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            setTargetRect({
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2,
              width: rect.width,
              height: rect.height,
            });
            setPhase('fly-to-target');
            return true;
          }
        }
        return false;
      };

      if (!measureTarget()) {
        const interval = setInterval(() => {
          targetCheckAttempts.current += 1;
          if (measureTarget() || targetCheckAttempts.current > 15) {
            clearInterval(interval);
            if (targetCheckAttempts.current > 15) {
              // Fallback approximate position for top-left header
              const isDesktop = window.innerWidth >= 640;
              setTargetRect({
                x: isDesktop ? 140 : 90,
                y: isDesktop ? 56 : 48,
                width: isDesktop ? 170 : 130,
                height: isDesktop ? 84 : 65,
              });
              setPhase('fly-to-target');
            }
          }
        }, 40);
      }
    }, 1400);

    return () => {
      clearTimeout(timerSpin);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handlePopoutComplete = () => {
    setPhase('done');
    document.body.style.overflow = '';
    onComplete();
  };

  if (phase === 'done') return null;

  // Window center coordinates
  const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 300;
  const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 300;

  // Calculate delta offset from center to top-left target
  const deltaX = targetRect ? targetRect.x - centerX : 0;
  const deltaY = targetRect ? targetRect.y - centerY : 0;

  // In center, logo image natural size is 220px height. Calculate proportional scale target to match navbar logo
  const centerLogoHeight = 220;
  const scaleTarget = targetRect ? Math.max(0.25, Math.min(0.65, targetRect.height / centerLogoHeight)) : 0.38;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-curtain"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'spin-center' ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="fixed inset-0 z-50 bg-[#FDE01A] pointer-events-none"
      />

      {/* Animated Flying Logo - stays 100% visible with NO fading or fading out */}
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative flex items-center justify-center will-change-transform"
          initial={{
            scale: 0.2,
            opacity: 1,
            rotate: 0,
            x: 0,
            y: 0,
          }}
          animate={
            phase === 'spin-center'
              ? {
                  scale: [0.2, 1.1, 1],
                  opacity: 1,
                  rotate: [0, 360],
                  x: 0,
                  y: 0,
                }
              : phase === 'fly-to-target'
              ? {
                  scale: scaleTarget,
                  opacity: 1,
                  rotate: 360,
                  x: deltaX,
                  y: deltaY,
                }
              : {
                  // Phase 'popout': An energetic and elastic popout rebound right in place!
                  scale: [scaleTarget, scaleTarget * 1.32, scaleTarget * 0.95, scaleTarget],
                  opacity: 1,
                  rotate: 360,
                  x: deltaX,
                  y: deltaY,
                }
          }
          transition={
            phase === 'spin-center'
              ? {
                  duration: 1.3,
                  ease: [0.16, 1, 0.3, 1],
                  rotate: { duration: 1.3, ease: 'easeInOut' },
                  scale: { duration: 1.3, times: [0, 0.7, 1], ease: 'easeOut' },
                }
              : phase === 'fly-to-target'
              ? {
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }
              : {
                  // Popout spring transition
                  duration: 0.4,
                  times: [0, 0.35, 0.7, 1],
                  ease: 'easeInOut',
                }
          }
          onAnimationComplete={() => {
            if (phase === 'fly-to-target') {
              setPhase('popout');
            } else if (phase === 'popout') {
              handlePopoutComplete();
            }
          }}
        >
          <img
            src="/logo.png"
            alt="Atelier"
            className="w-48 sm:w-60 md:w-72 h-[220px] object-contain drop-shadow-sm select-none"
            draggable={false}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
