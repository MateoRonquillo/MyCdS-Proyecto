// assets/js/storage.js

const STORAGE_KEY = 'cinescope_favorites';

// Guardar el arreglo de favoritos en el navegador
export function saveFavorites(favoritesArray) {
    try {
        const data = JSON.stringify(favoritesArray);
        localStorage.setItem(STORAGE_KEY, data);
    } catch (error) {
        console.error("Error al guardar en localStorage:", error);
    }
}

// Recuperar los favoritos almacenados
export function loadFavorites() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        // Si hay datos, los convierte de texto a arreglo; si no, devuelve un arreglo vacío
        return data ? JSON.parse(data) : [];
    } catch (error) {
        // Controlar datos inválidos o corruptos en la memoria local
        console.error("Datos locales inválidos, devolviendo lista vacía:", error);
        return [];
    }
}

// Vaciar la lista completa de favoritos del almacenamiento
export function clearFavoritesStorage() {
    localStorage.removeItem(STORAGE_KEY);
}