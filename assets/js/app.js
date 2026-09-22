import { loadCatalog } from './catalog.js';
import { getFavorites } from './favorites.js';
import { loadDashboard } from './dashboard.js';

loadCatalog().then((catalog) => loadDashboard(catalog.items || [], getFavorites()));
