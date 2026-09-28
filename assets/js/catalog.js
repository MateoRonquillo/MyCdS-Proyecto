// assets/js/favorites.js

// Arreglo temporal para almacenar los IDs de las películas favoritas
let favoriteIds = [];

// Función para agregar un favorito
export function addFavorite(id) {
    favoriteIds.push(id);
    console.log(`Agregado a favoritos: ${id}`);
}