import { loadCatalog } from './catalog.js';
import { loadTheme, initThemeToggle } from './theme.js';
import { initMobileNav } from './nav.js';
import { getFavorites } from './favorites.js';
import { loadDashboard } from './dashboard.js';

loadTheme();
initThemeToggle();
initMobileNav();
loadCatalog().then((catalog) => loadDashboard(catalog.items || [], getFavorites()));