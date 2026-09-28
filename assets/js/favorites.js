// assets/js/favorites.js

let favoriteIds = [];

export function addFavorite(id) {
    if (!favoriteIds.includes(id)) {
        favoriteIds.push(id);
        console.log(`Agregado a favoritos: ${id}`);
        return true;
    }
    return false;
}

export function removeFavorite(id) {
    const index = favoriteIds.indexOf(id);
    if (index !== -1) {
        favoriteIds.splice(index, 1);
        console.log(`Eliminado de favoritos: ${id}`);
        return true;
    }
    return false;
}

export function isFavorite(id) {
    return favoriteIds.includes(id);
}

// Función profesional usando Bootstrap Icons
export function updateFavoriteIcon(id, isFav) {
    // Busca el botón de la película correspondiente
    const btn = document.querySelector(`.btn-favorito[data-id="${id}"]`);
    if (btn) {
        // Busca el icono dentro del botón
        const icon = btn.querySelector('i');
        if (icon) {
            if (isFav) {
                icon.classList.remove('bi-heart');
                icon.classList.add('bi-heart-fill', 'text-danger'); // Corazón relleno
            } else {
                icon.classList.remove('bi-heart-fill', 'text-danger');
                icon.classList.add('bi-heart'); // Corazón vacío
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