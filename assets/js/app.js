import { loadCatalog } from './catalog.js';
import { filterCatalog } from './filters.js';

let catalogItems = [];

const searchInput = document.getElementById('search-input');
const resultsCounter = document.getElementById('results-counter');
const emptyMessage = document.getElementById('empty-message');

async function init() {
  const data = await loadCatalog();

  catalogItems = data.items || [];

  updateResults(catalogItems);

  searchInput.addEventListener('input', () => {
    const filtered = filterCatalog(catalogItems, searchInput.value);

    updateResults(filtered);

    // Aquí después el Integrante 3 renderizará las tarjetas.
  });
}

function updateResults(items) {
  resultsCounter.textContent = `${items.length} resultados`;

  emptyMessage.hidden = items.length !== 0;
}

init();
