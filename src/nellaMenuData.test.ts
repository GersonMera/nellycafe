import test from 'node:test';
import assert from 'node:assert/strict';
import {
  NELLA_BRAND_INFO,
  NELLA_MOMENTS,
  NELLA_CATEGORIES,
  NELLA_MENU_ITEMS,
  PRICE_BADGE_PRIMARY,
  PRICE_BADGE_CARD,
  filterMenuItems,
  getMomentById,
  normalizeSearchText,
} from './nellaMenuData.js';

test('NELLA_MOMENTS contains the 4 distinct moments of the day', () => {
  assert.equal(NELLA_MOMENTS.length, 4);
  const times = NELLA_MOMENTS.map((m) => m.time);
  assert.deepEqual(times, ['08:00 AM', '01:00 PM', '05:00 PM', '08:30 PM']);
});

test('NELLA_CATEGORIES contains "all" plus the 6 official gastronomic categories', () => {
  assert.equal(NELLA_CATEGORIES.length, 7);
  const categoryIds = NELLA_CATEGORIES.map((c) => c.id);
  assert.deepEqual(categoryIds, [
    'all',
    'bebidas-frias',
    'cafe-calientes',
    'desayunos-brunch',
    'sandwiches-salados',
    'platos-pastas',
    'postres-panaderia',
  ]);
});

test('Zero invented prices and zero occurrences of forbidden mistranslated word "rape"', () => {
  for (const item of NELLA_MENU_ITEMS) {
    assert.equal(item.priceStatus, PRICE_BADGE_PRIMARY);
    assert.equal(item.cardBadge, PRICE_BADGE_CARD);
    assert.equal(/s\/|\$\s*\d/i.test(item.name + item.description), false, `Item ${item.id} must not have invented price`);
    assert.equal(/\brape\b/i.test(`${item.name} ${item.description}`), false, `Item ${item.id} must never include the mistranslated word "rape"`);
  }
});

test('Brand info preserves exact verified address, coordinates, dual phones, and navigation URLs', () => {
  assert.ok(NELLA_BRAND_INFO.location.fullAddress.includes('Jr. Tarapacá N.º 679'));
  assert.equal(NELLA_BRAND_INFO.location.coordinates.lat, -8.38283);
  assert.equal(NELLA_BRAND_INFO.location.coordinates.lng, -74.53169);
  assert.equal(NELLA_BRAND_INFO.contact.phones.length, 2);
  assert.equal(NELLA_BRAND_INFO.contact.phones[0].display, '+51 981 787 780');
  assert.equal(NELLA_BRAND_INFO.contact.phones[1].display, '+51 993 311 759');
  assert.equal(NELLA_BRAND_INFO.contact.email, 'nellacafe23@gmail.com');
  assert.ok(NELLA_BRAND_INFO.location.googleMapsUrl.includes('-8.38283,-74.53169'));
  assert.ok(NELLA_BRAND_INFO.location.wazeUrl.includes('nella-cafe'));
});

test('filterMenuItems filters accurately by category and accent-insensitive search query', () => {
  const coldBrews = filterMenuItems(NELLA_MENU_ITEMS, {
    categoryId: 'bebidas-frias',
    searchQuery: 'camu camu',
  });
  assert.ok(coldBrews.length >= 2);
  assert.ok(coldBrews.some((i: { name: string }) => i.name === 'Cold Brew de Camu Camu'));

  // Accent-insensitive search for "sauco" matches "Cheesecake de Saúco"
  const saucoResults = filterMenuItems(NELLA_MENU_ITEMS, {
    categoryId: 'all',
    searchQuery: 'sauco',
  });
  assert.equal(saucoResults.length, 1);
  assert.equal(saucoResults[0].name, 'Cheesecake de Saúco');
});

test('getMomentById returns matching moment or falls back to morning moment', () => {
  const noche = getMomentById('noche');
  assert.equal(noche.time, '08:30 PM');
  const fallback = getMomentById('unknown');
  assert.equal(fallback.id, 'manana');
  assert.equal(normalizeSearchText('Saúco & Café'), 'sauco & cafe');
});
