/**
 * ==========================================
 * MÓDULO DE ALMACENAMIENTO (LOCALSTORAGE)
 * ==========================================
 * Gestiona la persistencia de datos del catálogo.
 */

const STORAGE_KEY = 'cinescope_favorites';

/**
 * Guarda el arreglo de favoritos en el navegador.
 */
export function saveFavorites(favoritesArray) {
  try {
    const data = JSON.stringify(favoritesArray);
    localStorage.setItem(STORAGE_KEY, data);
  } catch (error) {
    console.error("Error al guardar en localStorage:", error);
  }
}

/**
 * Recupera los favoritos almacenados al iniciar.
 */
export function loadFavorites() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Datos locales inválidos, devolviendo lista vacía:", error);
    return [];
  }
}

/**
 * Vacía la lista completa de favoritos del almacenamiento.
 */
export function clearFavoritesStorage() {
  localStorage.removeItem(STORAGE_KEY);
}