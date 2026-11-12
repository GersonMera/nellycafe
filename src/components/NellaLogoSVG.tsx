import React from 'react';

interface NellaLogoSVGProps {
  variant?: 'header' | 'hero' | 'footer';
  className?: string;
}

/**
 * Recreación vectorial en código de la anatomía exacta del logotipo de Nella Café — COFFEE - BAR:
 * - Línea horizontal corta en Amarillo Botánico (#EED902) sobre la "N"
 * - Letra "N" en Amarillo Botánico (#EED902) con dos hojitas que brotan de su asta derecha (con balanceo orgánico)
 * - "ella" y "Café" en tipografía geométrica redondeada voluminosa blanca (#FFFFFF)
 * - Tilde de "Café" en polígono geométrico Amarillo Botánico (#EED902) centrada exactamente sobre la "e"
 * - Línea horizontal larga en Amarillo Botánico (#EED902) sobre el descriptor espaciado "COFFEE - BAR"
 */
export const NellaLogoSVG: React.FC<NellaLogoSVGProps> = ({
  variant = 'hero',
  className = '',
}) => {
  if (variant === 'header') {
    return (
      <div className={`inline-flex items-center gap-2 select-none ${className}`}>
        <svg
          viewBox="0 0 220 120"
          className="h-9 sm:h-11 w-auto max-w-[130px] sm:max-w-[170px] overflow-visible"
          role="img"
          aria-label="Nella Café — COFFEE - BAR"
        >
          {/* Barra superior corta sobre la N */}
          <line
            x1="14"
            y1="9"
            x2="78"
            y2="9"
            stroke="#EED902"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Letra N en Amarillo Botánico + dos hojitas brotando */}
          <g>
            <path
              d="M18 56 V22 H31 L49 43 V22 H62 V56 H49 L31 35 V56 Z"
              fill="#EED902"
            />
            {/* Dos pequeñas hojas que brotan del asta derecha de la N */}
            <g className="animate-botanical-sway" style={{ transformOrigin: '57px 22px' }}>
              <path
                d="M56 22 C52 13, 56 6, 61 9 C64 12, 61 18, 57 22 Z"
                fill="#EED902"
              />
              <path
                d="M59 22 C64 14, 74 12, 74 18 C74 23, 65 24, 59 22 Z"
                fill="#EED902"
              />
            </g>
          </g>

          {/* "ella" en blanco redondeado */}
          <text
            x="68"
            y="55"
            fill="#FFFFFF"
            fontFamily="'Fredoka', 'Plus Jakarta Sans', sans-serif"
            fontWeight="700"
            fontSize="40"
            letterSpacing="-0.5"
          >
            ella
          </text>

          {/* "Café" en blanco monumental */}
          <text
            x="14"
            y="94"
            fill="#FFFFFF"
            fontFamily="'Fredoka', 'Plus Jakarta Sans', sans-serif"
            fontWeight="700"
            fontSize="50"
            letterSpacing="0"
          >
            Cafe
          </text>

          {/* Tilde geométrica amarilla centrada sobre la 'e' de Cafe */}
          <polygon points="103,64 114,53 125,57 112,65" fill="#EED902" />

          {/* Barra inferior larga */}
          <line
            x1="14"
            y1="103"
            x2="148"
            y2="103"
            stroke="#EED902"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Descriptor COFFEE - BAR */}
          <text
            x="81"
            y="116"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="300"
            fontSize="9.5"
            letterSpacing="3.4"
          >
            COFFEE - BAR
          </text>
        </svg>
      </div>
    );
  }

  const isHero = variant === 'hero';

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 460 365"
        className={
          isHero
            ? 'w-full max-w-[240px] sm:max-w-[285px] h-auto overflow-visible'
            : 'w-full max-w-[230px] h-auto overflow-visible'
        }
        role="img"
        aria-label="Logotipo oficial Nella Café — COFFEE - BAR"
      >
        {/* Línea horizontal corta en Amarillo Botánico (#EED902) sobre la N */}
        <line
          x1="46"
          y1="22"
          x2="164"
          y2="22"
          stroke="#EED902"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Letra "N" en Amarillo Botánico (#EED902) */}
        <g>
          <path
            d="M54 158 V66 H86 L128 118 V66 H160 V158 H128 L86 106 V158 Z"
            fill="#EED902"
          />
          {/* Dos pequeñas hojas que brotan de su asta derecha con balanceo orgánico */}
          <g className="animate-botanical-sway" style={{ transformOrigin: '148px 64px' }}>
            {/* Hoja vertical izquierda */}
            <path
              d="M144 66 C136 45, 141 29, 151 32 C159 35, 155 53, 147 66 Z"
              fill="#EED902"
            />
            {/* Hoja inclinada derecha */}
            <path
              d="M149 67 C161 48, 182 41, 184 52 C186 62, 166 70, 149 67 Z"
              fill="#EED902"
            />
          </g>
        </g>

        {/* "ella" en blanco voluminoso y redondeado */}
        <text
          x="170"
          y="157"
          fill="#FFFFFF"
          fontFamily="'Fredoka', 'Plus Jakarta Sans', sans-serif"
          fontWeight="700"
          fontSize="110"
          letterSpacing="-1.5"
        >
          ella
        </text>

        {/* "Café" (sin tilde nativa para dibujar la tilde amarilla geométrica exacta sobre la 'e') */}
        <text
          x="46"
          y="280"
          fill="#FFFFFF"
          fontFamily="'Fredoka', 'Plus Jakarta Sans', sans-serif"
          fontWeight="700"
          fontSize="154"
          letterSpacing="-1"
        >
          Cafe
        </text>

        {/* Tilde amarilla geométrica centrada exactamente sobre la "e" de Cafe */}
        <polygon
          points="332,182 358,154 385,165 355,184"
          fill="#EED902"
        />

        {/* Línea horizontal larga en Amarillo Botánico sobre el descriptor */}
        <line
          x1="46"
          y1="308"
          x2="414"
          y2="308"
          stroke="#EED902"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Descriptor oficial COFFEE - BAR */}
        <text
          x="230"
          y="348"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="300"
          fontSize="26"
          letterSpacing="8.5"
        >
          COFFEE - BAR
        </text>
      </svg>
    </div>
  );
};
