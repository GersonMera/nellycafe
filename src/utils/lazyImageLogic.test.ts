import test from 'node:test';
import assert from 'node:assert/strict';
import {
  shouldTriggerLazyLoad,
  nextLazyLoadStage,
  optimizeImageUrlForConnection,
  getFadeInClasses,
} from './lazyImageLogic.ts';

test('shouldTriggerLazyLoad detects intersecting entries accurately', () => {
  assert.equal(shouldTriggerLazyLoad(null), false);
  assert.equal(shouldTriggerLazyLoad({ isIntersecting: false, intersectionRatio: 0 }), false);
  assert.equal(shouldTriggerLazyLoad({ isIntersecting: true, intersectionRatio: 0 }), true);
  assert.equal(shouldTriggerLazyLoad({ isIntersecting: false, intersectionRatio: 0.12 }), true);
});

test('nextLazyLoadStage transitions cleanly through idle -> intersecting -> loaded or error', () => {
  let stage = nextLazyLoadStage('idle', 'INTERSECT');
  assert.equal(stage, 'intersecting');

  // Repeated intersect keeps intersecting
  stage = nextLazyLoadStage(stage, 'INTERSECT');
  assert.equal(stage, 'intersecting');

  // Load success transitions to loaded
  stage = nextLazyLoadStage(stage, 'LOAD_SUCCESS');
  assert.equal(stage, 'loaded');

  // Reset returns to idle when src changes
  stage = nextLazyLoadStage(stage, 'RESET');
  assert.equal(stage, 'idle');

  // Error path
  const errorStage = nextLazyLoadStage('intersecting', 'LOAD_ERROR');
  assert.equal(errorStage, 'error');
});

test('optimizeImageUrlForConnection optimizes Unsplash parameters for mobile bandwidth and leaves local assets intact', () => {
  const optimized = optimizeImageUrlForConnection(
    'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=85',
    { width: 640, quality: 75 }
  );
  assert.ok(optimized.includes('w=640'));
  assert.ok(optimized.includes('q=75'));
  assert.ok(optimized.includes('auto=format'));

  const localAsset = '/assets/aistudio/image_c2ee0c59.png';
  assert.equal(optimizeImageUrlForConnection(localAsset), localAsset);
});

test('getFadeInClasses returns opacity-0 before load and opacity-100 once loaded', () => {
  const pendingClasses = getFadeInClasses('intersecting');
  assert.ok(pendingClasses.includes('opacity-0'));

  const loadedClasses = getFadeInClasses('loaded');
  assert.ok(loadedClasses.includes('opacity-100'));
  assert.ok(loadedClasses.includes('scale-100'));
});
