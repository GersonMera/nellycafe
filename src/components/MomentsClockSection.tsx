import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Sunset, Moon, Coffee, ArrowDownRight } from 'lucide-react';
import { NELLA_MOMENTS } from '../nellaMenuData.js';
import { BotanicalArchVisual, BotanicalMotif } from './BotanicalArchVisual.tsx';
import { DoodleTapestry } from './DoodleTapestry.tsx';

interface MomentsClockSectionProps {
  activeMomentId: string;
  onSelectMoment: (momentId: string) => void;
  onExploreMomentInMenu: (momentId: string) => void;
}

export const MomentsClockSection: React.FC<MomentsClockSectionProps> = ({
  activeMomentId,
  onSelectMoment,
  onExploreMomentInMenu,
}) => {
  const activeMoment =
    NELLA_MOMENTS.find((m) => m.id === activeMomentId) || NELLA_MOMENTS[0];

  const getMomentIcon = (id: string) => {
    switch (id) {
      case 'manana':
        return <Coffee className="h-5 w-5" aria-hidden="true" />;
      case 'almuerzo':
        return <Sun className="h-5 w-5" aria-hidden="true" />;
      case 'tarde':
        return <Sunset className="h-5 w-5" aria-hidden="true" />;
      case 'noche':
        return <Moon className="h-5 w-5" aria-hidden="true" />;
      default:
        return <Coffee className="h-5 w-5" aria-hidden="true" />;
    }
  };

  const getMomentMotif = (id: string): BotanicalMotif => {
    switch (id) {
      case 'manana':
        return 'breakfast';
      case 'almuerzo':
        return 'pasta';
      case 'tarde':
        return 'coldbrew';
      case 'noche':
        return 'sandwich';
      default:
        return 'coffee';
    }
  };

  return (
    <section
      id="momentos"
      aria-labelledby="momentos-heading"
      className="relative overflow-hidden bg-[#003851] py-20 sm:py-28 border-b-2 border-[#EED902]/40"
    >
      <DoodleTapestry interactive />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-8">
        {/* Encabezado Editorial con Barras Horizontales Amarillas del Logo */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex flex-col items-center">
            <span className="h-1 w-20 rounded-full bg-[#EED902]" aria-hidden="true" />
            <p className="font-descriptor my-2.5 text-xs sm:text-sm font-light uppercase tracking-[0.35em] text-[#EED902]">
              EL RELOJ SOLAR & NOCTURNO · COFFEE - BAR
            </p>
            <span className="h-0.5 w-48 rounded-full bg-[#EED902]/80" aria-hidden="true" />
          </div>

          <h2
            id="momentos-heading"
            className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-[0.95] text-white"
            style={{ textWrap: 'balance' }}
          >
            <span className="relative inline-block text-[#EED902]">
              N
              <svg
                aria-hidden="true"
                viewBox="0 0 36 30"
                className="pointer-events-none absolute -top-4 -right-3 h-6 w-6 animate-botanical-sway"
              >
                <path d="M12 26 C6 15 10 4 17 6 C22 8 19 19 14 26 Z" fill="#EED902" />
                <path d="M15 26 C22 15 33 12 34 19 C35 25 24 28 15 26 Z" fill="#EED902" />
              </svg>
            </span>
            ella Café en 4 Momentos del Día
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed">
            Selecciona una hora en nuestro dial frente a la Plaza de Armas de Pucallpa y descubre cómo evoluciona la carta desde las 08:00 a. m. hasta la noche.
          </p>
        </div>

        {/* Conmutador Visual Gigante con forma de Arco Solar / Nocturno */}
        <div
          role="tablist"
          aria-label="Seleccionar momento del día en Nella Café"
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {NELLA_MOMENTS.map((moment, idx) => {
            const isSelected = moment.id === activeMoment.id;
            return (
              <motion.button
                key={moment.id}
                type="button"
                role="tab"
                id={`tab-moment-${moment.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-moment-${moment.id}`}
                onClick={() => onSelectMoment(moment.id)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative flex flex-col justify-between rounded-t-3xl rounded-b-2xl border-2 p-5 text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#EED902] text-[#003851] border-[#EED902] shadow-[0_14px_34px_rgba(238,217,2,0.28)] -translate-y-1'
                    : 'bg-[#004B6B]/65 text-white border-[#EED902]/40 hover:border-[#EED902] hover:bg-[#004B6B]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-mono text-xs font-bold tracking-wider uppercase ${
                      isSelected ? 'text-[#003851]' : 'text-[#EED902]'
                    }`}
                  >
                    0{idx + 1} · {moment.time}
                  </span>
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full border ${
                      isSelected
                        ? 'border-[#003851]/30 bg-[#003851] text-[#EED902]'
                        : 'border-[#EED902]/40 bg-[#003851]/70 text-[#EED902]'
                    }`}
                  >
                    {getMomentIcon(moment.id)}
                  </span>
                </div>

                <div className="mt-4">
                  <p
                    className={`font-monumental text-xl font-bold leading-tight ${
                      isSelected ? 'text-[#003851]' : 'text-white'
                    }`}
                  >
                    {moment.shortTitle}
                  </p>
                  <p
                    className={`mt-1 text-xs leading-snug ${
                      isSelected ? 'text-[#003851]/90 font-semibold' : 'text-white/75'
                    }`}
                  >
                    {moment.label}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Panel Activo del Momento Seleccionado con Transición Suave AnimatePresence */}
        <div
          role="tabpanel"
          id={`panel-moment-${activeMoment.id}`}
          aria-labelledby={`tab-moment-${activeMoment.id}`}
          className="mt-10 overflow-hidden rounded-3xl border-2 border-[#EED902] bg-[#002B3F]/90 p-6 sm:p-10 shadow-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMoment.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
            >
              {/* Ventanal en Arco del Momento */}
              <div className="lg:col-span-5">
                <BotanicalArchVisual
                  src={activeMoment.heroImage}
                  alt={`${activeMoment.label} en Nella Café Pucallpa`}
                  motif={getMomentMotif(activeMoment.id)}
                  aspectClass="aspect-[4/5]"
                >
                  <div className="space-y-1.5">
                    <p className="font-mono text-xs uppercase tracking-widest text-[#EED902]">
                      {activeMoment.time} · FRENTE A LA PLAZA
                    </p>
                    <p className="font-monumental text-2xl font-bold text-white">
                      {activeMoment.shortTitle}
                    </p>
                    <p className="text-xs text-white/85">{activeMoment.atmosphereTag}</p>
                  </div>
                </BotanicalArchVisual>
              </div>

              {/* Detalle Gastronómico y Especialidades del Momento */}
              <div className="lg:col-span-7 space-y-6">
                <div className="border-b border-[#EED902]/30 pb-5">
                  <p className="font-descriptor text-xs font-light uppercase tracking-[0.35em] text-[#EED902]">
                    TU MOMENTO EN NELLA · {activeMoment.time}
                  </p>
                  <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-white leading-tight">
                    {activeMoment.tagline}
                  </h3>
                  <p className="mt-3 text-base sm:text-lg text-white/85 leading-relaxed">
                    {activeMoment.description}
                  </p>
                </div>

                {/* Tarjetas de Especialidades Destacadas en este horario */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {activeMoment.highlights.map((item, hIdx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: hIdx * 0.08 }}
                      whileHover={{ y: -3 }}
                      className="flex flex-col justify-between rounded-2xl border border-[#EED902]/35 bg-[#003851]/90 p-4 transition-colors hover:border-[#EED902]"
                    >
                      <div>
                        <p className="text-xs font-medium text-[#EED902]">
                          {item.category}
                        </p>
                        <h4 className="mt-1 font-monumental text-lg font-bold text-white">
                          {item.name}
                        </h4>
                        <p className="mt-1.5 text-sm text-white/80 leading-relaxed">
                          {item.note}
                        </p>
                      </div>
                      <p className="mt-3 pt-2 border-t border-white/10 font-mono text-[11px] font-semibold text-[#EED902]">
                        {item.priceStatus}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-white/75">
                    Horario general: Lunes a Domingo de 08:00 a. m. a 10:00 p. m.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={() => onExploreMomentInMenu(activeMoment.id)}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#EED902] px-5 py-3 text-sm font-bold text-[#003851] shadow-md cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Ver Platos de {activeMoment.shortTitle} en la Carta</span>
                    <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
