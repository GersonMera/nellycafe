export interface ParallaxSpringConfig {
  stiffness: number;
  damping: number;
  mass: number;
  restDelta: number;
}

export interface ParallaxBleedGeometry {
  insetTopPx: number;
  insetBottomPx: number;
  extraHeightPx: number;
}

/**
 * Calcula el rango de desplazamiento vertical [inicio, fin] en píxeles para useTransform
 * a partir del progreso de scroll [0, 1]. Respeta prefers-reduced-motion devolviendo [0, 0].
 */
export function computeParallaxRange(
  baseDistancePx: number,
  speedFactor: number = 1,
  reducedMotion: boolean = false
): [number, number] {
  if (reducedMotion || baseDistancePx === 0 || speedFactor === 0) {
    return [0, 0];
  }
  const delta = Math.round(Math.abs(baseDistancePx) * speedFactor);
  if (delta === 0) {
    return [0, 0];
  }
  return [-delta, delta];
}

/**
 * Devuelve los parámetros de resorte (useSpring) para suavizar el movimiento parallax
 * del tapiz de doodles al hacer scroll.
 */
export function getParallaxSpringConfig(
  preset: 'silky' | 'responsive' = 'silky'
): ParallaxSpringConfig {
  if (preset === 'responsive') {
    return {
      stiffness: 95,
      damping: 26,
      mass: 0.45,
      restDelta: 0.001,
    };
  }
  return {
    stiffness: 65,
    damping: 24,
    mass: 0.55,
    restDelta: 0.001,
  };
}

/**
 * Calcula el margen de sangrado vertical (overscan) necesario para que el lienzo SVG
 * del tapiz nunca muestre bordes vacíos cuando se desplaza en parallax.
 */
export function computeOverscanBleed(maxOffsetPx: number): ParallaxBleedGeometry {
  const safeOffset = Math.max(24, Math.ceil(Math.abs(maxOffsetPx) * 1.25));
  return {
    insetTopPx: -safeOffset,
    insetBottomPx: -safeOffset,
    extraHeightPx: safeOffset * 2,
  };
}
