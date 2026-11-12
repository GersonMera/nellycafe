import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Navigation,
  Copy,
  Check,
  Clock,
  Phone,
  Mail,
  ExternalLink,
  MessageCircle,
  Sparkles,
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
      className="relative overflow-hidden bg-[#003851] py-16 sm:py-24 text-white border-t border-white/10"
    >
      <DoodleTapestry interactive />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-8">
        {/* Encabezado Editorial */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex flex-col items-center">
            <span className="h-1 w-20 rounded-full bg-[#EED902]" aria-hidden="true" />
            <p className="font-descriptor my-2.5 text-xs sm:text-sm font-light uppercase tracking-[0.35em] text-[#EED902]">
              VENTANA A LA PLAZA DE ARMAS · CERCADO DE PUCALLPA
            </p>
            <span className="h-0.5 w-52 rounded-full bg-[#EED902]/80" aria-hidden="true" />
          </div>

          <h2
            id="ubicacion-heading"
            className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-white"
            style={{ textWrap: 'balance' }}
          >
            En el Corazón de Pucallpa, Frente a la Plaza de Armas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/85">
            Visítanos en nuestra ubicación física en Jr. Tarapacá 679. Puedes llegar cómodamente a pie o en vehículo guiándote con el mapa interactivo.
          </p>
        </div>

        {/* Bloque Principal: Ubicación & Mapa Real + Panel de Horarios y Contacto */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          {/* Columna Izquierda: Dirección, Mapa Interactivo de Google Maps y Navegación */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-white/15 bg-[#00283B]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-sm"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#EED902]">
                  <MapPin className="h-4 w-4 text-[#EED902]" aria-hidden="true" />
                  Punto de Referencia · Pucallpa
                </span>
                <span className="font-mono text-xs font-medium tabular-nums text-white/80 bg-[#003851] px-2.5 py-1 rounded-lg border border-white/10">
                  GPS: {NELLA_BRAND_INFO.location.coordinates.display}
                </span>
              </div>

              {/* Dirección Principal con Botones de Copiado */}
              <div className="mt-4 rounded-2xl border border-white/10 bg-[#003851] p-5">
                <p className="font-monumental text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {NELLA_BRAND_INFO.location.displayAddress}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-white/80">
                  {NELLA_BRAND_INFO.location.fullAddress}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() =>
                      handleCopyText(
                        'address',
                        `${NELLA_BRAND_INFO.location.fullAddress} (${NELLA_BRAND_INFO.location.landmark})`
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-xl bg-[#EED902] px-3.5 py-2 text-xs sm:text-sm font-bold text-[#003851] cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
                  >
                    {copiedField === 'address' ? (
                      <>
                        <Check className="h-4 w-4 text-[#003851]" aria-hidden="true" />
                        <span>¡Dirección Copiada!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-[#003851]" aria-hidden="true" />
                        <span>Copiar Dirección</span>
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() =>
                      handleCopyText(
                        'coords',
                        NELLA_BRAND_INFO.location.coordinates.display
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-[#004B6B]/80 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#004B6B] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {copiedField === 'coords' ? (
                      <>
                        <Check className="h-4 w-4 text-[#EED902]" aria-hidden="true" />
                        <span className="text-[#EED902]">Coordenadas Copiadas</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-white/80" aria-hidden="true" />
                        <span>Copiar Coordenadas</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Mapa Interactivo Real de Google Maps */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-[#002233] overflow-hidden shadow-lg">
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#002b3e] border-b border-white/10 text-xs">
                  <span className="flex items-center gap-1.5 font-semibold text-[#EED902]">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    Mapa Interactivo en Tiempo Real
                  </span>
                  <span className="text-white/70 font-mono text-[11px]">
                    Frente a la Plaza de Armas
                  </span>
                </div>

                <div className="relative w-full h-[260px] sm:h-[290px] bg-[#001d2b]">
                  <iframe
                    title="Ubicación oficial de NELLA CAFÉ en Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d829.7949235783077!2d-74.53138956792827!3d-8.382756617953437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a3bddf999bd391%3A0x3a18b689cc4648aa!2sNELLA%20CAF%C3%89!5e0!3m2!1ses-419!2spe!4v1794526428245!5m2!1ses-419!2spe"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>

                <div className="px-4 py-2 bg-[#002b3e]/90 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
                  <span className="truncate">
                    📍 Jr. Tarapacá N.º 679 · Cercado de Pucallpa
                  </span>
                  <span className="text-[#EED902] font-semibold shrink-0 ml-2">
                    Nella Café
                  </span>
                </div>
              </div>
            </div>

            {/* Botones de Navegación Directa a Google Maps y Waze */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={NELLA_BRAND_INFO.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#EED902] px-5 py-3 text-xs sm:text-sm font-bold text-[#003851] shadow-md whitespace-nowrap shrink-0"
              >
                <Navigation className="h-4 w-4 text-[#003851]" aria-hidden="true" />
                <span>Abrir en Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5 text-[#003851]" aria-hidden="true" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href={NELLA_BRAND_INFO.location.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-[#004B6B] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-colors hover:bg-[#005a80] whitespace-nowrap shrink-0"
              >
                <MapPin className="h-4 w-4 text-current" aria-hidden="true" />
                <span>Abrir Ruta en Waze</span>
                <ExternalLink className="h-3.5 w-3.5 text-current" aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>

          {/* Columna Derecha: Panel de Horario y Canales de Contacto Compacto y Equilibrado */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col justify-start gap-4 rounded-3xl border border-white/15 bg-[#00283B]/95 p-6 sm:p-7 shadow-2xl backdrop-blur-sm"
          >
            {/* Horario de Atención */}
            <div className="rounded-2xl border border-white/10 bg-[#003851] p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#EED902]">
                  <Clock className="h-4 w-4 text-[#EED902]" aria-hidden="true" />
                  HORARIO DE ATENCIÓN
                </span>
                <span className="rounded-md bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                  Abierto Todos los Días
                </span>
              </div>

              <p className="mt-2.5 font-monumental text-xl sm:text-2xl font-bold text-white">
                Lunes a Domingo
              </p>
              <p className="mt-1 font-mono text-sm font-semibold text-[#EED902]">
                De 08:00 a. m. a 10:00 p. m.
              </p>
              <p className="mt-1.5 text-xs text-white/75 leading-relaxed">
                Desayunos amazónicos, café de especialidad, almuerzos, postres artesanales y bar hasta el anochecer.
              </p>
            </div>

            {/* Líneas de Contacto & WhatsApp */}
            <div className="rounded-2xl border border-white/10 bg-[#003851] p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#EED902]">
                  <Phone className="h-4 w-4 text-[#EED902]" aria-hidden="true" />
                  ATENCIÓN & PEDIDOS
                </span>
                <span className="text-xs text-white/60">Llamada / WhatsApp</span>
              </div>

              <p className="mt-1.5 text-xs text-white/80 leading-relaxed">
                Comunícate directamente para coordinar tu visita, consultar la carta o realizar pedidos:
              </p>

              <div className="mt-3">
                {NELLA_BRAND_INFO.contact.phones.map((phone) => (
                  <div
                    key={phone.id}
                    className="rounded-xl border border-white/10 bg-[#002638] p-3 flex flex-wrap items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EED902]/15 text-[#EED902]">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-mono text-base font-bold tabular-nums text-white">
                          {phone.display}
                        </span>
                        <p className="text-[11px] text-white/60">Línea directa</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/${phone.raw.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-500 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => handleCopyText(phone.id, phone.display)}
                        className="rounded-lg border border-white/20 bg-[#004B6B] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#005a80] cursor-pointer whitespace-nowrap"
                      >
                        {copiedField === phone.id ? '¡Copiado!' : 'Copiar'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Correo Electrónico y Redes Sociales */}
            <div className="rounded-2xl border border-white/10 bg-[#003851] p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#EED902]">
                    CORREO ELECTRÓNICO
                  </p>
                  <a
                    href={`mailto:${NELLA_BRAND_INFO.contact.email}`}
                    className="mt-1 inline-flex items-center gap-2 font-mono text-sm sm:text-base font-semibold text-white hover:text-[#EED902] transition-colors"
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
                  className="rounded-xl bg-[#EED902] px-3 py-1.5 text-xs font-bold text-[#003851] hover:bg-[#e0cc00] cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
                >
                  {copiedField === 'email' ? '¡Copiado!' : 'Copiar Correo'}
                </button>
              </div>

              <div className="mt-3.5 pt-3.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
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

            {/* Comodidades & Servicios del Local */}
            <div className="rounded-2xl border border-white/10 bg-[#003851] p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#EED902]">
                  <Sparkles className="h-4 w-4 text-[#EED902]" aria-hidden="true" />
                  COMODIDADES EN EL LOCAL
                </span>
                <span className="text-xs text-white/60">Pucallpa</span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 rounded-xl bg-[#002638] px-3 py-2 border border-white/10 text-white/90">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <span>Aire Acondicionado</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-[#002638] px-3 py-2 border border-white/10 text-white/90">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <span>Wi-Fi para Clientes</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-[#002638] px-3 py-2 border border-white/10 text-white/90">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <span>Frente a la Plaza</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-[#002638] px-3 py-2 border border-white/10 text-white/90">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <span>Atención en Salón</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
