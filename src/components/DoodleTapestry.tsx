import React, { useEffect, useId, useRef, useState } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  computeOverscanBleed,
  computeParallaxRange,
  getParallaxSpringConfig,
} from '../utils/parallaxMath.ts';

interface DoodleTapestryProps {
  className?: string;
  interactive?: boolean;
  parallaxDistance?: number;
  parallaxSpeed?: number;
}

/**
 * <DoodleTapestry />
 * Recrea el patrón exacto del fondo del logotipo de Nella Café (#003851 con trazos #004B6B):
 * tazas de café humeantes, croissants, porciones de cheesecake, copas de frappé,
 * conos de helado, sándwiches, granos de café e íconos de Wi-Fi.
 * Incorpora suavizado parallax multicapa con `framer-motion` (useScroll + useTransform + useSpring)
 * para que los íconos se desplacen con inercia orgánica y distinta velocidad al scroll de la página,
 * además de iluminarse en Amarillo Botánico (#EED902) con el cursor o el avance del scroll.
 */
export const DoodleTapestry: React.FC<DoodleTapestryProps> = ({
  className = '',
  interactive = true,
  parallaxDistance = 115,
  parallaxSpeed = 1,
}) => {
  const uniqueId = useId().replace(/:/g, '');
  const basePatternId = `nella-doodle-base-${uniqueId}`;
  const glowPatternId = `nella-doodle-glow-${uniqueId}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [spotlight, setSpotlight] = useState({ x: 50, y: 38, active: false });

  // Seguimiento del scroll relativo a la sección contenedora con framer-motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const baseRange = computeParallaxRange(
    parallaxDistance,
    parallaxSpeed,
    Boolean(prefersReducedMotion)
  );
  const glowRange = computeParallaxRange(
    parallaxDistance,
    parallaxSpeed * 1.28,
    Boolean(prefersReducedMotion)
  );
  const horizontalRange = computeParallaxRange(
    22,
    parallaxSpeed,
    Boolean(prefersReducedMotion)
  );

  const rawBaseY = useTransform(scrollYProgress, [0, 1], baseRange);
  const rawGlowY = useTransform(scrollYProgress, [0, 1], glowRange);
  const rawDriftX = useTransform(scrollYProgress, [0, 1], horizontalRange);

  const silkySpring = getParallaxSpringConfig('silky');
  const responsiveSpring = getParallaxSpringConfig('responsive');

  const smoothBaseY = useSpring(rawBaseY, silkySpring);
  const smoothGlowY = useSpring(rawGlowY, responsiveSpring);
  const smoothDriftX = useSpring(rawDriftX, silkySpring);

  const bleed = computeOverscanBleed(Math.max(Math.abs(baseRange[1]), Math.abs(glowRange[1])));

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const relX = ((e.clientX - rect.left) / Math.max(rect.width, 1)) * 100;
      const relY = ((e.clientY - rect.top) / Math.max(rect.height, 1)) * 100;
      setSpotlight({
        x: Math.max(0, Math.min(100, relX)),
        y: Math.max(0, Math.min(100, relY)),
        active: true,
      });
    };

    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      const waveX = 50 + Math.sin(scrollY * 0.004) * 30;
      const waveY = 45 + Math.cos(scrollY * 0.003) * 25;
      setSpotlight((prev) => ({
        x: prev.active ? prev.x : waveX,
        y: waveY,
        active: prev.active,
      }));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [interactive]);

  const renderTilePaths = (strokeColor: string, strokeOpacity: number) => (
    <g
      fill="none"
      stroke={strokeColor}
      strokeOpacity={strokeOpacity}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* 1. Taza de café humeante con corazón */}
      <g transform="translate(18, 22)">
        <path d="M8 26 H44 V42 C44 52 36 58 26 58 C16 58 8 52 8 42 Z" />
        <path d="M44 30 H52 C56 30 58 34 58 38 C58 42 55 46 50 46 H44" />
        <path d="M4 58 H48" />
        <path d="M26 38 C23 34 18 36 18 40 C18 44 26 48 26 48 C26 48 34 44 34 40 C34 36 29 34 26 38 Z" />
        <path d="M18 18 C18 13 22 12 22 7" />
        <path d="M27 19 C27 14 31 12 31 7" />
        <path d="M36 18 C36 13 40 12 40 7" />
      </g>

      {/* 2. Croissant artesanal */}
      <g transform="translate(105, 16) rotate(-14)">
        <path d="M8 32 C4 18 18 8 34 8 C50 8 64 18 60 32 C56 40 46 34 34 34 C22 34 12 40 8 32 Z" />
        <path d="M20 11 C18 20 20 28 22 34" />
        <path d="M48 11 C50 20 48 28 46 34" />
        <path d="M34 8 V34" />
      </g>

      {/* 3. Porción de Cheesecake de Saúco / Camu Camu con cereza */}
      <g transform="translate(205, 18)">
        <path d="M6 42 L48 18 L58 34 L12 56 Z" />
        <path d="M6 42 V58 L54 58 V36" />
        <path d="M6 50 H54" />
        <circle cx="38" cy="16" r="5" />
        <path d="M40 11 C43 4 49 3 52 6" />
      </g>

      {/* 4. Copa alta de Frappé / Cold Brew con sorbete */}
      <g transform="translate(302, 14)">
        <path d="M14 28 H44 L38 72 H20 Z" />
        <path d="M12 28 C12 16 22 12 29 12 C36 12 46 16 46 28 Z" />
        <path d="M32 12 L40 2" />
        <path d="M16 42 C22 39 34 45 42 41" />
        <path d="M22 72 L29 82 L36 72" />
        <path d="M18 82 H40" />
      </g>

      {/* 5. Ícono de Wi-Fi (presente en el logo original) */}
      <g transform="translate(26, 114) rotate(-18)">
        <path d="M8 28 C20 16 40 16 52 28" />
        <path d="M15 36 C23 28 37 28 45 36" />
        <path d="M22 44 C26 40 34 40 38 44" />
        <circle cx="30" cy="51" r="2.5" />
      </g>

      {/* 6. Sándwich / Club Sándwich */}
      <g transform="translate(112, 108) rotate(12)">
        <rect x="6" y="18" width="52" height="10" rx="5" />
        <path d="M8 28 C14 33 20 25 26 31 C32 36 38 26 44 31 C49 34 54 28 56 28" />
        <rect x="6" y="34" width="52" height="10" rx="5" />
      </g>

      {/* 7. Cono de helado / postre */}
      <g transform="translate(212, 104)">
        <path d="M16 32 L28 68 L40 32" />
        <path d="M20 44 L36 44" />
        <path d="M23 54 L33 54" />
        <circle cx="22" cy="26" r="8" />
        <circle cx="34" cy="26" r="8" />
        <circle cx="28" cy="17" r="8" />
      </g>

      {/* 8. Granos de café y vaso para llevar */}
      <g transform="translate(296, 112)">
        {/* Grano de café */}
        <ellipse cx="16" cy="36" rx="10" ry="14" transform="rotate(-20 16 36)" />
        <path d="M12 24 C18 32 14 40 20 48" />
        {/* Vaso de Cold Brew */}
        <path d="M38 18 H64 L60 58 H42 Z" />
        <rect x="35" y="12" width="32" height="6" rx="2" />
        <path d="M40 32 H62" />
        <path d="M41 44 H61" />
      </g>

      {/* 9. Cupcake & Caramelo en fila inferior */}
      <g transform="translate(56, 188)">
        <path d="M14 28 H42 L37 48 H19 Z" />
        <path d="M12 28 C10 18 20 14 28 14 C36 14 46 18 44 28 Z" />
        <path d="M22 28 V48" />
        <path d="M28 28 V48" />
        <path d="M34 28 V48" />
      </g>

      {/* 10. Tenedor y cuchillo & Sándwich envuelto */}
      <g transform="translate(168, 184)">
        <path d="M12 10 V26 M8 10 V22 C8 26 16 26 16 22 V10 M12 26 V52" />
        <path d="M28 10 C24 16 24 28 28 32 V52 M28 10 V32" />
        <g transform="translate(48, 6) rotate(18)">
          <rect x="6" y="8" width="32" height="44" rx="6" />
          <path d="M6 26 L38 18" />
          <path d="M6 38 L38 30" />
        </g>
      </g>
    </g>
  );

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
    >
      {/* Capa base en Azul Petróleo Medio (#005A80) con suavizado parallax mediante framer-motion */}
      <motion.div
        data-parallax-tapestry="base"
        style={{
          y: smoothBaseY,
          x: smoothDriftX,
          top: `${bleed.insetTopPx}px`,
          bottom: `${bleed.insetBottomPx}px`,
        }}
        className="absolute inset-x-[-32px] will-change-transform"
      >
        <svg className="h-full w-full">
          <defs>
            <pattern
              id={basePatternId}
              width="380"
              height="250"
              patternUnits="userSpaceOnUse"
            >
              {renderTilePaths('#005A80', 0.42)}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${basePatternId})`} />
        </svg>
      </motion.div>

      {/* Capa interactiva en Amarillo Botánico (#EED902) con diferencial de profundidad parallax */}
      {interactive && (
        <motion.div
          data-parallax-tapestry="glow"
          style={{
            y: smoothGlowY,
            x: smoothDriftX,
            top: `${bleed.insetTopPx}px`,
            bottom: `${bleed.insetBottomPx}px`,
            WebkitMaskImage: `radial-gradient(380px circle at ${spotlight.x}% ${spotlight.y}%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 45%, transparent 100%)`,
            maskImage: `radial-gradient(380px circle at ${spotlight.x}% ${spotlight.y}%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 45%, transparent 100%)`,
          }}
          className="absolute inset-x-[-32px] transition-opacity duration-300 will-change-transform"
        >
          <svg className="h-full w-full">
            <defs>
              <pattern
                id={glowPatternId}
                width="380"
                height="250"
                patternUnits="userSpaceOnUse"
              >
                {renderTilePaths('#EED902', 0.58)}
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${glowPatternId})`} />
          </svg>
        </motion.div>
      )}
    </div>
  );
};
