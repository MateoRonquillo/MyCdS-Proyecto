let favoriteIds = [];

export function addFavorite(id) {
    // Validación para evitar favoritos duplicados
    if (!favoriteIds.includes(id)) {
        favoriteIds.push(id);
        console.log(`Agregado a favoritos: ${id}`);
        return true;
    }
    console.warn(`El elemento ${id} ya está en favoritos`);
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


export function toggleFavorite(id) {
    if (isFavorite(id)) {
        removeFavorite(id);
        return false;
    } else {
        addFavorite(id);
        return true;
    }
}