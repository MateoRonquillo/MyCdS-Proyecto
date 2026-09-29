import { loadCatalog } from './catalog.js';
import { loadTheme, initThemeToggle } from './theme.js';
import { initMobileNav } from './nav.js';
import { loadDashboard } from './dashboard.js';
import { filterCatalog } from './filters.js';

loadTheme();
initThemeToggle();
initMobileNav();

loadCatalog().then((catalog) => {
  const catalogItems = Array.isArray(catalog) ? catalog : (catalog.items || []);
  
  // Pasamos [] en lugar de getFavorites() para evitar el error de tu compañero
  loadDashboard(catalogItems, []);

  const searchInput = document.getElementById('search-input');
  
  if (searchInput) {
    const filterType = document.getElementById('filter-type');
    const filterGenre = document.getElementById('filter-genre');
    const filterYear = document.getElementById('filter-year');
    const sortBy = document.getElementById('sort-by');
    const resultsCounter = document.getElementById('results-counter');
    const emptyMessage = document.getElementById('empty-message');

    resultsCounter.textContent = `${catalogItems.length} resultados`;

    const applyFilters = () => {
      const options = {
        query: searchInput.value,
        type: filterType.value,
        genre: filterGenre.value,
        year: filterYear.value,
        sortBy: sortBy.value
      };

      const filteredItems = filterCatalog(catalogItems, options);

      resultsCounter.textContent = `${filteredItems.length} resultados`;
      emptyMessage.hidden = filteredItems.length !== 0;

      // Pasamos [] en lugar de getFavorites()
      loadDashboard(filteredItems, []);
    };

    searchInput.addEventListener('input', applyFilters);
    filterType.addEventListener('change', applyFilters);
    filterGenre.addEventListener('change', applyFilters);
    filterYear.addEventListener('change', applyFilters);
    sortBy.addEventListener('change', applyFilters);
  }
});