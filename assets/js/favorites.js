// assets/js/favorites.js
import { saveFavorites, loadFavorites, clearFavoritesStorage } from './storage.js';

let favoriteIds = loadFavorites();

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

// NUEVA FUNCIÓN: Vaciar toda la lista y actualizar la interfaz
export function clearAllFavorites() {
    favoriteIds = []; // Vaciamos el arreglo temporal
    clearFavoritesStorage(); // Vaciamos el localStorage
    
    // Desmarcamos todos los corazones rojos que estén en pantalla
    document.querySelectorAll('.btn-favorito i.bi-heart-fill').forEach(icon => {
        icon.classList.remove('bi-heart-fill', 'text-danger');
        icon.classList.add('bi-heart');
    });
    
    console.log("Todos los favoritos han sido eliminados de la memoria.");
}