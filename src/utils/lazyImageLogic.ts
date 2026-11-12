export type LazyLoadStage = 'idle' | 'intersecting' | 'loaded' | 'error';

export interface IntersectionEntryLike {
  isIntersecting: boolean;
  intersectionRatio: number;
}

export interface LazyImageOptimizeOptions {
  width?: number;
  quality?: number;
}

/**
 * Determina si una entrada del IntersectionObserver debe activar la descarga de la imagen.
 */
export function shouldTriggerLazyLoad(entry: IntersectionEntryLike | null | undefined): boolean {
  if (!entry) return false;
  return Boolean(entry.isIntersecting || entry.intersectionRatio > 0);
}

/**
 * Calcula el siguiente estado de la máquina de carga perezosa (idle -> intersecting -> loaded | error).
 */
export function nextLazyLoadStage(
  currentStage: LazyLoadStage,
  event: 'INTERSECT' | 'LOAD_SUCCESS' | 'LOAD_ERROR' | 'RESET'
): LazyLoadStage {
  if (event === 'RESET') {
    return 'idle';
  }
  if (event === 'LOAD_ERROR') {
    return 'error';
  }
  if (event === 'LOAD_SUCCESS') {
    return currentStage === 'error' ? 'error' : 'loaded';
  }
  if (event === 'INTERSECT') {
    if (currentStage === 'idle') {
      return 'intersecting';
    }
    return currentStage;
  }
  return currentStage;
}

/**
 * Optimiza parámetros de compresión y ancho en URLs de Unsplash para conexiones móviles
 * en la zona de la Plaza de Armas (formato auto/webp, calidad controlada y ancho adaptado).
 */
export function optimizeImageUrlForConnection(
  rawUrl: string,
  options: LazyImageOptimizeOptions = {}
): string {
  if (!rawUrl) return '';
  if (!rawUrl.includes('images.unsplash.com')) {
    return rawUrl;
  }

  const targetWidth = options.width ?? 720;
  const targetQuality = options.quality ?? 78;

  try {
    const parsed = new URL(rawUrl);
    parsed.searchParams.set('auto', 'format');
    parsed.searchParams.set('fit', 'crop');
    parsed.searchParams.set('w', String(targetWidth));
    parsed.searchParams.set('q', String(targetQuality));
    return parsed.toString();
  } catch {
    return rawUrl;
  }
}

/**
 * Devuelve las clases de transición fade-in para una aparición ágil e instantánea
 * sin pausas perceptibles para el comensal.
 */
export function getFadeInClasses(stage: LazyLoadStage): string {
  const baseTransition =
    'transition-[opacity,transform] duration-250 ease-out will-change-[opacity,transform]';
  if (stage === 'loaded') {
    return `${baseTransition} opacity-100 scale-100 translate-y-0`;
  }
  return `${baseTransition} opacity-0 scale-[1.01] translate-y-0.5`;
}
