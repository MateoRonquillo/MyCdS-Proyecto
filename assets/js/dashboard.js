function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function getItemType(item) {
  return String(item.type || item.tipo || '').toLowerCase();
}

function renderFeatured(items) {
  const container = document.getElementById('featured-content');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-state__icon"><i class="bi bi-stars" aria-hidden="true"></i></span>
        <div>
          <h3>Tu radar esta listo.</h3>
          <p>Aun no hay titulos cargados. Cuando el catalogo crezca, aqui aparecera una seleccion para empezar tu proxima sesion.</p>
        </div>
        <a class="btn btn-primary" href="catalog.html">Ir al catalogo <i class="bi bi-arrow-right" aria-hidden="true"></i></a>
      </div>`;
    return;
  }

  container.innerHTML = items.slice(0, 3).map((item) => `
    <article class="featured-card">
      <div class="featured-card__visual"><i class="bi bi-play-circle" aria-hidden="true"></i></div>
      <div class="featured-card__body"><span>${item.genre || item.genero || 'Para descubrir'}</span><h3>${item.title || item.titulo || 'Sin titulo'}</h3><p>${item.year || item.ano || ''}</p></div>
    </article>`).join('');
}

export function loadDashboard(items, favorites) {
  const movies = items.filter((item) => ['movie', 'pelicula', 'película'].includes(getItemType(item))).length;
  const series = items.filter((item) => ['series', 'serie'].includes(getItemType(item))).length;

  setText('catalog-count', items.length);
  setText('movie-count', movies);
  setText('series-count', series);
  setText('favorite-count', favorites.length);
  setText('catalog-count-note', items.length === 1 ? 'en tu catalogo' : 'en tu catalogo');
  renderFeatured(items);
}