import React, { useState } from 'react';
import { Wind, Wifi, Users, Sparkles, CheckCircle2, HelpCircle } from 'lucide-react';
import { NELLA_BRAND_INFO, NELLA_EXPERIENCE_ATTRIBUTES, NELLA_POSTCARDS } from '../nellaMenuData.js';
import { BotanicalArchVisual, BotanicalMotif } from './BotanicalArchVisual.tsx';
import { DoodleTapestry } from './DoodleTapestry.tsx';
import { LazyFadeImage } from './LazyFadeImage.tsx';

export const ExperienceAndGallerySection: React.FC = () => {
  const [activePostcardId, setActivePostcardId] = useState(NELLA_POSTCARDS[0].id);

  const selectedPostcard =
    NELLA_POSTCARDS.find((p) => p.id === activePostcardId) || NELLA_POSTCARDS[0];

  const getAttrIcon = (id: string) => {
    switch (id) {
      case 'mural-botanico':
        return <Sparkles className="h-5 w-5 text-[#EED902]" aria-hidden="true" />;
      case 'aire-acondicionado':
        return <Wind className="h-5 w-5 text-[#EED902]" aria-hidden="true" />;
      case 'trabajo-social':
        return <Users className="h-5 w-5 text-[#EED902]" aria-hidden="true" />;
      default:
        return <Wifi className="h-5 w-5 text-[#EED902]" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-heading"
      className="relative overflow-hidden bg-[#1E4D3B] py-20 sm:py-28 text-white border-b-4 border-[#EED902]"
    >
      {/* Tapiz sutil de doodles sobre el Verde Mural Botánico */}
      <DoodleTapestry interactive className="opacity-65" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-8">
        {/* Bloque 1: La Experiencia Nella (Composición Asimétrica con Arcos) */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex flex-col items-start">
              <span className="h-1 w-20 rounded-full bg-[#EED902]" aria-hidden="true" />
              <p className="font-descriptor my-2 text-xs sm:text-sm font-light uppercase tracking-[0.35em] text-[#EED902]">
                LA EXPERIENCIA NELLA · OASIS URBANO
              </p>
              <span className="h-0.5 w-56 rounded-full bg-[#EED902]/80" aria-hidden="true" />
            </div>

            <h2
              id="experiencia-heading"
              className="text-4xl sm:text-6xl font-bold tracking-tight leading-[0.95] text-white"
              style={{ textWrap: 'balance' }}
            >
              Mural Botánico, Ratán Cálido y Frescura frente a la Plaza
            </h2>

            <blockquote className="rounded-2xl border-2 border-[#EED902] bg-[#003851]/90 p-5 sm:p-6 shadow-xl">
              <p className="font-monumental text-xl sm:text-2xl font-bold text-[#EED902] leading-snug">
                “{NELLA_BRAND_INFO.institutionalPhrase}”
              </p>
              <footer className="mt-2 text-xs font-medium uppercase tracking-widest text-white/80">
                — Frase Institucional Publicada · Nella Café Pucallpa
              </footer>
            </blockquote>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed">
              {NELLA_BRAND_INFO.essence}
            </p>

            {/* Tarjetas de Atributos del Local y Servicios por Confirmar */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
              {NELLA_EXPERIENCE_ATTRIBUTES.map((attr) => (
                <div
                  key={attr.id}
                  className="flex flex-col justify-between rounded-2xl border border-[#EED902]/45 bg-[#003851]/90 p-5 shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#EED902]/40 bg-[#004B6B]">
                        {getAttrIcon(attr.id)}
                      </span>
                      {attr.confirmed ? (
                        <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#EED902]">
                          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                          {attr.status}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-md bg-[#EED902] px-2 py-0.5 font-mono text-[10px] font-bold text-[#003851]">
                          <HelpCircle className="h-3 w-3" aria-hidden="true" />
                          POR CONFIRMAR
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 font-monumental text-lg font-bold text-white">
                      {attr.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-white/80 leading-relaxed">
                      {attr.description}
                    </p>
                  </div>

                  {!attr.confirmed && (
                    <p className="mt-3 pt-2 border-t border-white/15 font-mono text-[10px] font-bold text-[#EED902]">
                      {attr.status}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Composición Asimétrica de Arcos Botánicos a la Derecha */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-end">
            <div className="sm:col-span-7">
              <BotanicalArchVisual
                src={selectedPostcard.image}
                alt={`${selectedPostcard.title} — ${selectedPostcard.caption}`}
                motif={(selectedPostcard.svgMotif as BotanicalMotif) || 'coffee'}
                aspectClass="aspect-[3/4]"
              >
                <div className="space-y-1">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#EED902]">
                    {selectedPostcard.tag}
                  </p>
                  <h3 className="font-monumental text-2xl font-bold text-white">
                    {selectedPostcard.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90">
                    {selectedPostcard.caption}
                  </p>
                </div>
              </BotanicalArchVisual>
            </div>

            <div className="sm:col-span-5 space-y-5">
              <BotanicalArchVisual
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=700&q=80"
                alt="Salón interior con madera cálida y plantas en Nella Café"
                motif="croissant"
                aspectClass="aspect-square"
                showBotanicalLeaves={false}
              >
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#EED902]">
                    REFUGIO EN EL CENTRO
                  </p>
                  <p className="font-monumental text-base font-bold text-white">
                    Madera, Ratán & A/C
                  </p>
                </div>
              </BotanicalArchVisual>

              {/* Sello Arquitectónico de Identidad Oficial con LazyFadeImage */}
              <div className="rounded-3xl border-2 border-[#EED902] bg-[#003851] p-5 text-center shadow-lg">
                <LazyFadeImage
                  src="/assets/aistudio/image_c2ee0c59.png"
                  alt="Emblema oficial de Nella Café — COFFEE - BAR sobre tapiz azul petróleo"
                  wrapperClassName="relative mx-auto h-32 w-32 overflow-hidden rounded-2xl border border-[#EED902]/60 shadow-md bg-[#004B6B]"
                  className="h-full w-full object-cover"
                />
                <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-wider text-[#EED902]">
                  IDENTIDAD OFICIAL · PUCALLPA
                </p>
                <p className="mt-1 text-xs text-white/80">
                  Azul Petróleo (#003851) · Amarillo Botánico (#EED902)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloque 2: Galería Interactiva de Postales Botánicas */}
        <div className="mt-20 pt-14 border-t-2 border-[#EED902]/35">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-descriptor text-xs font-light uppercase tracking-[0.35em] text-[#EED902]">
                GALERÍA DE POSTALES · REPERTORIO CURADO
              </p>
              <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
                Postales desde el Corazón de Pucallpa
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-white/80 max-w-md">
              Haz clic en cualquier postal para proyectarla en el Ventanal Principal de Terraza.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {NELLA_POSTCARDS.map((postcard, index) => {
              const isSelected = postcard.id === activePostcardId;
              return (
                <button
                  key={postcard.id}
                  type="button"
                  onClick={() => setActivePostcardId(postcard.id)}
                  aria-pressed={isSelected}
                  className={`group text-left rounded-t-[2.25rem] rounded-b-2xl border-2 p-3 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#EED902] bg-[#EED902] text-[#003851] shadow-[0_12px_30px_rgba(238,217,2,0.28)] -translate-y-1'
                      : 'border-[#EED902]/40 bg-[#003851]/85 text-white hover:border-[#EED902]'
                  }`}
                >
                  <LazyFadeImage
                    src={postcard.image}
                    alt={postcard.title}
                    mobileTargetWidth={560}
                    mobileQuality={75}
                    wrapperClassName="relative overflow-hidden rounded-t-[1.85rem] rounded-b-xl aspect-[4/3] bg-[#004B6B]"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="mt-3 px-1">
                    <p
                      className={`font-mono text-[10px] font-bold uppercase tracking-wider ${
                        isSelected ? 'text-[#003851]' : 'text-[#EED902]'
                      }`}
                    >
                      POSTAL 0{index + 1} · {isSelected ? 'EN PANTALLA' : 'VER EN ARCO'}
                    </p>
                    <h4
                      className={`mt-0.5 font-monumental text-lg font-bold ${
                        isSelected ? 'text-[#003851]' : 'text-white'
                      }`}
                    >
                      {postcard.title}
                    </h4>
                    <p
                      className={`mt-1 text-xs leading-snug ${
                        isSelected ? 'text-[#003851]/90 font-medium' : 'text-white/75'
                      }`}
                    >
                      {postcard.caption}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
