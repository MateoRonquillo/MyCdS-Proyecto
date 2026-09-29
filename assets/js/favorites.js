/**
 * ==========================================
 * MÓDULO DE FAVORITOS
 * ==========================================
 * Lógica para agregar, eliminar y actualizar
 * visualmente los favoritos del usuario.
 */

import { saveFavorites, loadFavorites, clearFavoritesStorage } from './storage.js';

// 1. Inicialización de estado
let favoriteIds = loadFavorites();

export function getFavorites() {
    return [...favoriteIds];
}

// ==========================================
// 2. Lógica de control de datos
// ==========================================

export function addFavorite(id) {
    if (!favoriteIds.includes(id)) {
        favoriteIds.push(id);
        saveFavorites(favoriteIds);
        console.log(`Agregado a favoritos: ${id}`);
        return true;
    }
    return false;
}

export function removeFavorite(id) {
    const index = favoriteIds.indexOf(id);
    if (index !== -1) {
        favoriteIds.splice(index, 1);
        saveFavorites(favoriteIds);
        console.log(`Eliminado de favoritos: ${id}`);
        return true;
    }
    return false;
}

export function isFavorite(id) {
    return favoriteIds.includes(id);
}

export function clearAllFavorites() {
    favoriteIds = [];
    clearFavoritesStorage();

    document.querySelectorAll('.btn-favorito i.bi-heart-fill').forEach(icon => {
        icon.classList.remove('bi-heart-fill', 'text-danger');
        icon.classList.add('bi-heart');
    });

    console.log("Todos los favoritos han sido eliminados de la memoria.");
}

// ==========================================
// 3. Lógica de interfaz gráfica (UI)
// ==========================================

export function updateFavoriteIcon(id, isFav) {
    const btn = document.querySelector(`.btn-favorito[data-id="${id}"]`);
    if (btn) {
        const icon = btn.querySelector('i');
        if (icon) {
            if (isFav) {
                icon.classList.remove('bi-heart');
                icon.classList.add('bi-heart-fill', 'text-danger');
            } else {
                icon.classList.remove('bi-heart-fill', 'text-danger');
                icon.classList.add('bi-heart');
            }
        }
    }
}

export function toggleFavorite(id) {
    const isFav = isFavorite(id);

    if (isFav) {
        removeFavorite(id);
        updateFavoriteIcon(id, false);
        return false;
    } else {
        addFavorite(id);
        updateFavoriteIcon(id, true);
        return true;
    }
}