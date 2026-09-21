import { getStoredValue, setStoredValue } from './storage.js';

const FAVORITES_KEY = 'cinescope-favorites';

export function getFavorites() {
  return getStoredValue(FAVORITES_KEY, []);
}

export function saveFavorites(favorites) {
  setStoredValue(FAVORITES_KEY, favorites);
}
