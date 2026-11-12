import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Copy,
  Check,
  Clock,
  Phone,
  Mail,
  AlertTriangle,
  ExternalLink,
} from 'lucide-react';
import { NELLA_BRAND_INFO } from '../nellaMenuData.js';
import { DoodleTapestry } from './DoodleTapestry.tsx';

export const LocationAndContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopyText = async (key: string, textToCopy: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      }
    } catch {
      // Fallback silencioso para entornos sin permiso de portapapeles
    }
    setCopiedField(key);
    window.setTimeout(() => {
      setCopiedField((prev) => (prev === key ? null : prev));
    }, 3200);
  };

  return (
    <section
      id="ubicacion"
      aria-labelledby="ubicacion-heading"
      className="relative overflow-hidden bg-[#003851] py-20 sm:py-28 text-white border-b-4 border-[#EED902]"
    >
      <DoodleTapestry interactive />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-8">
        {/* Encabezado Editorial */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex flex-col items-center">
            <span className="h-1 w-20 rounded-full bg-[#EED902]" aria-hidden="true" />
            <p className="font-descriptor my-2.5 text-xs sm:text-sm font-light uppercase tracking-[0.35em] text-[#EED902]">
              VENTANA A LA PLAZA DE ARMAS · NAVEGACIÓN DIRECTA
            </p>
            <span className="h-0.5 w-52 rounded-full bg-[#EED902]/80" aria-hidden="true" />
          </div>

          <h2
            id="ubicacion-heading"
            className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight leading-[0.95] text-white"
            style={{ textWrap: 'balance' }}
          >
            En el Corazón de Pucallpa, Frente a la Plaza de Armas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/85">
            Ubicación física verificada con coordenadas exactas para llegar caminando o en vehículo mediante Google Maps y Waze.
          </p>
        </div>

        {/* Bloque Principal: Dirección Gigante Copiable + Mapa Esquema de la Plaza */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Columna Izquierda: Dirección Gigante, Coordenadas y Botones Gemelos Google Maps / Waze */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border-2 border-[#EED902] bg-[#00283B]/95 p-6 sm:p-10 shadow-2xl">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#EED902]">
                  <MapPin className="h-4 w-4 text-[#EED902]" aria-hidden="true" />
                  PUNTO DE REFERENCIA DE ORO · PUCALLPA
                </span>
                <span className="font-mono text-xs font-bold tabular-nums text-white/85">
                  GPS: {NELLA_BRAND_INFO.location.coordinates.display}
                </span>
              </div>

              {/* Dirección Gigante */}
              <div className="mt-5 rounded-2xl border border-[#EED902]/45 bg-[#003851] p-5 sm:p-6">
                <p className="font-monumental text-2xl sm:text-4xl font-bold text-white leading-tight">
                  {NELLA_BRAND_INFO.location.displayAddress}
                </p>
                <p className="mt-2 text-sm text-white/80">
                  {NELLA_BRAND_INFO.location.fullAddress}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      handleCopyText(
                        'address',
                        `${NELLA_BRAND_INFO.location.fullAddress} (${NELLA_BRAND_INFO.location.landmark})`
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-xl bg-[#EED902] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#003851] transition-transform hover:scale-[1.02] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {copiedField === 'address' ? (
                      <>
                        <Check className="h-4 w-4 text-[#003851]" aria-hidden="true" />
                        <span>¡Dirección Copiada al Portapapeles!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-[#003851]" aria-hidden="true" />
                        <span>Copiar Dirección Exacta</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleCopyText(
                        'coords',
                        NELLA_BRAND_INFO.location.coordinates.display
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-xl border border-[#EED902] bg-[#004B6B]/70 px-4 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-[#004B6B] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {copiedField === 'coords' ? (
                      <>
                        <Check className="h-4 w-4 text-[#EED902]" aria-hidden="true" />
                        <span className="text-[#EED902]">Coordenadas Copiadas</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-[#EED902]" aria-hidden="true" />
                        <span>Copiar Coordenadas (-8.38283, -74.53169)</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Representación Arquitectónica Vectorial de Jr. Tarapacá 679 frente a la Plaza de Armas */}
              <div className="mt-6 rounded-2xl border border-[#EED902]/35 bg-[#003851]/90 p-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#EED902] mb-2">
                  <span>CROQUIS URBANO · CERCADO DE PUCALLPA</span>
                  <span>CP 25001 · CALLERÍA</span>
                </div>
                <svg
                  viewBox="0 0 600 155"
                  className="w-full h-auto rounded-xl bg-[#002233] border border-[#EED902]/25"
                  role="img"
                  aria-label="Mapa esquemático mostrando Nella Café en Jr. Tarapacá 679 frente a la Plaza de Armas de Pucallpa"
                >
                  {/* Cuadrícula de calles */}
                  <line x1="0" y1="78" x2="600" y2="78" stroke="#EED902" strokeWidth="14" strokeOpacity="0.18" />
                  <line x1="0" y1="78" x2="600" y2="78" stroke="#EED902" strokeWidth="1.5" strokeDasharray="8 6" />
                  <text x="18" y="73" fill="#EED902" fontSize="11" fontFamily="monospace" fontWeight="bold">
                    JR. TARAPACÁ (CUADRA 6)
                  </text>

                  {/* Plaza de Armas de Pucallpa */}
                  <rect
                    x="320"
                    y="94"
                    width="245"
                    height="50"
                    rx="10"
                    fill="#1E4D3B"
                    stroke="#EED902"
                    strokeWidth="2"
                  />
                  <text
                    x="442"
                    y="123"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    PLAZA DE ARMAS DE PUCALLPA
                  </text>

                  {/* Marcador Nella Café en Jr. Tarapacá N.º 679 */}
                  <rect
                    x="335"
                    y="12"
                    width="215"
                    height="50"
                    rx="12"
                    fill="#EED902"
                  />
                  <circle cx="362" cy="37" r="9" fill="#003851" />
                  <circle cx="362" cy="37" r="4" fill="#EED902" />
                  <text
                    x="380"
                    y="34"
                    fill="#003851"
                    fontSize="13"
                    fontWeight="bold"
                  >
                    NELLA CAFÉ · N.º 679
                  </text>
                  <text
                    x="380"
                    y="50"
                    fill="#003851"
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    -8.38283, -74.53169
                  </text>
                </svg>
              </div>
            </div>

            {/* Botones Gemelos de Navegación Directa a Google Maps y Waze */}
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href={NELLA_BRAND_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#EED902] px-6 py-4 text-sm sm:text-base font-bold text-[#003851] shadow-lg transition-transform hover:scale-[1.02] whitespace-nowrap shrink-0"
              >
                <Navigation className="h-5 w-5 text-[#003851]" aria-hidden="true" />
                <span>Abrir en Google Maps</span>
                <ExternalLink className="h-4 w-4 text-[#003851]" aria-hidden="true" />
              </a>

              <a
                href={NELLA_BRAND_INFO.location.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-2xl border-2 border-[#EED902] bg-[#004B6B] px-6 py-4 text-sm sm:text-base font-bold text-white shadow-lg transition-colors hover:bg-[#EED902] hover:text-[#003851] whitespace-nowrap shrink-0"
              >
                <MapPin className="h-5 w-5 text-current" aria-hidden="true" />
                <span>Abrir Ruta en Waze</span>
                <ExternalLink className="h-4 w-4 text-current" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Columna Derecha: Panel de Horario y Contacto con Estado Claro de Validación */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 rounded-3xl border-2 border-[#EED902] bg-[#00283B]/95 p-6 sm:p-8 shadow-2xl">
            {/* Horario con Advertencia de Cierre 22:00 / 22:30 */}
            <div className="rounded-2xl border border-[#EED902]/45 bg-[#003851] p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#EED902]">
                  <Clock className="h-4 w-4 text-[#EED902]" aria-hidden="true" />
                  HORARIO DE ATENCIÓN
                </span>
                <span className="rounded-md bg-[#EED902] px-2.5 py-1 font-mono text-[10px] font-bold text-[#003851]">
                  [CONFIRMAR HORA DE CIERRE]
                </span>
              </div>

              <p className="mt-3 font-monumental text-xl font-bold text-white">
                {NELLA_BRAND_INFO.schedule.fullText}
              </p>
              <p className="mt-2 font-mono text-xs font-semibold text-[#EED902]">
                {NELLA_BRAND_INFO.schedule.panelText}
              </p>
            </div>

            {/* Conflicto de Teléfonos / WhatsApp Transparente */}
            <div className="rounded-2xl border-2 border-[#EED902] bg-[#003851] p-5">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="h-5 w-5 shrink-0 text-[#EED902] mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#EED902]">
                    {NELLA_BRAND_INFO.contact.conflictBadge}
                  </p>
                  <p className="mt-1 text-xs text-white/85 leading-relaxed">
                    Existen dos números registrados en directorios públicos. Mostramos ambos de forma transparente con nota de validación pendiente:
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {NELLA_BRAND_INFO.contact.phones.map((phone) => (
                  <div
                    key={phone.id}
                    className="rounded-xl border border-[#EED902]/40 bg-[#002638] p-3.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 font-mono text-base sm:text-lg font-bold tabular-nums text-white">
                        <Phone className="h-4 w-4 text-[#EED902]" aria-hidden="true" />
                        {phone.display}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopyText(phone.id, phone.display)}
                        className="rounded-lg bg-[#EED902] px-3 py-1.5 text-xs font-bold text-[#003851] hover:bg-[#e0cc00] cursor-pointer whitespace-nowrap shrink-0"
                      >
                        {copiedField === phone.id ? '¡Copiado!' : 'Copiar Número'}
                      </button>
                    </div>
                    <p className="mt-1.5 text-xs text-white/75">{phone.sourceNote}</p>
                    <p className="mt-1 font-mono text-[10px] font-bold text-[#EED902]">
                      {NELLA_BRAND_INFO.contact.panelWarning}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Correo Electrónico y Redes Oficiales */}
            <div className="rounded-2xl border border-[#EED902]/45 bg-[#003851] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#EED902]">
                    CORREO ELECTRÓNICO REGISTRADO
                  </p>
                  <a
                    href={`mailto:${NELLA_BRAND_INFO.contact.email}`}
                    className="mt-1 inline-flex items-center gap-2 font-mono text-sm sm:text-base font-bold text-white hover:text-[#EED902] underline underline-offset-4"
                  >
                    <Mail className="h-4 w-4 text-[#EED902]" aria-hidden="true" />
                    {NELLA_BRAND_INFO.contact.email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleCopyText('email', NELLA_BRAND_INFO.contact.email)
                  }
                  className="rounded-xl bg-[#EED902] px-3.5 py-2 text-xs font-bold text-[#003851] cursor-pointer whitespace-nowrap shrink-0"
                >
                  {copiedField === 'email' ? '¡Correo Copiado!' : 'Copiar Correo'}
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={NELLA_BRAND_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#EED902] hover:underline"
                >
                  <span>Instagram: {NELLA_BRAND_INFO.socials.instagramHandle}</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>

                <a
                  href={NELLA_BRAND_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:text-[#EED902] hover:underline"
                >
                  <span>Facebook Oficial</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
