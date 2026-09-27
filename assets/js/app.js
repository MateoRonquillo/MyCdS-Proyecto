import { loadCatalog } from './catalog.js';
import { loadTheme, initThemeToggle } from './theme.js';
import { initMobileNav } from './nav.js';

loadTheme();
initThemeToggle();
initMobileNav();
loadCatalog();