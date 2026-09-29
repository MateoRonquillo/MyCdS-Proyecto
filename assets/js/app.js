
import { renderCatalog, loadCatalog, openDetailsModal, initDetailsModal } from './catalog.js';
import { loadTheme, initThemeToggle } from './theme.js';
import { initMobileNav } from './nav.js';
import { loadDashboard } from './dashboard.js';
import { filterCatalog } from './filters.js';
import { getFavorites, toggleFavorite } from './favorites.js';

loadTheme();

document.addEventListener('DOMContentLoaded', async () => {
  initThemeToggle();
  initMobileNav();
  initDetailsModal();

  try {
    const catalog = await loadCatalog();
    const catalogItems = Array.isArray(catalog) ? catalog : (catalog.items || []);
    const favoriteIds = getFavorites();
    loadDashboard(catalogItems, favoriteIds);

    const catalogContainer = document.getElementById('catalog-container');
    if (!catalogContainer) return;

    const isFavoritesPage = document.body.dataset.page === 'favorites';
    const render = (items) => {
      renderCatalog(items, getFavorites());
      document.getElementById('results-counter').textContent = `${items.length} resultados`;
      document.getElementById('empty-message').hidden = items.length !== 0;
    };

    render(isFavoritesPage ? catalogItems.filter((item) => favoriteIds.includes(item.id)) : catalogItems);

    document.getElementById('catalog-container').addEventListener('click', (event) => {
      const detailsButton = event.target.closest('[data-details-id]');
      const favoriteButton = event.target.closest('[data-favorite-id]');
      const item = catalogItems.find((entry) => String(entry.id) === String(detailsButton?.dataset.detailsId || favoriteButton?.dataset.favoriteId));
      if (!item) return;
      if (detailsButton) openDetailsModal(item);
      if (favoriteButton) {
        toggleFavorite(item.id);
        render(isFavoritesPage ? catalogItems.filter((entry) => getFavorites().includes(entry.id)) : catalogItems);
      }
    });

    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    const applyFilters = () => render(filterCatalog(catalogItems, {
      query: searchInput.value,
      type: document.getElementById('filter-type').value,
      genre: document.getElementById('filter-genre').value,
      year: document.getElementById('filter-year').value,
      sortBy: document.getElementById('sort-by').value
    }));

    ['search-input', 'filter-type', 'filter-genre', 'filter-year', 'sort-by'].forEach((id) => {
      document.getElementById(id).addEventListener(id === 'search-input' ? 'input' : 'change', applyFilters);
    });
  } catch (error) {
    const emptyMessage = document.getElementById('empty-message');
    if (emptyMessage) {
      emptyMessage.hidden = false;
      emptyMessage.textContent = 'No se pudo cargar el catálogo.';
    }
  }
});