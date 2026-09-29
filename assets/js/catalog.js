export async function loadCatalog() {
  const response = await fetch('data/catalog.json');
  if (!response.ok) throw new Error(`No se pudo cargar el catálogo (${response.status})`);
  return response.json();
}

export function renderCatalog(items, favoriteIds = []) {
  const grid = document.getElementById('catalog-container');
  if (!grid) return;

  grid.innerHTML = items.map((item) => {
    const title = item.titulo || item.title || 'Sin título';
    const genres = item.generos || item.genres || [];
    const isFavorite = favoriteIds.includes(item.id);
    return `
      <article class="catalog-card">
        <div class="catalog-card__poster" role="img" aria-label="Portada tipográfica de ${title}"><span>${title}</span></div>
        <div class="catalog-card__body">
          <div class="catalog-card__meta">${item.tipo || 'Contenido'} · ${item.anio || 'N/A'}</div>
          <h2>${title}</h2>
          <p>${genres.join(' · ') || 'Género no especificado'} · ⭐ ${item.calificacion || 'N/A'}</p>
          <div class="catalog-card__actions">
            <button class="btn-details" type="button" data-details-id="${item.id}">Ver detalles</button>
            <button class="btn-favorito" type="button" data-favorite-id="${item.id}" aria-pressed="${isFavorite}" aria-label="${isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}">${isFavorite ? '♥' : '♡'}</button>
          </div>
        </div>
      </article>`;
  }).join('');
}

/**
 * Función exportada para abrir el modal desde cualquier tarjeta.
 * @param {Object} movieData - Los datos de la película extraídos del JSON
 */
export function openDetailsModal(movieData) {
  const modal = document.getElementById('details-modal');
  if (!modal) return;
  document.getElementById('modal-title').textContent = movieData.titulo || movieData.title || 'Sin título';
  document.getElementById('modal-director').textContent = movieData.director || 'No especificado';
  document.getElementById('modal-elenco').textContent = (movieData.reparto || movieData.elenco || []).join(', ') || 'No especificado';
  document.getElementById('modal-sinopsis').textContent = movieData.sinopsis || 'Sin sinopsis disponible.';
  modal.showModal();
}

export function initDetailsModal() {
  const modal = document.getElementById('details-modal');
  const btnCloseModal = document.getElementById('close-modal');
  if (btnCloseModal) btnCloseModal.addEventListener('click', () => modal.close());
  if (modal) modal.addEventListener('click', (event) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height
      && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      modal.close();
    }
  });
}
