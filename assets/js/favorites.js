let favoriteIds = [];

export function addFavorite(id) {
    favoriteIds.push(id);
    console.log(`Agregado a favoritos: ${id}`);
}

// Función para eliminar un favorito
export function removeFavorite(id) {
    const index = favoriteIds.indexOf(id);
    if (index !== -1) {
        favoriteIds.splice(index, 1);
        console.log(`Eliminado de favoritos: ${id}`);
    }
}
