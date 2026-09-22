import test from 'node:test';
import assert from 'node:assert/strict';
import { filterCatalog } from '../assets/js/filters.js';

test('filters catalog entries by title', () => {
  const items = [{ title: 'Dune' }, { title: 'Arrival' }];
  assert.deepEqual(filterCatalog(items, 'dune'), [{ title: 'Dune' }]);
});
