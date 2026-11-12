import test from 'node:test';
import assert from 'node:assert/strict';
import {
  computeParallaxRange,
  getParallaxSpringConfig,
  computeOverscanBleed,
} from './parallaxMath.ts';

test('computeParallaxRange calculates symmetric vertical displacement and respects reducedMotion', () => {
  assert.deepEqual(computeParallaxRange(120, 1, false), [-120, 120]);
  assert.deepEqual(computeParallaxRange(120, 0.65, false), [-78, 78]);
  assert.deepEqual(computeParallaxRange(120, 1, true), [0, 0]);
  assert.deepEqual(computeParallaxRange(0, 1, false), [0, 0]);
});

test('getParallaxSpringConfig returns well-damped spring parameters for useSpring', () => {
  const silky = getParallaxSpringConfig('silky');
  assert.equal(silky.stiffness, 65);
  assert.equal(silky.damping, 24);
  assert.ok(silky.mass > 0);
});

test('computeOverscanBleed provides sufficient vertical bleed so parallax translation never clips', () => {
  const bleed = computeOverscanBleed(110);
  assert.equal(bleed.insetTopPx, -138);
  assert.equal(bleed.insetBottomPx, -138);
  assert.equal(bleed.extraHeightPx, 276);
});
