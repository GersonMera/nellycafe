import React, { useState } from 'react';
import { LazyFadeImage } from './LazyFadeImage.tsx';

export type BotanicalMotif =
  | 'coldbrew'
  | 'breakfast'
  | 'cheesecake'
  | 'coffee'
  | 'frappe'
  | 'sandwich'
  | 'pasta'
  | 'croissant';

interface BotanicalArchVisualProps {
  src: string;
  alt: string;
  motif?: BotanicalMotif;
  aspectClass?: string;
  showBotanicalLeaves?: boolean;
  overlayGradient?: boolean;
  children?: React.ReactNode;
}

/**
 * Componente de Ventanal en Arco Botánico (rounded-t-full rounded-b-3xl)
 * con doble encuadre en Amarillo Botánico (#EED902), ramas tropicales vectoriales,
 * carga perezosa con IntersectionObserver ('fade-in') y respaldo ilustrado SVG.
 */
export const BotanicalArchVisual: React.FC<BotanicalArchVisualProps> = ({
  src,
  alt,
  motif = 'coldbrew',
  aspectClass = 'aspect-[3/4]',
  showBotanicalLeaves = true,
  overlayGradient = true,
  children,
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  const renderMotifSVG = () => {
    switch (motif) {
      case 'coldbrew':
        return (
          <svg viewBox="0 0 240 280" className="h-44 w-44 text-[#EED902]" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="68" y="60" width="104" height="165" rx="22" stroke="#EED902" fill="#003851" fillOpacity="0.6" />
            <path d="M68 105 Q120 118 172 105" stroke="#EED902" />
            <circle cx="105" cy="145" r="18" stroke="#EED902" />
            <circle cx="142" cy="175" r="15" stroke="#EED902" />
            <rect x="92" y="182" width="26" height="24" rx="5" stroke="#FFFFFF" strokeOpacity="0.7" />
            <path d="M132 60 L156 22" stroke="#EED902" strokeWidth="4" strokeLinecap="round" />
            {/* Hojitas de camu camu */}
            <path d="M120 60 C112 42 122 30 132 38" fill="#EED902" />
          </svg>
        );
      case 'breakfast':
        return (
          <svg viewBox="0 0 240 280" className="h-44 w-44 text-[#EED902]" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="120" cy="150" r="74" stroke="#EED902" fill="#003851" fillOpacity="0.6" />
            <circle cx="120" cy="150" r="56" stroke="#FFFFFF" strokeOpacity="0.4" strokeDasharray="6 6" />
            <circle cx="105" cy="140" r="16" fill="#EED902" fillOpacity="0.85" />
            <path d="M130 120 C155 125 162 158 135 175" stroke="#EED902" strokeWidth="4" strokeLinecap="round" />
            <path d="M88 176 Q120 195 152 176" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );
      case 'cheesecake':
        return (
          <svg viewBox="0 0 240 280" className="h-44 w-44 text-[#EED902]" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M52 165 L154 98 L188 145 L68 205 Z" fill="#003851" fillOpacity="0.7" stroke="#EED902" />
            <path d="M52 165 V205 L188 180 V145" stroke="#EED902" />
            <circle cx="125" cy="112" r="9" fill="#EED902" />
            <circle cx="145" cy="122" r="7" fill="#EED902" />
            <circle cx="106" cy="126" r="7" fill="#EED902" />
          </svg>
        );
      case 'pasta':
        return (
          <svg viewBox="0 0 240 280" className="h-44 w-44 text-[#EED902]" fill="none" stroke="currentColor" strokeWidth="2.5">
            <ellipse cx="120" cy="168" rx="78" ry="42" fill="#003851" fillOpacity="0.7" stroke="#EED902" />
            <path d="M75 158 C95 132 145 132 165 158" stroke="#EED902" strokeWidth="3.5" />
            <path d="M85 172 C108 148 132 148 155 172" stroke="#FFFFFF" strokeWidth="2.5" />
            <path d="M98 112 C98 95 108 90 108 75" stroke="#EED902" strokeLinecap="round" />
            <path d="M138 112 C138 95 148 90 148 75" stroke="#EED902" strokeLinecap="round" />
          </svg>
        );
      case 'sandwich':
        return (
          <svg viewBox="0 0 240 280" className="h-44 w-44 text-[#EED902]" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="54" y="106" width="132" height="24" rx="12" fill="#003851" stroke="#EED902" />
            <path d="M58 142 Q78 128 98 142 T138 142 T182 142" stroke="#EED902" strokeWidth="4" />
            <rect x="54" y="154" width="132" height="26" rx="12" fill="#003851" stroke="#EED902" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 240 280" className="h-44 w-44 text-[#EED902]" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M70 118 H158 V164 C158 192 138 208 114 208 C90 208 70 192 70 164 Z" fill="#003851" stroke="#EED902" />
            <path d="M158 130 H174 C184 130 188 138 188 148 C188 158 182 166 172 166 H158" stroke="#EED902" />
            <path d="M56 212 H172" stroke="#EED902" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <div className="relative group">
      {/* Ramas botánicas tropicales que asoman por los bordes del arco */}
      {showBotanicalLeaves && (
        <>
          <svg
            aria-hidden="true"
            viewBox="0 0 90 90"
            className="pointer-events-none absolute -top-4 -left-4 z-20 h-16 w-16 text-[#EED902] drop-shadow-md animate-botanical-sway"
          >
            <path
              d="M48 76 C22 68 8 44 12 16 C36 18 58 36 56 68 Z"
              fill="#1E4D3B"
              stroke="#EED902"
              strokeWidth="2.5"
            />
            <path d="M14 18 C28 34 40 50 50 72" stroke="#EED902" strokeWidth="2" fill="none" />
            <path
              d="M54 62 C64 44 78 36 84 42 C82 56 68 66 54 62 Z"
              fill="#EED902"
            />
          </svg>

          <svg
            aria-hidden="true"
            viewBox="0 0 90 90"
            className="pointer-events-none absolute -bottom-3 -right-3 z-20 h-14 w-14 text-[#EED902] drop-shadow-md animate-botanical-sway-left"
          >
            <path
              d="M18 72 C32 42 56 24 80 22 C76 50 56 72 22 76 Z"
              fill="#1E4D3B"
              stroke="#EED902"
              strokeWidth="2.5"
            />
            <path d="M22 72 C42 56 58 40 76 24" stroke="#EED902" strokeWidth="2" fill="none" />
          </svg>
        </>
      )}

      {/* Marco exterior de doble línea en Amarillo Botánico (#EED902) con geometría de Arco Botánico */}
      <div className="rounded-t-full rounded-b-3xl border-2 border-[#EED902] bg-[#003851] p-2 shadow-[0_20px_50px_rgba(0,20,32,0.55)] transition-transform duration-300 group-hover:-translate-y-1">
        <div
          className={`relative overflow-hidden rounded-t-full rounded-b-2xl border border-[#EED902]/55 bg-gradient-to-b from-[#004B6B] via-[#003851] to-[#1E4D3B] ${aspectClass}`}
        >
          {/* Fondo ilustrado vectorial permanente mientras la imagen entra al viewport y hace fade-in */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_35%,#004B6B_0%,#003851_75%)] p-6">
            {renderMotifSVG()}
          </div>

          {/* Fotografía curada con carga perezosa (IntersectionObserver) y transición fade-in */}
          {!imgFailed && (
            <LazyFadeImage
              src={src}
              alt={alt}
              onErrorFallback={() => setImgFailed(true)}
              wrapperClassName="absolute inset-0 z-10 h-full w-full overflow-hidden"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}

          {/* Scrim editorial medido para legibilidad del contenido superpuesto */}
          {overlayGradient && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#002638]/95 via-[#003851]/45 to-transparent"
            />
          )}

          {/* Contenido superpuesto opcional */}
          {children && <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6">{children}</div>}
        </div>
      </div>
    </div>
  );
};
