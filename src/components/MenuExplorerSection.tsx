import React from 'react';
import { Search, X, Sparkles, Compass } from 'lucide-react';
import {
  NELLA_CATEGORIES,
  NELLA_MENU_ITEMS,
  NELLA_MOMENTS,
  PRICE_BADGE_PRIMARY,
  filterMenuItems,
} from '../nellaMenuData.js';
import { BotanicalArchVisual, BotanicalMotif } from './BotanicalArchVisual.tsx';

interface MenuExplorerSectionProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  momentFilter: string;
  onMomentFilterChange: (momentId: string) => void;
}

export const MenuExplorerSection: React.FC<MenuExplorerSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  momentFilter,
  onMomentFilterChange,
}) => {
  const filteredItems = filterMenuItems(NELLA_MENU_ITEMS, {
    categoryId: selectedCategory,
    searchQuery,
    momentId: momentFilter,
  });

  const activeCategoryMeta =
    NELLA_CATEGORIES.find((cat) => cat.id === selectedCategory) || NELLA_CATEGORIES[0];

  const handleResetFilters = () => {
    onSelectCategory('all');
    onSearchChange('');
    onMomentFilterChange('all');
  };

  return (
    <section
      id="carta"
      aria-labelledby="carta-heading"
      className="relative bg-[#F7F4EB] text-[#003851] py-20 sm:py-28 border-b-4 border-[#EED902]"
    >
      {/* Textura botánica sutil en las esquinas superiores */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8">
        {/* Encabezado de Sección en Superficie Cálida de Día (#F7F4EB) */}
        <div className="flex flex-col items-start justify-between gap-6 border-b-2 border-[#003851]/15 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex flex-col items-start">
              <span className="h-1 w-16 rounded-full bg-[#003851]" aria-hidden="true" />
              <p className="font-descriptor my-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.32em] text-[#1E4D3B]">
                REPERTORIO GASTRONÓMICO · 6 CATEGORÍAS
              </p>
              <span className="h-1 w-44 rounded-full bg-[#EED902]" aria-hidden="true" />
            </div>

            <h2
              id="carta-heading"
              className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight leading-[0.95] text-[#003851]"
              style={{ textWrap: 'balance' }}
            >
              La Carta de Nella Café
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#003851]/85 leading-relaxed">
              Especialidades recopiladas de fuentes públicas verificadas en Pucallpa: desde el Cold Brew de Camu Camu y el Desayuno Amazónico hasta pastas al wok, sándwiches calientes y cheesecakes de saúco.
            </p>
          </div>

          {/* Nota de Contención de Precios Verificados */}
          <div className="rounded-2xl border-2 border-[#003851] bg-[#EED902] px-5 py-4 text-[#003851] shadow-sm max-w-md">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#003851]">
              TRANSPARENCIA EDITORIAL · CERO PRECIOS INVENTADOS
            </p>
            <p className="mt-1 text-xs sm:text-sm font-semibold leading-snug text-[#003851]">
              {PRICE_BADGE_PRIMARY}. Consulta la carta física vigente directamente en Jr. Tarapacá N.º 679.
            </p>
          </div>
        </div>

        {/* Barra de Buscador Instantáneo y Filtro por Momento */}
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <label htmlFor="nella-menu-search" className="sr-only">
              Buscar plato, bebida o ingrediente en la carta
            </label>
            <div className="relative flex items-center">
              <Search
                className="pointer-events-none absolute left-4 h-5 w-5 text-[#003851]/70"
                aria-hidden="true"
              />
              <input
                id="nella-menu-search"
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar ej. camu camu, saúco, desayuno amazónico, lomo saltado..."
                className="w-full rounded-2xl border-2 border-[#003851] bg-white py-3.5 pl-12 pr-12 text-base font-medium text-[#003851] placeholder:text-[#003851]/55 focus:outline-none focus:ring-4 focus:ring-[#EED902] [&::-webkit-search-cancel-button]:hidden"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  aria-label="Limpiar búsqueda de la carta"
                  className="absolute right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#003851] text-[#EED902] hover:bg-[#004B6B] cursor-pointer"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          {/* Selector rápido por momento del día */}
          <div className="lg:col-span-5 flex flex-wrap items-center justify-between gap-2 rounded-2xl border-2 border-[#003851]/20 bg-white px-4 py-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E4D3B]">
              Momento:
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => onMomentFilterChange('all')}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  momentFilter === 'all'
                    ? 'bg-[#003851] text-[#EED902]'
                    : 'bg-[#F7F4EB] text-[#003851] hover:bg-[#EED902]/40'
                }`}
              >
                Todos
              </button>
              {NELLA_MOMENTS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => onMomentFilterChange(m.id)}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    momentFilter === m.id
                      ? 'bg-[#EED902] text-[#003851] border border-[#003851]'
                      : 'bg-[#F7F4EB] text-[#003851] hover:bg-[#EED902]/40'
                  }`}
                >
                  {m.time.replace(' AM', '').replace(' PM', '')}h
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pestañas de las 6 Categorías Detectadas */}
        <div
          role="tablist"
          aria-label="Filtrar carta por categoría gastronómica"
          className="mt-6 flex flex-wrap items-center gap-2.5"
        >
          {NELLA_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => onSelectCategory(category.id)}
                className={`rounded-xl border-2 px-4 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'border-[#003851] bg-[#EED902] text-[#003851] shadow-[0_4px_0_#003851]'
                    : 'border-[#003851]/25 bg-white text-[#003851] hover:border-[#003851] hover:bg-[#EED902]/25'
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Resumen de Categoría Activa y Conteo Tabular */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#003851]/15 pb-4 text-sm">
          <p className="font-medium text-[#1E4D3B]">
            <span className="font-bold text-[#003851]">{activeCategoryMeta.name}:</span>{' '}
            {activeCategoryMeta.description}
          </p>
          <p className="font-mono text-xs font-bold tabular-nums text-[#003851]">
            Mostrando {filteredItems.length} de {NELLA_MENU_ITEMS.length} especialidades
          </p>
        </div>

        {/* Grilla de Especialidades en Arcos Botánicos */}
        {filteredItems.length === 0 ? (
          <div className="mt-10 rounded-3xl border-2 border-[#003851] bg-white p-10 text-center">
            <Compass className="mx-auto h-10 w-10 text-[#1E4D3B]" aria-hidden="true" />
            <h3 className="mt-3 text-2xl font-bold text-[#003851]">
              No encontramos platos con "{searchQuery}" en este filtro
            </h3>
            <p className="mt-2 text-sm text-[#003851]/75">
              Prueba buscando "camu camu", "saúco", "desayuno", "lomo saltado" o restablece las categorías.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-5 inline-flex items-center gap-2 rounded-xl border-2 border-[#003851] bg-[#EED902] px-5 py-2.5 text-sm font-bold text-[#003851] hover:bg-[#e3ce00] cursor-pointer"
            >
              Mostrar Toda la Carta Completa
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item: (typeof NELLA_MENU_ITEMS)[number]) => (
              <article
                key={item.id}
                className="group flex flex-col justify-between rounded-t-[2.75rem] rounded-b-3xl border-2 border-[#003851] bg-white p-4 shadow-[0_10px_28px_rgba(0,56,81,0.08)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div>
                  {/* Imagen en Arco Botánico */}
                  <BotanicalArchVisual
                    src={item.image}
                    alt={`${item.name} — ${item.categoryName} en Nella Café`}
                    motif={(item.svgMotif as BotanicalMotif) || 'coffee'}
                    aspectClass="aspect-[4/3]"
                    showBotanicalLeaves={item.featured}
                    overlayGradient={false}
                  />

                  {/* Metadatos limpios con separador tipográfico (Zero-Pill Discipline) */}
                  <div className="mt-4 px-2">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-[#1E4D3B]">
                      <span>{item.categoryName}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#003851]/75">{item.signatureTag}</span>
                      {item.featured && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="inline-flex items-center gap-1 font-bold text-[#003851]">
                            <Sparkles className="h-3.5 w-3.5 text-[#003851]" aria-hidden="true" />
                            Especialidad
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="mt-1.5 font-monumental text-2xl font-bold text-[#003851] leading-snug">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm text-[#003851]/85 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Etiqueta de Precio por Confirmar con contraste #EED902 y texto #003851 en negrita */}
                <div className="mt-5 px-2 pt-3 border-t border-[#003851]/15">
                  <div className="rounded-xl bg-[#EED902] px-3 py-2 text-center border border-[#003851]">
                    <p className="font-mono text-[11px] font-bold tracking-tight text-[#003851]">
                      {item.cardBadge}
                    </p>
                  </div>
                  <p className="mt-1.5 text-center font-mono text-[10px] font-medium text-[#003851]/75">
                    {item.priceStatus}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
