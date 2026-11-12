import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Compass,
  BookOpen,
  ExternalLink,
  Navigation,
  Share2,
  X,
  Menu,
  Phone,
} from 'lucide-react';
import {
  NELLA_BRAND_INFO,
  NELLA_HERO_ARCHES,
} from './nellaMenuData.js';
import { NellaLogoSVG } from './components/NellaLogoSVG.tsx';
import { DoodleTapestry } from './components/DoodleTapestry.tsx';
import { BotanicalArchVisual, BotanicalMotif } from './components/BotanicalArchVisual.tsx';
import { MomentsClockSection } from './components/MomentsClockSection.tsx';
import { MenuExplorerSection } from './components/MenuExplorerSection.tsx';
import { ExperienceAndGallerySection } from './components/ExperienceAndGallerySection.tsx';
import { LocationAndContactSection } from './components/LocationAndContactSection.tsx';

const MARQUEE_TEXT =
  'NELLA CAFÉ ★ COFFEE - BAR ★ FRENTE A LA PLAZA DE ARMAS DE PUCALLPA ★ COLD BREW DE CAMU CAMU ★ DESAYUNO AMAZÓNICO ★ CHEESECAKE DE SAÚCO ★ JR. TARAPACÁ 679 ★ ';

export default function App() {
  const [activeMomentId, setActiveMomentId] = useState<string>('manana');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [momentFilter, setMomentFilter] = useState<string>('all');
  const [routeSheetOpen, setRouteSheetOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleExploreMomentInMenu = (momentId: string) => {
    setMomentFilter(momentId);
    setSelectedCategory('all');
    const cartaEl = document.getElementById('carta');
    if (cartaEl) {
      cartaEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#003851] text-white flex flex-col pb-16 md:pb-0">
      {/* HEADER FLOTANTE ELEGANTE (Sin bordes estridentes, mayor presencia del logo) */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#003851]/95 backdrop-blur-md shadow-md shadow-black/20">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
          {/* Zona 1: Marca (Logo vectorial Nella Café COFFEE - BAR con mayor visibilidad) */}
          <a
            href="#inicio"
            aria-label="Nella Café — COFFEE - BAR, ir al inicio"
            className="flex items-center gap-2 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#EED902] transition-transform hover:scale-[1.02]"
          >
            <NellaLogoSVG variant="header" className="h-12 sm:h-14 md:h-16" />
          </a>

          {/* Zona 2: Navegación de escritorio (lg+) */}
          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-white/90"
          >
            <a
              href="#momentos"
              className="hover:text-[#EED902] transition-colors underline-offset-8 hover:underline whitespace-nowrap shrink-0"
            >
              Momentos
            </a>
            <a
              href="#especialidades"
              className="hover:text-[#EED902] transition-colors underline-offset-8 hover:underline whitespace-nowrap shrink-0"
            >
              Especialidades
            </a>
            <a
              href="#carta"
              className="hover:text-[#EED902] transition-colors underline-offset-8 hover:underline whitespace-nowrap shrink-0"
            >
              Carta
            </a>
            <a
              href="#experiencia"
              className="hover:text-[#EED902] transition-colors underline-offset-8 hover:underline whitespace-nowrap shrink-0"
            >
              Experiencia
            </a>
            <a
              href="#ubicacion"
              className="hover:text-[#EED902] transition-colors underline-offset-8 hover:underline whitespace-nowrap shrink-0"
            >
              Ubicación
            </a>
          </nav>

          {/* Zona 3: Acciones en Header (Desktop, Tablet y Móvil) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Botón Cómo Llegar: versión completa en tablet/desktop, versión compacta o con icono en móvil */}
            <a
              href="#ubicacion"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl bg-[#EED902] px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-[#003851] shadow-sm transition-transform hover:scale-[1.02] whitespace-nowrap shrink-0"
            >
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#003851] shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">Frente a la Plaza · Cómo Llegar</span>
              <span className="inline sm:hidden">Cómo Llegar</span>
            </a>

            {/* Botón de Menú Hamburguesa para Móvil y Tablet (oculto en lg+) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-xl border border-[#EED902]/40 bg-[#004B6B] text-[#EED902] hover:bg-[#005A80] transition-colors cursor-pointer shrink-0"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-[#EED902]" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5 text-[#EED902]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Panel Desplegable de Navegación Móvil / Tablet con AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-drawer-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-white/10 bg-[#002B3E] px-4 py-5 shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-1">
                  <span className="font-descriptor text-xs uppercase tracking-widest text-[#EED902]">
                    Navegación Nella Café
                  </span>
                  <span className="text-xs text-white/70">Jr. Tarapacá 679</span>
                </div>

                {[
                  { label: '01 · Momentos del Día', href: '#momentos' },
                  { label: '02 · Especialidades en Arco', href: '#especialidades' },
                  { label: '03 · Carta Gastronómica', href: '#carta' },
                  { label: '04 · Experiencia & Mural', href: '#experiencia' },
                  { label: '05 · Ubicación & Horario', href: '#ubicacion' },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-white/95 hover:bg-[#EED902] hover:text-[#003851] transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono opacity-60">→</span>
                  </a>
                ))}

                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setRouteSheetOpen(true);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#004B6B] border border-[#EED902] py-2.5 text-xs font-bold text-white hover:bg-[#EED902] hover:text-[#003851] transition-colors"
                  >
                    <Navigation className="h-4 w-4" aria-hidden="true" />
                    <span>Google Maps / Waze</span>
                  </button>
                  <a
                    href={`tel:${NELLA_BRAND_INFO.contact.phones[0].raw}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#EED902] px-4 py-2.5 text-xs font-bold text-[#003851]"
                  >
                    <Phone className="h-4 w-4 text-[#003851]" aria-hidden="true" />
                    <span>Llamar</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="inicio" className="flex-1">
        {/* HERO MAXIMALISTA ("EL CORAZÓN DE PUCALLPA") */}
        <section
          aria-labelledby="hero-heading"
          className="relative overflow-hidden bg-[#003851] pt-6 pb-16 sm:pt-10 sm:pb-20"
        >
          {/* Tapiz Interactivo de Doodles ("Living Doodle Wallpaper") */}
          <DoodleTapestry interactive />

          <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-8">
            {/* Bloque Central Monumental con Animación Escalonada */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mx-auto max-w-4xl text-center"
            >
              {/* Recreación Vectorial en Código del Logotipo Oficial */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-3 flex justify-center"
              >
                <NellaLogoSVG variant="hero" />
              </motion.div>

              {/* Ubicación de Oro Coronada por Líneas Horizontales Amarillas */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.2 }}
                className="inline-flex flex-col items-center"
              >
                <span className="h-1 w-20 rounded-full bg-[#EED902]" aria-hidden="true" />
                <p className="font-descriptor my-1.5 text-xs sm:text-sm font-light uppercase tracking-[0.35em] text-[#EED902]">
                  JR. TARAPACÁ N.º 679 · FRENTE A LA PLAZA DE ARMAS DE PUCALLPA
                </p>
                <span className="h-0.5 w-60 rounded-full bg-[#EED902]/80" aria-hidden="true" />
              </motion.div>

              {/* Titular Monumental con la "N" Amarilla y Hojitas Vectoriales */}
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                id="hero-heading"
                className="mt-4 font-monumental text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.94] text-white"
                style={{ textWrap: 'balance' }}
              >
                <span className="relative inline-block text-[#EED902]">
                  N
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 36 30"
                    className="pointer-events-none absolute -top-4 -right-2.5 h-6 w-6 animate-botanical-sway"
                  >
                    <path d="M12 26 C6 15 10 4 17 6 C22 8 19 19 14 26 Z" fill="#EED902" />
                    <path d="M15 26 C22 15 33 12 34 19 C35 25 24 28 15 26 Z" fill="#EED902" />
                  </svg>
                </span>
                ELLA CAFÉ: EL ESPACIO PERFECTO PARA CUALQUIER MOMENTO DEL DÍA
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mx-auto mt-3.5 max-w-2xl text-sm sm:text-lg text-white/90 leading-relaxed"
              >
                “{NELLA_BRAND_INFO.institutionalPhrase}.” Refugio botánico climatizado desde el Desayuno Amazónico y el Cold Brew de Camu Camu hasta noches de Coffee-Bar.
              </motion.p>

              {/* Botones Principales del Hero con Micro-interacciones Táctiles */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-6 flex flex-wrap items-center justify-center gap-3.5"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => scrollToSection('carta')}
                  className="inline-flex items-center gap-2.5 rounded-2xl bg-[#EED902] px-6 py-3.5 text-sm sm:text-base font-bold text-[#003851] shadow-[0_12px_30px_rgba(238,217,2,0.3)] cursor-pointer whitespace-nowrap shrink-0"
                >
                  <BookOpen className="h-5 w-5 text-[#003851]" aria-hidden="true" />
                  <span>Explorar la Carta</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => setRouteSheetOpen(true)}
                  className="inline-flex items-center gap-2.5 rounded-2xl border-2 border-[#EED902] bg-[#004B6B]/80 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg transition-colors hover:bg-[#EED902] hover:text-[#003851] cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Compass className="h-5 w-5 text-current" aria-hidden="true" />
                  <span>Abrir Ruta (Google Maps / Waze)</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* TRES GRANDES VENTANALES EN ARCO CON ANIMACIÓN ESCALONADA AL SCROLL */}
            <div
              id="especialidades"
              aria-label="Especialidades insignia en Ventanales de Arco Botánico"
              className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3 items-stretch"
            >
              {NELLA_HERO_ARCHES.map((arch, idx) => (
                <motion.div
                  key={arch.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: idx * 0.12 }}
                  whileHover={{ y: -6 }}
                  className={`flex flex-col justify-between ${
                    idx === 1 ? 'md:-translate-y-4' : ''
                  }`}
                >
                  <BotanicalArchVisual
                    src={arch.image}
                    alt={`${arch.title} en Nella Café Pucallpa`}
                    motif={arch.svgMotif as BotanicalMotif}
                    aspectClass="aspect-[3/4]"
                  >
                    <div className="space-y-2">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#EED902]">
                        {arch.kicker}
                      </p>
                      <h2 className="font-monumental text-2xl sm:text-3xl font-bold text-white leading-tight">
                        {arch.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                        {arch.subtitle}
                      </p>
                      <div className="pt-2">
                        <span className="inline-block rounded-lg bg-[#EED902] px-2.5 py-1 font-mono text-[10px] font-bold text-[#003851]">
                          {arch.priceNotice}
                        </span>
                      </div>
                    </div>
                  </BotanicalArchVisual>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CINTA CINÉTICA (MARQUEE) EN AMARILLO BOTÁNICO (#EED902) CON TEXTO #003851 EN NEGRITA */}
        <div
          aria-label="Cinta de especialidades de Nella Café"
          className="relative z-20 overflow-hidden border-y-2 border-[#003851] bg-[#EED902] py-3.5 text-[#003851] shadow-md"
        >
          <div className="animate-marquee flex items-center">
            <span className="mx-4 font-monumental text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#003851] whitespace-nowrap">
              {MARQUEE_TEXT.repeat(3)}
            </span>
            <span
              aria-hidden="true"
              className="mx-4 font-monumental text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#003851] whitespace-nowrap"
            >
              {MARQUEE_TEXT.repeat(3)}
            </span>
          </div>
        </div>

        {/* SECCIÓN 1: EXPERIENCIA INTERACTIVA "LOS 4 MOMENTOS DEL DÍA" */}
        <MomentsClockSection
          activeMomentId={activeMomentId}
          onSelectMoment={setActiveMomentId}
          onExploreMomentInMenu={handleExploreMomentInMenu}
        />

        {/* SECCIÓN 2: EXPLORADOR DE CARTA COMPLETA POR CATEGORÍAS */}
        <MenuExplorerSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          momentFilter={momentFilter}
          onMomentFilterChange={setMomentFilter}
        />

        {/* SECCIÓN 3: LA EXPERIENCIA NELLA & GALERÍA DE POSTALES */}
        <ExperienceAndGallerySection />

        {/* SECCIÓN 4: UBICACIÓN PRIVILEGIADA Y CONTACTO TRANSPARENTE */}
        <LocationAndContactSection />
      </main>

      {/* FOOTER EDITORIAL SOBRE EL TAPIZ #003851 */}
      <footer className="relative overflow-hidden bg-[#002233] pt-16 pb-14 text-white border-t-2 border-[#EED902]/40">
        <DoodleTapestry interactive={false} className="opacity-45" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center border-b border-[#EED902]/25 pb-12">
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <NellaLogoSVG variant="footer" />
              <p className="mt-4 max-w-md text-sm text-white/80 leading-relaxed">
                “{NELLA_BRAND_INFO.institutionalPhrase}”
              </p>
            </div>

            <div className="lg:col-span-4 space-y-2 text-center lg:text-left">
              <p className="font-descriptor text-xs font-light uppercase tracking-[0.35em] text-[#EED902]">
                DIRECCIÓN & HORARIO
              </p>
              <p className="font-monumental text-lg font-bold text-white">
                {NELLA_BRAND_INFO.location.displayAddress}
              </p>
              <p className="text-xs text-white/75">
                {NELLA_BRAND_INFO.schedule.fullText}
              </p>
              <p className="font-mono text-xs text-[#EED902]">
                Correo: {NELLA_BRAND_INFO.contact.email}
              </p>
            </div>

            <div className="lg:col-span-3 flex flex-col items-center lg:items-end gap-3">
              <a
                href={NELLA_BRAND_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#EED902] px-5 py-3 text-xs sm:text-sm font-bold text-[#003851] transition-transform hover:scale-[1.02] whitespace-nowrap shrink-0"
              >
                <span>Instagram {NELLA_BRAND_INFO.socials.instagramHandle}</span>
                <ExternalLink className="h-4 w-4 text-[#003851]" aria-hidden="true" />
              </a>

              <a
                href={NELLA_BRAND_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#EED902] bg-[#003851] px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-[#004B6B] whitespace-nowrap shrink-0"
              >
                <span>Facebook Oficial Nella Café</span>
                <ExternalLink className="h-4 w-4 text-[#EED902]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Nota Registral y Transparencia de Datos */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-white/75">
            <p className="font-mono font-semibold text-[#EED902]">
              {NELLA_BRAND_INFO.corporate.footerNotice}
            </p>
            <p>
              Jr. Tarapacá N.º 679, Cercado de Pucallpa (Callería, Coronel Portillo, Ucayali - CP 25001)
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-[#EED902]/15 text-center text-xs text-white/60">
            <p>
              Desarrollado por{' '}
              <a
                href="https://github.com/GersonMera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EED902] hover:underline font-semibold"
              >
                GersonMera
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM BAR EN MÓVIL (<= 15% viewport height) */}
      <nav
        aria-label="Acciones rápidas móviles"
        className="fixed bottom-0 inset-x-0 z-40 border-t-2 border-[#EED902] bg-[#003851]/98 px-3 py-2 shadow-[0_-8px_24px_rgba(0,0,0,0.45)] md:hidden"
      >
        <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => scrollToSection('carta')}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-[#EED902] px-2.5 py-2.5 text-xs font-bold text-[#003851] cursor-pointer whitespace-nowrap shrink-0"
          >
            <BookOpen className="h-4 w-4 text-[#003851] shrink-0" aria-hidden="true" />
            <span>Ver Carta</span>
          </button>

          <button
            type="button"
            onClick={() => setRouteSheetOpen(true)}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-[#EED902] bg-[#004B6B] px-2.5 py-2.5 text-xs font-bold text-white cursor-pointer whitespace-nowrap shrink-0"
          >
            <Navigation className="h-4 w-4 text-[#EED902] shrink-0" aria-hidden="true" />
            <span>Maps / Waze</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('ubicacion')}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-[#EED902]/50 bg-[#00283B] px-2.5 py-2.5 text-xs font-bold text-white cursor-pointer whitespace-nowrap shrink-0"
          >
            <Share2 className="h-4 w-4 text-[#EED902] shrink-0" aria-hidden="true" />
            <span>Redes / Contacto</span>
          </button>
        </div>
      </nav>

      {/* MODAL DE NAVEGACIÓN DIRECTA CON ANIMACIÓN FLUIDA */}
      <AnimatePresence>
        {routeSheetOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="route-dialog-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-lg rounded-3xl border border-[#EED902]/50 bg-[#003851] p-6 sm:p-8 text-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setRouteSheetOpen(false)}
                aria-label="Cerrar selector de ruta"
                className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#EED902] text-[#003851] font-bold hover:scale-105 cursor-pointer"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#EED902]">
                RUTA CONFIRMADA · PUCALLPA
              </p>
              <h2
                id="route-dialog-title"
                className="mt-1 font-monumental text-2xl sm:text-3xl font-bold text-white"
              >
                Cómo llegar a Nella Café
              </h2>
              <p className="mt-2 text-sm text-white/85">
                {NELLA_BRAND_INFO.location.fullAddress} —{' '}
                <strong className="text-[#EED902]">{NELLA_BRAND_INFO.location.landmark}</strong>{' '}
                (Coordenadas: {NELLA_BRAND_INFO.location.coordinates.display}).
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={NELLA_BRAND_INFO.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-between rounded-2xl bg-[#EED902] px-5 py-4 text-sm sm:text-base font-bold text-[#003851] transition-transform hover:scale-[1.01]"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Navigation className="h-5 w-5 text-[#003851]" aria-hidden="true" />
                    <span>Abrir Ruta en Google Maps</span>
                  </span>
                  <ExternalLink className="h-4 w-4 text-[#003851]" aria-hidden="true" />
                </a>

                <a
                  href={NELLA_BRAND_INFO.location.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-between rounded-2xl border-2 border-[#EED902] bg-[#004B6B] px-5 py-4 text-sm sm:text-base font-bold text-white transition-colors hover:bg-[#EED902] hover:text-[#003851]"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <MapPin className="h-5 w-5 text-current" aria-hidden="true" />
                    <span>Iniciar Navegación en Waze</span>
                  </span>
                  <ExternalLink className="h-4 w-4 text-current" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/75">
                <span>Horario desde las 08:00 a. m.</span>
                <button
                  type="button"
                  onClick={() => setRouteSheetOpen(false)}
                  className="font-bold text-[#EED902] underline cursor-pointer"
                >
                  Cerrar ventana
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
