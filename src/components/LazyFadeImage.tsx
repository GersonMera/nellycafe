import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  LazyLoadStage,
  getFadeInClasses,
  nextLazyLoadStage,
  optimizeImageUrlForConnection,
  shouldTriggerLazyLoad,
} from '../utils/lazyImageLogic.ts';

interface LazyFadeImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  rootMargin?: string;
  threshold?: number;
  mobileTargetWidth?: number;
  mobileQuality?: number;
  onErrorFallback?: () => void;
}

/**
 * Componente de Imagen con Carga Perezosa (Lazy Loading) mediante IntersectionObserver
 * y efecto de transición suave 'fade-in' optimizado para conexiones móviles en Pucallpa.
 */
export const LazyFadeImage: React.FC<LazyFadeImageProps> = ({
  src,
  alt,
  className = '',
  wrapperClassName = 'relative h-full w-full overflow-hidden',
  rootMargin = '800px 0px',
  threshold = 0,
  mobileTargetWidth = 720,
  mobileQuality = 80,
  onErrorFallback,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const prevSrcRef = useRef<string>('');
  const [hasIntersected, setHasIntersected] = useState<boolean>(false);
  const [stage, setStage] = useState<LazyLoadStage>('idle');

  const optimizedSrc = optimizeImageUrlForConnection(src, {
    width: mobileTargetWidth,
    quality: mobileQuality,
  });

  // Reiniciar estado de fade-in únicamente cuando cambia la URL de la imagen (ej. cambiar de Momento o Postal)
  useEffect(() => {
    if (prevSrcRef.current && prevSrcRef.current !== optimizedSrc) {
      setStage(hasIntersected ? 'intersecting' : 'idle');
    }
    prevSrcRef.current = optimizedSrc;
  }, [optimizedSrc, hasIntersected]);

  // Observar visibilidad en el viewport mediante IntersectionObserver
  useEffect(() => {
    if (hasIntersected) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setHasIntersected(true);
      setStage((prev) => nextLazyLoadStage(prev, 'INTERSECT'));
      return;
    }

    const node = wrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (shouldTriggerLazyLoad(entry)) {
            setHasIntersected(true);
            setStage((prev) => nextLazyLoadStage(prev, 'INTERSECT'));
            observer.disconnect();
            break;
          }
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [hasIntersected, rootMargin, threshold]);

  const markLoaded = useCallback(() => {
    setStage((prev) => nextLazyLoadStage(prev, 'LOAD_SUCCESS'));
  }, []);

  const handleImgRef = useCallback(
    (imgEl: HTMLImageElement | null) => {
      if (imgEl && imgEl.complete && imgEl.naturalWidth > 0) {
        setStage('loaded');
      }
    },
    []
  );

  const fadeInClasses = getFadeInClasses(stage);

  return (
    <div
      ref={wrapperRef}
      data-lazy-container="true"
      data-lazy-state={stage}
      className={wrapperClassName}
    >
      {/* Destello sutil mientras la imagen entra al viewport y descarga en conexión móvil */}
      {stage !== 'loaded' && stage !== 'error' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-tr from-[#003851]/40 via-[#004B6B]/25 to-[#EED902]/10 animate-pulse"
        />
      )}

      {hasIntersected && stage !== 'error' && (
        <img
          ref={handleImgRef}
          src={optimizedSrc}
          alt={alt}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={markLoaded}
          onError={() => {
            setStage((prev) => nextLazyLoadStage(prev, 'LOAD_ERROR'));
            if (onErrorFallback) onErrorFallback();
          }}
          className={`${className} ${fadeInClasses}`}
        />
      )}
    </div>
  );
};
